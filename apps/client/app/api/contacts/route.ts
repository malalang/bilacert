import { createContact } from "@bilacert/supabase/Mutations/contacts";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { service, fullName, email, phone, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, message" },
        { status: 400 },
      );
    }

    const { data } = await createContact({
      name: fullName,
      email,
      phone: phone || null,
      service: service || null,
      message,
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
