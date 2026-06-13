import type {
  FormSubmissionPayload,
  Testimonial,
} from "@bilacert/shared/types";
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and anon key are required.");
}

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

export async function submitForm(
  serviceType: string,
  data: FormSubmissionPayload,
) {
  const { fullName, email, phone, message, ...serviceData } = data;

  try {
    const { data: submission, error } = await supabase
      .from("form_submissions")
      .insert({
        formType: serviceType,
        fullName: fullName,
        email: email,
        phone: phone || null,
        details: { message, ...serviceData } || {},
        status: "pending",
      })
      .select();

    if (error) {
      console.error("Form submission error:", error);
      throw new Error(error.message);
    }

    return submission?.[0] || null;
  } catch (error) {
    console.error("Supabase form submission failed:", error);
    throw error;
  }
}

export async function getSubmissionByEmail(
  email: string,
  serviceType?: string,
) {
  try {
    let query = supabase.from("form_submissions").select("*").eq("email", email);

    if (serviceType) {
      query = query.eq("formType", serviceType);
    }

    const { data, error } = await query.order("createdAt", {
      ascending: false,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Failed to fetch submission:", error);
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("createdAt", { ascending: false })
      .limit(10);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}
