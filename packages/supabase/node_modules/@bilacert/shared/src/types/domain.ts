export interface PricingPlan {
  name: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
}

export interface FormSubmissionPayload {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  serviceType?: string;
  formType: FormType;
  serviceId?: string;
  message: string;
  industry?: string;
  details?: Record<string, unknown>;
  serviceName?: string;
}

export interface ProcessStep {
  step: string | number;
  title: string;
  description: string;
}

export interface SuccessStory {
  scenario: string;
  challenge: string;
  solution: string;
  result: string;
}

export type SubmissionStatus =
  | "pending"
  | "in-progress"
  | "completed"
  | "rejected"
  | "archived";

export type FormType =
  | "service-inquiry"
  | "contact"
  | "class-ecs-ecns"
  | "icasa-type-approvals"
  | "license-exemptions"
  | "nrcs-loa"
  | "radio-dealer"
  | "ski-boat-vhf";

export interface Submission {
  id: string;
  formType: FormType;
  status: SubmissionStatus;
  serviceId?: string;
  serviceName?: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  details?: unknown;
  internalNotes?: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  href: string;
  category?: string;
  description?: string;
  shortDescription?: string;
  icon?: string;
  orderIndex?: number;
  content?: string;
  features?: string[];
  requirements?: string[];
  includes?: string[];
  published: boolean;
  featured: boolean;
  createdAt: string;
  processingTime?: string;
  pricing?: number;
  image?: string;
  thumbnail?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  pricingPlans?: PricingPlan[];
  processSteps?: ProcessStep[];
  successStory?: SuccessStory;
  updatedAt?: string;
}

export interface Testimonial {
  id: string;
  postUrl: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category?: string;
  tags?: string;
  readTime?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  featuredImage?: string;
  thumbnail?: string;
  published: boolean;
  publishedAt?: string;
  featured: boolean;
  authorId?: string;
  authorName?: string;
  viewsCount?: number;
  createdAt: string;
  updatedAt?: string;
}

export interface Contact {
  id: string;
  name?: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  submittedAt: string;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: "admin" | "editor" | "user";
  phone?: string;
  company?: string;
  profileImage?: string;
  bio?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  updatedBy?: string;
}
