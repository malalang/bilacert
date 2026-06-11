import { createServerClient } from "@bilacert/supabase/server";
import type { Contact } from "@bilacert/supabase/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactDetails from "../ContactDetails";

async function getContact(id: string): Promise<Contact | null> {
  const supabase = await createServerClient();
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
    company: data.company,
    message: data.message,
    submitted_at: data.submitted_at,
  } as Contact;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const contact = await getContact(params.id);
  if (!contact) {
    return {
      title: "Contact Not Found",
    };
  }
  return {
    title: `${contact.name} | Bilacert Admin Pro`,
  };
}

export default async function ContactDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const contact = await getContact(id);

  if (!contact) {
    notFound();
  }

  return <ContactDetails contact={contact} />;
}
