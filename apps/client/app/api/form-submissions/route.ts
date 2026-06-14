import { formSubmissionPayloadSchema } from "@bilacert/contracts/formSubmission";
import { createFormSubmission } from "@bilacert/supabase/Mutations/formSubmissions";
import { getFormSubmissionById } from "@bilacert/supabase/Queries/formSubmissions";
import { getServiceBySlug } from "@bilacert/supabase/Queries/services";
import { getUserRole } from "@bilacert/supabase/Queries/users";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const parsed = formSubmissionPayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.format() },
        { status: 400 },
      );
    }

    const {
      formType,
      serviceId,
      serviceName,
      fullName,
      email,
      phone,
      companyName,
      industry,
      details,
    } = parsed.data;

    // Insert form submission using mutation
    const { data } = await createFormSubmission({
      formType,
      serviceId: serviceId || null,
      serviceName: serviceName || null,
      fullName,
      email,
      phone: phone || null,
      company: companyName || null,
      industry: industry || null,
      details: (details as unknown as Json) || null,
      status: "pending",
    });

    // Log the submission for monitoring
    console.log(`✓ Form submission received: ${formType} from ${email}`);

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

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const submissionId = searchParams.get("submissionId");
    const serviceId = searchParams.get("serviceId");

    const supabase = await createSupabaseServerClient();

    if (serviceId) {
      const service = await getServiceBySlug(serviceId);

      if (!service) {
        return NextResponse.json(
          { error: "Service not found" },
          { status: 404 },
        );
      }
      return NextResponse.json(service);
    }

    if (submissionId) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const role = await getUserRole(user.id);

      if (role !== "admin") {
        return NextResponse.json(
          { error: "Forbidden: Only admins can view submissions" },
          { status: 403 },
        );
      }

      try {
        const data = await getFormSubmissionById(submissionId);
        return NextResponse.json(data);
      } catch (error) {
        return NextResponse.json(
          { error: "Submission not found" },
          { status: 404 },
        );
      }
    }

    return NextResponse.json(
      { error: "submissionId or serviceId query parameter required" },
      { status: 400 },
    );
  } catch (error) {
    console.error("Form retrieval error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
