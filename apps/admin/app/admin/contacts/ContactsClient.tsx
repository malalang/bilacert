"use client";

import type { Contact } from "@bilacert/shared/types";
import { useContacts } from "@bilacert/supabase/hooks/useContacts";
import { ClipboardList, Mail, MessageSquare, Phone } from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import AnalysesHeader from "@/components/admin/AnalysesHeader";
import ContactCard from "./ContactCard";
import DeleteContactDialog from "./DeleteContactDialog";

function ContactsAnalysis({ contacts }: { contacts: Contact[] }) {
  const totals = contacts.reduce(
    (summary, contact) => {
      if (contact.email?.trim()) summary.withEmail += 1;
      if (contact.phone?.trim()) summary.withPhone += 1;
      if (contact.service?.trim()) summary.serviceInquiries += 1;
      return summary;
    },
    { withEmail: 0, withPhone: 0, serviceInquiries: 0 },
  );

  return (
    <AnalysesHeader
      items={[
        {
          title: "Total Contacts",
          value: contacts.length,
          description: "All captured contact messages",
          icon: <MessageSquare className="h-4 w-4 text-muted-foreground" />,
        },
        {
          title: "Email Contacts",
          value: totals.withEmail,
          description: "Contacts with email addresses",
          icon: <Mail className="h-4 w-4 text-muted-foreground" />,
        },
        {
          title: "Phone Contacts",
          value: totals.withPhone,
          description: "Contacts with phone numbers",
          icon: <Phone className="h-4 w-4 text-muted-foreground" />,
        },
        {
          title: "Service Inquiries",
          value: totals.serviceInquiries,
          description: "Messages linked to services",
          icon: <ClipboardList className="h-4 w-4 text-muted-foreground" />,
        },
      ]}
    />
  );
}

function ContactDeleteDialogAdapter({
  isOpen,
  onClose,
  onDeleted,
  item,
}: {
  isOpen: boolean;
  onClose: () => void;
  onDeleted: () => void;
  item: Contact | null;
}) {
  return (
    <DeleteContactDialog
      isOpen={isOpen}
      onClose={onClose}
      onDeleted={onDeleted}
      contact={item}
    />
  );
}

export default function ContactsClient() {
  return (
    <AdminPage<Contact>
      useData={useContacts}
      title="Contacts"
      newItemButtonText="Add Contact"
      newItemLink="/admin/contacts/new"
      renderBeforeContent={(contacts) => (
        <ContactsAnalysis contacts={contacts} />
      )}
      renderItem={(contact, _onEdit, onDelete) => (
        <ContactCard contact={contact} onDelete={onDelete} />
      )}
      DeleteDialog={ContactDeleteDialogAdapter}
    />
  );
}
