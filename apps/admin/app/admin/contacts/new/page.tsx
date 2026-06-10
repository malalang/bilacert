import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";

export const metadata = {
  title: "New Contact | Bilacert Admin Pro",
  description: "Add a new contact to your records.",
};

export default function NewContactPage() {
  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/contacts">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Contacts
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Add New Contact</CardTitle>
          <CardDescription>
            Fill out the form below to add a new contact.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
