"use client";

import type { Contact } from "@bilacert/shared/types";
import { useContacts } from "@bilacert/supabase/hooks/useContacts";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminPage from "@/components/admin/AdminPage";
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
import DeleteContactDialog from "./DeleteContactDialog";

const ContactCard = ({
  contact,
  onEdit,
  onDelete,
}: {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (contact: Contact) => void;
}) => {
  const router = useRouter();
  return (
    <div key={contact.id} className="group relative">
      <Link
        href={`/admin/contacts/${contact.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${contact.name}`}
      >
        <span className="sr-only">View Details</span>
      </Link>
      <Card className="flex h-full flex-col transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/50">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg line-clamp-2">
              {contact.name}
            </CardTitle>
            <div className="relative z-20">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/admin/contacts/${contact.id}`);
                    }}
                  >
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      onEdit(contact);
                    }}
                  >
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                    onClick={(e) => {
                      e.preventDefault();
                      onDelete(contact);
                    }}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {contact.message}
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm font-semibold">{contact.email}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default function ContactsClient() {
  return (
    <AdminPage<Contact>
      useData={useContacts}
      title="Contacts"
      newItemButtonText="Add Contact"
      newItemLink="/admin/contacts/new"
      renderItem={(contact, onEdit, onDelete) => (
        <ContactCard contact={contact} onEdit={onEdit} onDelete={onDelete} />
      )}
      DeleteDialog={DeleteContactDialog as any}
    />
  );
}
