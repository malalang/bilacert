"use server";

import {
  type EmailComposeActionState,
  emailComposeSchema,
  emailMessageReadStateSchema,
} from "@bilacert/contracts/email";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAdminAccess } from "@/lib/adminAccess";
import { getSafeEmailReturnPath } from "@/lib/emailNavigation";
import {
  getZohoMailAccount,
  submitZohoMailMessage,
  updateZohoMailReadState,
} from "@/lib/zohoMail";

export async function submitEmailAction(
  _previousState: EmailComposeActionState,
  formData: FormData,
): Promise<EmailComposeActionState> {
  const returnTo = getSafeEmailReturnPath(formData.get("returnTo"));
  const access = await getAdminAccess();

  if (!access.allowed) {
    return { error: access.message };
  }

  const parsed = emailComposeSchema.safeParse({
    toAddress: formData.get("toAddress"),
    ccAddress: formData.get("ccAddress") ?? "",
    bccAddress: formData.get("bccAddress") ?? "",
    subject: formData.get("subject"),
    content: formData.get("content"),
    intent: formData.get("intent") ?? "send",
  });

  if (!parsed.success) {
    return {
      error: "Check the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  try {
    const account = await getZohoMailAccount();
    await submitZohoMailMessage(account, parsed.data, parsed.data.intent);
  } catch (error) {
    console.error("[bilacert-admin/email] Message submission failed", {
      userId: access.userId,
      intent: parsed.data.intent,
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return {
      error:
        error instanceof Error
          ? error.message
          : "Zoho could not save the message.",
    };
  }

  revalidatePath("/admin/emails");
  if (returnTo) {
    revalidatePath(returnTo);
    redirect(
      `${returnTo}?emailStatus=${parsed.data.intent === "draft" ? "draft" : "sent"}`,
    );
  }

  redirect(
    parsed.data.intent === "draft"
      ? "/admin/emails?draftSaved=1"
      : "/admin/emails?sent=1",
  );
}

export async function updateEmailReadStateAction(formData: FormData) {
  const parsed = emailMessageReadStateSchema.safeParse({
    messageId: formData.get("messageId"),
    folderId: formData.get("folderId"),
    readState: formData.get("readState"),
  });

  if (!parsed.success) {
    redirect("/admin/emails?actionError=invalid-message");
  }

  const access = await getAdminAccess();
  const messagePath = `/admin/emails/${encodeURIComponent(parsed.data.messageId)}?folderId=${encodeURIComponent(parsed.data.folderId)}`;

  if (!access.allowed) {
    redirect(`${messagePath}&actionError=permission`);
  }

  let failed = false;

  try {
    const account = await getZohoMailAccount();
    await updateZohoMailReadState(
      account.accountId,
      parsed.data.messageId,
      parsed.data.readState,
    );
  } catch (error) {
    failed = true;
    console.error("[bilacert-admin/email] Read-state update failed", {
      userId: access.userId,
      messageId: parsed.data.messageId,
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }

  revalidatePath("/admin/emails");
  revalidatePath(`/admin/emails/${parsed.data.messageId}`);
  redirect(
    failed
      ? `${messagePath}&actionError=update-failed`
      : `${messagePath}&updated=${parsed.data.readState}`,
  );
}
