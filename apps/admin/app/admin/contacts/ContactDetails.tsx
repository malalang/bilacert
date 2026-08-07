"use client";

import type { Contact } from "@bilacert/shared/types";
import {
  ArrowLeft,
  CalendarClock,
  ClipboardList,
  Edit,
  Mail,
  Phone,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteContactDialog from "./DeleteContactDialog";

interface ContactDetailsProps {
  contact: Contact;
  emailComposeHref: string | null;
}

const submittedAtFormatter = new Intl.DateTimeFormat("en-ZA", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "Africa/Johannesburg",
});

function getSubmittedAt(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return { dateTime: undefined, label: "Unknown date" };
  }

  return {
    dateTime: date.toISOString(),
    label: submittedAtFormatter.format(date),
  };
}

export default function ContactDetails({
  contact,
  emailComposeHref,
}: ContactDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const displayName = contact.name?.trim() || contact.email;
  const submittedAt = getSubmittedAt(contact.submittedAt);

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const onDeleted = () => {
    setIsDeleteDialogOpen(false);
    router.push("/admin/contacts");
    router.refresh();
  };

  const formatPhoneNumberForWhatsApp = (phone: string) => {
    return phone.replace(/\D/g, "");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/contacts">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to contacts
            </Link>
          </Button>

          <div className="flex flex-wrap gap-2">
            {emailComposeHref && (
              <Button asChild>
                <Link href={emailComposeHref} prefetch={false}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email client
                </Link>
              </Button>
            )}
            <Button variant="outline" asChild>
              <Link href={`/admin/contacts/${contact.id}/edit`}>
                <Edit className="h-4 w-4" aria-hidden="true" />
                Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              Delete
            </Button>
          </div>
        </div>

        <Card className="border border-border/70 shadow-sm">
          <CardHeader className="space-y-3">
            <CardTitle className="text-2xl">{displayName}</CardTitle>
            <CardDescription>
              {emailComposeHref ? (
                <Link
                  href={emailComposeHref}
                  prefetch={false}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {contact.email}
                </Link>
              ) : (
                contact.email
              )}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <section className="rounded-xl border bg-muted/10 p-4">
                <h2 className="text-sm font-medium text-muted-foreground">
                  Phone
                </h2>
                {contact.phone ? (
                  <a
                    href={`https://wa.me/${formatPhoneNumberForWhatsApp(contact.phone)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {contact.phone}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">
                    No phone provided
                  </p>
                )}
              </section>

              <section className="rounded-xl border bg-muted/10 p-4">
                <h2 className="text-sm font-medium text-muted-foreground">
                  Service of interest
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm font-medium">
                  <ClipboardList className="h-4 w-4" aria-hidden="true" />
                  {contact.service || "General enquiry"}
                </p>
              </section>

              <section className="rounded-xl border bg-muted/10 p-4 md:col-span-2 xl:col-span-1">
                <h2 className="text-sm font-medium text-muted-foreground">
                  Received
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm font-medium">
                  <CalendarClock className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={submittedAt.dateTime}>
                    {submittedAt.label}
                  </time>
                </p>
              </section>
            </div>

            <section className="border-t pt-6">
              <h2 className="text-lg font-medium">Message / notes</h2>
              <div className="mt-3 whitespace-pre-wrap rounded-xl bg-muted/30 p-4 text-sm leading-relaxed text-card-foreground">
                {contact.message?.trim() ||
                  "No message or notes were provided."}
              </div>
            </section>
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteContactDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          contact={contact}
          onDeleted={onDeleted}
        />
      )}
    </>
  );
}
