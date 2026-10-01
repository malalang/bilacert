"use client";

import type { ContactType } from "@bilacert/contracts/contact";
import {
  CalendarClock,
  Edit,
  Eye,
  Mail,
  MessageSquareText,
  MoreHorizontal,
  Phone,
  Trash2,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getContactEmailComposeHref } from "@/lib/emailNavigation";

type ContactCardProps = {
  contact: ContactType;
  onDelete: (contact: ContactType) => void;
};

const contactDateFormatter = new Intl.DateTimeFormat("en-ZA", {
  dateStyle: "medium",
  timeZone: "Africa/Johannesburg",
});

function getContactDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return { dateTime: undefined, label: "Unknown date" };
  }

  return {
    dateTime: date.toISOString(),
    label: contactDateFormatter.format(date),
  };
}

function ContactCard({ contact, onDelete }: ContactCardProps) {
  const contactHref = `/contacts/${contact.id}`;
  const editHref = `${contactHref}/edit`;
  const emailComposeHref = getContactEmailComposeHref(contact);
  const displayName =
    contact.name?.trim() || contact.email || "Unnamed contact";
  const phone = contact.phone?.trim();
  const service = contact.service?.trim();
  const submittedAt = getContactDate(contact.submittedAt);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-colors duration-200 hover:border-primary/25">
      <CardHeader className="space-y-4 p-5 pb-4">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <UserRound className="h-5 w-5" aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <CardTitle className="truncate leading-tight">
              <Link
                href={contactHref}
                prefetch={false}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                {displayName}
              </Link>
            </CardTitle>
            {service && (
              <Badge variant="secondary" className="mt-2 max-w-full">
                <span className="truncate">{service}</span>
              </Badge>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 shrink-0 rounded-lg sm:h-9 sm:w-9"
                aria-label={`More actions for ${displayName}`}
              >
                <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Contact actions</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href={contactHref} prefetch={false}>
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  View details
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={editHref} prefetch={false}>
                  <Edit className="h-4 w-4" aria-hidden="true" />
                  Edit contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                onClick={() => onDelete(contact)}
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                Delete contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4 px-5 pb-5">
        <div className="flex min-h-20 gap-2.5 rounded-lg bg-muted/30 p-3">
          <MessageSquareText
            className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
          <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
            {contact.message?.trim() || "No message or notes were provided."}
          </p>
        </div>

        <div className="mt-auto space-y-2.5 text-sm">
          <span className="flex min-w-0 items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{contact.email}</span>
          </span>

          {phone ? (
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 hover:underline"
            >
              <Phone
                className="h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
              {phone}
            </a>
          ) : (
            <span className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" aria-hidden="true" />
              No phone provided
            </span>
          )}

          <span className="flex items-center gap-2 text-muted-foreground">
            <CalendarClock className="h-4 w-4" aria-hidden="true" />
            <time dateTime={submittedAt.dateTime}>{submittedAt.label}</time>
          </span>
        </div>
      </CardContent>

      <CardFooter className="mt-auto justify-end border-t">
        <Button size="sm" className="h-9" asChild>
          <Link href={contactHref} prefetch={false}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            Details
          </Link>
        </Button>
        {emailComposeHref ? (
          <Button size="sm" className="h-9" variant="outline" asChild>
            <Link href={emailComposeHref} prefetch={false}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </Link>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export default memo(ContactCard);
