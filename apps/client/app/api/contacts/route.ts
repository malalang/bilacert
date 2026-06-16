import { contactSchema } from "@bilacert/contracts/contact";
import { createContact } from "@bilacert/supabase/Mutations/contacts";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Map client fields to schema if necessary, or update client to match
    const mappedBody = {
      name: body.fullName,
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message,
    };

    const parsed = contactSchema.safeParse(mappedBody);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.format() },
        { status: 400 },
      );
    }

    const { name, email, phone, service, message } = parsed.data;

    const { data } = await createContact({
      name,
      email,
      phone: phone || null,
      service: service || null,
      message: message || null,
    });

    console.log(`✓ Contact form submission received from ${email}`);

    return NextResponse.json(
      {
        success: true,
        message:
          "Form submitted successfully. We will review and contact you soon.",
        submissionId: data?.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
