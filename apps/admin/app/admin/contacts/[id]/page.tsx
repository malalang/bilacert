import type { Contact } from "@bilacert/shared/types";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getContactEmailComposeHref } from "@/lib/emailNavigation";
import ContactDetails from "../ContactDetails";

type ContactDetailsPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ emailStatus?: string }>;
};

const getContact = cache(async (id: string): Promise<Contact | null> => {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    message: data.message,
    submittedAt: data.submittedAt,
  } as Contact;
});

export async function generateMetadata({
  params,
}: Pick<ContactDetailsPageProps, "params">): Promise<Metadata> {
  const { id } = await params;
  const contact = await getContact(id);
  if (!contact) {
    return {
      title: "Contact Not Found",
    };
  }
  return {
    title: `${contact.name || contact.email} | Bilacert Admin Pro`,
  };
}

export default async function ContactDetailsPage({
  params,
  searchParams,
}: ContactDetailsPageProps) {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  const contact = await getContact(id);

  if (!contact) {
    notFound();
  }

  const emailStatus =
    query.emailStatus === "sent" || query.emailStatus === "draft"
      ? query.emailStatus
      : null;
  const displayName = contact.name?.trim() || contact.email;

  return (
    <div className="space-y-6">
      {emailStatus && (
        <Alert className="border-emerald-200 bg-emerald-50 text-emerald-900">
          <AlertTitle>
            {emailStatus === "sent" ? "Email sent" : "Draft saved"}
          </AlertTitle>
          <AlertDescription>
            {emailStatus === "sent"
              ? `Your email to ${displayName} was sent through Zoho Mail.`
              : `Your email to ${displayName} was saved in Zoho Drafts.`}
          </AlertDescription>
        </Alert>
      )}
      <ContactDetails
        contact={contact}
        emailComposeHref={getContactEmailComposeHref(contact)}
      />
    </div>
  );
}
