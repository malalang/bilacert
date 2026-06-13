This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
.npmrc
.repomixignore
apps/admin/.gitignore
apps/admin/app/admin/analysis/AnalysisClient.tsx
apps/admin/app/admin/analysis/charts.tsx
apps/admin/app/admin/analysis/loading.tsx
apps/admin/app/admin/analysis/page.tsx
apps/admin/app/admin/blogs/[id]/edit/page.tsx
apps/admin/app/admin/blogs/[id]/page.tsx
apps/admin/app/admin/blogs/actions.ts
apps/admin/app/admin/blogs/BlogDetails.tsx
apps/admin/app/admin/blogs/BlogEditor.tsx
apps/admin/app/admin/blogs/BlogForm.tsx
apps/admin/app/admin/blogs/BlogsClient.tsx
apps/admin/app/admin/blogs/columns.tsx
apps/admin/app/admin/blogs/DeleteBlogDialog.tsx
apps/admin/app/admin/blogs/loading.tsx
apps/admin/app/admin/blogs/new/page.tsx
apps/admin/app/admin/blogs/page.tsx
apps/admin/app/admin/blogs/schema.ts
apps/admin/app/admin/contacts/[id]/edit/page.tsx
apps/admin/app/admin/contacts/[id]/page.tsx
apps/admin/app/admin/contacts/actions.ts
apps/admin/app/admin/contacts/columns.tsx
apps/admin/app/admin/contacts/ContactDetails.tsx
apps/admin/app/admin/contacts/ContactForm.tsx
apps/admin/app/admin/contacts/ContactsClient.tsx
apps/admin/app/admin/contacts/data-table.tsx
apps/admin/app/admin/contacts/DeleteContactDialog.tsx
apps/admin/app/admin/contacts/loading.tsx
apps/admin/app/admin/contacts/new/page.tsx
apps/admin/app/admin/contacts/page.tsx
apps/admin/app/admin/contacts/schema.ts
apps/admin/app/admin/dashboard/DashboardClient.tsx
apps/admin/app/admin/dashboard/loading.tsx
apps/admin/app/admin/dashboard/page.tsx
apps/admin/app/admin/form_submissions/[id]/edit/page.tsx
apps/admin/app/admin/form_submissions/[id]/page.tsx
apps/admin/app/admin/form_submissions/actions.ts
apps/admin/app/admin/form_submissions/columns.tsx
apps/admin/app/admin/form_submissions/data-table.tsx
apps/admin/app/admin/form_submissions/DeleteSubmissionDialog.tsx
apps/admin/app/admin/form_submissions/page.tsx
apps/admin/app/admin/form_submissions/schema.ts
apps/admin/app/admin/form_submissions/StatusUpdate.tsx
apps/admin/app/admin/form_submissions/SubmissionDetails.tsx
apps/admin/app/admin/form_submissions/SubmissionForm.tsx
apps/admin/app/admin/form_submissions/SubmissionsClient.tsx
apps/admin/app/admin/layout.tsx
apps/admin/app/admin/login/page.tsx
apps/admin/app/admin/services/[id]/edit/page.tsx
apps/admin/app/admin/services/[id]/edit/ServiceForm.tsx
apps/admin/app/admin/services/[id]/page.tsx
apps/admin/app/admin/services/[id]/ServiceDetails.tsx
apps/admin/app/admin/services/actions.ts
apps/admin/app/admin/services/columns.tsx
apps/admin/app/admin/services/components/CoreDetailsForm.tsx
apps/admin/app/admin/services/components/DetailsForm.tsx
apps/admin/app/admin/services/components/FeaturesForm.tsx
apps/admin/app/admin/services/components/MediaForm.tsx
apps/admin/app/admin/services/components/PricingPlansForm.tsx
apps/admin/app/admin/services/components/ProcessStepsForm.tsx
apps/admin/app/admin/services/components/PublishingForm.tsx
apps/admin/app/admin/services/components/SeoForm.tsx
apps/admin/app/admin/services/components/SuccessStoryForm.tsx
apps/admin/app/admin/services/data-table.tsx
apps/admin/app/admin/services/DeleteServiceDialog.tsx
apps/admin/app/admin/services/loading.tsx
apps/admin/app/admin/services/new/page.tsx
apps/admin/app/admin/services/page.tsx
apps/admin/app/admin/services/schema.ts
apps/admin/app/admin/services/ServiceForm.tsx
apps/admin/app/admin/services/ServicesClient.tsx
apps/admin/app/admin/testimonials/[id]/edit/page.tsx
apps/admin/app/admin/testimonials/[id]/page.tsx
apps/admin/app/admin/testimonials/actions.ts
apps/admin/app/admin/testimonials/DeleteTestimonialDialog.tsx
apps/admin/app/admin/testimonials/loading.tsx
apps/admin/app/admin/testimonials/new/page.tsx
apps/admin/app/admin/testimonials/page.tsx
apps/admin/app/admin/testimonials/schema.ts
apps/admin/app/admin/testimonials/TestimonialDetails.tsx
apps/admin/app/admin/testimonials/TestimonialEmbed.tsx
apps/admin/app/admin/testimonials/TestimonialForm.tsx
apps/admin/app/admin/testimonials/TestimonialsClient.tsx
apps/admin/app/api/pexels/route.ts
apps/admin/app/favicon.ico
apps/admin/app/globals.css
apps/admin/app/layout.tsx
apps/admin/app/page.tsx
apps/admin/biome.json
apps/admin/components.json
apps/admin/components/admin/AdminLayout.tsx
apps/admin/components/admin/AdminPage.tsx
apps/admin/components/admin/Header.tsx
apps/admin/components/admin/Sidebar.tsx
apps/admin/components/admin/StatCard.tsx
apps/admin/components/admin/SupabaseNotConfigured.tsx
apps/admin/components/icons.tsx
apps/admin/components/PexelsImagePicker.tsx
apps/admin/components/ui/accordion.tsx
apps/admin/components/ui/alert-dialog.tsx
apps/admin/components/ui/alert.tsx
apps/admin/components/ui/avatar.tsx
apps/admin/components/ui/badge.tsx
apps/admin/components/ui/button.tsx
apps/admin/components/ui/calendar.tsx
apps/admin/components/ui/card.tsx
apps/admin/components/ui/carousel.tsx
apps/admin/components/ui/chart.tsx
apps/admin/components/ui/checkbox.tsx
apps/admin/components/ui/collapsible.tsx
apps/admin/components/ui/DateRangePicker.tsx
apps/admin/components/ui/dialog.tsx
apps/admin/components/ui/dropdown-menu.tsx
apps/admin/components/ui/form.tsx
apps/admin/components/ui/ImageUpload.tsx
apps/admin/components/ui/input.tsx
apps/admin/components/ui/label.tsx
apps/admin/components/ui/menubar.tsx
apps/admin/components/ui/popover.tsx
apps/admin/components/ui/progress.tsx
apps/admin/components/ui/radio-group.tsx
apps/admin/components/ui/scroll-area.tsx
apps/admin/components/ui/select.tsx
apps/admin/components/ui/separator.tsx
apps/admin/components/ui/sheet.tsx
apps/admin/components/ui/sidebar.tsx
apps/admin/components/ui/skeleton.tsx
apps/admin/components/ui/slider.tsx
apps/admin/components/ui/switch.tsx
apps/admin/components/ui/table.tsx
apps/admin/components/ui/tabs.tsx
apps/admin/components/ui/textarea.tsx
apps/admin/components/ui/toast.tsx
apps/admin/components/ui/toaster.tsx
apps/admin/components/ui/tooltip.tsx
apps/admin/hooks/use-mobile.tsx
apps/admin/hooks/use-toast.ts
apps/admin/lib/placeholder-images.json
apps/admin/lib/placeholder-images.ts
apps/admin/lib/revalidation.ts
apps/admin/next.config.ts
apps/admin/package.json
apps/admin/postcss.config.mjs
apps/admin/public/class-ens-ecns.jpg
apps/admin/public/compliance-cost-savings.jpg
apps/admin/public/ecs-ecns-licensing-explained.jpeg
apps/admin/public/ecs-ecns-licensing-explained.jpg
apps/admin/public/file.svg
apps/admin/public/get-in-touch.jpg
apps/admin/public/globe.svg
apps/admin/public/herosetion/About-Us.jpg
apps/admin/public/herosetion/About-Us2.jpg
apps/admin/public/herosetion/Blog.jpg
apps/admin/public/herosetion/Contact-Us.jpg
apps/admin/public/herosetion/Contact-Us2.jpg
apps/admin/public/herosetion/FAQ.jpg
apps/admin/public/herosetion/Home-Page.jpg
apps/admin/public/herosetion/Radio-Dealer.jpg
apps/admin/public/herosetion/Services.jpg
apps/admin/public/herosetion/Ski-Boat-VHF.jpg
apps/admin/public/herosetion/Type-Approval.jpg
apps/admin/public/ICASA.png
apps/admin/public/license.png
apps/admin/public/logo.jpg
apps/admin/public/logo.png
apps/admin/public/next.svg
apps/admin/public/NRCS.jpg
apps/admin/public/NRCS2.webp
apps/admin/public/radio-dealer-licensing-guide.jpg
apps/admin/public/Radio-dealer.jpg
apps/admin/public/vercel.svg
apps/admin/public/window.svg
apps/admin/README.md
apps/admin/tsconfig.json
apps/client/.gitignore
apps/client/app/_lib/cached-public-data.ts
apps/client/app/about/page.tsx
apps/client/app/about/team.md
apps/client/app/api/contacts/route.ts
apps/client/app/api/form-submissions/route.ts
apps/client/app/api/revalidate/route.ts
apps/client/app/blog/[slug]/page.tsx
apps/client/app/blog/page.tsx
apps/client/app/contact/ContactForm.tsx
apps/client/app/contact/page.tsx
apps/client/app/faq/FAQContent.tsx
apps/client/app/faq/page.tsx
apps/client/app/favicon.ico
apps/client/app/forms/class-ecs-ecns-licensing/ClientPage.tsx
apps/client/app/forms/class-ecs-ecns-licensing/page.tsx
apps/client/app/forms/icasa-type-approvals/ClientPage.tsx
apps/client/app/forms/icasa-type-approvals/page.tsx
apps/client/app/forms/license-exemptions/ClientPage.tsx
apps/client/app/forms/license-exemptions/page.tsx
apps/client/app/forms/nrcs-loa-applications/ClientPage.tsx
apps/client/app/forms/nrcs-loa-applications/page.tsx
apps/client/app/forms/radio-dealer-licensing/ClientPage.tsx
apps/client/app/forms/radio-dealer-licensing/page.tsx
apps/client/app/forms/ski-boat-vhf-licensing/ClientPage.tsx
apps/client/app/forms/ski-boat-vhf-licensing/page.tsx
apps/client/app/globals.css
apps/client/app/layout.tsx
apps/client/app/page.tsx
apps/client/app/robots.ts
apps/client/app/services/[serviceId]/form/page.tsx
apps/client/app/services/[serviceId]/form/ServiceApplicationForm.tsx
apps/client/app/services/[serviceId]/page.tsx
apps/client/app/services/page.tsx
apps/client/app/sitemap.ts
apps/client/biome.json
apps/client/components/blog/AboutAuthor.tsx
apps/client/components/blog/RelatedPosts.tsx
apps/client/components/blog/StickyShare.tsx
apps/client/components/blog/TableOfContents.tsx
apps/client/components/blog/view.tsx
apps/client/components/Footer.tsx
apps/client/components/Header.tsx
apps/client/components/service/CTASection.tsx
apps/client/components/service/PricingPlans.tsx
apps/client/components/service/ProcessSteps.tsx
apps/client/components/service/ServiceHero.tsx
apps/client/components/service/ServicesGrid.tsx
apps/client/components/service/SuccessStory.tsx
apps/client/components/service/WhatIsSection.tsx
apps/client/components/service/WhyChooseUs.tsx
apps/client/components/StructuredData.tsx
apps/client/components/Testimonials.tsx
apps/client/components/ui/badge.tsx
apps/client/components/ui/button.tsx
apps/client/components/ui/card.tsx
apps/client/components/WhatsAppButton.tsx
apps/client/doc/default.js.md
apps/client/doc/DYNAMIC_SERVICES_SYSTEM.md
apps/client/doc/dynamic-route-segments.md
apps/client/lib/blog-data.ts
apps/client/lib/seo.ts
apps/client/lib/services-config.ts
apps/client/lib/styles/index.css
apps/client/lib/supabase-client.ts
apps/client/next.config.ts
apps/client/package.json
apps/client/postcss.config.mjs
apps/client/public/class-ens-ecns.jpg
apps/client/public/compliance-cost-savings.jpg
apps/client/public/ecs-ecns-licensing-explained.jpeg
apps/client/public/ecs-ecns-licensing-explained.jpg
apps/client/public/file.svg
apps/client/public/get-in-touch.jpg
apps/client/public/globe.svg
apps/client/public/herosetion/About-Us.jpg
apps/client/public/herosetion/About-Us2.jpg
apps/client/public/herosetion/Blog.jpg
apps/client/public/herosetion/Contact-Us.jpg
apps/client/public/herosetion/Contact-Us2.jpg
apps/client/public/herosetion/FAQ.jpg
apps/client/public/herosetion/Home-Page.jpg
apps/client/public/herosetion/Radio-Dealer.jpg
apps/client/public/herosetion/Services.jpg
apps/client/public/herosetion/Ski-Boat-VHF.jpg
apps/client/public/herosetion/Type-Approval.jpg
apps/client/public/ICASA.png
apps/client/public/license.png
apps/client/public/logo.jpg
apps/client/public/logo.png
apps/client/public/next.svg
apps/client/public/NRCS.jpg
apps/client/public/NRCS2.webp
apps/client/public/radio-dealer-licensing-guide.jpg
apps/client/public/Radio-dealer.jpg
apps/client/public/vercel.svg
apps/client/public/window.svg
apps/client/README.md
apps/client/tsconfig.json
biome.json
package.json
packages/shared/package.json
packages/shared/src/components/Icon.tsx
packages/shared/src/types/domain.ts
packages/shared/src/utils/cn.ts
packages/shared/tsconfig.json
packages/supabase/package.json
packages/supabase/rename.sql
packages/supabase/renameToCamelCase.sql
packages/supabase/src/admin.ts
packages/supabase/src/cache.ts
packages/supabase/src/client.ts
packages/supabase/src/hooks/useAnalyticsData.ts
packages/supabase/src/hooks/useBlogs.ts
packages/supabase/src/hooks/useContacts.ts
packages/supabase/src/hooks/useDashboardData.ts
packages/supabase/src/hooks/useDataFetching.ts
packages/supabase/src/hooks/useFormSubmission.ts
packages/supabase/src/hooks/useServices.ts
packages/supabase/src/hooks/useSubmissions.ts
packages/supabase/src/hooks/useTestimonials.ts
packages/supabase/src/hooks/useUser.ts
packages/supabase/src/middleware.ts
packages/supabase/src/Mutations/blogs.ts
packages/supabase/src/Mutations/contacts.ts
packages/supabase/src/Mutations/formSubmissions.ts
packages/supabase/src/Mutations/services.ts
packages/supabase/src/Mutations/testimonials.ts
packages/supabase/src/Queries/blogs.ts
packages/supabase/src/Queries/services.ts
packages/supabase/src/server.ts
packages/supabase/src/supabaseType.ts
packages/supabase/tsconfig.json
packages/typescript-config/base.json
packages/typescript-config/nextjs.json
packages/typescript-config/package.json
pnpm-workspace.yaml
repomix.config.json
turbo.json
```

# Files

## File: .npmrc
````
shamefully-hoist=true
node-linker=hoisted
````

## File: .repomixignore
````
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# Repomix
/dist
/tmp
/.gemini

# Local development
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# Build artifacts
/build
/.next/
out/

# Dependencies (Vite/pnpm)
.vite/
.turbo/
**/.pnpm-store

# Logs and temp files
*.log
*.log.*
*.tgz
*.zip
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Environment variables
.env
.env.local
.env.example
.env.*.local

# Editor and system files
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# IDE settings (optional)
.cursor/

# OS
.DS_Store
Thumbs.db

# Project-specific ignores
GEMINI.md
````

## File: apps/admin/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pe

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
.turbo

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: apps/admin/app/admin/analysis/loading.tsx
````typescript
import { Skeleton } from "@/components/ui/skeleton";

export default function AnalysisLoading() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
      </div>
      <div>
        <Skeleton className="h-64" />
      </div>
    </div>
  );
}
````

## File: apps/admin/app/admin/analysis/page.tsx
````typescript
import { Suspense } from "react";
import AnalysisClient from "./AnalysisClient";
import AnalysisLoading from "./loading";

export const metadata = {
  title: "Analysis | Bilacert Admin Pro",
  description: "In-depth analysis of submissions and content.",
};

export default function AnalysisPage() {
  return (
    <Suspense fallback={<AnalysisLoading />}>
      <AnalysisClient />
    </Suspense>
  );
}
````

## File: apps/admin/app/admin/contacts/loading.tsx
````typescript
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
````

## File: apps/admin/app/admin/contacts/schema.ts
````typescript
import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
});
````

## File: apps/admin/app/admin/dashboard/page.tsx
````typescript
import { Suspense } from "react";
import DashboardClient from "./DashboardClient";
import DashboardLoading from "./loading";

export const metadata = {
  title: "Dashboard | Bilacert Admin Pro",
  description: "Real-time overview of submissions and metrics.",
};

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardClient />
    </Suspense>
  );
}
````

## File: apps/admin/app/admin/testimonials/schema.ts
````typescript
import * as z from "zod";

export const testimonialSchema = z.object({
  id: z.string().optional(),
  post_url: z.string().url("Please enter a valid Facebook post URL"),
});
````

## File: apps/admin/app/layout.tsx
````typescript
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "Bilacert Admin Pro",
    template: "%s | Bilacert Admin",
  },
  description: "Administrative dashboard for Bilacert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
````

## File: apps/admin/app/page.tsx
````typescript
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/admin/login");
}
````

## File: apps/admin/components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/lib/hooks"
  },
  "iconLibrary": "lucide"
}
````

## File: apps/admin/components/admin/SupabaseNotConfigured.tsx
````typescript
export default function SupabaseNotConfigured() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background p-8">
      <div className="max-w-2xl rounded-lg border border-destructive bg-card p-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-destructive">
          Supabase Not Configured
        </h1>
        <p className="mt-4 text-card-foreground">
          Your application is not yet configured to connect to Supabase. To fix
          this, you need to add your Supabase project's credentials to the
          environment file.
        </p>
        <div className="mt-6 text-left text-sm">
          <p className="font-semibold">Follow these steps:</p>
          <ol className="ml-5 mt-2 list-decimal space-y-2">
            <li>
              Go to your{" "}
              <a
                href="https://supabase.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Supabase project dashboard
              </a>
              .
            </li>
            <li>
              Navigate to <strong>Project Settings</strong> (the gear icon in
              the left sidebar).
            </li>
            <li>
              Click on the <strong>API</strong> tab.
            </li>
            <li>
              You will find your <strong>Project URL</strong> and the{" "}
              <strong>
                <code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">
                  anon
                </code>{" "}
                public key
              </strong>
              .
            </li>
            <li>
              Open the{" "}
              <code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">
                .env
              </code>{" "}
              file in your project's root directory.
            </li>
            <li>
              Replace the placeholder values with your actual credentials:
            </li>
          </ol>
        </div>
        <pre className="mt-4 w-full overflow-x-auto rounded-md bg-muted p-4 text-left text-sm">
          <code className="font-mono">
            NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
            <br />
            NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
          </code>
        </pre>
        <p className="mt-4 text-xs text-muted-foreground">
          After saving the{" "}
          <code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">
            .env
          </code>{" "}
          file, your application should automatically update. If it doesn't,
          please restart the development server.
        </p>
      </div>
    </div>
  );
}
````

## File: apps/admin/components/icons.tsx
````typescript
import type { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
````

## File: apps/admin/components/ui/collapsible.tsx
````typescript
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
````

## File: apps/admin/hooks/use-mobile.tsx
````typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
````

## File: apps/admin/lib/placeholder-images.json
````json
{
  "placeholderImages": [
    {
      "id": "user-avatar-1",
      "description": "User avatar",
      "imageUrl": "https://images.unsplash.com/photo-1710974481447-fb001ad9ad5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2OTQxMTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "person face"
    }
  ]
}
````

## File: apps/admin/lib/placeholder-images.ts
````typescript
import data from "./placeholder-images.json";

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
````

## File: apps/admin/lib/revalidation.ts
````typescript
import type { RevalidationRequest } from "@bilacert/supabase/cache";

export async function triggerRevalidation(request: RevalidationRequest) {
  const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
  const secret = process.env.REVALIDATION_SECRET;

  if (!clientUrl || !secret) {
    console.warn(
      "NEXT_PUBLIC_CLIENT_URL or REVALIDATION_SECRET is not configured. Skipping client revalidation.",
    );
    return { ok: false, skipped: true };
  }

  try {
    const response = await fetch(new URL("/api/revalidate", clientUrl), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Client revalidation failed:",
        response.status,
        await response.text(),
      );
      return { ok: false, skipped: false };
    }

    return { ok: true, skipped: false };
  } catch (error) {
    console.error("Client revalidation request failed:", error);
    return { ok: false, skipped: false };
  }
}
````

## File: apps/admin/next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "zpgxnohxizcmuwbosapx.supabase.co",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
````

## File: apps/admin/public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: apps/admin/public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: apps/admin/public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: apps/admin/public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: apps/admin/public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: apps/admin/README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: apps/admin/tsconfig.json
````json
{
  "extends": "@bilacert/typescript-config/nextjs.json",
  "compilerOptions": {
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "types": ["node", "react", "react-dom"],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````

## File: apps/client/app/_lib/cached-public-data.ts
````typescript
import { CACHE_TAGS } from "@bilacert/supabase/cache";
import {
  getAllPublishedBlogPosts,
  getAllPublishedBlogSlugs,
  getBlogPostBySlug,
  getBlogPostsByCategory,
} from "@bilacert/supabase/Queries/blogs";
import {
  getAllPublishedServiceSlugs,
  getFeaturedServices,
  getPublishedServices,
  getServiceBySlug,
} from "@bilacert/supabase/Queries/services";
import { unstable_cache } from "next/cache";

export const getCachedPublishedBlogs = unstable_cache(
  getAllPublishedBlogPosts,
  ["published-blogs"],
  { tags: [CACHE_TAGS.blogs] },
);

export const getCachedPublishedBlogSlugs = unstable_cache(
  getAllPublishedBlogSlugs,
  ["published-blog-slugs"],
  { tags: [CACHE_TAGS.blogs] },
);

export const getCachedBlogBySlug = (slug: string) =>
  unstable_cache(() => getBlogPostBySlug(slug), ["published-blog", slug], {
    tags: [CACHE_TAGS.blogs, CACHE_TAGS.blog(slug)],
  })();

export const getCachedBlogPostsByCategory = (category: string, limit: number) =>
  unstable_cache(
    () => getBlogPostsByCategory(category, limit),
    ["published-blogs-by-category", category, String(limit)],
    { tags: [CACHE_TAGS.blogs] },
  )();

export const getCachedServices = unstable_cache(
  getPublishedServices,
  ["published-services"],
  { tags: [CACHE_TAGS.services] },
);

export const getCachedFeaturedServices = unstable_cache(
  getFeaturedServices,
  ["featured-services"],
  { tags: [CACHE_TAGS.services] },
);

export const getCachedServiceSlugs = unstable_cache(
  getAllPublishedServiceSlugs,
  ["published-service-slugs"],
  { tags: [CACHE_TAGS.services] },
);

export const getCachedServiceBySlug = (slug: string) =>
  unstable_cache(() => getServiceBySlug(slug), ["published-service", slug], {
    tags: [CACHE_TAGS.services, CACHE_TAGS.service(slug)],
  })();
````

## File: apps/client/app/about/page.tsx
````typescript
import {
  CheckCircle,
  Eye,
  Heart,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bilacert, South Africa's trusted compliance partner. We simplify ICASA and NRCS approvals with our values of simplicity, clarity, efficiency, and support.",
  keywords: [
    "about Bilacert",
    "compliance consultant South Africa",
    "ICASA NRCS experts",
    "regulatory compliance team",
    "South Africa compliance company",
    "telecommunications compliance experts",
  ],
  openGraph: {
    title: "About Bilacert - Your Trusted Compliance Partner",
    description:
      "Learn about Bilacert, South Africa's trusted compliance partner. We simplify ICASA and NRCS approvals with our values of simplicity, clarity, efficiency, and support.",
    url: "https://bilacert.co.za/about",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Simplicity",
      description:
        "We believe compliance should be clear and straightforward. We break down complex regulations into simple, actionable steps, removing unnecessary barriers for businesses.",
      icon: <Eye className="h-8 w-8" />,
    },
    {
      title: "Clarity",
      description:
        "We communicate in a way that is direct and transparent, avoiding unnecessary jargon. Our goal is to ensure our clients always understand their compliance status and next steps.",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "Efficiency",
      description:
        "We prioritize speed and accuracy, ensuring applications are processed correctly the first time. Our refined processes and deep industry knowledge minimize delays and streamline approvals.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Support",
      description:
        "We are more than just a service provider; we are a partner. We walk alongside our clients through the entire compliance process, offering guidance and solutions every step of the way.",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      title: "Trust & Integrity",
      description:
        "Regulatory compliance is a critical business function. We operate with honesty and integrity, ensuring our clients can trust us to handle their approvals with the utmost professionalism.",
      icon: <Shield className="h-8 w-8" />,
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description:
        "We assess your business needs and determine the required approvals.",
    },
    {
      step: "2",
      title: "Documentation & Application Preparation",
      description:
        "We gather all necessary paperwork, ensuring accuracy and compliance with regulatory standards.",
    },
    {
      step: "3",
      title: "Submission & Liaison",
      description:
        "We submit applications on your behalf and manage all communication with regulatory bodies.",
    },
    {
      step: "4",
      title: "Follow-Up & Resolution",
      description:
        "We track application progress, address any issues, and ensure smooth approval.",
    },
    {
      step: "5",
      title: "Ongoing Compliance Support",
      description:
        "We assist with renewals, amendments, and compliance updates to keep your business aligned with regulations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <Image
          src="/herosetion/About-Us.jpg"
          alt="About Bilacert"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Bilacert
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto">
              Your trusted compliance partner, simplifying ICASA and NRCS
              approvals for South African businesses since day one.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Our Mission & Purpose
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Our Purpose
                  </h3>
                  <p className="text-gray-600 text-lg">
                    To make compliance easy, accessible, and efficient for
                    businesses, so they can focus on innovation and growth while
                    we handle the regulatory complexities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Bilacert is committed to being the trusted partner in
                    regulatory compliance, providing businesses with expert
                    guidance, seamless application processes, and reliable
                    support. Our mission is to remove the guesswork from
                    licensing and approvals, ensuring businesses meet South
                    African regulatory requirements with confidence and ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary-gray p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">
                      500+ Clients Served
                    </h3>
                    <p className="text-gray-600">
                      From startups to multinationals
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">
                      100% Success Rate
                    </h3>
                    <p className="text-gray-600">On first-time applications</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">30% Faster</h3>
                    <p className="text-gray-600">Than industry average</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our
              commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="text-accent mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step process ensures your compliance journey is
              smooth and successful
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step) => (
              <div key={step.step} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let&apos;s discuss how we can help simplify your compliance
            requirements and accelerate your business growth.
          </p>
          <a
            href="/contact"
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1 inline-block"
          >
            Start Your Compliance Journey
          </a>
        </div>
      </section>
    </div>
  );
}
````

## File: apps/client/app/about/team.md
````markdown
{/* Team Placeholder */}
			{/* <section className='py-20 bg-secondary-gray'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>Meet Our Team</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Our experienced team of compliance experts is here to guide you through every step of
							the process
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Placeholder team members */}
						{/* {[1, 2, 3].map((member) => (
							<div
								key={member}
								className='bg-white p-6 rounded-xl shadow-sm text-center'>
								<div className='relative w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4'>
									<Image
										src='/logo.png'
										alt='Team Member'
										fill
										className='rounded-lg object-cover'
									/>
								</div>
								<h3 className='text-xl font-semibold text-primary mb-2'>Emmanuel Bila {member}</h3>
								<p className='text-gray-600 mb-4'>Compliance Specialist</p>
								<p className='text-sm text-gray-500'>
									Expert in ICASA and NRCS regulatory requirements with years of industry
									experience.
								</p>
							</div>
						))} */}
					</div>

					<div className='text-center mt-12'>
						<p className='text-gray-600 mb-6'>
							More team members will be added here as the company grows.
						</p>
						<a
							href='/contact'
							className='bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors duration-200 inline-flex items-center'>
							Get to Know Us
							<ArrowRight className='h-4 w-4 ml-2' />
						</a>
					</div>
				</div>
			</section> */}
````

## File: apps/client/app/api/revalidate/route.ts
````typescript
import type {
  RevalidationMode,
  RevalidationRequest,
} from "@bilacert/supabase/cache";
import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

type RevalidationPayload = RevalidationRequest & {
  tag?: string;
  path?: string;
};

function stringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is string => typeof item === "string" && item.length > 0,
  );
}

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATION_SECRET;

  if (!secret) {
    return NextResponse.json(
      { message: "Revalidation secret not configured" },
      { status: 500 },
    );
  }

  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = (await request
    .json()
    .catch(() => null)) as RevalidationPayload | null;

  if (!body) {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const tags = [
    ...stringList(body.tags),
    ...(typeof body.tag === "string" && body.tag ? [body.tag] : []),
  ];
  const paths = [
    ...stringList(body.paths),
    ...(typeof body.path === "string" && body.path ? [body.path] : []),
  ].filter((path) => path.startsWith("/"));
  const uniqueTags = [...new Set(tags)];
  const uniquePaths = [...new Set(paths)];
  const mode: RevalidationMode =
    body.mode === "immediate" ? "immediate" : "max";

  if (uniqueTags.length === 0 && uniquePaths.length === 0) {
    return NextResponse.json(
      { message: "At least one tag or path is required" },
      { status: 400 },
    );
  }

  for (const tag of uniqueTags) {
    if (mode === "immediate") {
      revalidateTag(tag, { expire: 0 });
    } else {
      revalidateTag(tag, "max");
    }
  }

  for (const path of uniquePaths) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    tags: uniqueTags,
    paths: uniquePaths,
    mode,
    now: Date.now(),
  });
}
````

## File: apps/client/app/contact/page.tsx
````typescript
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bilacert for expert ICASA and NRCS compliance guidance. Call 075 430 4433 or email info@bilacert.co.za for a free consultation.",
  keywords: [
    "contact Bilacert",
    "ICASA compliance consultation",
    "NRCS LOA consultation",
    "compliance expert South Africa",
    "regulatory approval consultation",
    "free compliance consultation",
  ],
  openGraph: {
    title: "Contact Bilacert - Get Expert Compliance Guidance",
    description:
      "Get in touch with Bilacert for expert ICASA and NRCS compliance guidance. Call 075 430 4433 or email info@bilacert.co.za for a free consultation.",
    url: "https://bilacert.co.za/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
````

## File: apps/client/app/faq/FAQContent.tsx
````typescript
"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import StructuredData from "@/components/StructuredData";

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is Bilacert and what services do you provide?",
          answer:
            "Bilacert is a specialized compliance consultancy that simplifies ICASA and NRCS LOA approvals for South African businesses. We provide expert guidance for type approvals, licensing, and regulatory compliance across telecommunications and electronic communications sectors.",
        },
        {
          question: "How long does the compliance process typically take?",
          answer:
            "Processing times vary by service type. ICASA type approvals typically take 30 Days, NRCS LOA applications also take 30 - 90 working days, while licensing applications can take 30-60 working days. We work to expedite these processes and keep you informed throughout.",
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer:
            "Yes, we work with businesses of all sizes, from startups and SMEs to large corporations. Our services are tailored to meet the specific needs and budgets of each client, ensuring everyone can access professional compliance support.",
        },
      ],
    },
    {
      title: "ICASA Type Approvals",
      questions: [
        {
          question: "What types of devices require ICASA type approval?",
          answer:
            "All telecommunications and radio frequency devices require ICASA type approval before being sold or used in South Africa. This includes wireless routers, mobile phones, radio equipment, Bluetooth devices, and other electronic communication equipment.",
        },
        {
          question:
            "What is the difference between Standard and Simplified Type Approval?",
          answer:
            "Standard Type approval is required for any equipment that has not been type approved before by the Authority. Simplified Type Approval is required for equipment that has already obtained Type approval from the Authority. A representative sample may be required for further evaluation.",
        },
        {
          question: "Can you help with both tested and untested approvals?",
          answer:
            "Yes, we guide clients through the decision-making process for both tested and untested approvals. We help determine which approach is most suitable for your product and manage the entire application process.",
        },
      ],
    },
    {
      title: "Type Approval Basics",
      questions: [
        {
          question: "What is Type Approval?",
          answer:
            "A process by which Equipment or a device or system is authorized by the Authority to be used in South Africa or imported into South Africa and involves verification of the Equipment compliance with the applicable standards and other regulatory requirements.",
        },
      ],
    },
    {
      title: "NRCS LOA Applications",
      questions: [
        {
          question: "What products require an NRCS LOA?",
          answer:
            "Electrical and electronic products specified under NRCS regulations require a Letter of Authority (LOA) before entering the South African market. This includes household appliances, lighting products, electrical equipment, and other regulated products.",
        },
        {
          question: "What documentation is required for NRCS LOA applications?",
          answer:
            "Required documentation includes technical specifications, test reports from accredited laboratories, product photographs, user manuals, and compliance certificates. We help compile and review all necessary documentation to ensure accuracy.",
        },
        {
          question: "Do you coordinate testing for NRCS compliance?",
          answer:
            "Yes, we coordinate with accredited testing facilities when laboratory testing is required for NRCS compliance. We ensure all testing meets NRCS requirements and is completed efficiently.",
        },
      ],
    },
    {
      title: "Licensing Services",
      questions: [
        {
          question: "Who needs a Radio Dealer License?",
          answer:
            "Any business that sells, distributes, or supplies radio communication equipment in South Africa must hold a valid Radio Dealer License from ICASA. This includes retailers, importers, and distributors of radio equipment.",
        },
        {
          question: "What is the difference between ECS and ECNS licenses?",
          answer:
            "An ECS (Electronic Communications Service) license allows businesses to provide electronic communication services without owning infrastructure. An ECNS (Electronic Communications Network Service) license allows businesses to build and operate network infrastructure.",
        },
        {
          question: "Do all businesses need ECS/ECNS licenses?",
          answer:
            "Not all businesses need these licenses. Some may qualify for exemptions depending on their business model and services provided. We assess your business to determine if you need a license or qualify for an exemption.",
        },
        {
          question: "What is a VHF radio license and who needs one?",
          answer:
            "A VHF radio license is required for marine vessels using VHF radios for communication. This includes ski boats, yachts, commercial vessels, and recreational watercraft. We help vessel owners obtain the necessary licenses for legal operation.",
        },
      ],
    },
    {
      title: "Pricing and Process",
      questions: [
        {
          question: "How do you determine pricing for your services?",
          answer:
            "Our pricing is based on the complexity of the application, required documentation, testing needs, and level of support required. We offer flexible plans from basic consultation to full end-to-end service packages.",
        },
        {
          question: "What is included in your service packages?",
          answer:
            "Our service packages include consultation, documentation preparation, application submission, regulatory liaison, progress tracking, and ongoing compliance support. Premium packages also include testing coordination and priority processing.",
        },
        {
          question: "Do you offer ongoing compliance support?",
          answer:
            "Yes, we provide ongoing compliance support including license renewals, amendments, regulatory updates, and compliance monitoring to ensure your business remains compliant with changing regulations.",
        },
        {
          question: "What happens if my application is rejected?",
          answer:
            "If an application is rejected, we work closely with the regulatory authority to address any issues, update documentation as needed, and resubmit the application. We minimize delays and ensure successful approval.",
        },
      ],
    },
  ];

  // Prepare FAQ data for structured data
  const faqData = {
    questions: faqCategories.flatMap((category) =>
      category.questions.map((q) => ({
        question: q.question,
        answer: q.answer,
      })),
    ),
  };

  return (
    <div className="min-h-screen">
      <StructuredData type="FAQ" data={faqData} />
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <Image
          src="/herosetion/FAQ.jpg"
          alt="Frequently Asked Questions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find answers to common questions about ICASA and NRCS compliance,
              type approvals, licensing, and regulatory requirements in South
              Africa.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="bg-secondary-gray px-6 py-4">
                  <h2 className="text-2xl font-bold text-primary">
                    {category.title}
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <div
                        key={item.question}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-lg font-medium text-primary pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-accent flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-accent flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our compliance
            experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="tel:0754304433"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Call 075 430 4433
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
````

## File: apps/client/app/faq/page.tsx
````typescript
import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about ICASA and NRCS compliance, type approvals, licensing, and regulatory requirements in South Africa.",
  keywords: [
    "ICASA FAQ",
    "NRCS LOA questions",
    "compliance FAQ South Africa",
    "type approval questions",
    "licensing FAQ",
    "regulatory compliance questions",
    "ICASA NRCS help",
  ],
  openGraph: {
    title: "FAQ - ICASA & NRCS Compliance Questions Answered",
    description:
      "Find answers to common questions about ICASA and NRCS compliance, type approvals, licensing, and regulatory requirements in South Africa.",
    url: "https://bilacert.co.za/faq",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za/faq",
  },
};

export default function FAQPage() {
  return <FAQContent />;
}
````

## File: apps/client/app/forms/class-ecs-ecns-licensing/ClientPage.tsx
````typescript
"use client";

import Image from "next/image";
import Link from "next/link";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/lib/supabase-client";

// Define the type for the form state
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  message: string;
}

// Define the type for the submission status
type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function ClassEcsEcnsLicensingPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceType: "Class ECS/ECNS Licensing",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    setFormError(null);

    try {
      const { error } = await supabase.from("form_submissions").insert([
        {
          id: uuidv4(),
          form_type: "class-ecs-ecns",
          service_name: formData.serviceType,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          details: { message: formData.message },
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmissionStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceType: "Class ECS/ECNS Licensing",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setFormError(
        "There was an error submitting your form. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <Image
            className="mx-auto h-12 w-auto"
            src="/logo.png"
            alt="Bilacert"
            width={100}
            height={100}
          />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Class ECS/ECNS Licensing Application
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Fill out the form below to begin the process.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {submissionStatus === "success" ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Submission Successful!
              </h3>
              <p className="text-gray-700">
                Thank you for your application. We will review your information
                and get back to you shortly.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name (optional)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>
              </div>

              {formError && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        {formError}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  {submissionStatus === "submitting"
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: apps/client/app/forms/radio-dealer-licensing/ClientPage.tsx
````typescript
"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import Link from "next/link";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Define the type for the form state
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  message: string;
}

// Define the type for the submission status
type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function RadioDealerLicensingForm() {
  const supabase = createSupabaseBrowserClient();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceType: "Radio Dealer Licensing",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    setFormError(null);

    try {
      const { error } = await supabase.from("form_submissions").insert([
        {
          id: uuidv4(),
          form_type: "radio-dealer",
          service_name: formData.serviceType,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          details: { message: formData.message },
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmissionStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceType: "Radio Dealer Licensing",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setFormError(
        "There was an error submitting your form. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Bilacert" />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Radio Dealer Licensing Application
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Fill out the form below to begin the process.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {submissionStatus === "success" ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Submission Successful!
              </h3>
              <p className="text-gray-700">
                Thank you for your application. We will review your information
                and get back to you shortly.
              </p>
              <Link href="/">
                <span className="mt-6 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors">
                  Back to Home
                </span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name (optional)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>
              </div>

              {formError && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        {formError}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  {submissionStatus === "submitting"
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: apps/client/app/forms/ski-boat-vhf-licensing/ClientPage.tsx
````typescript
"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import Link from "next/link";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Define the type for the form state
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  message: string;
}

// Define the type for the submission status
type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function SkiBoatVhfLicensingForm() {
  const supabase = createSupabaseBrowserClient();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceType: "Ski Boat VHF Licensing",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    setFormError(null);

    try {
      const { error } = await supabase.from("form_submissions").insert([
        {
          id: uuidv4(),
          form_type: "ski-boat-vhf",
          service_name: formData.serviceType,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          details: { message: formData.message },
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmissionStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceType: "Ski Boat VHF Licensing",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setFormError(
        "There was an error submitting your form. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Bilacert" />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Ski Boat VHF Licensing Application
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Fill out the form below to begin the process.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {submissionStatus === "success" ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Submission Successful!
              </h3>
              <p className="text-gray-700">
                Thank you for your application. We will review your information
                and get back to you shortly.
              </p>
              <Link href="/">
                <span className="mt-6 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors">
                  Back to Home
                </span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name (optional)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>
              </div>

              {formError && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        {formError}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  {submissionStatus === "submitting"
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: apps/client/app/globals.css
````css
@import "tailwindcss";
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'); */

:root {
  /* Bilacert Color Palette */
  --primary-blue: #0a2b4c;
  --primary-blue-light: #1a4a6b;
  --secondary-white: #ffffff;
  --secondary-gray: #f8f9fa;
  --accent-orange: #f2994a;
  --accent-orange-light: #f4b366;
  --text-dark: #1a1a1a;
  --text-gray: #6b7280;
  --text-light: #9ca3af;

  /* Background and foreground */
  --background: var(--secondary-white);
  --foreground: var(--text-dark);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "Fira Code", monospace;

  /* Custom Bilacert colors */
  --color-primary: var(--primary-blue);
  --color-primary-light: var(--primary-blue-light);
  --color-secondary: var(--secondary-white);
  --color-secondary-gray: var(--secondary-gray);
  --color-accent: var(--accent-orange);
  --color-accent-light: var(--accent-orange-light);
  --color-text-dark: var(--text-dark);
  --color-text-gray: var(--text-gray);
  --color-text-light: var(--text-light);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom utility classes */
.text-primary {
  color: var(--primary-blue);
}

.bg-primary {
  background-color: var(--primary-blue);
}

.text-accent {
  color: var(--accent-orange);
}

.bg-accent {
  background-color: var(--accent-orange);
}

.bg-secondary-gray {
  background-color: var(--secondary-gray);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid var(--accent-orange);
  outline-offset: 2px;
}

/* Button hover effects */
.btn-primary {
  background-color: var(--primary-blue);
  color: white;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--primary-blue-light);
  transform: translateY(-1px);
}

.btn-accent {
  background-color: var(--accent-orange);
  color: white;
  transition: all 0.3s ease;
}

.btn-accent:hover {
  background-color: var(--accent-orange-light);
  transform: translateY(-1px);
}
````

## File: apps/client/app/services/[serviceId]/form/page.tsx
````typescript
import ServiceApplicationForm from "./ServiceApplicationForm";

export default function ServiceFormPage() {
  return <ServiceApplicationForm />;
}
````

## File: apps/client/components/service/CTASection.tsx
````typescript
import Link from "next/link";

interface CTASectionProps {
  heading: string;
  description: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
}

export function CTASection({
  heading,
  description,
  primaryCTA,
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">{heading}</h2>
        <p className="text-xl mb-8 text-gray-200">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1"
          >
            {primaryCTA.label}
          </Link>
          <Link
            href={secondaryCTA.href}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200"
          >
            {secondaryCTA.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
````

## File: apps/client/components/service/PricingPlans.tsx
````typescript
import Link from "next/link";
import { getIcon } from "@/lib/services-config";

interface PricingPlansProps {
  title: string;
  subtitle: string;
  plans: Array<{
    title: string;
    description: string;
    features: string[];
    price: string;
    popular: boolean;
  }>;
  formPath: string;
}

export function PricingPlans({
  title,
  subtitle,
  plans,
  formPath,
}: PricingPlansProps) {
  const CheckCircleIcon = getIcon("CheckCircle");

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-sm relative ${
                plan.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-primary mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="text-3xl font-bold text-primary mb-6">
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircleIcon className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={formPath}
                className={`w-full px-4 py-3 rounded-lg font-medium text-center transition-colors duration-200 ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent-light"
                    : "bg-primary text-white hover:bg-primary-light"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
````

## File: apps/client/components/service/ProcessSteps.tsx
````typescript
interface ProcessStepsProps {
  title: string;
  subtitle: string;
  steps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  bgColor?: string;
}

export function ProcessSteps({
  title,
  subtitle,
  steps,
  bgColor = "bg-secondary-gray",
}: ProcessStepsProps) {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
````

## File: apps/client/components/service/ServicesGrid.tsx
````typescript
interface ServicesGridProps {
  title: string;
  subtitle: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  bgColor?: string;
}

import { getIcon } from "@/lib/services-config";

export function ServicesGrid({
  title,
  subtitle,
  items,
  bgColor = "bg-secondary-gray",
}: ServicesGridProps) {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
````

## File: apps/client/components/service/SuccessStory.tsx
````typescript
interface SuccessStoryProps {
  scenario: string;
  challenge: string;
  solution: string;
  result: string;
}

export function SuccessStory({
  scenario,
  challenge,
  solution,
  result,
}: SuccessStoryProps) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Success Story
          </h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-600">
              <strong>Scenario:</strong> {scenario}
            </p>
            <p className="text-gray-600">
              <strong>Challenge:</strong> {challenge}
            </p>
            <p className="text-gray-600">
              <strong>Solution:</strong> {solution}
            </p>
            <p className="text-gray-600">
              <strong>Result:</strong> {result}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
````

## File: apps/client/components/service/WhatIsSection.tsx
````typescript
import { getIcon } from "@/lib/services-config";

interface WhatIsSectionProps {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  checkpoints: string[];
  sideContent?: "licenseTypes" | "benefitsBox";
  licenseTypes?: Array<{ title: string; description: string; icon: string }>;
  benefits?: Array<{ icon: string; title: string; description: string }>;
}

export function WhatIsSection({
  title,
  firstParagraph,
  secondParagraph,
  checkpoints,
  sideContent,
  licenseTypes,
  benefits,
}: WhatIsSectionProps) {
  const CheckCircleIcon = getIcon("CheckCircle");

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{firstParagraph}</p>
            <p className="text-lg text-gray-600 mb-8">{secondParagraph}</p>
            <div className="space-y-4">
              {checkpoints.map((checkpoint, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-accent" />
                  <span className="text-gray-700">{checkpoint}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary-gray p-8 rounded-2xl">
            {sideContent === "licenseTypes" && licenseTypes ? (
              <>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  License Types
                </h3>
                <div className="space-y-6">
                  {licenseTypes.map((type, index) => {
                    const Icon = getIcon(type.icon);
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-accent p-2 rounded-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {type.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : sideContent === "benefitsBox" && benefits ? (
              <>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Why Choose Our Service?
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = getIcon(benefit.icon);
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-accent p-2 rounded-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
````

## File: apps/client/components/StructuredData.tsx
````typescript
import Script from "next/script";

interface StructuredDataProps {
  type: "Organization" | "Service" | "FAQ" | "BreadcrumbList";
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Bilacert (Pty) Ltd",
          alternateName: "Bilacert",
          url: "https://bilacert.co.za",
          logo: "https://bilacert.co.za/logo.png",
          description:
            "Bilacert simplifies ICASA and NRCS LOA compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance.",
          address: {
            "@type": "PostalAddress",
            addressCountry: "ZA",
            addressRegion: "South Africa",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+27-75-430-4433",
            contactType: "customer service",
            email: "info@bilacert.co.za",
          },
          sameAs: ["https://bilacert.co.za"],
          foundingDate: "2024",
          numberOfEmployees: "1-10",
          industry: "Compliance Consulting",
          serviceArea: {
            "@type": "Country",
            name: "South Africa",
          },
        };

      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "Bilacert (Pty) Ltd",
            url: "https://bilacert.co.za",
          },
          serviceType: data.serviceType,
          areaServed: {
            "@type": "Country",
            name: "South Africa",
          },
          offers: {
            "@type": "Offer",
            price: data.price,
            priceCurrency: "ZAR",
            availability: "https://schema.org/InStock",
          },
        };

      case "FAQ":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (
            data.questions as Array<{ question: string; answer: string }>
          ).map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: (
            data.items as Array<{ name: string; url: string }>
          ).map((item, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      default:
        return {};
    }
  };

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
}
````

## File: apps/client/doc/default.js.md
````markdown
# default.js
@doc-version: 16.1.6
@last-updated: 2025-10-09


The `default.js` file is used to render a fallback within [Parallel Routes](/docs/app/api-reference/file-conventions/parallel-routes.md) when Next.js cannot recover a [slot's](/docs/app/api-reference/file-conventions/parallel-routes.md#slots) active state after a full-page load.

During [soft navigation](/docs/app/getting-started/linking-and-navigating.md#client-side-transitions), Next.js keeps track of the active *state* (subpage) for each slot. However, for hard navigations (full-page load), Next.js cannot recover the active state. In this case, a `default.js` file can be rendered for subpages that don't match the current URL.

Consider the following folder structure. The `@team` slot has a `settings` page, but `@analytics` does not.

![Parallel Routes unmatched routes](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/parallel-routes-unmatched-routes.png)

When navigating to `/settings`, the `@team` slot will render the `settings` page while maintaining the currently active page for the `@analytics` slot.

On refresh, Next.js will render a `default.js` for `@analytics`. If `default.js` doesn't exist, an error is returned for named slots (`@team`, `@analytics`, etc) and requires you to define a `default.js` in order to continue. If you want to preserve the old behavior of returning a 404 in these situations, you can create a `default.js` that contains:

```tsx filename="app/@team/default.js"
import { notFound } from 'next/navigation'

export default function Default() {
  notFound()
}
```

Additionally, since `children` is an implicit slot, you also need to create a `default.js` file to render a fallback for `children` when Next.js cannot recover the active state of the parent page. If you don't create a `default.js` for the `children` slot, it will return a 404 page for the route.

## Reference

### `params` (optional)

A promise that resolves to an object containing the [dynamic route parameters](/docs/app/api-reference/file-conventions/dynamic-routes.md) from the root segment down to the slot's subpages. For example:

```tsx filename="app/[artist]/@sidebar/default.js" switcher
export default async function Default({
  params,
}: {
  params: Promise<{ artist: string }>
}) {
  const { artist } = await params
}
```

```jsx filename="app/[artist]/@sidebar/default.js" switcher
export default async function Default({ params }) {
  const { artist } = await params
}
```

| Example                                    | URL          | `params`                                     |
| ------------------------------------------ | ------------ | -------------------------------------------- |
| `app/[artist]/@sidebar/default.js`         | `/zack`      | `Promise<{ artist: 'zack' }>`                |
| `app/[artist]/[album]/@sidebar/default.js` | `/zack/next` | `Promise<{ artist: 'zack', album: 'next' }>` |

* Since the `params` prop is a promise. You must use `async/await` or React's [`use`](https://react.dev/reference/react/use) function to access the values.
  * In version 14 and earlier, `params` was a synchronous prop. To help with backwards compatibility, you can still access it synchronously in Next.js 15, but this behavior will be deprecated in the future.
## Learn more about Parallel Routes- [Parallel Routes](/docs/app/api-reference/file-conventions/parallel-routes.md)
  - Simultaneously render one or more pages in the same view that can be navigated independently. A pattern for highly dynamic applications.
````

## File: apps/client/doc/DYNAMIC_SERVICES_SYSTEM.md
````markdown
# Dynamic Services System Documentation

## Overview

The Bilacert services pages have been refactored from 6 individual, repetitive page files (~2,580 lines) into a single dynamic system (~900 lines total) with 79% code reduction while maintaining 100% feature parity and identical functionality.

## Architecture

### File Structure

```
src/
├── lib/
│   └── services-config.ts          # Centralized service data
├── components/service/
│   ├── ServiceHero.tsx             # Hero section component
│   ├── WhatIsSection.tsx           # "What is X" section
│   ├── ServicesGrid.tsx            # Services offerings grid
│   ├── PricingPlans.tsx            # Pricing plans component
│   ├── ProcessSteps.tsx            # 5-step process component
│   ├── SuccessStory.tsx            # Success story component
│   ├── CTASection.tsx              # Call-to-action section
│   └── index.ts                    # Barrel export
└── app/
    └── services/
        ├── page.tsx                # Services listing page
        └── [serviceId]/
            └── page.tsx            # Dynamic service detail page
```

## Components

### 1. **ServiceHero** (`ServiceHero.tsx`)
Renders the hero section with title, subtitle, icon, background image, stats, and CTAs.

**Props:**
- `title: string` - Service title
- `subtitle: string` - Service subtitle
- `iconName: string` - Icon identifier (e.g., 'Shield', 'Award')
- `imageSrc: string` - Hero background image path
- `stats: Array<{ title, description }>` - Three hero statistics
- `formPath: string` - Path to service form
- `phone: string` - Phone number

**Output:**
- Hero section with background image overlay
- Stats backdrop with icons and descriptions
- Two CTAs: "Get Free Consultation" and "Call"

---

### 2. **WhatIsSection** (`WhatIsSection.tsx`)
Renders the "What is X" section with side content variants.

**Props:**
- `title: string` - Section title
- `firstParagraph: string` - Main explanation
- `secondParagraph: string` - Additional context
- `checkpoints: string[]` - Three checkpoint items
- `sideContent?: 'licenseTypes' | 'benefitsBox'` - Side content type
- `licenseTypes?: Array<{ title, description, icon }>` - License types (for ECS/ECNS)
- `benefits?: Array<{ icon, title, description }>` - Benefits list

**Output:**
- Left column: Title, paragraphs, checkpoints
- Right column: License types grid OR benefits list

---

### 3. **ServicesGrid** (`ServicesGrid.tsx`)
Renders a 4-column service offerings grid.

**Props:**
- `title: string` - Section title
- `subtitle: string` - Section subtitle
- `items: Array<{ icon, title, description }>` - 4 service items
- `bgColor?: string` - Background color class (default: 'bg-secondary-gray')

**Output:**
- Centered header with title and subtitle
- 4-column responsive grid with icon, title, and description

---

### 4. **PricingPlans** (`PricingPlans.tsx`)
Renders a 3-column pricing plans section.

**Props:**
- `title: string` - Section title
- `subtitle: string` - Section subtitle
- `plans: Array<{ title, description, features, price, popular }>` - Pricing plans
- `formPath: string` - Link to form for "Get Started" button

**Output:**
- 3-column card layout
- "Most Popular" badge for featured plan
- Feature list with checkmarks
- Price display
- CTA button

---

### 5. **ProcessSteps** (`ProcessSteps.tsx`)
Renders a 5-step process section.

**Props:**
- `title: string` - Section title
- `subtitle: string` - Section subtitle
- `steps: Array<{ step, title, description }>` - Process steps
- `bgColor?: string` - Background color class (default: 'bg-secondary-gray')

**Output:**
- 5 columns with numbered circles
- Step title and description under each number

---

### 6. **SuccessStory** (`SuccessStory.tsx`)
Renders a success story case study.

**Props:**
- `scenario: string` - Business scenario
- `challenge: string` - Challenge faced
- `solution: string` - Solution provided
- `result: string` - Results achieved

**Output:**
- Centered card with bold labels and descriptive text

---

### 7. **CTASection** (`CTASection.tsx`)
Renders a gradient call-to-action section.

**Props:**
- `heading: string` - CTA heading
- `description: string` - CTA description
- `primaryCTA: { label, href }` - Primary button
- `secondaryCTA: { label, href }` - Secondary button

**Output:**
- Gradient background (primary to primary-light)
- Heading and description
- Two CTAs: primary (filled) and secondary (outline)

---

## Services Configuration

### File: `src/lib/services-config.ts`

Contains complete configuration for all 6 services:

```typescript
export const servicesConfig: Record<string, ServiceConfig> = {
  'class-ecs-ecns-licensing': { /* config */ },
  'icasa-type-approvals': { /* config */ },
  'license-exemptions': { /* config */ },
  'nrcs-loa-applications': { /* config */ },
  'radio-dealer-licensing': { /* config */ },
  'ski-boat-vhf-licensing': { /* config */ },
};
```

**ServiceConfig Structure:**
```typescript
interface ServiceConfig {
  id: string;
  title: string;
  hero: { title, subtitle, icon, image };
  processingTime: string;
  heroStats: HeroStat[];
  servicePlans: ServicePlan[];
  processSteps: ProcessStep[];
  benefitsBox: Benefit[];
  whatIsSection: WhatIsSection;
  licenseTypes?: LicenseType[];  // Only for ECS/ECNS
  successStory: SuccessStory;
  ctaHeading: string;
  metadata: { title, description, keywords, url };
  formPath: string;
  phone: string;
}
```

**Helper Functions:**
- `getServiceConfig(serviceId: string): ServiceConfig | null` - Fetch single service
- `getAllServiceIds(): string[]` - Get all service IDs
- `getIcon(iconName: string)` - Get icon component by name

---

## Pages

### 1. **Services Listing** (`src/app/services/page.tsx`)

Displays a grid of all 6 services as cards.

**Features:**
- Responsive 3-column grid
- Service card with icon, title, subtitle, processing time
- Hover effects (border highlight, shadow, text color)
- "Learn More" link with arrow icon
- CTA section for inquiries

**Route:** `/services`

---

### 2. **Dynamic Service Detail** (`src/app/services/[serviceId]/page.tsx`)

Renders the complete service detail page for any service ID.

**Features:**
- Dynamic metadata generation from config
- Static generation with `generateStaticParams()`
- Renders all components in order:
  1. ServiceHero
  2. WhatIsSection
  3. ServicesGrid (4 offerings from first 3 plans + generic)
  4. PricingPlans
  5. ProcessSteps
  6. SuccessStory
  7. CTASection

**Routes:**
- `/services/class-ecs-ecns-licensing`
- `/services/icasa-type-approvals`
- `/services/license-exemptions`
- `/services/nrcs-loa-applications`
- `/services/radio-dealer-licensing`
- `/services/ski-boat-vhf-licensing`

**Dynamic Metadata:**
- Title, description, keywords from config
- OpenGraph tags
- Canonical URLs

---

## Usage

### Adding a New Service

1. **Add to `services-config.ts`:**
```typescript
export const servicesConfig: Record<string, ServiceConfig> = {
  // ... existing services
  'new-service-id': {
    id: 'new-service-id',
    title: 'New Service Title',
    hero: { /* ... */ },
    // ... rest of config
  },
};
```

2. **Automatic Generation:**
   - `/services/new-service-id` route automatically works
   - Metadata auto-generated
   - All components automatically render

### Customizing a Service

Edit the service configuration in `services-config.ts`:

```typescript
'icasa-type-approvals': {
  // Update any field to change behavior
  processingTime: '40 Days', // changed from 30
  servicePlans: [ /* updated plans */ ],
  // ... etc
}
```

Changes immediately reflect on the service page.

### Modifying Component Styling

Update component files in `src/components/service/`:

```typescript
// Example: Change pricing card background
<div className='bg-white p-8 rounded-xl ...'>
//        ^^^^^^ change to 'bg-gray-50'
```

All services using that component automatically update.

---

## Refactoring Benefits

| Aspect | Before | After | Savings |
|--------|--------|-------|---------|
| **Files** | 6 individual pages | 1 dynamic page | 83% fewer files |
| **Lines of Code** | ~2,580 | ~900 | 65% reduction |
| **Duplication** | 79% repeated code | 0% duplication | Complete DRY |
| **Maintenance** | Update 6 files for changes | Update 1 config or component | 6x faster |
| **Adding Services** | Copy-paste 430-line file | Add 1 entry to config | 99% less work |
| **Bug Fixes** | Fix in 6 places | Fix in 1 place | 6x faster |
| **Testing** | 6 pages to test | 1 dynamic system + 7 components | Easier coverage |

---

## Metadata & SEO

Each service has unique metadata optimized for SEO:

```typescript
metadata: {
  title: 'Class ECS/ECNS Licensing',
  description: 'Professional ECS and ECNS licensing services...',
  keywords: ['ECS license', 'ECNS license', 'telecommunications...'],
  url: 'https://bilacert.co.za/services/class-ecs-ecns-licensing',
}
```

**Generated automatically using `generateMetadata()`:**
- Page title
- Meta description
- Open Graph tags
- Canonical URL

---

## Icon System

Icons are stored as strings in config and resolved dynamically:

```typescript
// In config
hero: { icon: 'Shield', /* ... */ }

// In component
const Icon = getIcon('Shield'); // Returns Shield component
<Icon className='h-8 w-8 text-accent' />
```

**Available Icons:**
- Shield
- Award
- Radio
- FileText
- Headphones
- Ship
- CheckCircle
- Clock
- Users
- Zap

---

## Performance

**Optimizations:**
- Static generation with `generateStaticParams()` for all 6 service routes
- No database queries during build/runtime
- All data embedded in config
- Icon imports optimized (globally imported once)
- Component-level code splitting

---

## Migration from Old System

The old individual service pages are **fully replaced**. If you need to reference them:

**Removed files:**
- `src/app/services/class-ecs-ecns-licensing/page.tsx`
- `src/app/services/icasa-type-approvals/page.tsx`
- `src/app/services/license-exemptions/page.tsx`
- `src/app/services/nrcs-loa-applications/page.tsx`
- `src/app/services/radio-dealer-licensing/page.tsx`
- `src/app/services/ski-boat-vhf-licensing/page.tsx`

**Replaced by:**
- `src/lib/services-config.ts` (configuration)
- `src/components/service/*` (7 components)
- `src/app/services/[serviceId]/page.tsx` (dynamic page)

All routes remain the same. No redirects needed.

---

## Troubleshooting

### Issue: Service page not rendering

**Solution:** Check that service ID in URL matches key in `services-config.ts`

### Issue: Icon not showing

**Solution:** Verify icon name is in ICON_MAP in `services-config.ts`

### Issue: Metadata not updating

**Solution:** Rebuild project - metadata is generated at build time

### Issue: Form link broken

**Solution:** Update `formPath` in service config to correct path

---

## Future Enhancements

Potential improvements:

1. **Database-driven config** - Move config to Supabase for dynamic updates
2. **Service variations** - Add A/B testing for different service configurations
3. **Analytics** - Track which sections get most engagement
4. **Internationalization** - Multi-language support with i18n
5. **Dynamic pricing** - Real-time pricing updates from database
6. **Service templates** - Reusable templates for different industry patterns

---

## Summary

This refactored system provides:
- ✅ **65% code reduction** - From 2,580 to ~900 lines
- ✅ **100% feature parity** - All original functionality preserved
- ✅ **Complete DRY principle** - No repeated code
- ✅ **Single source of truth** - Config file drives all pages
- ✅ **Easy maintenance** - Update one place, affects all services
- ✅ **Simple expansion** - Add new services with minimal effort
- ✅ **Improved SEO** - Unique metadata for each service
- ✅ **Static generation** - Fast page loads with no runtime overhead
````

## File: apps/client/doc/dynamic-route-segments.md
````markdown
# Dynamic Route Segments
@doc-version: 16.1.6
@last-updated: 2025-12-20


When you don't know the exact route segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.

## Convention

A Dynamic Segment can be created by wrapping a folder's name in square brackets: `[folderName]`. For example, a blog could include the following route `app/blog/[slug]/page.js` where `[slug]` is the Dynamic Segment for blog posts.

```tsx filename="app/blog/[slug]/page.tsx" switcher
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}
```

```jsx filename="app/blog/[slug]/page.js" switcher
export default async function Page({ params }) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}
```

Dynamic Segments are passed as the `params` prop to [`layout`](/docs/app/api-reference/file-conventions/layout.md), [`page`](/docs/app/api-reference/file-conventions/page.md), [`route`](/docs/app/api-reference/file-conventions/route.md), and [`generateMetadata`](/docs/app/api-reference/functions/generate-metadata.md#generatemetadata-function) functions.

| Route                     | Example URL | `params`        |
| ------------------------- | ----------- | --------------- |
| `app/blog/[slug]/page.js` | `/blog/a`   | `{ slug: 'a' }` |
| `app/blog/[slug]/page.js` | `/blog/b`   | `{ slug: 'b' }` |
| `app/blog/[slug]/page.js` | `/blog/c`   | `{ slug: 'c' }` |

### In Client Components

In a Client Component **page**, dynamic segments from props can be accessed using the [`use`](https://react.dev/reference/react/use) hook.

```tsx filename="app/blog/[slug]/page.tsx" switcher
'use client'
import { use } from 'react'

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)

  return (
    <div>
      <p>{slug}</p>
    </div>
  )
}
```

```jsx filename="app/blog/[slug]/page.js" switcher
'use client'
import { use } from 'react'

export default function BlogPostPage({ params }) {
  const { slug } = use(params)

  return (
    <div>
      <p>{slug}</p>
    </div>
  )
}
```

Alternatively Client Components can use the [`useParams`](/docs/app/api-reference/functions/use-params.md) hook to access the `params` anywhere in the Client Component tree.

### Catch-all Segments

Dynamic Segments can be extended to **catch-all** subsequent segments by adding an ellipsis inside the brackets `[...folderName]`.

For example, `app/shop/[...slug]/page.js` will match `/shop/clothes`, but also `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`, and so on.

| Route                        | Example URL   | `params`                    |
| ---------------------------- | ------------- | --------------------------- |
| `app/shop/[...slug]/page.js` | `/shop/a`     | `{ slug: ['a'] }`           |
| `app/shop/[...slug]/page.js` | `/shop/a/b`   | `{ slug: ['a', 'b'] }`      |
| `app/shop/[...slug]/page.js` | `/shop/a/b/c` | `{ slug: ['a', 'b', 'c'] }` |

### Optional Catch-all Segments

Catch-all Segments can be made **optional** by including the parameter in double square brackets: `[[...folderName]]`.

For example, `app/shop/[[...slug]]/page.js` will **also** match `/shop`, in addition to `/shop/clothes`, `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`.

The difference between **catch-all** and **optional catch-all** segments is that with optional, the route without the parameter is also matched (`/shop` in the example above).

| Route                          | Example URL   | `params`                    |
| ------------------------------ | ------------- | --------------------------- |
| `app/shop/[[...slug]]/page.js` | `/shop`       | `{ slug: undefined }`       |
| `app/shop/[[...slug]]/page.js` | `/shop/a`     | `{ slug: ['a'] }`           |
| `app/shop/[[...slug]]/page.js` | `/shop/a/b`   | `{ slug: ['a', 'b'] }`      |
| `app/shop/[[...slug]]/page.js` | `/shop/a/b/c` | `{ slug: ['a', 'b', 'c'] }` |

### TypeScript

When using TypeScript, you can add types for `params` depending on your configured route segment — use [`PageProps<'/route'>`](/docs/app/api-reference/file-conventions/page.md#page-props-helper), [`LayoutProps<'/route'>`](/docs/app/api-reference/file-conventions/layout.md#layout-props-helper), or [`RouteContext<'/route'>`](/docs/app/api-reference/file-conventions/route.md#route-context-helper) to type `params` in `page`, `layout`, and `route` respectively.

Route `params` values are typed as `string`, `string[]`, or `undefined` (for optional catch-all segments), because their values aren't known until runtime. Users can enter any URL into the address bar, and these broad types help ensure that your application code handles all these possible cases.

| Route                               | `params` Type Definition                 |
| ----------------------------------- | ---------------------------------------- |
| `app/blog/[slug]/page.js`           | `{ slug: string }`                       |
| `app/shop/[...slug]/page.js`        | `{ slug: string[] }`                     |
| `app/shop/[[...slug]]/page.js`      | `{ slug?: string[] }`                    |
| `app/[categoryId]/[itemId]/page.js` | `{ categoryId: string, itemId: string }` |

If you're working on a route where `params` can only have a fixed number of valid values, such as a `[locale]` param with a known set of language codes, you can use runtime validation to handle any invalid params a user may enter, and let the rest of your application work with the narrower type from your known set.

```tsx filename="/app/[locale]/page.tsx"
import { notFound } from 'next/navigation'
import type { Locale } from '@i18n/types'
import { isValidLocale } from '@i18n/utils'

function assertValidLocale(value: string): asserts value is Locale {
  if (!isValidLocale(value)) notFound()
}

export default async function Page(props: PageProps<'/[locale]'>) {
  const { locale } = await props.params // locale is typed as string
  assertValidLocale(locale)
  // locale is now typed as Locale
}
```

## Behavior

* Since the `params` prop is a promise. You must use `async`/`await` or React's use function to access the values.
  * In version 14 and earlier, `params` was a synchronous prop. To help with backwards compatibility, you can still access it synchronously in Next.js 15, but this behavior will be deprecated in the future.

### With Cache Components

When using [Cache Components](/docs/app/getting-started/cache-components.md) with dynamic route segments, how you handle params depends on whether you use [`generateStaticParams`](/docs/app/api-reference/functions/generate-static-params.md).

Without `generateStaticParams`, param values are unknown during prerendering, making params runtime data. You must wrap param access in `<Suspense>` boundaries to provide fallback UI.

With `generateStaticParams`, you provide sample param values that can be used at build time. The build process validates that dynamic content and other runtime APIs are correctly handled, then generates static HTML files for the samples. Pages rendered with runtime params are saved to disk after a successful first request.

The sections below demonstrate both patterns.

#### Without `generateStaticParams`

All params are runtime data. Param access must be wrapped by Suspense fallback UI. Next.js generates a static shell at build time, and content loads on each request.

> **Good to know**: You can also use [`loading.tsx`](/docs/app/api-reference/file-conventions/loading.md) for page-level fallback UI.

```tsx filename="app/blog/[slug]/page.tsx"
import { Suspense } from 'react'

export default function Page({ params }: PageProps<'/blog/[slug]'>) {
  return (
    <div>
      <h1>Blog Post</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {params.then(({ slug }) => (
          <Content slug={slug} />
        ))}
      </Suspense>
    </div>
  )
}

async function Content({ slug }: { slug: string }) {
  const res = await fetch(`https://api.vercel.app/blog/${slug}`)
  const post = await res.json()

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  )
}
```

#### With `generateStaticParams`

Provide params ahead of time to prerender pages at build time. You can prerender all routes or a subset depending on your needs.

During the build process, the route is executed with each sample param to collect the HTML result. If dynamic content or runtime data are accessed incorrectly, the build will fail.

```tsx filename="app/blog/[slug]/page.tsx" highlight={3-5,8,19}
import { Suspense } from 'react'

export async function generateStaticParams() {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }]
}

export default async function Page({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params

  return (
    <div>
      <h1>Blog Post</h1>
      <Content slug={slug} />
    </div>
  )
}

async function Content({ slug }: { slug: string }) {
  const post = await getPost(slug)
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  )
}

async function getPost(slug: string) {
  'use cache'
  const res = await fetch(`https://api.vercel.app/blog/${slug}`)
  return res.json()
}
```

Build-time validation only covers code paths that execute with the sample params. If your route has conditional logic that accesses runtime APIs for certain param values not in your samples, those branches won't be validated at build time:

```tsx filename="app/blog/[slug]/page.tsx"
import { cookies } from 'next/headers'

export async function generateStaticParams() {
  return [{ slug: 'public-post' }, { slug: 'hello-world' }]
}

export default async function Page({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params

  if (slug.startsWith('private-')) {
    // This branch is never executed at build time
    // Runtime requests for 'private-*' slugs will error
    return <PrivatePost slug={slug} />
  }

  return <PublicPost slug={slug} />
}

async function PrivatePost({ slug }: { slug: string }) {
  const token = (await cookies()).get('token')
  // ... fetch and render private post using token for auth
}
```

For runtime params not returned by `generateStaticParams`, validation occurs during the first request. In the example above, requests for slugs starting with `private-` will fail because `PrivatePost` accesses `cookies()` without a Suspense boundary. Other runtime params that don't hit the conditional branch will render successfully and be saved to disk for subsequent requests.

To fix this, wrap `PrivatePost` with Suspense:

```tsx filename="app/blog/[slug]/page.tsx" highlight={13-15}
import { Suspense } from 'react'
import { cookies } from 'next/headers'

export async function generateStaticParams() {
  return [{ slug: 'public-post' }, { slug: 'hello-world' }]
}

export default async function Page({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params

  if (slug.startsWith('private-')) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivatePost slug={slug} />
      </Suspense>
    )
  }

  return <PublicPost slug={slug} />
}

async function PrivatePost({ slug }: { slug: string }) {
  const token = (await cookies()).get('token')
  // ... fetch and render private post using token for auth
}
```

## Examples

### With `generateStaticParams`

The [`generateStaticParams`](/docs/app/api-reference/functions/generate-static-params.md) function can be used to [statically generate](/docs/app/guides/caching.md#static-rendering) routes at build time instead of on-demand at request time.

```tsx filename="app/blog/[slug]/page.tsx" switcher
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

```jsx filename="app/blog/[slug]/page.js" switcher
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

When using `fetch` inside the `generateStaticParams` function, the requests are [automatically deduplicated](/docs/app/guides/caching.md#request-memoization). This avoids multiple network calls for the same data Layouts, Pages, and other `generateStaticParams` functions, speeding up build time.

### Dynamic GET Route Handlers with `generateStaticParams`

`generateStaticParams` also works with dynamic [Route Handlers](/docs/app/api-reference/file-conventions/route.md) to statically generate API responses at build time:

```ts filename="app/api/posts/[id]/route.ts" switcher
export async function generateStaticParams() {
  const posts: { id: number }[] = await fetch(
    'https://api.vercel.app/blog'
  ).then((res) => res.json())

  return posts.map((post) => ({
    id: `${post.id}`,
  }))
}

export async function GET(
  request: Request,
  { params }: RouteContext<'/api/posts/[id]'>
) {
  const { id } = await params
  const res = await fetch(`https://api.vercel.app/blog/${id}`)

  if (!res.ok) {
    return Response.json({ error: 'Post not found' }, { status: 404 })
  }

  const post = await res.json()
  return Response.json(post)
}
```

```js filename="app/api/posts/[id]/route.js" switcher
export async function generateStaticParams() {
  const posts = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )

  return posts.map((post) => ({
    id: `${post.id}`,
  }))
}

export async function GET(request, { params }) {
  const { id } = await params
  const res = await fetch(`https://api.vercel.app/blog/${id}`)

  if (!res.ok) {
    return Response.json({ error: 'Post not found' }, { status: 404 })
  }

  const post = await res.json()
  return Response.json(post)
}
```

In this example, route handlers for all blog post IDs returned by `generateStaticParams` will be statically generated at build time. Requests to other IDs will be handled dynamically at request time.
## Next Steps

For more information on what to do next, we recommend the following sections

- [generateStaticParams](/docs/app/api-reference/functions/generate-static-params.md)
  - API reference for the generateStaticParams function.
````

## File: apps/client/lib/blog-data.ts
````typescript
export const blogPosts = [
  {
    id: "icasa-type-approval-requirements",
    title: "Understanding ICASA Type Approval Requirements",
    excerpt:
      "A comprehensive guide to ICASA type approval requirements for South African businesses. Learn about the different types of approvals and how to navigate the process.",
    content: `
      <p>ICASA (Independent Communications Authority of South Africa) type approval is a mandatory certification process for all electronic communication equipment before it can be sold or used in South Africa. This comprehensive guide will help you understand the requirements and navigate the process successfully.</p>
      
      <h2>What is ICASA Type Approval?</h2>
      <p>ICASA type approval ensures that electronic communication devices meet South African regulatory, technical, and safety standards. This includes telecommunications equipment, radio frequency devices, and other electronic communication products.</p>
      
      <h2>Types of ICASA Approvals</h2>
      <h3>Standard Type Approval</h3>
      <p>Required for most telecommunications and radio frequency devices. This is the most common type of approval and involves comprehensive testing and documentation.</p>
      
      <h3>Simplified Type Approval</h3>
      <p>Available for products that meet specific pre-approved conditions. This streamlined process is faster and less expensive for qualifying products.</p>
      
      <h3>Tested & Untested Approvals</h3>
      <p>We guide clients through the decision-making process, ensuring they select the right approval method based on their product specifications and requirements.</p>
      
      <h2>The Application Process</h2>
      <p>Our team handles the entire application process, from initial assessment to final approval. We ensure all documentation is complete and accurate, minimizing delays and maximizing success rates.</p>
      
      <h2>Why Choose Bilacert?</h2>
      <p>With our expertise and streamlined processes, we typically reduce approval times by 30% compared to industry average, while maintaining a 100% success rate on first-time applications.</p>
    `,
    author: "Bilacert Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "ICASA Approvals",
    featured: true,
    image: "/ICASA.png",
  },
  {
    id: "nrcs-loa-guide",
    title: "NRCS LOA: What You Need to Know",
    excerpt:
      "Everything you need to know about NRCS Letter of Authority applications. From eligibility to the application process, we cover it all.",
    content: `
      <p>The National Regulator for Compulsory Specifications (NRCS) Letter of Authority (LOA) is a critical certification for electrical and electronic products entering the South African market.</p>
      
      <h2>What is an NRCS LOA?</h2>
      <p>An NRCS LOA is a certificate that confirms your product meets South African safety and quality standards. It's required for certain electrical and electronic products before they can be imported, sold, or distributed.</p>
      
      <h2>Which Products Require an LOA?</h2>
      <p>Products that typically require an NRCS LOA include electrical appliances, electronic devices, lighting products, and other regulated electrical equipment.</p>
      
      <h2>The Application Process</h2>
      <p>Our team manages the entire LOA application process, including product assessment, documentation preparation, testing coordination, and submission to NRCS.</p>
    `,
    author: "Bilacert Team",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "NRCS Compliance",
    featured: false,
    image: "/NRCS.jpg",
  },
  {
    id: "radio-dealer-licensing-guide",
    title: "Radio Dealer Licensing Made Simple",
    excerpt:
      "Step-by-step guide to obtaining your Radio Dealer License from ICASA. Avoid common pitfalls and ensure a smooth application process.",
    content: `
      <p>Operating as a radio dealer in South Africa requires proper licensing from ICASA. This guide walks you through the complete process of obtaining your Radio Dealer License.</p>
      
      <h2>Who Needs a Radio Dealer License?</h2>
      <p>Any business or individual selling, hiring out, or manufacturing radio apparatus in South Africa must obtain this license. This includes both new and used equipment dealers.</p>
      
      <h2>License Requirements</h2>
      <p>Requirements include business registration documents, proof of address, tax clearance certificate, and compliance with technical specifications for radio equipment.</p>
      
      <h2>Application Process Timeline</h2>
      <p>The typical processing time is 4-6 weeks, but with our expert guidance, we can help expedite the process and ensure all documentation is correctly prepared.</p>
      
      <h2>Maintaining Compliance</h2>
      <p>License holders must renew annually and maintain accurate records of all radio apparatus transactions as required by ICASA regulations.</p>
    `,
    author: "Bilacert Team",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Licensing",
    featured: false,
    image: "/radio-dealer-licensing-guide.jpg",
  },
  {
    id: "ecs-ecns-licensing-explained",
    title: "ECS/ECNS Licensing Explained",
    excerpt:
      "Understanding the difference between Electronic Communications Service and Network Service licenses. Which one does your business need?",
    content: `
      <p>Understanding the difference between Electronic Communications Service (ECS) and Electronic Communications Network Service (ECNS) licenses is crucial for telecommunications providers in South Africa.</p>
      
      <h2>ECS License Overview</h2>
      <p>An ECS license allows you to provide communications services to the public using existing network infrastructure. This includes services like VoIP, internet access, and value-added network services.</p>
      
      <h2>ECNS License Overview</h2>
      <p>An ECNS license permits you to roll out and operate your own network infrastructure, including fiber optic cables, wireless networks, or satellite systems.</p>
      
      <h2>Key Differences</h2>
      <p>While ECS focuses on service provision using existing infrastructure, ECNS involves building and maintaining physical network infrastructure. Many operators require both licenses for complete operations.</p>
      
      <h2>Application Considerations</h2>
      <p>The application process involves detailed technical plans, financial viability assessments, and compliance with South Africa's electronic communications regulations.</p>
    `,
    author: "Bilacert Team",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Telecom Licensing",
    featured: false,
    image: "/ecs-ecns-licensing-explained.jpg",
  },
  {
    id: "compliance-cost-savings",
    title: "How Proper Compliance Saves Your Business Money",
    excerpt:
      "Learn how investing in proper compliance upfront can save your business thousands in penalties and avoid costly delays.",
    content: `
      <p>Investing in proper compliance measures isn't just about avoiding penalties - it's a strategic business decision that can lead to significant cost savings.</p>
      
      <h2>Avoiding Penalties and Fines</h2>
      <p>Non-compliance can result in substantial fines, product seizures, and business interruptions. Proactive compliance is always more cost-effective than reactive measures.</p>
      
      <h2>Streamlined Operations</h2>
      <p>Proper compliance processes create operational efficiencies, reduce delays in product launches, and prevent costly last-minute corrections.</p>
      
      <h2>Market Access Advantages</h2>
      <p>Compliant businesses gain faster market access, reduced time-to-market, and avoid costly storage fees and demurrage charges at ports.</p>
      
      <h2>Long-term Business Sustainability</h2>
      <p>Compliant businesses build stronger reputations, avoid legal costs, and maintain uninterrupted operations, leading to better ROI and business continuity.</p>
    `,
    author: "Bilacert Team",
    date: "2023-12-28",
    readTime: "4 min read",
    category: "Business Strategy",
    featured: false,
    image: "/compliance-cost-savings.jpg",
  },
  {
    id: "vhf-licensing-marine",
    title: "VHF Licensing for Marine Operations",
    excerpt:
      "Complete guide to VHF radio licensing for marine vessels. From recreational boats to commercial fleets, ensure your vessels are compliant.",
    content: `
      <p>VHF radio communication is essential for marine safety and operations. This guide covers the licensing requirements for marine VHF equipment in South African waters.</p>
      
      <h2>Why VHF Licensing is Mandatory</h2>
      <p>All marine vessels equipped with VHF radios must be properly licensed to ensure interference-free communication and compliance with international maritime regulations.</p>
      
      <h2>Types of Marine Licenses</h2>
      <p>Different licenses are required for recreational vessels, commercial operations, and fishing fleets. Each category has specific requirements and operational limitations.</p>
      
      <h2>Application Process</h2>
      <p>The licensing process involves equipment certification, operator qualifications, and vessel documentation. We handle the entire process from application to approval.</p>
      
      <h2>Safety Considerations</h2>
      <p>Properly licensed VHF equipment ensures access to emergency channels, weather updates, and communication with port authorities and other vessels.</p>
    `,
    author: "Bilacert Team",
    date: "2023-12-25",
    readTime: "5 min read",
    category: "Marine Compliance",
    featured: false,
    image: "/herosetion/Ski-Boat-VHF.jpg",
  },
];
````

## File: apps/client/lib/seo.ts
````typescript
import type { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  url,
  image = "/logo.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Bilacert",
}: SEOConfig): Metadata {
  const baseUrl = "https://bilacert.co.za";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "ICASA",
      "NRCS",
      "compliance",
      "South Africa",
      "regulatory approval",
      "Bilacert",
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: "Bilacert",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Bilacert",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_ZA",
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@bilacert",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      // Add other verification codes as needed
    },
  };
}

// Common SEO configurations for different page types
export const seoConfigs = {
  home: {
    title: "Bilacert - Your Compliance Partner | ICASA & NRCS Approvals",
    description:
      "Bilacert simplifies ICASA and NRCS LOA compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance.",
    keywords: [
      "ICASA type approval South Africa",
      "NRCS LOA applications",
      "radio dealer licensing",
      "ECS ECNS licensing",
      "VHF radio license",
      "compliance consultant South Africa",
    ],
    url: "/",
  },

  about: {
    title: "About Us - Bilacert Compliance Experts",
    description:
      "Learn about Bilacert, South Africa's trusted compliance partner. We simplify ICASA and NRCS approvals with our values of simplicity, clarity, efficiency, and support.",
    keywords: [
      "about Bilacert",
      "compliance consultant South Africa",
      "ICASA NRCS experts",
      "regulatory compliance team",
    ],
    url: "/about",
  },

  services: {
    title: "Our Services - ICASA & NRCS Compliance Solutions",
    description:
      "Comprehensive ICASA and NRCS compliance services including type approvals, licensing, and regulatory support. Expert guidance for South African businesses.",
    keywords: [
      "ICASA type approval services",
      "NRCS LOA applications",
      "radio dealer licensing",
      "ECS ECNS licensing services",
    ],
    url: "/services",
  },

  contact: {
    title: "Contact Us - Get Expert Compliance Guidance",
    description:
      "Get in touch with Bilacert for expert ICASA and NRCS compliance guidance. Call 075 430 4433 or email info@bilacert.co.za for a free consultation.",
    keywords: [
      "contact Bilacert",
      "ICASA compliance consultation",
      "NRCS LOA consultation",
      "free compliance consultation",
    ],
    url: "/contact",
  },

  faq: {
    title: "FAQ - ICASA & NRCS Compliance Questions Answered",
    description:
      "Find answers to common questions about ICASA and NRCS compliance, type approvals, licensing, and regulatory requirements in South Africa.",
    keywords: [
      "ICASA FAQ",
      "NRCS LOA questions",
      "compliance FAQ South Africa",
      "type approval questions",
    ],
    url: "/faq",
  },

  blog: {
    title: "Blog - ICASA & NRCS Compliance Insights",
    description:
      "Stay updated with the latest ICASA and NRCS compliance news, guides, and insights. Expert articles on type approvals, licensing, and regulatory changes in South Africa.",
    keywords: [
      "ICASA compliance blog",
      "NRCS LOA news",
      "compliance articles South Africa",
      "type approval guides",
    ],
    url: "/blog",
  },
};

// Service-specific SEO configurations
export const serviceSeoConfigs = {
  "icasa-type-approvals": {
    title: "ICASA Type Approvals - Expert Certification Services",
    description:
      "Expert ICASA type approval services for South African businesses. We handle Standard, Simplified, Tested, and Untested approvals with fast processing and comprehensive support.",
    keywords: [
      "ICASA type approval",
      "ICASA certification",
      "telecommunications approval",
      "radio frequency approval",
    ],
    url: "/services/icasa-type-approvals",
  },

  "nrcs-loa-applications": {
    title: "NRCS LOA Applications - Expert Certification Services",
    description:
      "Professional NRCS Letter of Authority (LOA) application services for South African businesses. Expert guidance for electrical and electronic product compliance.",
    keywords: [
      "NRCS LOA",
      "NRCS Letter of Authority",
      "NRCS certification",
      "electrical product approval",
    ],
    url: "/services/nrcs-loa-applications",
  },

  "radio-dealer-licensing": {
    title: "Radio Dealer Licensing - ICASA License Services",
    description:
      "Complete Radio Dealer License services for South African businesses selling radio communication equipment. Expert ICASA licensing support and compliance guidance.",
    keywords: [
      "radio dealer license",
      "ICASA radio license",
      "radio communication license",
      "two-way radio license",
    ],
    url: "/services/radio-dealer-licensing",
  },

  "class-ecs-ecns-licensing": {
    title: "Class ECS/ECNS Licensing - Telecommunications License Services",
    description:
      "Professional ECS and ECNS licensing services for South African telecommunications providers. Expert guidance for Electronic Communications Service and Network Service licenses.",
    keywords: [
      "ECS license",
      "ECNS license",
      "electronic communications service",
      "telecommunications license",
    ],
    url: "/services/class-ecs-ecns-licensing",
  },

  "license-exemptions": {
    title: "License Exemptions - ECS/ECNS Exemption Services",
    description:
      "Expert ECS/ECNS license exemption services for South African businesses. We help determine if your business qualifies for ICASA license exemptions and provide compliance documentation.",
    keywords: [
      "license exemption",
      "ECS exemption",
      "ECNS exemption",
      "ICASA exemption",
    ],
    url: "/services/license-exemptions",
  },

  "ski-boat-vhf-licensing": {
    title: "Ski Boat VHF Licensing - Marine Radio License Services",
    description:
      "Professional VHF radio licensing services for South African marine vessels including ski boats, yachts, and recreational watercraft. Expert ICASA maritime compliance support.",
    keywords: [
      "VHF radio license",
      "ski boat VHF",
      "marine radio license",
      "boat VHF license",
    ],
    url: "/services/ski-boat-vhf-licensing",
  },
};
````

## File: apps/client/lib/styles/index.css
````css
@import "tailwindcss";

/* Bilacert Design System - CSS Variables */
:root {
  /* Colors */
  --primary-blue: #0a2b4c;
  --primary-blue-light: #1a4a6b;
  --primary-blue-dark: #051829;
  --secondary-white: #ffffff;
  --secondary-gray: #f8f9fa;
  --accent-orange: #f2994a;
  --accent-orange-light: #f4b366;
  --accent-orange-dark: #e67e2d;
  --text-dark: #1a1a1a;
  --text-gray: #6b7280;
  --text-light: #9ca3af;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;

  /* Typography */
  --font-family-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-family-mono: "Fira Code", monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-default: 0.3s ease;
  --transition-fast: 0.15s ease;
  --transition-smooth: 0.5s ease-in-out;
}

/* Light mode (default) */
@supports (color: var(--primary-blue)) {
  :root {
    --background: var(--secondary-white);
    --foreground: var(--text-dark);
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --background: var(--text-dark);
    --foreground: var(--secondary-white);
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-family-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom utility classes */
.text-primary {
  color: var(--primary-blue);
}

.bg-primary {
  background-color: var(--primary-blue);
}

.text-accent {
  color: var(--accent-orange);
}

.bg-accent {
  background-color: var(--accent-orange);
}

.bg-secondary-gray {
  background-color: var(--secondary-gray);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid var(--accent-orange);
  outline-offset: 2px;
}

/* Button hover effects */
.btn-primary {
  background-color: var(--primary-blue);
  color: white;
  transition: all var(--transition-default);
}

.btn-primary:hover {
  background-color: var(--primary-blue-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-accent {
  background-color: var(--accent-orange);
  color: white;
  transition: all var(--transition-default);
}

.btn-accent:hover {
  background-color: var(--accent-orange-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: var(--secondary-gray);
  color: var(--text-dark);
  transition: all var(--transition-default);
}

.btn-secondary:hover {
  background-color: #e5e7eb;
  transform: translateY(-1px);
}

/* Link styles */
a {
  color: var(--accent-orange);
  text-decoration: none;
  transition: color var(--transition-default);
}

a:hover {
  color: var(--accent-orange-dark);
}

/* Form elements */
input,
textarea,
select {
  font-family: var(--font-family-sans);
}

input:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--accent-orange);
  outline-offset: 2px;
}

/* Responsive utilities */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 13px;
  }
}
````

## File: apps/client/postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: apps/client/public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: apps/client/public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: apps/client/public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: apps/client/public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: apps/client/public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: apps/client/README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: apps/client/tsconfig.json
````json
{
  "extends": "@bilacert/typescript-config/nextjs.json",
  "compilerOptions": {
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "types": ["node", "react", "react-dom"],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````

## File: packages/shared/src/components/Icon.tsx
````typescript
"use client";

import {
  Shield,
  CheckSquare,
  FileText,
  Radio,
  Sailboat,
  Package,
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  Users,
  FileSpreadsheet,
  type LucideProps,
  type LucideIcon,
  HelpCircle,
  Settings,
  User,
  CreditCard,
  DollarSign,
  BarChart,
  Clock,
  Book,
  Check,
  Award,
  Headphones,
  Ship,
} from "lucide-react";

export const iconMap: { [key: string]: LucideIcon } = {
  Shield,
  CheckSquare,
  FileText,
  Radio,
  Sailboat,
  Ship,
  Package,
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  Users,
  FileSpreadsheet,
  Settings,
  User,
  CreditCard,
  DollarSign,
  BarChart,
  Clock,
  Book,
  Check,
  Award,
  Headphones,
};

interface IconProps extends LucideProps {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  if (!name) {
    return <HelpCircle {...props} />;
  }
  const LucideIcon = iconMap[name.charAt(0).toUpperCase() + name.slice(1)];

  if (!LucideIcon) {
    return <HelpCircle {...props} />; // A default fallback icon for unknown names
  }

  return <LucideIcon {...props} />;
};

export default Icon;
````

## File: packages/shared/src/utils/cn.ts
````typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: packages/shared/tsconfig.json
````json
{
  "extends": "@bilacert/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
````

## File: packages/supabase/rename.sql
````sql
-- Bilacert database rename plan
--
-- Purpose:
-- Track the planned snake_case -> camelCase database column migration for Bilacert.
--
-- IMPORTANT:
-- This file is a migration plan, not an automatically safe production migration.
-- Review every statement before running it against a live database.
-- After applying these renames, regenerate Supabase types with:
--
--   pnpm supabase:types
--
-- Then update all application code, queries, mutations, schemas, forms, and domain types
-- to use the new camelCase column names.
--
-- Recommended workflow:
-- 1. Apply these renames in a development Supabase project first.
-- 2. Regenerate packages/supabase/src/supabaseType.ts.
-- 3. Update all application code from snake_case to camelCase.
-- 4. Run pnpm lint:fix and pnpm lint.
-- 5. Deploy to Vercel and inspect deployment logs.
-- 6. Only then apply to production.

BEGIN;

-- public.users
ALTER TABLE public.users RENAME COLUMN first_name TO firstName;
ALTER TABLE public.users RENAME COLUMN last_name TO lastName;
ALTER TABLE public.users RENAME COLUMN profile_image TO profileImage;
ALTER TABLE public.users RENAME COLUMN created_by TO createdBy;
ALTER TABLE public.users RENAME COLUMN updated_by TO updatedBy;
ALTER TABLE public.users RENAME COLUMN is_active TO isActive;
ALTER TABLE public.users RENAME COLUMN created_at TO createdAt;
ALTER TABLE public.users RENAME COLUMN updated_at TO updatedAt;

-- public.form_submissions
ALTER TABLE public.form_submissions RENAME COLUMN form_type TO formType;
ALTER TABLE public.form_submissions RENAME COLUMN service_id TO serviceId;
ALTER TABLE public.form_submissions RENAME COLUMN service_name TO serviceName;
ALTER TABLE public.form_submissions RENAME COLUMN full_name TO fullName;
ALTER TABLE public.form_submissions RENAME COLUMN internal_notes TO internalNotes;
ALTER TABLE public.form_submissions RENAME COLUMN assigned_to TO assignedTo;
ALTER TABLE public.form_submissions RENAME COLUMN completed_at TO completedAt;
ALTER TABLE public.form_submissions RENAME COLUMN created_at TO createdAt;
ALTER TABLE public.form_submissions RENAME COLUMN updated_at TO updatedAt;

-- public.contacts
ALTER TABLE public.contacts RENAME COLUMN submitted_at TO submittedAt;

-- public.services
ALTER TABLE public.services RENAME COLUMN updated_at TO updatedAt;
ALTER TABLE public.services RENAME COLUMN short_description TO shortDescription;
ALTER TABLE public.services RENAME COLUMN order_index TO orderIndex;
ALTER TABLE public.services RENAME COLUMN processing_time TO processingTime;
ALTER TABLE public.services RENAME COLUMN seo_title TO seoTitle;
ALTER TABLE public.services RENAME COLUMN seo_description TO seoDescription;
ALTER TABLE public.services RENAME COLUMN seo_keywords TO seoKeywords;
ALTER TABLE public.services RENAME COLUMN pricing_plans TO pricingPlans;
ALTER TABLE public.services RENAME COLUMN process_steps TO processSteps;
ALTER TABLE public.services RENAME COLUMN success_story TO successStory;
ALTER TABLE public.services RENAME COLUMN created_at TO createdAt;

-- public.testimonials
ALTER TABLE public.testimonials RENAME COLUMN post_url TO postUrl;
ALTER TABLE public.testimonials RENAME COLUMN created_at TO createdAt;

-- public.blog_posts
ALTER TABLE public.blog_posts RENAME COLUMN read_time TO readTime;
ALTER TABLE public.blog_posts RENAME COLUMN seo_title TO seoTitle;
ALTER TABLE public.blog_posts RENAME COLUMN seo_description TO seoDescription;
ALTER TABLE public.blog_posts RENAME COLUMN seo_keywords TO seoKeywords;
ALTER TABLE public.blog_posts RENAME COLUMN featured_image TO featuredImage;
ALTER TABLE public.blog_posts RENAME COLUMN published_at TO publishedAt;
ALTER TABLE public.blog_posts RENAME COLUMN author_id TO authorId;
ALTER TABLE public.blog_posts RENAME COLUMN author_name TO authorName;
ALTER TABLE public.blog_posts RENAME COLUMN views_count TO viewsCount;
ALTER TABLE public.blog_posts RENAME COLUMN created_at TO createdAt;
ALTER TABLE public.blog_posts RENAME COLUMN updated_at TO updatedAt;

COMMIT;
````

## File: packages/supabase/renameToCamelCase.sql
````sql
-- Bilacert quoted camelCase database rename migration
--
-- Purpose:
-- Rename the current lowercased PostgreSQL column names to true quoted camelCase.
--
-- Why this file exists:
-- PostgreSQL folds unquoted identifiers to lowercase. For example:
--
--   ALTER TABLE public.users RENAME COLUMN first_name TO firstName;
--
-- creates a column named:
--
--   firstname
--
-- not:
--
--   firstName
--
-- To create true camelCase identifiers, the target column name must be quoted:
--
--   ALTER TABLE public.users RENAME COLUMN firstname TO "firstName";
--
-- IMPORTANT:
-- Quoted camelCase database columns require quoted identifiers in raw SQL.
-- Supabase generated types will preserve the quoted camelCase names.
-- Review this migration carefully before running it against production.
--
-- After applying this migration, regenerate Supabase types:
--
--   pnpm supabase:types
--
-- Then update application code, queries, mutations, forms, schemas, and domain types
-- to use the generated camelCase fields consistently.

BEGIN;

-- public.users
ALTER TABLE public.users RENAME COLUMN firstname TO "firstName";
ALTER TABLE public.users RENAME COLUMN lastname TO "lastName";
ALTER TABLE public.users RENAME COLUMN profileimage TO "profileImage";
ALTER TABLE public.users RENAME COLUMN createdby TO "createdBy";
ALTER TABLE public.users RENAME COLUMN updatedby TO "updatedBy";
ALTER TABLE public.users RENAME COLUMN isactive TO "isActive";
ALTER TABLE public.users RENAME COLUMN createdat TO "createdAt";
ALTER TABLE public.users RENAME COLUMN updatedat TO "updatedAt";

-- public.form_submissions
ALTER TABLE public.form_submissions RENAME COLUMN formtype TO "formType";
ALTER TABLE public.form_submissions RENAME COLUMN serviceid TO "serviceId";
ALTER TABLE public.form_submissions RENAME COLUMN servicename TO "serviceName";
ALTER TABLE public.form_submissions RENAME COLUMN fullname TO "fullName";
ALTER TABLE public.form_submissions RENAME COLUMN internalnotes TO "internalNotes";
ALTER TABLE public.form_submissions RENAME COLUMN assignedto TO "assignedTo";
ALTER TABLE public.form_submissions RENAME COLUMN completedat TO "completedAt";
ALTER TABLE public.form_submissions RENAME COLUMN createdat TO "createdAt";
ALTER TABLE public.form_submissions RENAME COLUMN updatedat TO "updatedAt";

-- public.contacts
ALTER TABLE public.contacts RENAME COLUMN submittedat TO "submittedAt";

-- public.services
ALTER TABLE public.services RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE public.services RENAME COLUMN shortdescription TO "shortDescription";
ALTER TABLE public.services RENAME COLUMN orderindex TO "orderIndex";
ALTER TABLE public.services RENAME COLUMN processingtime TO "processingTime";
ALTER TABLE public.services RENAME COLUMN seotitle TO "seoTitle";
ALTER TABLE public.services RENAME COLUMN seodescription TO "seoDescription";
ALTER TABLE public.services RENAME COLUMN seokeywords TO "seoKeywords";
ALTER TABLE public.services RENAME COLUMN pricingplans TO "pricingPlans";
ALTER TABLE public.services RENAME COLUMN processsteps TO "processSteps";
ALTER TABLE public.services RENAME COLUMN successstory TO "successStory";
ALTER TABLE public.services RENAME COLUMN createdat TO "createdAt";

-- public.testimonials
ALTER TABLE public.testimonials RENAME COLUMN posturl TO "postUrl";
ALTER TABLE public.testimonials RENAME COLUMN createdat TO "createdAt";

-- public.blog_posts
ALTER TABLE public.blog_posts RENAME COLUMN readtime TO "readTime";
ALTER TABLE public.blog_posts RENAME COLUMN seotitle TO "seoTitle";
ALTER TABLE public.blog_posts RENAME COLUMN seodescription TO "seoDescription";
ALTER TABLE public.blog_posts RENAME COLUMN seokeywords TO "seoKeywords";
ALTER TABLE public.blog_posts RENAME COLUMN featuredimage TO "featuredImage";
ALTER TABLE public.blog_posts RENAME COLUMN publishedat TO "publishedAt";
ALTER TABLE public.blog_posts RENAME COLUMN authorid TO "authorId";
ALTER TABLE public.blog_posts RENAME COLUMN authorname TO "authorName";
ALTER TABLE public.blog_posts RENAME COLUMN viewscount TO "viewsCount";
ALTER TABLE public.blog_posts RENAME COLUMN createdat TO "createdAt";
ALTER TABLE public.blog_posts RENAME COLUMN updatedat TO "updatedAt";

COMMIT;
````

## File: packages/supabase/src/cache.ts
````typescript
export const CACHE_TAGS = {
  blogs: "blogs",
  blog: (slug: string) => `blog:${slug}`,
  services: "services",
  service: (id: string) => `service:${id}`,
  testimonials: "testimonials",
  contacts: "contacts",
  formSubmissions: "form-submissions",
} as const;

export const CACHE_PATHS = {
  home: "/",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  services: "/services",
  service: (id: string) => `/services/${id}`,
} as const;

export type RevalidationMode = "max" | "immediate";

export interface RevalidationRequest {
  tags?: readonly string[];
  paths?: readonly string[];
  mode?: RevalidationMode;
}

export interface MutationResult<T> {
  data: T;
  revalidate: RevalidationRequest;
}

export function mutationResult<T>(
  data: T,
  revalidate: RevalidationRequest,
): MutationResult<T> {
  return { data, revalidate };
}
````

## File: packages/supabase/src/hooks/useAnalyticsData.ts
````typescript
"use client";

import { useSubmissions } from "./useSubmissions";
import { useServices } from "./useServices";
import { useBlogs } from "./useBlogs";
import { useMemo } from "react";
import { format, startOfDay, isValid } from "date-fns";

export function useAnalyticsData() {
  const {
    data: submissions,
    loading: submissionsLoading,
    error: submissionsError,
  } = useSubmissions();
  const {
    data: services,
    loading: servicesLoading,
    error: servicesError,
  } = useServices();
  const { data: blogs, loading: blogsLoading, error: blogsError } = useBlogs();

  const loading = submissionsLoading || servicesLoading || blogsLoading;
  const error = submissionsError || servicesError || blogsError;

  const totalSubmissions = useMemo(() => {
    if (!submissions || !services) return [];
    return submissions.map((submission) => {
      const service = services.find((s) => s.slug === submission.service_name);
      const serviceName = service ? service.title : "Unknown Service";
      const submitterName = submission.full_name || "Anonymous";
      return `${submitterName} - ${serviceName}`;
    });
  }, [submissions, services]);

  const totalRevenue = useMemo(() => {
    if (!submissions || !services) return 0;
    return submissions
      .filter((s) => s.status === "archived")
      .reduce((acc, submission) => {
        const service = services.find(
          (s) => s.slug === submission.service_name,
        );
        return acc + (service?.pricing || 0);
      }, 0);
  }, [submissions, services]);

  const revenueSubmissions = useMemo(() => {
    if (!submissions || !services) return [];
    return submissions
      .filter((s) => s.status === "archived")
      .map((submission) => {
        const service = services.find(
          (s) => s.slug === submission.service_name,
        );
        const serviceName = service ? service.title : "Unknown Service";
        const submitterName = submission.full_name || "Anonymous";
        return `${submitterName} - ${serviceName}`;
      });
  }, [submissions, services]);

  const newApplications = useMemo(() => {
    if (!submissions) return [];
    return submissions.filter((s) => s.status === "pending");
  }, [submissions]);

  const submissionsByDay = useMemo(() => {
    if (!submissions) return [];
    const counts = submissions.reduce(
      (acc, submission) => {
        if (submission.created_at) {
          const date = new Date(submission.created_at);
          if (isValid(date)) {
            const day = format(startOfDay(date), "yyyy-MM-dd");
            acc[day] = (acc[day] || 0) + 1;
          }
        }
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(counts)
      .map(([day, count]) => ({ day, count }))
      .sort((a, b) => new Date(a.day).getTime() - new Date(b.day).getTime());
  }, [submissions]);

  const submissionsByService = useMemo(() => {
    if (!submissions) return [];
    const counts = submissions.reduce(
      (acc, submission) => {
        const serviceName = submission.service_name || "Unknown";
        acc[serviceName] = (acc[serviceName] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [submissions]);

  return {
    submissions,
    services,
    blogs,
    totalSubmissions,
    totalRevenue,
    revenueSubmissions,
    newApplications,
    submissionsByDay,
    submissionsByService,
    loading,
    error,
  };
}
````

## File: packages/supabase/src/hooks/useDashboardData.ts
````typescript
"use client";

import { useSubmissions } from "./useSubmissions";
import { useContacts } from "./useContacts";
import { useServices } from "./useServices";
import { useMemo } from "react";

export function useDashboardData() {
  const {
    data: submissions,
    loading: submissionsLoading,
    error: submissionsError,
  } = useSubmissions();
  const {
    data: contacts,
    loading: contactsLoading,
    error: contactsError,
  } = useContacts();
  const {
    data: services,
    loading: servicesLoading,
    error: servicesError,
  } = useServices();

  const loading = submissionsLoading || contactsLoading || servicesLoading;
  const error = submissionsError || contactsError || servicesError;

  const stats = useMemo(() => {
    const totalSubmissions = submissions?.length ?? 0;
    const newApplications =
      submissions?.filter((s) => s.status === "pending").length ?? 0;
    const totalContacts = contacts?.length ?? 0;
    const totalRevenue =
      submissions
        ?.filter((s) => s.status === "archived")
        .reduce((acc, submission) => {
          const service = services?.find(
            (s) => s.slug === submission.service_name,
          );
          return acc + (service?.pricing || 0);
        }, 0) ?? 0;

    return { totalSubmissions, newApplications, totalContacts, totalRevenue };
  }, [submissions, contacts, services]);

  const submissionsByService = useMemo(() => {
    if (!submissions || !services) return [];
    return services
      .map((service) => {
        const count = submissions.filter(
          (s) => s.service_name === service.slug,
        ).length;
        return { ...service, submissions: count };
      })
      .filter((service) => service.submissions > 0);
  }, [submissions, services]);

  const recentActivity = useMemo(() => {
    if (!submissions || !contacts) return [];
    const combined = [
      ...submissions.map((s) => ({
        ...s,
        type: "submission" as const,
        date: s.created_at,
        name: s.full_name,
        id: s.id,
        email: s.email,
        service_name: s.service_name,
      })),
      ...contacts.map((c) => ({
        ...c,
        type: "contact" as const,
        date: c.submitted_at,
        name: c.name,
        id: c.id,
        email: c.email,
        service_name: "Contact Form",
      })),
    ];
    return combined
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [submissions, contacts]);

  return { loading, error, stats, submissionsByService, recentActivity };
}
````

## File: packages/supabase/src/middleware.ts
````typescript
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import type { Database } from "./supabaseType";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = (request: NextRequest) => {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient<Database>(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );

          supabaseResponse = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  return supabaseResponse;
};
````

## File: packages/supabase/src/Mutations/contacts.ts
````typescript
import { createSupabaseAdminClient } from "../admin";
import { CACHE_TAGS, mutationResult } from "../cache";
import type { Database } from "../supabaseType";

type ContactInsert = Database["public"]["Tables"]["contacts"]["Insert"];

export async function upsertContact(data: ContactInsert) {
  const supabase = createSupabaseAdminClient();
  const { data: contact, error } = await supabase
    .from("contacts")
    .upsert(data)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(contact, {
    tags: [CACHE_TAGS.contacts],
    mode: "immediate",
  });
}

export async function deleteContact(id: string) {
  const supabase = createSupabaseAdminClient();
  const { error } = await supabase.from("contacts").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return mutationResult(undefined, {
    tags: [CACHE_TAGS.contacts],
    mode: "immediate",
  });
}
````

## File: packages/supabase/src/Mutations/formSubmissions.ts
````typescript
import { createSupabaseAdminClient } from "../admin";
import { CACHE_TAGS, mutationResult } from "../cache";
import type { Database } from "../supabaseType";

type SubmissionUpdate =
  Database["public"]["Tables"]["form_submissions"]["Update"];

export async function updateFormSubmission(
  id: string,
  data: SubmissionUpdate,
) {
  const supabase = createSupabaseAdminClient();
  const { data: submission, error } = await supabase
    .from("form_submissions")
    .update(data)
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(submission, {
    tags: [CACHE_TAGS.formSubmissions],
    mode: "immediate",
  });
}
````

## File: packages/supabase/src/Mutations/services.ts
````typescript
import { createSupabaseAdminClient } from "../admin";
import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import type { Database } from "../supabaseType";

type ServiceInsert = Database["public"]["Tables"]["services"]["Insert"];

export async function upsertService(data: ServiceInsert) {
  const supabase = createSupabaseAdminClient();
  const { data: service, error } = await supabase
    .from("services")
    .upsert(data)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(service, {
    tags: [CACHE_TAGS.services, CACHE_TAGS.service(service.slug)],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.services,
      CACHE_PATHS.service(service.slug),
    ],
    mode: "immediate",
  });
}

export async function deleteService(id: string) {
  const supabase = createSupabaseAdminClient();
  const { data: existing, error: readError } = await supabase
    .from("services")
    .select("slug")
    .eq("id", id)
    .maybeSingle();

  if (readError) throw new Error(readError.message);

  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return mutationResult(undefined, {
    tags: [
      CACHE_TAGS.services,
      ...(existing?.slug ? [CACHE_TAGS.service(existing.slug)] : []),
    ],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.services,
      ...(existing?.slug ? [CACHE_PATHS.service(existing.slug)] : []),
    ],
    mode: "immediate",
  });
}
````

## File: packages/supabase/src/Mutations/testimonials.ts
````typescript
import { createSupabaseAdminClient } from "../admin";
import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import type { Database } from "../supabaseType";

type TestimonialInsert =
  Database["public"]["Tables"]["testimonials"]["Insert"];

export async function upsertTestimonial(data: TestimonialInsert) {
  const supabase = createSupabaseAdminClient();
  const { data: testimonial, error } = await supabase
    .from("testimonials")
    .upsert(data)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(testimonial, {
    tags: [CACHE_TAGS.testimonials],
    paths: [CACHE_PATHS.home],
    mode: "immediate",
  });
}

export async function deleteTestimonial(id: string) {
  const supabase = createSupabaseAdminClient();
  const { error } = await supabase.from("testimonials").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return mutationResult(undefined, {
    tags: [CACHE_TAGS.testimonials],
    paths: [CACHE_PATHS.home],
    mode: "immediate",
  });
}
````

## File: packages/supabase/tsconfig.json
````json
{
  "extends": "@bilacert/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
````

## File: packages/typescript-config/base.json
````json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "incremental": false,
    "isolatedModules": true,
    "lib": ["es2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleDetection": "force",
    "moduleResolution": "bundler",
    "noUncheckedIndexedAccess": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "ES2022"
  }
}
````

## File: packages/typescript-config/nextjs.json
````json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./base.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }],
    "allowJs": true,
    "jsx": "react-jsx",
    "noEmit": true
  }
}
````

## File: packages/typescript-config/package.json
````json
{
  "name": "@bilacert/typescript-config",
  "version": "0.0.0",
  "private": true,
  "license": "MIT"
}
````

## File: apps/admin/app/admin/analysis/charts.tsx
````typescript
"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white/80 backdrop-blur-sm p-3 border border-slate-200 rounded-lg shadow-lg text-slate-700">
        <p className="font-bold">{label || data.name || data.author}</p>
        {payload.map((p: any, i: number) => (
          <p
            key={`${p.name}-${i}`}
            style={{ color: p.color }}
          >{`${p.name}: ${p.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};

export const DetailedSubmissionsChart = ({
  data = [],
  serviceKeys = [],
  statusKeys = [],
}: {
  data?: any[];
  serviceKeys?: string[];
  statusKeys?: string[];
}) => {
  const allKeys = ["total", ...serviceKeys, ...statusKeys];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="date" stroke="#888" fontSize={12} />
        <YAxis stroke="#888" fontSize={12} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {allKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            name={key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}
            stroke={COLORS[index % COLORS.length]}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export const SubmissionsLineChart = ({
  data = [],
}: {
  data?: { date: string; count: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <defs>
        <linearGradient id="colorSubmissions" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="date" stroke="#888" fontSize={12} />
      <YAxis stroke="#888" fontSize={12} />
      <Tooltip content={<CustomTooltip />} />
      <Line
        type="monotone"
        dataKey="count"
        name="Submissions"
        stroke="#8884d8"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#colorSubmissions)"
        dot={{ r: 4, fill: "#8884d8" }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export const SubmissionsBarChart = ({
  data = [],
}: {
  data?: { service_name: string; count: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="service_name" stroke="#888" fontSize={12} />
      <YAxis stroke="#888" fontSize={12} />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="count"
        name="Submissions"
        fill="#82ca9d"
        radius={[4, 4, 0, 0]}
      >
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.service_name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export const ContentBarChart = ({
  data = [],
}: {
  data?: { contentType: string; count: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis type="number" stroke="#888" fontSize={12} />
      <YAxis
        dataKey="contentType"
        type="category"
        width={120}
        stroke="#888"
        fontSize={12}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="count" name="Count" fill="#ffc658" radius={[0, 4, 4, 0]}>
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.contentType}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export const BlogViewsChart = ({
  data = [],
}: {
  data?: { title: string; views: number }[];
}) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis type="number" stroke="#888" fontSize={12} />
      <YAxis
        dataKey="title"
        type="category"
        width={150}
        stroke="#888"
        fontSize={10}
        interval={0}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="views" name="Views" fill="#ff8042" radius={[0, 4, 4, 0]}>
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.title}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export const TurnaroundTimeChart = ({
  data = [],
}: {
  data?: { service_name: string; average_days: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis type="number" stroke="#888" fontSize={12} />
      <YAxis
        dataKey="service_name"
        type="category"
        width={150}
        stroke="#888"
        fontSize={12}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="average_days"
        name="Avg. Days"
        fill="#a234b6"
        radius={[0, 4, 4, 0]}
      >
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.service_name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export const SubmissionStatusPieChart = ({
  data = [],
}: {
  data?: { status: string; count: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="count"
        nameKey="status"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.status}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

export const CombinedActivityChart = ({
  data = [],
  keys = [],
}: {
  data?: { date: string; [key: string]: number | string }[];
  keys?: string[];
}) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="date" stroke="#888" fontSize={12} />
      <YAxis stroke="#888" fontSize={12} />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      {keys.map((key, index) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          name={key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}
          stroke={COLORS[index % COLORS.length]}
          strokeWidth={2}
          dot={false}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);
````

## File: apps/admin/app/admin/blogs/loading.tsx
````typescript
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogsLoading() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-5 w-1/3" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-5 w-1/2" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Skeleton className="h-8 w-8" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
````

## File: apps/admin/app/admin/blogs/new/page.tsx
````typescript
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
import BlogForm from "../BlogForm";

export const metadata = {
  title: "New Blog Post | Bilacert Admin Pro",
  description: "Create a new blog post.",
};

export default function NewBlogPage() {
  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/blogs">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Add New Post</CardTitle>
          <CardDescription>
            Fill out the form below to create a new post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BlogForm />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/admin/blogs/page.tsx
````typescript
import { Suspense } from "react";
import BlogsClient from "./BlogsClient";
import BlogsLoading from "./loading";

export const metadata = {
  title: "Blogs | Bilacert Admin Pro",
  description: "Create and manage blog posts.",
};

export default function BlogsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<BlogsLoading />}>
        <BlogsClient />
      </Suspense>
    </div>
  );
}
````

## File: apps/admin/app/admin/blogs/schema.ts
````typescript
import * as z from "zod";

export const blogSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  authorName: z.string().optional(),
  readTime: z.string().optional(),
  category: z.string().optional(),
  tags: z.string().optional(),
  excerpt: z.string().optional(),
  content: z.string().min(1, "Content is required."),
  published: z.boolean(),
  featuredImage: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  thumbnail: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  featured: z.boolean(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
});

export type BlogFormValues = z.infer<typeof blogSchema>;
````

## File: apps/admin/app/admin/contacts/new/page.tsx
````typescript
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
````

## File: apps/admin/app/admin/contacts/page.tsx
````typescript
import { Suspense } from "react";
import ContactsClient from "./ContactsClient";
import ContactsLoading from "./loading";

export const metadata = {
  title: "Contacts | Bilacert Admin Pro",
  description: "Manage your contacts.",
};

export default function ContactsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<ContactsLoading />}>
        <ContactsClient />
      </Suspense>
    </div>
  );
}
````

## File: apps/admin/app/admin/dashboard/loading.tsx
````typescript
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-16" />
            <Skeleton className="mt-2 h-3 w-32" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-12" />
            <Skeleton className="mt-2 h-3 w-24" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-14" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-24" />
            <Skeleton className="mt-2 h-3 w-40" />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
````

## File: apps/admin/app/admin/form_submissions/page.tsx
````typescript
import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import SubmissionsClient from "./SubmissionsClient";

export const metadata = {
  title: "Form Submissions | Bilacert Admin Pro",
  description: "View and manage all form submissions.",
};

function SubmissionsLoading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function FormSubmissionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Form Submissions</h1>
      <Suspense fallback={<SubmissionsLoading />}>
        <SubmissionsClient />
      </Suspense>
    </div>
  );
}
````

## File: apps/admin/app/admin/form_submissions/schema.ts
````typescript
import * as z from "zod";

export const submissionSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  service_name: z.string().optional(),
  status: z.enum([
    "pending",
    "in-progress",
    "completed",
    "rejected",
    "archived",
  ]),
  details: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === "") return true;
        try {
          JSON.parse(val);
          return true;
        } catch (_e) {
          return false;
        }
      },
      { message: "Details must be a valid JSON object." },
    ),
  notes: z.string().optional(),
  contact_owner: z.string().optional(),
});
````

## File: apps/admin/app/admin/services/components/CoreDetailsForm.tsx
````typescript
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CoreDetailsForm({ form }: { form: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Core Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="href"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL (href)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="short_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/app/admin/services/components/DetailsForm.tsx
````typescript
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function DetailsForm({ form }: { form: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icon</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g., Shield" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="order_index"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order Index</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="processing_time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Processing Time</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pricing"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price (ZAR)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/app/admin/services/components/FeaturesForm.tsx
````typescript
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function FeaturesForm({ form }: { form: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Features & Requirements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Features (one per line)</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requirements (one per line)</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="includes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What's Included (one per line)</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/app/admin/services/components/MediaForm.tsx
````typescript
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUpload from "@/components/ui/ImageUpload";

export default function MediaForm({ form }: { form: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Media</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <ImageUpload
                  bucket="services"
                  initialUrl={field.value}
                  onUpload={(url) => field.onChange(url)}
                  onRemove={() => field.onChange("")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail</FormLabel>
              <FormControl>
                <ImageUpload
                  bucket="services"
                  initialUrl={field.value}
                  onUpload={(url) => field.onChange(url)}
                  onRemove={() => field.onChange("")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/app/admin/services/components/PricingPlansForm.tsx
````typescript
"use client";

import { useFieldArray } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function PricingPlansForm({ form }: { form: any }) {
  const { fields: pricingPlanFields } = useFieldArray({
    control: form.control,
    name: "pricing_plans",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pricing Plans</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-6">
          {pricingPlanFields.map((field, index) => (
            <Card key={field.id} className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-lg">{`Plan ${index + 1}`}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name={`pricing_plans.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plan Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`pricing_plans.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plan Description</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`pricing_plans.${index}.price`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`pricing_plans.${index}.features`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Features (one per line)</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`pricing_plans.${index}.popular`}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-card p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Most Popular
                        </FormLabel>
                        <FormDescription>Highlight this plan.</FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/app/admin/services/components/ProcessStepsForm.tsx
````typescript
"use client";

import { PlusCircle, Trash2 } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProcessStepsForm({ form }: { form: any }) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "process_steps",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Process Steps</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex items-start gap-4 p-4 border rounded-md"
          >
            <div className="grid gap-2 flex-grow">
              <FormField
                control={form.control}
                name={`process_steps.${index}.step`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Step Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`process_steps.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Step Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`process_steps.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Step Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={2} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={() => remove(index)}
              className="mt-7"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({ step: `${fields.length + 1}`, title: "", description: "" })
          }
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add Step
        </Button>
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/app/admin/services/components/PublishingForm.tsx
````typescript
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

export default function PublishingForm({ form }: { form: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Publishing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel>Published</FormLabel>
                <FormDescription>
                  Make this service visible on the site.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="featured"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel>Featured</FormLabel>
                <FormDescription>
                  Feature this service on the homepage.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/app/admin/services/components/SeoForm.tsx
````typescript
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SeoForm({ form }: { form: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="seo_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SEO Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="seo_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SEO Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="seo_keywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SEO Keywords</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/app/admin/services/components/SuccessStoryForm.tsx
````typescript
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function SuccessStoryForm({ form }: { form: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Success Story</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="success_story.scenario"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Scenario</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value ?? ""} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="success_story.challenge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Challenge</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value ?? ""} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="success_story.solution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Solution</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value ?? ""} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="success_story.result"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Result</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value ?? ""} />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/app/admin/services/data-table.tsx
````typescript
"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  {columns.map((_col, j) => (
                    <TableCell key={j}>
                      <Skeleton className="h-6 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
````

## File: apps/admin/app/admin/services/loading.tsx
````typescript
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesLoading() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-8 w-8" />
            </div>
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-12 w-full" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
````

## File: apps/admin/app/admin/services/new/page.tsx
````typescript
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
import ServiceForm from "../ServiceForm";

export const metadata = {
  title: "New Service | Bilacert Admin Pro",
  description: "Add a new regulatory service.",
};

export default function NewServicePage() {
  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/services">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Add New Service</CardTitle>
          <CardDescription>
            Fill out the form below to create a new service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ServiceForm />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/admin/services/page.tsx
````typescript
import { Suspense } from "react";
import ServicesLoading from "./loading";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Services | Bilacert Admin Pro",
  description: "Manage regulatory services.",
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<ServicesLoading />}>
      <ServicesClient />
    </Suspense>
  );
}
````

## File: apps/admin/app/admin/services/schema.ts
````typescript
import * as z from "zod";

const pricingPlanSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().default(""),
  price: z.string().min(1, "Price is required"),
  features: z.string().default(""),
  popular: z.boolean().default(false),
});

const processStepSchema = z.object({
  step: z.coerce.string().min(1, "Step number is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

const successStorySchema = z.object({
  scenario: z.string().optional(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  result: z.string().optional(),
});

export const serviceSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  href: z
    .string()
    .min(1, "URL (href) is required")
    .refine((val) => val.startsWith("/"), {
      message: "Href must start with /",
    }),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  shortDescription: z.string().optional(),
  icon: z.string().optional(),
  orderIndex: z.coerce.number().optional(),
  content: z.string().optional(),
  features: z.string().optional(),
  requirements: z.string().optional(),
  includes: z.string().optional(),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  processingTime: z.string().optional(),
  pricing: z.coerce.number().optional(),
  image: z.string().optional(),
  thumbnail: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
  pricingPlans: z.array(pricingPlanSchema).default([]),
  processSteps: z.array(processStepSchema).default([]),
  successStory: successStorySchema.optional(),
});

export type ServiceFormValues = z.infer<typeof serviceSchema>;
````

## File: apps/admin/app/admin/testimonials/loading.tsx
````typescript
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TestimonialsLoading() {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button disabled>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Testimonial
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-5 w-full" />
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <div className="space-y-4 text-center">
                <Skeleton className="mx-auto h-12 w-12 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Skeleton className="h-8 w-8" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
````

## File: apps/admin/app/admin/testimonials/new/page.tsx
````typescript
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
import TestimonialForm from "../TestimonialForm";

export const metadata = {
  title: "New Testimonial | Bilacert Admin Pro",
  description: "Add a new testimonial from a Facebook post.",
};

export default function NewTestimonialPage() {
  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/testimonials">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Testimonials
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Add New Testimonial</CardTitle>
          <CardDescription>
            Enter the URL of the Facebook post below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TestimonialForm />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/admin/testimonials/page.tsx
````typescript
import { Suspense } from "react";
import TestimonialsLoading from "./loading";
import TestimonialsClient from "./TestimonialsClient";

export const metadata = {
  title: "Testimonials | Bilacert Admin Pro",
  description: "Manage customer testimonials from social media.",
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<TestimonialsLoading />}>
        <TestimonialsClient />
      </Suspense>
    </div>
  );
}
````

## File: apps/admin/app/admin/testimonials/TestimonialEmbed.tsx
````typescript
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB?: {
      init: (params: { xfbml: boolean; version: string }) => void;
      XFBML: {
        parse: (element?: HTMLElement) => void;
      };
    };
    fbAsyncInit?: () => void;
  }
}

interface TestimonialEmbedProps {
  postUrl: string;
}

export default function TestimonialEmbed({ postUrl }: TestimonialEmbedProps) {
  useEffect(() => {
    // Re-parse the DOM for FB elements whenever the URL changes.
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="p-4">
      <div
        key={postUrl} // Using key to help React remount the component on URL change
        className="fb-post"
        data-href={postUrl}
        data-show-text="true"
        data-adapt-container-width="true"
      />
    </div>
  );
}
````

## File: apps/admin/app/api/pexels/route.ts
````typescript
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const accessKey = process.env.PEXELS_API_KEY;

  if (!accessKey) {
    console.error("PEXELS_API_KEY is not set in environment variables");
    return NextResponse.json(
      { error: "Pexels API key is not configured" },
      { status: 500 },
    );
  }

  // If query is provided, search. Otherwise, get curated photos.
  const url = query
    ? `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=21`
    : `https://api.pexels.com/v1/curated?per_page=21`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: accessKey,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error || "Failed to fetch from Pexels" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
````

## File: apps/admin/app/globals.css
````css
@import "tailwindcss";
@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-body: Inter, sans-serif;
  --font-headline: Inter, sans-serif;
  --font-code: monospace;

  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-chart-1: hsl(var(--chart-1));
  --color-chart-2: hsl(var(--chart-2));
  --color-chart-3: hsl(var(--chart-3));
  --color-chart-4: hsl(var(--chart-4));
  --color-chart-5: hsl(var(--chart-5));
  --color-sidebar: hsl(var(--sidebar-background));
  --color-sidebar-foreground: hsl(var(--sidebar-foreground));
  --color-sidebar-primary: hsl(var(--sidebar-primary));
  --color-sidebar-primary-foreground: hsl(var(--sidebar-primary-foreground));
  --color-sidebar-accent: hsl(var(--sidebar-accent));
  --color-sidebar-accent-foreground: hsl(var(--sidebar-accent-foreground));
  --color-sidebar-border: hsl(var(--sidebar-border));
  --color-sidebar-ring: hsl(var(--sidebar-ring));

  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
}

@layer base {
  :root {
    --background: 210 29% 96%;
    --foreground: 211 43% 17%;
    --card: 0 0% 100%;
    --card-foreground: 211 43% 17%;
    --popover: 0 0% 100%;
    --popover-foreground: 211 43% 17%;
    --primary: 211 77% 17%;
    --primary-foreground: 0 0% 98%;
    --secondary: 210 25% 90%;
    --secondary-foreground: 211 77% 17%;
    --muted: 210 25% 90%;
    --muted-foreground: 210 15% 45%;
    --accent: 30 87% 62%;
    --accent-foreground: 211 77% 17%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 210 20% 88%;
    --input: 210 20% 88%;
    --ring: 30 87% 62%;
    --chart-1: 211 77% 17%;
    --chart-2: 30 87% 62%;
    --chart-3: 210 25% 70%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 211 77% 17%;
    --sidebar-foreground: 210 20% 80%;
    --sidebar-primary: 30 87% 62%;
    --sidebar-primary-foreground: 211 77% 17%;
    --sidebar-accent: 211 77% 22%;
    --sidebar-accent-foreground: 0 0% 98%;
    --sidebar-border: 211 77% 25%;
    --sidebar-ring: 30 87% 62%;
  }

  .dark {
    --background: 211 77% 10%;
    --foreground: 210 29% 96%;
    --card: 211 77% 13%;
    --card-foreground: 210 29% 96%;
    --popover: 211 77% 10%;
    --popover-foreground: 210 29% 96%;
    --primary: 210 29% 96%;
    --primary-foreground: 211 77% 17%;
    --secondary: 211 77% 15%;
    --secondary-foreground: 210 29% 96%;
    --muted: 211 77% 15%;
    --muted-foreground: 210 20% 65%;
    --accent: 30 87% 62%;
    --accent-foreground: 211 77% 17%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 211 77% 20%;
    --input: 211 77% 20%;
    --ring: 30 87% 62%;
    --chart-1: 210 29% 96%;
    --chart-2: 30 87% 62%;
    --chart-3: 211 77% 30%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 211 77% 17%;
    --sidebar-foreground: 210 20% 80%;
    --sidebar-primary: 30 87% 62%;
    --sidebar-primary-foreground: 211 77% 17%;
    --sidebar-accent: 211 77% 22%;
    --sidebar-accent-foreground: 0 0% 98%;
    --sidebar-border: 211 77% 25%;
    --sidebar-ring: 30 87% 62%;
  }

  body {
    @apply bg-background text-foreground;
    font-family: Arial, Helvetica, sans-serif;
  }

  /* Custom Scrollbar */
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    @apply bg-muted rounded-full;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    @apply bg-muted-foreground/30;
  }
}
````

## File: apps/admin/biome.json
````json
{
  "$schema": "https://biomejs.dev/schemas/2.2.0/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": true,
    "includes": ["**", "!node_modules", "!.next", "!dist", "!build"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "style": {
        "noNonNullAssertion": "off"
      },
      "suspicious": {
        "noArrayIndexKey": "off",
        "noDocumentCookie": "off",
        "noExplicitAny": "off",
        "noUnknownAtRules": "off"
      },
      "a11y": {
        "noSvgWithoutTitle": "off",
        "useSemanticElements": "off"
      },
      "security": {
        "noDangerouslySetInnerHtml": "off"
      }
    },
    "domains": {
      "next": "recommended",
      "react": "recommended"
    }
  },
  "assist": {
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  }
}
````

## File: apps/admin/components/admin/AdminPage.tsx
````typescript
"use client";

import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface AdminPageProps<T> {
  useData: () => {
    data: T[];
    loading: boolean;
    error: Error | null;
    refresh: () => void;
  };
  title: string;
  newItemButtonText: string;
  newItemLink: string;
  renderItem: (
    item: T,
    onEdit: (item: T) => void,
    onDelete: (item: T) => void,
  ) => React.ReactNode;
  renderLoading?: () => React.ReactNode;
  renderEmpty?: () => React.ReactNode;
  DeleteDialog: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onDeleted: () => void;
    item: T | null;
  }>;
}

export default function AdminPage<
  T extends { id: string; title?: string; name?: string },
>({
  useData,
  title,
  newItemButtonText,
  newItemLink,
  renderItem,
  renderLoading,
  renderEmpty,
  DeleteDialog,
}: AdminPageProps<T>) {
  const { data, loading, error, refresh } = useData();
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const handleDelete = (item: T) => {
    setSelectedItem(item);
    setIsDeleteDialogOpen(true);
  };

  const handleEdit = (item: T) => {
    router.push(`${newItemLink}/${item.id}/edit`);
  };

  const handleCloseDialogs = () => {
    setIsDeleteDialogOpen(false);
    setSelectedItem(null);
  };

  const onDeleted = () => {
    handleCloseDialogs();
    refresh();
  };

  const defaultLoading = () => (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-48 w-full animate-pulse rounded-lg bg-muted"
        ></div>
      ))}
    </div>
  );

  const defaultEmpty = () => (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 py-24 text-center">
      <h3 className="text-lg font-semibold tracking-tight">No {title} Yet</h3>
      <p className="text-sm text-muted-foreground">
        Click "{newItemButtonText}" to get started.
      </p>
    </div>
  );

  if (error) {
    return (
      <div className="text-destructive">
        Error loading {title.toLowerCase()}: {error.message}
      </div>
    );
  }

  const dialogProps = {
    isOpen: isDeleteDialogOpen,
    onClose: handleCloseDialogs,
    onDeleted: onDeleted,
    item: selectedItem,
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <Button asChild>
          <Link href={newItemLink}>
            <PlusCircle className="mr-2 h-4 w-4" />
            {newItemButtonText}
          </Link>
        </Button>
      </div>

      <div className="mt-6">
        {loading ? (
          renderLoading ? (
            renderLoading()
          ) : (
            defaultLoading()
          )
        ) : data.length === 0 ? (
          renderEmpty ? (
            renderEmpty()
          ) : (
            defaultEmpty()
          )
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => renderItem(item, handleEdit, handleDelete))}
          </div>
        )}
      </div>

      {isDeleteDialogOpen && <DeleteDialog {...dialogProps} />}
    </>
  );
}
````

## File: apps/admin/components/admin/StatCard.tsx
````typescript
"use client";

import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  items?: string[];
}

export default function StatCard({
  title,
  value,
  icon,
  items = [],
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {items.length > 0 && (
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {items.slice(0, 3).map(
              (
                item,
                index, // Show first 3 items
              ) => (
                <li key={index} className="flex items-center truncate">
                  <span className="mr-2">&#8226;</span>
                  {item}
                </li>
              ),
            )}
            {items.length > 3 && <li className="truncate">......</li>}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
````

## File: apps/admin/components/ui/skeleton.tsx
````typescript
import { cn } from "@bilacert/shared/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
````

## File: apps/admin/components/ui/toaster.tsx
````typescript
"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
````

## File: apps/admin/hooks/use-toast.ts
````typescript
"use client";

// Inspired by react-hot-toast library
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
````

## File: apps/admin/postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: apps/client/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# client
.agent

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: apps/client/app/contact/ContactForm.tsx
````typescript
"use client";

import { useFormSubmission } from "@bilacert/supabase/hooks/useFormSubmission";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm({
  defaultService,
}: {
  defaultService?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    message: "",
  });

  const { isLoading, error, isSuccess, successMessage, handleSubmit, reset } =
    useFormSubmission();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await handleSubmit({
      formType: "contact",
      serviceId: formData.service || undefined,
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      message: formData.message,
    });

    if (result?.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      // Auto-hide success message after 5 seconds
      setTimeout(reset, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <Image
          src="/herosetion/Contact-Us.jpg"
          alt="Get in touch"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to simplify your compliance journey? Contact our experts for
              a free consultation and discover how we can help your business
              navigate ICASA and NRCS requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">075 430 4433</p>
              <p className="text-sm text-gray-500">Mon-Fri 08:00 - 16:30</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
              <p className="text-gray-600 mb-2">info@bilacert.co.za</p>
              <p className="text-sm text-gray-500">
                We&apos;ll respond within 24 hours
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600 mb-2">Monday - Friday</p>
              <p className="text-sm text-gray-500">08:00 - 16:30</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Send us a Message
              </h2>

              {isSuccess && successMessage && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <p className="text-green-700">{successMessage}</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="icasa-type-approvals">
                        ICASA Type Approvals
                      </option>
                      <option value="nrcs-loa-applications">
                        NRCS LOA Applications
                      </option>
                      <option value="radio-dealer-licensing">
                        Radio Dealer Licensing
                      </option>
                      <option value="class-ecs-ecns-licensing">
                        Class ECS/ECNS Licensing
                      </option>
                      <option value="license-exemptions">
                        License Exemptions
                      </option>
                      <option value="ski-boat-vhf-licensing">
                        Ski Boat VHF Licensing
                      </option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Tell us about your compliance needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            For urgent compliance matters, call us directly at 075 430 4433 or
            reach out via WhatsApp for instant support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0754304433"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors duration-200"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/27754304433"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
````

## File: apps/client/app/forms/icasa-type-approvals/ClientPage.tsx
````typescript
"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const supabase = createSupabaseBrowserClient();

// Define the type for the form state
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  message: string;
}

// Define the type for the submission status
type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function IcasasForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceType: "ICASA Type Approval",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    setFormError(null);

    try {
      const { error } = await supabase.from("form_submissions").insert([
        {
          id: uuidv4(),
          formType: "icasa-type-approvals",
          serviceName: formData.serviceType,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          details: { message: formData.message },
          createdAt: new Date().toISOString(),
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmissionStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceType: "ICASA Type Approval",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setFormError(
        "There was an error submitting your form. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <Image
            className="mx-auto h-12 w-auto"
            src="/logo.png"
            alt="Bilacert"
            width={100}
            height={100}
          />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ICASA Type Approval Application
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Fill out the form below to begin the process.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {submissionStatus === "success" ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Submission Successful!
              </h3>
              <p className="text-gray-700">
                Thank you for your application. We will review your information
                and get back to you shortly.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name (optional)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>
              </div>

              {formError && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        {formError}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  {submissionStatus === "submitting"
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: apps/client/app/forms/license-exemptions/ClientPage.tsx
````typescript
"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const supabase = createSupabaseBrowserClient();

// Define the type for the form state
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  message: string;
}

// Define the type for the submission status
type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function LicenseExemptionsForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceType: "License Exemption Assessment",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    setFormError(null);

    try {
      const { error } = await supabase.from("form_submissions").insert([
        {
          id: uuidv4(),
          formType: "license-exemptions",
          serviceName: formData.serviceType,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          details: { message: formData.message },
          createdAt: new Date().toISOString(),
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmissionStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceType: "License Exemption Assessment",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setFormError(
        "There was an error submitting your form. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <Image
            className="mx-auto h-12 w-auto"
            src="/logo.png"
            alt="Bilacert"
            width={100}
            height={100}
          />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          License Exemption Assessment
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Fill out the form below to begin the process.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {submissionStatus === "success" ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Submission Successful!
              </h3>
              <p className="text-gray-700">
                Thank you for your submission. We will review your information
                and get back to you shortly.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name (optional)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>
              </div>

              {formError && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        {formError}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  {submissionStatus === "submitting"
                    ? "Submitting..."
                    : "Submit Assessment"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: apps/client/app/forms/nrcs-loa-applications/ClientPage.tsx
````typescript
"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const supabase = createSupabaseBrowserClient();

// Define the type for the form state
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  message: string;
}

// Define the type for the submission status
type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function NrcsLoaForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceType: "NRCS LOA Application",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    setFormError(null);

    try {
      const { error } = await supabase.from("form_submissions").insert([
        {
          id: uuidv4(),
          formType: "nrcs-loa",
          serviceName: formData.serviceType,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          details: { message: formData.message },
          createdAt: new Date().toISOString(),
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmissionStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceType: "NRCS LOA Application",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setFormError(
        "There was an error submitting your form. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <Image
            className="mx-auto h-12 w-auto"
            src="/logo.png"
            alt="Bilacert"
            width={100}
            height={100}
          />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          NRCS LOA Application
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Fill out the form below to begin the process.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {submissionStatus === "success" ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Submission Successful!
              </h3>
              <p className="text-gray-700">
                Thank you for your application. We will review your information
                and get back to you shortly.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name (optional)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>
              </div>

              {formError && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        {formError}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  {submissionStatus === "submitting"
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: apps/client/app/layout.tsx
````typescript
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Bilacert - Your Compliance Partner | ICASA & NRCS Approvals",
    template: "%s | Bilacert - Compliance Made Simple",
  },
  description:
    "Bilacert simplifies ICASA and NRCS LOA compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance. Get your approvals faster with our streamlined process.",
  keywords: [
    "ICASA type approval",
    "NRCS LOA",
    "South Africa compliance",
    "radio dealer license",
    "ECS ECNS licensing",
    "VHF radio license",
    "compliance consultant",
    "regulatory approval",
    "telecommunications compliance",
    "electronic communications",
  ],
  authors: [{ name: "Bilacert (Pty) Ltd" }],
  creator: "Bilacert",
  publisher: "Bilacert",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bilacert.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bilacert - Your Compliance Partner | ICASA & NRCS Approvals",
    description:
      "Simplifying ICASA and NRCS compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance.",
    url: "https://bilacert.co.za",
    siteName: "Bilacert",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bilacert - Your Compliance Partner",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilacert - Your Compliance Partner",
    description:
      "Simplifying ICASA and NRCS compliance for South African businesses",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-6Y6G6PC48C" />
    </html>
  );
}
````

## File: apps/client/app/robots.ts
````typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://bilacert.co.za/sitemap.xml",
  };
}
````

## File: apps/client/biome.json
````json
{
  "$schema": "https://biomejs.dev/schemas/2.2.0/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": true,
    "includes": ["**", "!node_modules", "!.next", "!dist", "!build"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "performance": {
        "noImgElement": "off"
      },
      "suspicious": {
        "noArrayIndexKey": "off",
        "noExplicitAny": "off",
        "noImplicitAnyLet": "off",
        "noUnknownAtRules": "off"
      },
      "security": {
        "noDangerouslySetInnerHtml": "off"
      }
    },
    "domains": {
      "next": "recommended",
      "react": "recommended"
    }
  },
  "assist": {
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  }
}
````

## File: apps/client/components/blog/AboutAuthor.tsx
````typescript
interface AboutAuthorProps {
  author: string;
}

export function AboutAuthor({ author }: AboutAuthorProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-8">
      <div className="flex items-center">
        {/* <Image src={author} alt={author} width={80} height={80} className="rounded-full" /> */}
        <div className="ml-4">
          <h3 className="text-xl font-bold">About {author}</h3>
          <p className="text-gray-600">best writer since 2002</p>
        </div>
      </div>
    </div>
  );
}
````

## File: apps/client/components/Footer.tsx
````typescript
import { Clock, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "ICASA Type Approvals", href: "/services/icasa-type-approvals" },
    { name: "NRCS LOA Applications", href: "/services/nrcs-loa-applications" },
    {
      name: "Radio Dealer Licensing",
      href: "/services/radio-dealer-licensing",
    },
    {
      name: "Class ECS/ECNS Licensing",
      href: "/services/class-ecs-ecns-licensing",
    },
    { name: "License Exemptions", href: "/services/license-exemptions" },
    {
      name: "Ski Boat VHF Licensing",
      href: "/services/ski-boat-vhf-licensing",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">Bilacert</div>
            <p className="text-gray-300 mb-6">
              Your trusted compliance partner, simplifying ICASA and NRCS
              approvals for South African businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>075 430 4433</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@bilacert.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <span>Mon - Fri: 8:00 - 16:30</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for compliance updates and industry
              insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="w-full bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-light transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Bilacert (Pty) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
            <div>
              <p className="text-gray-300 text-sm">
                Developed by{" "}
                <Link
                  className="text-blue-300 text-sm"
                  href="https://abrameltonntsako.web.app"
                >
                  AEN Nyath
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
````

## File: apps/client/components/service/WhyChooseUs.tsx
````typescript
import { Clock, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Efficient Processing",
    description:
      "Streamlined applications and proactive problem-solving to minimize delays and maximize success rates.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Regulatory Expertise",
    description:
      "In-depth knowledge of ICASA and NRCS regulations to ensure your applications are accurate and complete.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client-Centric Approach",
    description:
      "Personalized support and clear communication throughout your compliance journey.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why Choose Bilacert?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make compliance simple, efficient, and stress-free for businesses
            of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-accent">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
````

## File: apps/client/components/WhatsAppButton.tsx
````typescript
"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  const phoneNumber = "27754304433"; // South African format
  const message =
    "Hi! I'm interested in your compliance services. Can you help me?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </button>
  );
}
````

## File: apps/client/lib/services-config.ts
````typescript
import {
  Award,
  CheckCircle,
  Clock,
  FileText,
  Headphones,
  type LucideIcon,
  Radio,
  Shield,
  Ship,
  Users,
  Zap,
} from "lucide-react";

export interface HeroStat {
  title: string;
  description: string;
}

export interface ServicePlan {
  title: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Benefit {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

export interface WhatIsCheckpoint {
  text: string;
}

export interface WhatIsSection {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  checkpoints: string[];
  additionalContent?: "licenseTypes" | "none";
}

export interface LicenseType {
  title: string;
  description: string;
  icon: string;
}

export interface SuccessStory {
  scenario: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface ServiceConfig {
  id: string;
  title: string;
  hero: {
    title: string;
    subtitle: string;
    icon: string;
    image: string;
  };
  processingTime: string;
  heroStats: HeroStat[];
  servicePlans: ServicePlan[];
  processSteps: ProcessStep[];
  benefitsBox: Benefit[];
  whatIsSection: WhatIsSection;
  licenseTypes?: LicenseType[];
  successStory: SuccessStory;
  ctaHeading: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    url: string;
  };
  formPath: string;
  phone: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  Award,
  Radio,
  FileText,
  Headphones,
  Ship,
  CheckCircle,
  Clock,
  Users,
  Zap,
};

export function getIcon(iconName: string) {
  return ICON_MAP[iconName] || Shield;
}

export const servicesConfig: Record<string, ServiceConfig> = {
  "class-ecs-ecns-licensing": {
    id: "class-ecs-ecns-licensing",
    title: "Class ECS/ECNS Licensing",
    hero: {
      title: "Professional ECS/ECNS Licensing Services",
      subtitle:
        "Expert guidance for Class Electronic Communications Service (ECS) and Electronic Communications Network Service (ECNS) licensing. We handle the entire process from assessment to approval.",
      icon: "Shield",
      image: "/class-ens-ecns.jpg",
    },
    processingTime: "30 working Days",
    heroStats: [
      {
        title: "30 working Days",
        description: "Standard processing time",
      },
      {
        title: "Regulatory Expertise",
        description: "ICASA licensing specialist",
      },
      {
        title: "Tailored Solutions",
        description: "Personalized guidance",
      },
    ],
    servicePlans: [
      {
        title: "Basic",
        description: "Consultation & Application Review",
        features: [
          "Eligibility assessment",
          "Application review",
          "Basic guidance",
        ],
        price: "R3,000",
        popular: false,
      },
      {
        title: "Standard",
        description: "Full Documentation Submission & Liaison",
        features: [
          "Full documentation preparation",
          "ICASA submission",
          "Liaison & tracking",
          "Application management",
        ],
        price: "R7,500",
        popular: true,
      },
      {
        title: "Premium",
        description: "End-to-End Approval & Ongoing Support",
        features: [
          "Complete end-to-end service",
          "Ongoing compliance support",
          "Priority processing",
          "Renewal management",
        ],
        price: "R9,500",
        popular: false,
      },
    ],
    processSteps: [
      {
        step: "1",
        title: "Consultation & Eligibility Check",
        description:
          "We assess whether your business requires a Class ECS or ECNS license and identify necessary documentation.",
      },
      {
        step: "2",
        title: "Application Preparation",
        description:
          "Our experts compile, review, and prepare all required documents for complete and accurate submission.",
      },
      {
        step: "3",
        title: "Submission & ICASA Liaison",
        description:
          "We submit the application and manage all interactions with ICASA to streamline the approval process.",
      },
      {
        step: "4",
        title: "License Approval & Issuance",
        description:
          "Once approved, we ensure you receive your official ICASA license.",
      },
      {
        step: "5",
        title: "Post-License Compliance",
        description:
          "We provide ongoing support for license renewals, amendments, and regulatory compliance updates.",
      },
    ],
    benefitsBox: [
      {
        icon: "CheckCircle",
        title: "Eligibility Assessment",
        description:
          "Determining whether your business needs a Class ECS or ECNS license",
      },
      {
        icon: "Shield",
        title: "Application Preparation",
        description: "Ensuring all required paperwork is accurate and complete",
      },
      {
        icon: "Users",
        title: "ICASA Liaison",
        description: "Managing all interactions with ICASA for smooth approval",
      },
      {
        icon: "Award",
        title: "Ongoing Compliance",
        description: "Keeping your license valid and up to date",
      },
    ],
    whatIsSection: {
      title: "What are ECS/ECNS Licenses?",
      firstParagraph:
        "Businesses providing electronic communications services or network infrastructure may require a Class Electronic Communications Service (ECS) or Electronic Communications Network Service (ECNS) license from ICASA. Without the appropriate license, your operations could be at risk of non-compliance, fines, or shutdowns.",
      secondParagraph:
        "We simplify the licensing process, ensuring your business remains compliant while you focus on innovation and growth.",
      checkpoints: [
        "Required for electronic communication services",
        "Issued by ICASA",
        "Essential for legal operations",
      ],
      additionalContent: "licenseTypes",
    },
    licenseTypes: [
      {
        title: "ECS License",
        description:
          "Electronic Communications Service license allows businesses to provide electronic communication services without owning the infrastructure.",
        icon: "FileText",
      },
      {
        title: "ECNS License",
        description:
          "Electronic Communications Network Service license allows businesses to build and operate network infrastructure.",
        icon: "Shield",
      },
    ],
    successStory: {
      scenario:
        "A startup launching a VoIP communication platform needed an ECS license to operate legally.",
      challenge:
        "They were unfamiliar with ICASA's licensing requirements and needed guidance on the application process.",
      solution:
        "Bilacert assessed their needs, filed their application, and ensured they met ICASA's operational requirements.",
      result:
        "The startup received their ECS license efficiently, allowing them to launch their VoIP platform legally and focus on growing their business.",
    },
    ctaHeading: "Ready to Get Your ECS/ECNS License?",
    metadata: {
      title: "Class ECS/ECNS Licensing",
      description:
        "Professional ECS and ECNS licensing services for South African telecommunications providers. Expert guidance for Electronic Communications Service and Network Service licenses.",
      keywords: [
        "ECS license",
        "ECNS license",
        "electronic communications service",
        "electronic communications network service",
        "telecommunications license",
        "ICASA ECS ECNS",
        "VoIP license",
        "network service license",
      ],
      url: "https://bilacert.co.za/services/class-ecs-ecns-licensing",
    },
    formPath: "/forms/class-ecs-ecns-licensing",
    phone: "075 430 4433",
  },

  "icasa-type-approvals": {
    id: "icasa-type-approvals",
    title: "ICASA Type Approvals",
    hero: {
      title: "Streamlined ICASA Type Approval Process",
      subtitle:
        "Expert guidance for ICASA type approval applications. We handle Standard, Simplified, Tested, and Untested approvals with a proven track record of success.",
      icon: "Award",
      image: "/herosetion/Type-Approval.jpg",
    },
    processingTime: "30 Working Days",
    heroStats: [
      {
        title: "30 Working Days",
        description: "Standard processing time",
      },
      {
        title: "100% Success Rate",
        description: "On first-time applications",
      },
      {
        title: "Expert Support",
        description: "Throughout the process",
      },
    ],
    servicePlans: [
      {
        title: "Standard Type Approval",
        description:
          "Required for any equipment that has not been type approved before by the Authority",
        features: [
          "Comprehensive testing",
          "Full documentation",
          "Complete compliance review",
        ],
        price: "From R5,000",
        popular: false,
      },
      {
        title: "Simplified Type Approval",
        description:
          "Available for products that already obtained type Approval from Authority",
        features: [
          "Streamlined process",
          "Reduced documentation",
          "Faster approval",
        ],
        price: "From R4,500",
        popular: true,
      },
      {
        title: "Tested & Untested Approvals",
        description:
          "We guide you through the decision-making process for the right approval method.",
        features: [
          "Expert guidance",
          "Risk assessment",
          "Optimal pathway selection",
        ],
        price: "From R4,500",
        popular: false,
      },
    ],
    processSteps: [
      {
        step: "1",
        title: "Pre-Assessment",
        description:
          "We evaluate your product and determine the most efficient approval pathway.",
      },
      {
        step: "2",
        title: "Documentation",
        description:
          "We compile and review all required documentation for accuracy and completeness.",
      },
      {
        step: "3",
        title: "Testing Coordination",
        description:
          "We arrange laboratory testing with accredited facilities when required.",
      },
      {
        step: "4",
        title: "Submission",
        description:
          "We submit your application to ICASA and manage all communications.",
      },
      {
        step: "5",
        title: "Approval",
        description:
          "We track progress and ensure timely approval of your certification.",
      },
    ],
    benefitsBox: [
      {
        icon: "Clock",
        title: "30% Faster Processing",
        description:
          "Our streamlined process reduces approval times compared to industry average.",
      },
      {
        icon: "Shield",
        title: "100% Success Rate",
        description: "We maintain a perfect record on first-time applications.",
      },
      {
        icon: "Users",
        title: "Expert Guidance",
        description:
          "Our team has deep knowledge of ICASA requirements and processes.",
      },
      {
        icon: "Zap",
        title: "Ongoing Support",
        description:
          "We provide continued support for renewals and compliance updates.",
      },
    ],
    whatIsSection: {
      title: "What is ICASA Type Approval?",
      firstParagraph:
        "ICASA (Independent Communications Authority of South Africa) requires all electronic communication equipment to be type-approved before being sold or used in South Africa. This ensures devices meet regulatory, technical, and safety standards.",
      secondParagraph:
        "Our team simplifies this complex process, handling all documentation, testing coordination, and regulatory communications to ensure your products reach the market quickly and compliantly.",
      checkpoints: [
        "All telecommunications equipment",
        "Radio frequency devices",
        "Electronic communication products",
      ],
    },
    successStory: {
      scenario:
        "A technology company wanted to import a new range of wireless routers into South Africa.",
      challenge:
        "They needed ICASA type approval but were unfamiliar with the regulatory requirements and documentation process.",
      solution:
        "Bilacert managed their ICASA type approval application from start to finish, ensuring compliance and timely market entry.",
      result:
        "The company received approval 30% faster than industry average, allowing them to launch their products on schedule and capture market opportunities.",
    },
    ctaHeading: "Ready to Get Your ICASA Type Approval?",
    metadata: {
      title: "ICASA Type Approvals",
      description:
        "Expert ICASA type approval services for South African businesses. We handle Standard, Simplified, Tested, and Untested approvals with fast processing and comprehensive support.",
      keywords: [
        "ICASA type approval",
        "ICASA certification",
        "telecommunications approval",
        "radio frequency approval",
        "electronic device approval",
        "ICASA compliance",
        "type approval South Africa",
        "ICASA testing",
      ],
      url: "https://bilacert.co.za/services/icasa-type-approvals",
    },
    formPath: "/forms/icasa-type-approvals",
    phone: "075 430 4433",
  },

  "license-exemptions": {
    id: "license-exemptions",
    title: "License Exemptions",
    hero: {
      title: "ECS/ECNS License Exemption Services",
      subtitle:
        "Expert guidance for ECS/ECNS license exemptions. We help determine if your business qualifies for exemptions and provide the necessary documentation for compliance assurance.",
      icon: "Radio",
      image: "/ecs-ecns-licensing-explained.jpg",
    },
    processingTime: "30 working Days",
    heroStats: [
      {
        title: "30 Days",
        description: "Standard processing time with our structured approach.",
      },
      {
        title: "Accurate Assessment",
        description:
          "We analyze your business model to determine if you qualify for an exemption.",
      },
      {
        title: "Cost Savings",
        description:
          "Avoid unnecessary licensing fees by confirming your exemption status.",
      },
    ],
    servicePlans: [
      {
        title: "Basic",
        description: "Eligibility Assessment",
        features: [
          "Business model assessment",
          "Exemption verification",
          "Basic guidance",
        ],
        price: "R2,500",
        popular: false,
      },
      {
        title: "Standard",
        description: "Full Documentation & ICASA Confirmation",
        features: [
          "Full documentation preparation",
          "ICASA confirmation",
          "Compliance documentation",
          "Verification process",
        ],
        price: "R6,800",
        popular: true,
      },
      {
        title: "Premium",
        description: "End-to-End Exemption Processing",
        features: [
          "Complete end-to-end service",
          "Ongoing compliance support",
          "Priority processing",
          "Annual compliance review",
        ],
        price: "R8,000",
        popular: false,
      },
    ],
    processSteps: [
      {
        step: "1",
        title: "Consultation & Business Model Assessment",
        description:
          "We review your business model to determine if an ECS/ECNS exemption applies.",
      },
      {
        step: "2",
        title: "Documentation & Compliance Review",
        description:
          "We compile the necessary paperwork to support your exemption claim.",
      },
      {
        step: "3",
        title: "ICASA Confirmation (If Required)",
        description:
          "For certain cases, we submit a request to ICASA for official exemption confirmation.",
      },
      {
        step: "4",
        title: "Exemption Approval & Compliance Assurance",
        description:
          "Once verified, we provide you with the necessary documentation to prove your exemption status.",
      },
      {
        step: "5",
        title: "Ongoing Compliance Monitoring",
        description:
          "We track regulatory changes to ensure your exemption remains valid and your business stays compliant.",
      },
    ],
    benefitsBox: [
      {
        icon: "Clock",
        title: "30 Days",
        description: "Standard processing time with our structured approach.",
      },
      {
        icon: "Shield",
        title: "Accurate Assessment",
        description:
          "We analyze your business model to determine if you qualify for an exemption.",
      },
      {
        icon: "Users",
        title: "Cost Savings",
        description:
          "Avoid unnecessary licensing fees by confirming your exemption status.",
      },
      {
        icon: "Zap",
        title: "Faster Market Entry",
        description:
          "Operate without licensing delays when you qualify for exemptions.",
      },
    ],
    whatIsSection: {
      title: "What are ECS/ECNS License Exemptions?",
      firstParagraph:
        "Not all businesses providing electronic communications services or infrastructure require an ICASA ECS (Electronic Communications Service) or ECNS (Electronic Communications Network Service) license. Some may qualify for an ICASA License Exemption, allowing them to operate legally without the need for a full licensing process.",
      secondParagraph:
        "However, determining whether your business qualifies for an exemption can be complex. We simplify the process, ensuring you have the right exemption in place to avoid unnecessary costs and compliance risks.",
      checkpoints: [
        "Available for specific business models",
        "Under ICASA's exemption list",
        "Avoids full licensing process",
      ],
    },
    successStory: {
      scenario:
        "A software company offering cloud-based VoIP services assumed they needed an ECS license.",
      challenge:
        "They were unsure about their licensing requirements and wanted to avoid unnecessary costs and regulatory hurdles.",
      solution:
        "Bilacert assessed their operations and confirmed they qualified for an exemption, saving them licensing costs.",
      result:
        "The company now operates legally under an exemption, avoiding unnecessary licensing fees while maintaining full compliance with ICASA regulations.",
    },
    ctaHeading: "Ready to Check Your Exemption Status?",
    metadata: {
      title: "License Exemptions",
      description:
        "Expert ECS/ECNS license exemption services for South African businesses. We help determine if your business qualifies for ICASA license exemptions and provide compliance documentation.",
      keywords: [
        "license exemption",
        "ECS exemption",
        "ECNS exemption",
        "ICASA exemption",
        "license exemption South Africa",
        "exemption verification",
        "compliance exemption",
        "regulatory exemption",
      ],
      url: "https://bilacert.co.za/services/license-exemptions",
    },
    formPath: "/forms/license-exemptions",
    phone: "075 430 4433",
  },

  "nrcs-loa-applications": {
    id: "nrcs-loa-applications",
    title: "NRCS LOA Applications",
    hero: {
      title: "Streamlined NRCS Letter of Authority Applications",
      subtitle:
        "Expert guidance for NRCS LOA applications. We handle product eligibility assessment, technical documentation, testing coordination, and ensure smooth approval processes.",
      icon: "FileText",
      image: "/NRCS.jpg",
    },
    processingTime: "120 Days",
    heroStats: [
      {
        title: "120 Days",
        description: "Standard processing time",
      },
      {
        title: "Regulatory Expertise",
        description: "NRCS requirements specialist",
      },
      {
        title: "Hassle-Free Process",
        description: "We handle all paperwork",
      },
    ],
    servicePlans: [
      {
        title: "Basic",
        description: "Eligibility Assessment & Document Review",
        features: [
          "Product eligibility assessment",
          "Document review",
          "Basic guidance",
        ],
        price: "R3,500",
        popular: false,
      },
      {
        title: "Standard",
        description: "Full Application Submission & NRCS Liaison",
        features: [
          "Full documentation preparation",
          "NRCS submission",
          "Liaison & tracking",
          "Testing coordination",
        ],
        price: "R7,000",
        popular: true,
      },
      {
        title: "Premium",
        description: "End-to-End Approval & Compliance Support",
        features: [
          "Complete end-to-end service",
          "Testing coordination",
          "Ongoing compliance support",
          "Priority processing",
        ],
        price: "R10,500",
        popular: false,
      },
    ],
    processSteps: [
      {
        step: "1",
        title: "Consultation & Product Review",
        description:
          "We assess your product's technical specifications and determine LOA requirements.",
      },
      {
        step: "2",
        title: "Documentation & Compliance Check",
        description:
          "We compile and verify all necessary compliance documents before submission.",
      },
      {
        step: "3",
        title: "Submission & NRCS Liaison",
        description:
          "Bilacert submits the application and manages all communication with NRCS.",
      },
      {
        step: "4",
        title: "Testing (If Required)",
        description:
          "For products needing laboratory testing, we coordinate with accredited testing facilities.",
      },
      {
        step: "5",
        title: "Approval & Certification",
        description:
          "Once approved, we deliver your NRCS LOA certificate and provide ongoing compliance support.",
      },
    ],
    benefitsBox: [
      {
        icon: "Clock",
        title: "30 working Days",
        description: "Standard processing time with our efficient approach.",
      },
      {
        icon: "Shield",
        title: "Regulatory Expertise",
        description:
          "Our team understands NRCS requirements and ensures applications meet all standards.",
      },
      {
        icon: "Users",
        title: "Hassle-Free Processing",
        description:
          "We handle all paperwork and application submissions on your behalf.",
      },
      {
        icon: "Zap",
        title: "Faster Approvals",
        description:
          "Our efficient process minimizes delays and accelerates market entry.",
      },
    ],
    whatIsSection: {
      title: "What is an NRCS LOA?",
      firstParagraph:
        "The National Regulator for Compulsory Specifications (NRCS) mandates that certain electrical and electronic products must receive a Letter of Authority (LOA) before entering the South African market. This certification ensures products meet South African safety and quality standards.",
      secondParagraph:
        "Our team streamlines the NRCS LOA application process, ensuring businesses obtain approvals efficiently while staying fully compliant with regulatory requirements.",
      checkpoints: [
        "Electrical and electronic products",
        "Safety and quality standards compliance",
        "Mandatory before importation or sale",
      ],
    },
    successStory: {
      scenario:
        "An electronics importer wanted to bring in a new range of LED lighting products but was unaware of NRCS LOA requirements.",
      challenge:
        "They needed an LOA but lacked the technical knowledge and documentation required for NRCS compliance.",
      solution:
        "Bilacert confirmed the LOA requirement, handled their submission, and ensured a smooth approval process.",
      result:
        "The company received their NRCS LOA efficiently, allowing them to import and sell their LED products legally in South Africa without delays.",
    },
    ctaHeading: "Ready to Get Your NRCS LOA?",
    metadata: {
      title: "NRCS LOA Applications",
      description:
        "Professional NRCS Letter of Authority (LOA) application services for South African businesses. Expert guidance for electrical and electronic product compliance.",
      keywords: [
        "NRCS LOA",
        "NRCS Letter of Authority",
        "NRCS certification",
        "electrical product approval",
        "electronic product compliance",
        "NRCS South Africa",
        "LOA application",
        "NRCS testing",
      ],
      url: "https://bilacert.co.za/services/nrcs-loa-applications",
    },
    formPath: "/forms/nrcs-loa-applications",
    phone: "075 430 4433",
  },

  "radio-dealer-licensing": {
    id: "radio-dealer-licensing",
    title: "Radio Dealer Licensing",
    hero: {
      title: "Complete Radio Dealer Licensing Support",
      subtitle:
        "Expert guidance for Radio Dealer License applications. We handle eligibility assessment, documentation preparation, ICASA liaison, and ongoing compliance support.",
      icon: "Headphones",
      image: "/herosetion/Radio-Dealer.jpg",
    },
    processingTime: "30 Days",
    heroStats: [
      {
        title: "30 Days",
        description: "Standard processing time with our streamlined approach.",
      },
      {
        title: "Regulatory Expertise",
        description:
          "Deep understanding of ICASA regulations ensures smooth approval process.",
      },
      {
        title: "Hassle-Free Process",
        description:
          "We handle all paperwork, reducing application time significantly.",
      },
    ],
    servicePlans: [
      {
        title: "Basic",
        description: "Consultation & Application Review",
        features: [
          "Eligibility assessment",
          "Application review",
          "Basic guidance",
        ],
        price: "R1,000",
        popular: false,
      },
      {
        title: "Standard",
        description: "Full Documentation Submission & Liaison",
        features: [
          "Full documentation preparation",
          "ICASA submission",
          "Liaison & tracking",
          "Application management",
        ],
        price: "R3,000",
        popular: true,
      },
      {
        title: "Premium",
        description: "End-to-End Approval & Ongoing Support",
        features: [
          "Complete end-to-end service",
          "Ongoing compliance support",
          "Priority processing",
          "Renewal management",
        ],
        price: "R4,000",
        popular: false,
      },
    ],
    processSteps: [
      {
        step: "1",
        title: "Consultation & Eligibility Check",
        description:
          "We assess whether your business requires a Radio Dealer License and identify necessary documentation.",
      },
      {
        step: "2",
        title: "Application Preparation",
        description:
          "Our experts compile, review, and prepare all required documents for complete and accurate submission.",
      },
      {
        step: "3",
        title: "Submission & ICASA Liaison",
        description:
          "We submit the application and manage all interactions with ICASA to streamline the approval process.",
      },
      {
        step: "4",
        title: "License Approval & Issuance",
        description:
          "Once approved, we ensure you receive your official Radio Dealer License.",
      },
      {
        step: "5",
        title: "Post-License Compliance",
        description:
          "We provide ongoing support for license renewals, amendments, and regulatory compliance updates.",
      },
    ],
    benefitsBox: [
      {
        icon: "Clock",
        title: "30 Days",
        description: "Standard processing time with our streamlined approach.",
      },
      {
        icon: "Shield",
        title: "Regulatory Expertise",
        description:
          "Deep understanding of ICASA regulations ensures smooth approval process.",
      },
      {
        icon: "Users",
        title: "Fast & Hassle-Free",
        description:
          "We handle all paperwork, reducing application time significantly.",
      },
      {
        icon: "Zap",
        title: "Ongoing Support",
        description:
          "We assist with renewals, amendments, and regulatory updates.",
      },
    ],
    whatIsSection: {
      title: "What is a Radio Dealer License?",
      firstParagraph:
        "Any business that sells, distributes, or supplies radio communication equipment in South Africa must hold a valid Radio Dealer License issued by ICASA. Without this license, trading in such equipment is illegal and can result in hefty fines or business disruptions.",
      secondParagraph:
        "We simplify the licensing process, ensuring your business remains compliant while you focus on growth.",
      checkpoints: [
        "Required for radio communication equipment sales",
        "Issued by ICASA",
        "Mandatory for legal trading",
      ],
    },
    successStory: {
      scenario:
        "A two-way radio distributor was unaware of the ICASA licensing requirements and faced operational risks.",
      challenge:
        "They needed a Radio Dealer License urgently to avoid business disruption and legal penalties.",
      solution:
        "Bilacert swiftly secured their Radio Dealer License, ensuring they could continue trading legally.",
      result:
        "The distributor now operates without disruptions, maintaining full compliance with ICASA regulations and avoiding costly penalties.",
    },
    ctaHeading: "Ready to Get Your Radio Dealer License?",
    metadata: {
      title: "Radio Dealer Licensing",
      description:
        "Complete Radio Dealer License services for South African businesses selling radio communication equipment. Expert ICASA licensing support and compliance guidance.",
      keywords: [
        "radio dealer license",
        "ICASA radio license",
        "radio communication license",
        "two-way radio license",
        "radio equipment dealer",
        "ICASA dealer license",
        "radio licensing South Africa",
        "communication equipment license",
      ],
      url: "https://bilacert.co.za/services/radio-dealer-licensing",
    },
    formPath: "/forms/radio-dealer-licensing",
    phone: "075 430 4433",
  },

  "ski-boat-vhf-licensing": {
    id: "ski-boat-vhf-licensing",
    title: "Ski Boat VHF Licensing",
    hero: {
      title: "Professional VHF Radio Licensing for Marine Vessels",
      subtitle:
        "Expert guidance for Ski Boat VHF Radio licensing. We handle vessel assessment, application preparation, ICASA liaison, and ensure compliance with maritime communication regulations.",
      icon: "Ship",
      image: "/herosetion/Ski-Boat-VHF.jpg",
    },
    processingTime: "30 working Days",
    heroStats: [
      {
        title: "30 working Days",
        description: "Standard processing time",
      },
      {
        title: "Maritime Compliance",
        description: "ICASA maritime regulations specialist",
      },
      {
        title: "Fleet Licensing",
        description: "Multiple vessel support",
      },
    ],
    servicePlans: [
      {
        title: "Basic",
        description: "Consultation & Application Review",
        features: ["Vessel assessment", "Application review", "Basic guidance"],
        price: "R1,800",
        popular: false,
      },
      {
        title: "Standard",
        description: "Full Documentation Submission & Liaison",
        features: [
          "Full documentation preparation",
          "ICASA submission",
          "Liaison & tracking",
          "Application management",
        ],
        price: "R3,000",
        popular: true,
      },
      {
        title: "Premium",
        description: "End-to-End Approval & Ongoing Support",
        features: [
          "Complete end-to-end service",
          "Ongoing compliance support",
          "Priority processing",
          "Fleet licensing",
        ],
        price: "R4,500",
        popular: false,
      },
    ],
    processSteps: [
      {
        step: "1",
        title: "Consultation & Eligibility Check",
        description:
          "We assess whether your ski boat or vessel requires a VHF license and identify necessary documentation.",
      },
      {
        step: "2",
        title: "Application Preparation",
        description:
          "Our experts compile, review, and prepare all required documents for complete and accurate submission.",
      },
      {
        step: "3",
        title: "Submission & ICASA Liaison",
        description:
          "We submit the application and manage all interactions with ICASA to streamline the approval process.",
      },
      {
        step: "4",
        title: "License Approval & Issuance",
        description:
          "Once approved, we ensure you receive your official ICASA VHF Radio License.",
      },
      {
        step: "5",
        title: "Post-License Compliance",
        description:
          "We provide ongoing support for license renewals, amendments, and regulatory compliance updates.",
      },
    ],
    benefitsBox: [
      {
        icon: "Clock",
        title: "30 Days",
        description: "Standard processing time with our streamlined approach.",
      },
      {
        icon: "Shield",
        title: "Expert Guidance",
        description:
          "We ensure your application meets all ICASA requirements for maritime communication.",
      },
      {
        icon: "Users",
        title: "Hassle-Free Processing",
        description:
          "We handle all documentation and submissions on your behalf.",
      },
      {
        icon: "Zap",
        title: "Faster Approvals",
        description:
          "Our efficient process minimizes delays, getting you on the water sooner.",
      },
    ],
    whatIsSection: {
      title: "What is VHF Radio Licensing?",
      firstParagraph:
        "In South Africa, ski boats and other vessels using VHF radios for marine communication are required to have a valid VHF Radio License from ICASA. This ensures that all maritime radio communication remains safe, legal, and interference-free.",
      secondParagraph:
        "We simplify the process of obtaining your Ski Boat VHF License, ensuring compliance with ICASA regulations while allowing you to focus on your boating experience.",
      checkpoints: [
        "Required for marine VHF radio communication",
        "Issued by ICASA",
        "Essential for safe maritime operations",
      ],
    },
    successStory: {
      scenario:
        "A fishing charter company needed multiple VHF licenses for its fleet of boats.",
      challenge:
        "They needed to ensure all vessels were legally compliant before peak season and were unfamiliar with the licensing process.",
      solution:
        "Bilacert managed the entire process, ensuring all vessels were legally compliant with maritime regulations.",
      result:
        "The charter company received all their VHF licenses efficiently, allowing them to operate legally during peak season without any compliance issues.",
    },
    ctaHeading: "Ready to Get Your VHF License?",
    metadata: {
      title: "Ski Boat VHF Licensing",
      description:
        "Professional VHF radio licensing services for South African marine vessels including ski boats, yachts, and recreational watercraft. Expert ICASA maritime compliance support.",
      keywords: [
        "VHF radio license",
        "ski boat VHF",
        "marine radio license",
        "boat VHF license",
        "yacht radio license",
        "maritime radio license",
        "ICASA VHF license",
        "marine communication license",
      ],
      url: "https://bilacert.co.za/services/ski-boat-vhf-licensing",
    },
    formPath: "/forms/ski-boat-vhf-licensing",
    phone: "075 430 4433",
  },
};

export function getServiceConfig(serviceId: string): ServiceConfig | null {
  return servicesConfig[serviceId] || null;
}

export function getAllServiceIds(): string[] {
  return Object.keys(servicesConfig);
}
````

## File: apps/client/next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zpgxnohxizcmuwbosapx.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
````

## File: biome.json
````json
{
  "$schema": "https://biomejs.dev/schemas/2.2.0/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": true,
    "includes": [
      "**",
      "!**/node_modules/**",
      "!**/.next/**",
      "!**/dist/**",
      "!**/build/**"
    ]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "a11y": {
        "noAriaHiddenOnFocusable": "off",
        "noLabelWithoutControl": "off",
        "noStaticElementInteractions": "off",
        "noSvgWithoutTitle": "off",
        "useButtonType": "off",
        "useKeyWithClickEvents": "off",
        "useMediaCaption": "off",
        "useSemanticElements": "off"
      },
      "correctness": {
        "noInvalidUseBeforeDeclaration": "off",
        "useExhaustiveDependencies": "off"
      },
      "performance": {
        "noImgElement": "off"
      },
      "security": {
        "noDangerouslySetInnerHtml": "off"
      },
      "style": {
        "noNonNullAssertion": "off"
      },
      "suspicious": {
        "noArrayIndexKey": "off",
        "noAssignInExpressions": "off",
        "noExplicitAny": "off",
        "noImplicitAnyLet": "off",
        "useIterableCallbackReturn": "off",
        "noUnknownAtRules": "off"
      }
    },
    "domains": {
      "next": "recommended",
      "react": "recommended"
    }
  },
  "assist": {
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  }
}
````

## File: packages/supabase/src/admin.ts
````typescript
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./supabaseType";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const createSupabaseAdminClient = () => {
  return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};
````

## File: packages/supabase/src/hooks/useBlogs.ts
````typescript
"use client";

import { useDataFetching } from "./useDataFetching";
import type { BlogPost } from "@bilacert/shared/types";

export function useBlogs() {
  return useDataFetching<BlogPost>("blog_posts");
}
````

## File: packages/supabase/src/hooks/useContacts.ts
````typescript
"use client";

import { useDataFetching } from "./useDataFetching";
import type { Contact } from "@bilacert/shared/types";

export function useContacts() {
  return useDataFetching<Contact>("contacts", "*", "submitted_at");
}
````

## File: packages/supabase/src/hooks/useServices.ts
````typescript
"use client";

import { useDataFetching } from "./useDataFetching";
import type { Service } from "@bilacert/shared/types";

export function useServices() {
  return useDataFetching<Service>("services");
}
````

## File: packages/supabase/src/hooks/useSubmissions.ts
````typescript
"use client";

import { useDataFetching } from "./useDataFetching";
import type { Submission } from "@bilacert/shared/types";

export function useSubmissions() {
  return useDataFetching<Submission>("form_submissions");
}
````

## File: packages/supabase/src/hooks/useTestimonials.ts
````typescript
"use client";

import { useDataFetching } from "./useDataFetching";
import type { Testimonial } from "@bilacert/shared/types";

export function useTestimonials() {
  return useDataFetching<Testimonial>("testimonials");
}
````

## File: packages/supabase/src/hooks/useUser.ts
````typescript
"use client";

import { useEffect, useState } from "react";
import type { User, Session } from "@supabase/supabase-js";
import {
  createSupabaseBrowserClient,
  isSupabaseConfigured,
} from "../client";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    const supabase = createSupabaseBrowserClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Initial load
    supabase.auth.getSession().then(({ data: { session } }: { data: { session: Session | null } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return { user, loading, error: null };
}
````

## File: packages/supabase/src/Mutations/blogs.ts
````typescript
import { createSupabaseAdminClient } from "../admin";
import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import { createSupabaseBrowserClient } from "../client";
import type { Database } from "../supabaseType";

type BlogInsert = Database["public"]["Tables"]["blog_posts"]["Insert"];

export async function incrementBlogPostViews(slug: string): Promise<void> {
  const supabase = createSupabaseBrowserClient();
  const { error } = await supabase
    .rpc("increment_views", { post_slug: slug });

  if (error) {
    console.error("Failed to increment views:", error.message);
  }
}

export async function upsertBlog(data: BlogInsert) {
  const supabase = createSupabaseAdminClient();
  const { data: blog, error } = await supabase
    .from("blog_posts")
    .upsert(data)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(blog, {
    tags: [CACHE_TAGS.blogs, CACHE_TAGS.blog(blog.slug)],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.blog,
      CACHE_PATHS.blogPost(blog.slug),
    ],
    mode: "immediate",
  });
}

export async function deleteBlog(id: string) {
  const supabase = createSupabaseAdminClient();
  const { data: existing, error: readError } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("id", id)
    .maybeSingle();

  if (readError) throw new Error(readError.message);

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return mutationResult(undefined, {
    tags: [
      CACHE_TAGS.blogs,
      ...(existing?.slug ? [CACHE_TAGS.blog(existing.slug)] : []),
    ],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.blog,
      ...(existing?.slug ? [CACHE_PATHS.blogPost(existing.slug)] : []),
    ],
    mode: "immediate",
  });
}
````

## File: repomix.config.json
````json
{
  "$schema": "https://repomix.com/schemas/latest/schema.json",
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "context.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "truncateBase64": false,
    "copyToClipboard": false,
    "includeFullDirectoryStructure": false,
    "tokenCountTree": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100,
      "includeDiffs": false,
      "includeLogs": false,
      "includeLogsCount": 50
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDotIgnore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions
/.turbo

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: apps/admin/app/admin/blogs/BlogEditor.tsx
````typescript
"use client";
import DOMPurify from "isomorphic-dompurify";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
      Loading Editor...
    </div>
  ),
});

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

interface BlogEditorProps {
  value: string;
  onChange: (value: string) => void;
  onImageSelect?: (url: string) => void;
  title: string;
  featured_image: string | null | undefined;
}

export default function BlogEditor({
  value,
  onChange,
  onImageSelect: _onImageSelect,
  title,
  featured_image,
}: BlogEditorProps) {
  const [view, setView] = useState<"edit" | "preview">("edit");
  const [sanitized, setSanitized] = useState("");

  useEffect(() => {
    setSanitized(DOMPurify.sanitize(value));
  }, [value]);

  return (
    <Card className="max-w-5xl w-full mx-auto p-4 md:p-8">
      <CardHeader className="flex items-center justify-between bg-white sticky top-0 z-10 py-2 border-b border-slate-100">
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setView("edit")}
            className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
              view === "edit"
                ? "bg-white shadow-sm text-indigo-600"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Edit Content
          </button>
          <button
            type="button"
            onClick={() => setView("preview")}
            className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
              view === "preview"
                ? "bg-white shadow-sm text-indigo-600"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Live Preview
          </button>
        </div>
      </CardHeader>

      <div className="w-full">
        {view === "edit" ? (
          <div className="animate-in fade-in duration-300 rounded-2xl border border-slate-200 shadow-sm ">
            <style>{`
              .ql-container {
                font-size: 16px;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
              }
              .ql-toolbar {
                position: sticky;
                top: 68px; /* Adjust this to match the header's height */
                z-index: 9;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                border-color: #f1f5f9 !important;
                background: #f8fafc;
                border-bottom: 1px solid #f1f5f9;
              }
              .ql-editor {
                min-height: 400px;
              }
            `}</style>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={onChange}
              modules={modules}
              className="border-none"
            />
          </div>
        ) : (
          <div className="p-4 animate-in slide-in-from-bottom-2 duration-300">
            {featured_image && (
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4 text-slate-800">
                  Featured Image
                </h2>
                <div className="relative aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg border border-slate-200">
                  <Image
                    src={featured_image}
                    alt="Featured Image Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
            <div className="mb-10 border-b border-slate-100 pb-8">
              <h1 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                {title || "Untitled Post"}
              </h1>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="bg-slate-100 px-2 py-1 rounded">Preview</span>
                <span>•</span>
                <span>{new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            <article
              className="prose prose-slate prose-indigo max-w-none 
                                       break-words overflow-wrap-anywhere
                                       prose-headings:font-bold prose-headings:tracking-tight
                                       prose-a:text-indigo-600 prose-img:rounded-2xl prose-img:shadow-lg
                                       [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl max-w-none 
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 
          [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-slate-700
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:my-4
          [&>img]:rounded-lg"
              dangerouslySetInnerHTML={{
                __html:
                  sanitized ||
                  '<p class="text-slate-400 italic">No content to display yet...</p>',
              }}
            />
          </div>
        )}
      </div>
    </Card>
  );
}
````

## File: apps/admin/components/admin/AdminLayout.tsx
````typescript
"use client";

import { useUser } from "@bilacert/supabase/hooks/useUser";
import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { useEffect } from "react";
import AdminHeader from "@/components/admin/Header";
import AdminSidebar from "@/components/admin/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading) {
      if (!user && pathname !== "/admin/login") {
        router.push("/admin/login");
      }
      if (user && pathname === "/admin/login") {
        router.push("/admin/dashboard");
      }
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user && pathname !== "/admin/login") {
    return null; // or a loading spinner, as the redirect is happening
  }

  if (user && pathname === "/admin/login") {
    return null; // or a loading spinner, as the redirect is happening
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="flex min-h-svh flex-1 flex-col bg-background">
        <AdminHeader />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </SidebarProvider>
  );
}
````

## File: apps/admin/components/admin/Header.tsx
````typescript
"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { useUser } from "@bilacert/supabase/hooks/useUser";
import { ChevronDown, LogOut, User as UserIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const supabase = createSupabaseBrowserClient();

function getTitleFromPathname(pathname: string): string {
  const segment = pathname.split("/").pop() || "dashboard";
  return segment.charAt(0).toUpperCase() + segment.slice(1);
}

export default function AdminHeader() {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const avatar = PlaceHolderImages.find((img) => img.id === "user-avatar-1");
  const pageTitle = getTitleFromPathname(pathname);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push("/admin/login");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Logout failed",
        description: error.message,
      });
    }
  };

  const getInitials = (email: string) => {
    return email ? email.substring(0, 2).toUpperCase() : "AD";
  };

  const displayName = user?.user_metadata?.full_name || user?.email;
  const avatarUrl =
    user?.user_metadata?.avatar_url ||
    user?.user_metadata?.profile_image ||
    (avatar ? avatar.imageUrl : undefined);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-card px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <h1 className="hidden text-xl font-semibold md:block">{pageTitle}</h1>
      </div>

      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={avatarUrl} alt={displayName || "Admin"} />
                <AvatarFallback>{getInitials(user.email || "")}</AvatarFallback>
              </Avatar>
              <div className="hidden flex-col items-start text-left md:flex">
                <span className="text-sm font-medium">{displayName}</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-medium">{displayName}</span>
                <span className="text-xs text-muted-foreground">
                  {user.email}
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  );
}
````

## File: apps/admin/components/PexelsImagePicker.tsx
````typescript
"use client";

import {
  ExternalLink,
  Image as ImageIcon,
  Loader2,
  Search,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useCallback, useEffect, useState } from "react";

interface PexelsImage {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
}

interface PexelsImagePickerProps {
  onSelect: (url: string) => void;
  currentImageUrl?: string;
  suggestions?: string[];
}

const PexelsImagePicker: React.FC<PexelsImagePickerProps> = ({
  onSelect,
  currentImageUrl,
  suggestions = [],
}) => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<PexelsImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedUrl, setSelectedUrl] = useState(currentImageUrl || "");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setSelectedUrl(currentImageUrl || "");
  }, [currentImageUrl]);

  const loadInitialPhotos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/pexels");
      if (!response.ok) throw new Error("Failed to fetch curated photos");
      const data = await response.json();
      setImages(data.photos || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchImages = useCallback(
    async (searchQuery?: string) => {
      const q = searchQuery || query;
      if (!q.trim()) {
        loadInitialPhotos();
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/pexels?query=${encodeURIComponent(q)}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images from Pexels");
        }
        const data = await response.json();
        setImages(data.photos || []);
      } catch (err: any) {
        setError(err.message || "An error occurred while searching");
      } finally {
        setLoading(false);
      }
    },
    [query, loadInitialPhotos],
  );

  // Fetch curated photos when searching panel is opened
  useEffect(() => {
    if (showSearch && images.length === 0) {
      // If we have suggestions, use the first one as initial query
      if (suggestions.length > 0) {
        setQuery(suggestions[0] || "");
        searchImages(suggestions[0]);
      } else {
        loadInitialPhotos();
      }
    }
  }, [showSearch, images.length, suggestions, searchImages, loadInitialPhotos]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchImages();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    searchImages(suggestion);
  };

  const handleSelect = (image: PexelsImage, size: keyof PexelsImage["src"]) => {
    const url = image.src[size];
    setSelectedUrl(url);
    onSelect(url);
    setShowSearch(false);
  };

  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <span className="block text-sm font-medium text-gray-700">
          Select from Pexels
        </span>
        {/* Requirement: Prominent link to Pexels */}
        <a
          href="https://www.pexels.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-gray-400 hover:text-emerald-600 flex items-center gap-1"
        >
          Photos provided by Pexels
        </a>
      </div>

      {/* Preview Section */}
      <div className="relative aspect-video w-full max-w-md rounded-lg overflow-hidden border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center group">
        {selectedUrl ? (
          <>
            <Image
              src={selectedUrl}
              alt="Preview"
              fill
              className="object-cover"
              unoptimized={selectedUrl.includes("pexels.com")}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setShowSearch(!showSearch)}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 flex items-center gap-2"
              >
                <ImageIcon size={16} />
                Change Image
              </button>
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors"
          >
            <ImageIcon size={48} strokeWidth={1} />
            <span className="font-medium">
              Click to select an image from Pexels
            </span>
          </button>
        )}
      </div>

      {/* Search Toggle */}
      {selectedUrl && (
        <button
          type="button"
          onClick={() => setShowSearch(!showSearch)}
          className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
        >
          {showSearch ? "Hide Pexels Search" : "Search Pexels for new image"}
        </button>
      )}

      {/* Search Section */}
      {showSearch && (
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search Pexels (e.g. 'coding', 'business', 'tech')..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              />
            </div>
            <button
              type="button"
              onClick={() => searchImages()}
              disabled={loading}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                "Search"
              )}
            </button>
          </div>

          {suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold w-full mb-1">
                Suggestions from tags:
              </span>
              {suggestions.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleSuggestionClick(tag)}
                  className={`text-xs px-3 py-1 rounded-full border transition-all ${
                    query.toLowerCase() === tag.toLowerCase()
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:border-emerald-500 hover:text-emerald-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:border-emerald-500 transition-colors"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src.small}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-2 space-y-2">
                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => handleSelect(image, "large")}
                      className="text-[10px] w-full bg-emerald-50 text-emerald-700 py-1 rounded hover:bg-emerald-100 font-bold"
                    >
                      SELECT LARGE
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelect(image, "medium")}
                      className="text-[10px] w-full bg-blue-50 text-blue-700 py-1 rounded hover:bg-blue-100 font-bold"
                    >
                      SELECT MEDIUM
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-gray-500 border-t pt-2">
                    {/* Requirement: Credit photographers with links */}
                    <span className="truncate max-w-[80px]">
                      By {image.photographer}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600"
                        title="View photo on Pexels"
                      >
                        <ImageIcon size={12} />
                      </a>
                      <a
                        href={image.photographer_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600"
                        title={`View ${image.photographer}'s profile`}
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {!loading && images.length === 0 && (
              <div className="col-span-full py-8 text-center text-gray-500">
                {query
                  ? `No images found for "${query}"`
                  : "No photos available."}
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-gray-100 flex justify-center">
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://images.pexels.com/lib/api/pexels.png"
                alt="Pexels Logo"
                width={100}
                height={24}
                className="h-6 w-auto opacity-50 hover:opacity-100 transition-opacity"
                unoptimized
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PexelsImagePicker;
````

## File: apps/admin/components/ui/accordion.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
````

## File: apps/admin/components/ui/alert-dialog.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className,
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
````

## File: apps/admin/components/ui/alert.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
````

## File: apps/admin/components/ui/avatar.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
````

## File: apps/admin/components/ui/badge.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
````

## File: apps/admin/components/ui/button.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
````

## File: apps/admin/components/ui/calendar.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import type * as React from "react";
import { DayPicker } from "react-day-picker";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
````

## File: apps/admin/components/ui/card.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
````

## File: apps/admin/components/ui/carousel.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
````

## File: apps/admin/components/ui/chart.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as React from "react";
import * as RechartsPrimitive from "recharts";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      if (!item) return null;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item as any, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item: any, index: number) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(
              config,
              item as any,
              key,
            );
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            },
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref,
  ) => {
    const { config } = useChart();

    if (!payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className,
        )}
      >
        {payload.map((item: any) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(
            config,
            item as any,
            key,
          );

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  },
);
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string;
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
````

## File: apps/admin/components/ui/checkbox.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
````

## File: apps/admin/components/ui/DateRangePicker.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import type * as React from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  date: DateRange | undefined;
  onDateChange: (date: DateRange | undefined) => void;
}

export function DateRangePicker({
  date,
  onDateChange,
  className,
}: DateRangePickerProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={onDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
````

## File: apps/admin/components/ui/dialog.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-transparent data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
````

## File: apps/admin/components/ui/dropdown-menu.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
````

## File: apps/admin/components/ui/form.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
````

## File: apps/admin/components/ui/input.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
````

## File: apps/admin/components/ui/label.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
````

## File: apps/admin/components/ui/menubar.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  ),
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
````

## File: apps/admin/components/ui/popover.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
````

## File: apps/admin/components/ui/progress.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
````

## File: apps/admin/components/ui/radio-group.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import * as React from "react";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
````

## File: apps/admin/components/ui/scroll-area.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
````

## File: apps/admin/components/ui/select.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
````

## File: apps/admin/components/ui/separator.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
````

## File: apps/admin/components/ui/sheet.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
````

## File: apps/admin/components/ui/sidebar.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeft } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open],
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open);
    }, [isMobile, setOpen]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, toggleSidebar],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className,
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar Menu</SheetTitle>
              <SheetDescription>
                Navigation links for the admin panel.
              </SheetDescription>
            </SheetHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className,
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className,
      )}
      {...props}
    />
  );
});
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className,
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className,
    )}
    {...props}
  />
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className,
    )}
    {...props}
  />
));
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
````

## File: apps/admin/components/ui/slider.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
````

## File: apps/admin/components/ui/switch.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
````

## File: apps/admin/components/ui/table.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import * as React from "react";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
````

## File: apps/admin/components/ui/tabs.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
````

## File: apps/admin/components/ui/textarea.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import * as React from "react";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
````

## File: apps/admin/components/ui/toast.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
````

## File: apps/admin/components/ui/tooltip.tsx
````typescript
"use client";

import { cn } from "@bilacert/shared/cn";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
````

## File: apps/admin/package.json
````json
{
  "name": "@bilacert/admin",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 3001",
    "build": "next build",
    "start": "next start -p 3001",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@bilacert/shared": "workspace:*",
    "@bilacert/supabase": "workspace:*",
    "next": "catalog:",
    "react": "catalog:",
    "zod": "catalog:",
    "react-dom": "catalog:",
    "react-icons": "catalog:",
    "@supabase/ssr": "catalog:",
    "lucide-react": "catalog:",
    "react-hook-form": "catalog:",
    "tailwind-merge": "catalog:",
    "tailwindcss-animate": "catalog:",
    "@supabase/supabase-js": "catalog:",
    "@hookform/resolvers": "catalog:",
    "@radix-ui/react-accordion": "catalog:",
    "@radix-ui/react-alert-dialog": "catalog:",
    "@radix-ui/react-avatar": "catalog:",
    "@radix-ui/react-checkbox": "catalog:",
    "@radix-ui/react-collapsible": "catalog:",
    "@radix-ui/react-dialog": "catalog:",
    "@radix-ui/react-dropdown-menu": "catalog:",
    "@radix-ui/react-label": "catalog:",
    "@radix-ui/react-menubar": "catalog:",
    "@radix-ui/react-popover": "catalog:",
    "@radix-ui/react-progress": "catalog:",
    "@radix-ui/react-radio-group": "catalog:",
    "@radix-ui/react-scroll-area": "catalog:",
    "@radix-ui/react-select": "catalog:",
    "@radix-ui/react-separator": "catalog:",
    "@radix-ui/react-slider": "catalog:",
    "@radix-ui/react-slot": "catalog:",
    "@radix-ui/react-switch": "catalog:",
    "@radix-ui/react-tabs": "catalog:",
    "@radix-ui/react-toast": "catalog:",
    "@radix-ui/react-tooltip": "catalog:",
    "@tanstack/react-table": "^8.19.3",
    "@types/uuid": "^10.0.0",
    "class-variance-authority": "catalog:",
    "clsx": "catalog:",
    "date-fns": "catalog:",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "genkit": "catalog:",
    "isomorphic-dompurify": "catalog:",
    "patch-package": "^8.0.0",
    "react-day-picker": "^9.11.3",
    "react-quill-new": "^3.8.3",
    "recharts": "^2.15.4",
    "uuid": "catalog:"
  },
  "devDependencies": {
    "@bilacert/typescript-config": "workspace:*",
    "typescript": "catalog:",
    "@types/node": "catalog:",
    "@types/react": "catalog:",
    "tailwindcss": "catalog:",
    "@biomejs/biome": "catalog:",
    "@types/react-dom": "catalog:",
    "@tailwindcss/postcss": "catalog:",
    "babel-plugin-react-compiler": "1.0.0"
  }
}
````

## File: apps/client/app/api/contacts/route.ts
````typescript
import { createSupabaseServerClient } from "@bilacert/supabase/server";
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

    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("contacts")
      .insert([
        {
          name: fullName,
          email,
          phone: phone || null,
          service: service || null,
          message,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: `Failed to submit form: ${error.message}` },
        { status: 500 },
      );
    }

    console.log(`✓ Contact form submission received from ${email}`);

    return NextResponse.json(
      {
        success: true,
        message:
          "Form submitted successfully. We will review and contact you soon.",
        submissionId: data?.[0]?.id,
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
````

## File: apps/client/components/blog/StickyShare.tsx
````typescript
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export function StickyShare() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-2">
        <button
          type="button"
          className="p-3 bg-blue-400 text-white hover:bg-blue-500"
        >
          <FaTwitter className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="p-3 bg-blue-600 text-white hover:bg-blue-700"
        >
          <FaLinkedin className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="p-3 bg-blue-800 text-white hover:bg-blue-900"
        >
          <FaFacebook className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
````

## File: apps/client/components/blog/TableOfContents.tsx
````typescript
"use client";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content: _content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // Note: HTML only goes up to h6! I left h7 in case you have custom styling,
    // but standard HTML stops at <h6>.
    const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const newHeadings: Heading[] = [];

    headingElements.forEach((heading) => {
      const id =
        heading.id || `heading-${Math.random().toString(36).substring(7)}`;
      if (!heading.id) {
        heading.id = id;
      }
      newHeadings.push({
        id,
        text: heading.textContent || "",
        level: Number(heading.tagName.substring(1)),
      });
    });

    setHeadings(newHeadings);
  }, []);

  return (
    /* Added 'hidden md:block' here */
    <div className="hidden md:block bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a href={`#${heading.id}`} className="text-primary hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
````

## File: apps/client/components/blog/view.tsx
````typescript
"use client";

import { incrementBlogPostViews } from "@bilacert/supabase/Mutations/blogs";
import { useEffect } from "react";

interface ViewTrackerProps {
  slug: string;
}

export function ViewTracker({ slug }: ViewTrackerProps) {
  useEffect(() => {
    // This runs only on the client (the user's browser) when the page mounts
    incrementBlogPostViews(slug);
  }, [slug]);

  return null; // This component doesn't render anything visible
}
````

## File: apps/client/components/Header.tsx
````typescript
"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>075 430 4433</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@bilacert.co.za</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Your Compliance Partner.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="relative h-11 w-40 flex-shrink-0 flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Bilacert Logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link
                  href="/contact"
                  className="block w-full bg-accent text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-accent-light transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
````

## File: apps/client/components/service/ServiceHero.tsx
````typescript
import { CheckCircle, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getIcon } from "@/lib/services-config";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  iconName: string;
  imageSrc: string;
  processing_time: string;
  formPath: string;
  phone: string;
}

export function ServiceHero({
  title,
  subtitle,
  iconName,
  imageSrc,
  processing_time,
  formPath,
  phone,
}: ServiceHeroProps) {
  const Icon = getIcon(iconName);

  return (
    <section className="relative text-white py-20">
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon className="h-8 w-8 text-accent" />
              <span className="text-accent font-semibold">{title}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-200 mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={formPath}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1 text-center"
              >
                Get Free Consultation
              </Link>
              <Link
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 text-center"
              >
                Call {phone}
              </Link>
            </div>
          </div>
          <HeroStatsBackdrop processing_time={processing_time} />
        </div>
      </div>
    </section>
  );
}

interface HeroStatsBackdropProps {
  processing_time: string;
}

export function HeroStatsBackdrop({ processing_time }: HeroStatsBackdropProps) {
  const _CheckCircleIcon = getIcon("CheckCircle");

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-accent p-3 rounded-lg">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">{processing_time}</h3>
            <p className="text-gray-300">Standard processing time</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-accent p-3 rounded-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">100% Success Rate</h3>
            <p className="text-gray-300">On first-time applications</p>
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: apps/client/components/ui/badge.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
````

## File: apps/client/components/ui/button.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
````

## File: apps/client/components/ui/card.tsx
````typescript
import { cn } from "@bilacert/shared/cn";
import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
````

## File: packages/shared/src/types/domain.ts
````typescript
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
````

## File: packages/supabase/src/client.ts
````typescript
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./supabaseType";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const createSupabaseBrowserClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
};
````

## File: packages/supabase/src/hooks/useDataFetching.ts
````typescript
"use client";

import { useState, useEffect, useCallback } from "react";
import {
  createSupabaseBrowserClient,
  isSupabaseConfigured,
} from "../client";
import type { Database } from "../supabaseType";

type PublicTableName = keyof Database["public"]["Tables"] & string;

export function useDataFetching<T>(
  tableName: PublicTableName,
  selectQuery: string = "*",
  orderBy: string = "created_at",
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    const supabase = createSupabaseBrowserClient();
    setLoading(true);
    const { data: fetchedData, error: fetchError } = await supabase
      .from(tableName)
      .select(selectQuery)
      .order(orderBy, { ascending: false });

    if (fetchError) {
      setError(fetchError as unknown as Error);
      setData([]);
    } else {
      setData((fetchedData as unknown as T[]) || []);
      setError(null);
    }
    setLoading(false);
  }, [tableName, selectQuery, orderBy]);

  useEffect(() => {
    fetchData();

    if (!isSupabaseConfigured) {
      return;
    }

    const supabase = createSupabaseBrowserClient();
    const channel = supabase
      .channel(`${tableName}-realtime`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: tableName },
        () => {
          fetchData();
        },
      )
      .subscribe((status: string, err?: Error) => {
        if (err) {
          console.error("Supabase subscription error:", err);
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [tableName, fetchData]);

  return { data, loading, error, refresh: fetchData };
}
````

## File: packages/supabase/src/hooks/useFormSubmission.ts
````typescript
"use client";
import { useCallback, useEffect, useState } from "react";
import type { FormSubmissionPayload } from "@bilacert/shared/types";

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  error?: string;
}

export interface UseFormSubmissionState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  successMessage: string | null;
}

export function useFormSubmission() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (
      payload: FormSubmissionPayload,
    ): Promise<FormSubmissionResponse | null> => {
      setIsLoading(true);
      setError(null);
      setSuccessMessage(null);

      try {
        const endpoint =
          payload.formType === "contact"
            ? "/api/contacts"
            : "/api/form-submissions";
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = (await response.json()) as FormSubmissionResponse;

        if (!response.ok) {
          const errorMessage =
            data.error || "Failed to submit form. Please try again.";
          setError(errorMessage);
          return { success: false, message: errorMessage };
        }

        setSuccessMessage(data.message);
        return data;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unexpected error occurred";
        setError(errorMessage);
        return { success: false, message: errorMessage };
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccessMessage(null);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    isSuccess: successMessage !== null,
    successMessage,
    handleSubmit,
    reset,
  };
}

export function useFetchSubmission(submissionId: string | null) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmission = useCallback(async () => {
    if (!submissionId) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/form-submissions?submissionId=${submissionId}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch submission");
      }

      const submissionData = await response.json();
      setData(submissionData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [submissionId]);

  useEffect(() => {
    fetchSubmission();
  }, [fetchSubmission]);

  return { data, isLoading, error, refetch: fetchSubmission };
}
````

## File: packages/supabase/src/supabaseType.ts
````typescript
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          authorId: string | null
          authorName: string | null
          category: string | null
          content: string
          createdAt: string | null
          excerpt: string | null
          featured: boolean | null
          featuredImage: string | null
          id: string
          published: boolean | null
          publishedAt: string | null
          readTime: string | null
          seoDescription: string | null
          seoKeywords: string | null
          seoTitle: string | null
          slug: string
          tags: string | null
          thumbnail: string | null
          title: string
          updatedAt: string | null
          viewsCount: number | null
        }
        Insert: {
          authorId?: string | null
          authorName?: string | null
          category?: string | null
          content: string
          createdAt?: string | null
          excerpt?: string | null
          featured?: boolean | null
          featuredImage?: string | null
          id: string
          published?: boolean | null
          publishedAt?: string | null
          readTime?: string | null
          seoDescription?: string | null
          seoKeywords?: string | null
          seoTitle?: string | null
          slug: string
          tags?: string | null
          thumbnail?: string | null
          title: string
          updatedAt?: string | null
          viewsCount?: number | null
        }
        Update: {
          authorId?: string | null
          authorName?: string | null
          category?: string | null
          content?: string
          createdAt?: string | null
          excerpt?: string | null
          featured?: boolean | null
          featuredImage?: string | null
          id?: string
          published?: boolean | null
          publishedAt?: string | null
          readTime?: string | null
          seoDescription?: string | null
          seoKeywords?: string | null
          seoTitle?: string | null
          slug?: string
          tags?: string | null
          thumbnail?: string | null
          title?: string
          updatedAt?: string | null
          viewsCount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["authorId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          email: string
          id: string
          message: string | null
          name: string | null
          phone: string | null
          service: string | null
          submittedAt: string
        }
        Insert: {
          email: string
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          service?: string | null
          submittedAt?: string
        }
        Update: {
          email?: string
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          service?: string | null
          submittedAt?: string
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          assignedTo: string | null
          company: string | null
          completedAt: string | null
          createdAt: string | null
          details: Json | null
          email: string
          formType: string
          fullName: string
          id: string
          industry: string | null
          internalNotes: string | null
          phone: string | null
          serviceId: string | null
          serviceName: string | null
          status: string
          updatedAt: string | null
        }
        Insert: {
          assignedTo?: string | null
          company?: string | null
          completedAt?: string | null
          createdAt?: string | null
          details?: Json | null
          email: string
          formType: string
          fullName: string
          id?: string
          industry?: string | null
          internalNotes?: string | null
          phone?: string | null
          serviceId?: string | null
          serviceName?: string | null
          status?: string
          updatedAt?: string | null
        }
        Update: {
          assignedTo?: string | null
          company?: string | null
          completedAt?: string | null
          createdAt?: string | null
          details?: Json | null
          email?: string
          formType?: string
          fullName?: string
          id?: string
          industry?: string | null
          internalNotes?: string | null
          phone?: string | null
          serviceId?: string | null
          serviceName?: string | null
          status?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_assigned_to_fkey"
            columns: ["assignedTo"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          category: string | null
          content: string | null
          createdAt: string | null
          description: string | null
          featured: boolean | null
          features: string[] | null
          href: string
          icon: string | null
          id: string
          image: string | null
          includes: string[] | null
          orderIndex: number | null
          pricing: number | null
          pricingPlans: Json | null
          processingTime: string | null
          processSteps: Json | null
          published: boolean | null
          requirements: string[] | null
          seoDescription: string | null
          seoKeywords: string | null
          seoTitle: string | null
          shortDescription: string | null
          slug: string
          successStory: Json | null
          thumbnail: string | null
          title: string
          updatedAt: string | null
        }
        Insert: {
          category?: string | null
          content?: string | null
          createdAt?: string | null
          description?: string | null
          featured?: boolean | null
          features?: string[] | null
          href: string
          icon?: string | null
          id?: string
          image?: string | null
          includes?: string[] | null
          orderIndex?: number | null
          pricing?: number | null
          pricingPlans?: Json | null
          processingTime?: string | null
          processSteps?: Json | null
          published?: boolean | null
          requirements?: string[] | null
          seoDescription?: string | null
          seoKeywords?: string | null
          seoTitle?: string | null
          shortDescription?: string | null
          slug: string
          successStory?: Json | null
          thumbnail?: string | null
          title: string
          updatedAt?: string | null
        }
        Update: {
          category?: string | null
          content?: string | null
          createdAt?: string | null
          description?: string | null
          featured?: boolean | null
          features?: string[] | null
          href?: string
          icon?: string | null
          id?: string
          image?: string | null
          includes?: string[] | null
          orderIndex?: number | null
          pricing?: number | null
          pricingPlans?: Json | null
          processingTime?: string | null
          processSteps?: Json | null
          published?: boolean | null
          requirements?: string[] | null
          seoDescription?: string | null
          seoKeywords?: string | null
          seoTitle?: string | null
          shortDescription?: string | null
          slug?: string
          successStory?: Json | null
          thumbnail?: string | null
          title?: string
          updatedAt?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          createdAt: string | null
          id: string
          postUrl: string
        }
        Insert: {
          createdAt?: string | null
          id?: string
          postUrl: string
        }
        Update: {
          createdAt?: string | null
          id?: string
          postUrl?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          bio: string | null
          company: string | null
          createdAt: string | null
          createdBy: string | null
          email: string
          firstName: string | null
          id: string
          isActive: boolean | null
          lastName: string | null
          phone: string | null
          profileImage: string | null
          role: string
          updatedAt: string | null
          updatedBy: string | null
        }
        Insert: {
          bio?: string | null
          company?: string | null
          createdAt?: string | null
          createdBy?: string | null
          email: string
          firstName?: string | null
          id: string
          isActive?: boolean | null
          lastName?: string | null
          phone?: string | null
          profileImage?: string | null
          role?: string
          updatedAt?: string | null
          updatedBy?: string | null
        }
        Update: {
          bio?: string | null
          company?: string | null
          createdAt?: string | null
          createdBy?: string | null
          email?: string
          firstName?: string | null
          id?: string
          isActive?: boolean | null
          lastName?: string | null
          phone?: string | null
          profileImage?: string | null
          role?: string
          updatedAt?: string | null
          updatedBy?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_created_by_fkey"
            columns: ["createdBy"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_updated_by_fkey"
            columns: ["updatedBy"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_views: { Args: { post_slug: string }; Returns: undefined }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
````

## File: turbo.json
````json
{
  "$schema": "https://turbo.build/schema.json",
  "globalEnv": [
    "REVALIDATION_SECRET",
    "NEXT_PUBLIC_CLIENT_URL"
  ],
  "tasks": {
    "build": {
      "dependsOn": [
        "^build"
      ],
      "outputs": [
        ".next/**",
        "!.next/cache/**",
        "dist/**"
      ]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": [
        "^build"
      ]
    },
    "lint:fix": {
      "dependsOn": [
        "^lint:fix"
      ]
    },
    "format": {
      "cache": false
    },
    "typecheck": {
      "dependsOn": [
        "^build"
      ]
    }
  }
}
````

## File: apps/admin/app/admin/blogs/actions.ts
````typescript
"use server";

import {
  deleteBlog as deleteBlogMutation,
  upsertBlog as upsertBlogMutation,
} from "@bilacert/supabase/Mutations/blogs";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { triggerRevalidation } from "@/lib/revalidation";
import { blogSchema } from "./schema";

export async function upsertBlog(values: unknown) {
  const parsedValues = blogSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const { id, ...rest } = parsedValues.data;

  const dataToUpsert = id ? { ...rest, id } : { ...rest, id: uuidv4() };

  try {
    const result = await upsertBlogMutation(dataToUpsert);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/blogs");

  return { error: null };
}

export async function deleteBlog(blogId: string) {
  try {
    const result = await deleteBlogMutation(blogId);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/blogs");

  return { error: null };
}
````

## File: apps/admin/app/admin/blogs/BlogDetails.tsx
````typescript
"use client";

import type { BlogPost } from "@bilacert/shared/types";
import { format } from "date-fns";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteBlogDialog from "./DeleteBlogDialog";

interface BlogDetailsProps {
  blog: BlogPost;
}

export default function BlogDetails({ blog }: BlogDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!blog) return null;

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const onDeleted = () => {
    setIsDeleteDialogOpen(false);
    router.push("/admin/blogs");
    router.refresh();
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/blogs/${blog.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        {(blog.featured_image || blog.thumbnail) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blog.featured_image && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Featured Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video w-full max-w-lg overflow-hidden rounded-lg">
                    <Image
                      src={blog.featured_image}
                      alt="Featured Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
            {blog.thumbnail && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thumbnail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-square w-48 overflow-hidden rounded-lg">
                    <Image
                      src={blog.thumbnail}
                      alt="Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{blog.title}</CardTitle>
                {blog.category && (
                  <CardDescription>{blog.category}</CardDescription>
                )}
              </div>
              <div className="flex gap-2">
                {blog.featured && <Badge>Featured</Badge>}
                <Badge variant={blog.published ? "default" : "secondary"}>
                  {blog.published ? "Published" : "Draft"}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Details
                </h4>
                <div className="text-sm">
                  <strong>Slug:</strong>{" "}
                  <span className="font-mono">{blog.slug}</span>
                </div>
                {blog.author_name && (
                  <div className="text-sm">
                    <strong>Author:</strong> {blog.author_name}
                  </div>
                )}
                {blog.read_time && (
                  <div className="text-sm">
                    <strong>Read Time:</strong> {blog.read_time}
                  </div>
                )}
                {blog.tags && (
                  <div className="text-sm">
                    <strong>Tags:</strong> {blog.tags}
                  </div>
                )}
                <div className="text-sm">
                  <strong>Created:</strong>{" "}
                  {format(new Date(blog.created_at), "PPpp")}
                </div>
                {blog.updated_at && (
                  <div className="text-sm">
                    <strong>Updated:</strong>{" "}
                    {format(new Date(blog.updated_at), "PPpp")}
                  </div>
                )}
              </div>
              <div className="space-y-4 md:col-span-2">
                <h4 className="text-sm font-medium text-muted-foreground">
                  SEO
                </h4>
                {blog.seo_title && (
                  <div className="text-sm">
                    <strong>Title:</strong> {blog.seo_title}
                  </div>
                )}
                {blog.seo_description && (
                  <div className="text-sm">
                    <strong>Description:</strong> {blog.seo_description}
                  </div>
                )}
                {blog.seo_keywords && (
                  <div className="text-sm">
                    <strong>Keywords:</strong> {blog.seo_keywords}
                  </div>
                )}
              </div>
            </div>
            {blog.excerpt && (
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-medium mb-2">Excerpt</h3>
                <p className="text-sm text-card-foreground italic">
                  "{blog.excerpt}"
                </p>
              </div>
            )}
            {blog.content && (
              <div className="mt-6 border-t pt-6 max-w-[256] sm:max-w-lg  md:max-w-xl lg:max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-4 gap-4">
                  <h3 className="text-lg font-medium mb-2">Content</h3>
                  <Button asChild>
                    <Link href={`/admin/blogs/${blog.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Link>
                  </Button>
                </div>
                <article
                  className="prose prose-slate prose-indigo text-sm
                                       break-words overflow-wrap-anywhere
                                       prose-headings:font-bold prose-headings:tracking-tight
                                       prose-a:text-indigo-600 prose-img:rounded-2xl prose-img:shadow-lg
                                       [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl 
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 
          [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-slate-700
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:my-4
          [&>img]:rounded-lg"
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.content ||
                      '<p class="text-slate-400 italic">No content to display yet...</p>',
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteBlogDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          blog={blog}
          onDeleted={onDeleted}
        />
      )}
    </>
  );
}
````

## File: apps/admin/app/admin/blogs/BlogsClient.tsx
````typescript
"use client";

import type { BlogPost } from "@bilacert/shared/types";
import { useBlogs } from "@bilacert/supabase/hooks/useBlogs";
import { format, isValid, parseISO } from "date-fns";
import {
  Calendar,
  Filter,
  MoreHorizontal,
  PlusCircle,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DeleteBlogDialog from "./DeleteBlogDialog";

const safeFormatDate = (
  date: string | Date | undefined,
  dateFormat = "PP",
  fallback = "Invalid date",
) => {
  if (!date) return fallback;
  const d = typeof date === "string" ? parseISO(date) : date;
  return isValid(d) ? format(d, dateFormat) : fallback;
};

const BlogCard = ({
  blog,
  onEdit,
  onDelete,
}: {
  blog: BlogPost;
  onEdit: (blog: BlogPost) => void;
  onDelete: (blog: BlogPost) => void;
}) => {
  const router = useRouter();
  return (
    <div
      key={blog.id}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border"
    >
      <Link
        href={`/admin/blogs/${blog.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${blog.title}`}
      >
        <span className="sr-only">View Details</span>
      </Link>
      <div className="absolute top-4 right-4 z-20">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/60 backdrop-blur-sm hover:bg-background"
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
                router.push(`/admin/blogs/${blog.id}`);
              }}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault();
                onEdit(blog);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
              onClick={(e) => {
                e.preventDefault();
                onDelete(blog);
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="relative h-48 w-full">
        <Image
          src={
            blog.featured_image ||
            `https://picsum.photos/seed/${blog.id}/600/400`
          }
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          {blog.category && <Badge variant="secondary">{blog.category}</Badge>}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-semibold text-primary line-clamp-2">
          {blog.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3 flex-grow">
          {blog.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
          <Badge variant={blog.published ? "default" : "outline"}>
            {blog.published ? "Published" : "Draft"}
          </Badge>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{safeFormatDate(blog.created_at, "PP")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BlogsClient() {
  const { data: blogs, loading, error, refresh } = useBlogs();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusTab, setStatusTab] = useState("all");

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogs.forEach((blog) => {
      if (blog.category) cats.add(blog.category);
    });
    return Array.from(cats).sort();
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ??
          false);

      const matchesCategory =
        categoryFilter === "all" || blog.category === categoryFilter;

      const matchesStatus =
        statusTab === "all" ||
        (statusTab === "published" && blog.published) ||
        (statusTab === "draft" && !blog.published);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [blogs, searchQuery, categoryFilter, statusTab]);

  const handleEdit = (blog: BlogPost) => {
    router.push(`/admin/blogs/${blog.id}/edit`);
  };

  const handleDelete = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setIsDeleteDialogOpen(true);
  };

  const onDeleted = () => {
    setIsDeleteDialogOpen(false);
    setSelectedBlog(null);
    refresh();
  };

  if (error) {
    return (
      <div className="text-destructive p-4 border border-destructive/20 rounded-lg bg-destructive/10">
        Error loading blogs: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground">
            Manage your blog posts and content.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/blogs/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Post
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-4">
        <Tabs
          defaultValue="all"
          className="w-full sm:w-auto"
          onValueChange={setStatusTab}
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search blogs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[400px] w-full animate-pulse rounded-xl bg-muted"
            ></div>
          ))}
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed py-24 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold">No blogs found</h3>
          <p className="text-muted-foreground max-w-xs mx-auto mt-2">
            We couldn't find any blogs matching your current filters. Try
            adjusting your search or category.
          </p>
          {(searchQuery || categoryFilter !== "all" || statusTab !== "all") && (
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
                setStatusTab("all");
              }}
            >
              Clear all filters
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {isDeleteDialogOpen && (
        <DeleteBlogDialog
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          onDeleted={onDeleted}
          blog={selectedBlog}
        />
      )}
    </div>
  );
}
````

## File: apps/admin/app/admin/blogs/columns.tsx
````typescript
"use client";

import type { BlogPost } from "@bilacert/shared/types";
import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ColumnsOptions {
  onEdit: (blog: BlogPost) => void;
  onDelete: (blog: BlogPost) => void;
  onViewDetails: (blog: BlogPost) => void;
}

export const columns = ({
  onEdit,
  onDelete,
  onViewDetails,
}: ColumnsOptions): ColumnDef<BlogPost>[] => [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate font-medium">
        {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "author_name",
    header: "Author",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "published",
    header: "Status",
    cell: ({ row }) => {
      const published = row.getValue("published") as boolean;
      return (
        <Badge variant={published ? "default" : "secondary"}>
          {published ? "Published" : "Draft"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as string;
      if (!date) return "N/A";
      const formattedDate = format(new Date(date), "PP");
      return <div className="font-medium">{formattedDate}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const blog = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => onViewDetails(blog)}>
              View details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEdit(blog)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
              onClick={() => onDelete(blog)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
````

## File: apps/admin/app/admin/blogs/DeleteBlogDialog.tsx
````typescript
"use client";

import type { BlogPost } from "@bilacert/shared/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { deleteBlog } from "./actions";

interface DeleteBlogDialogProps {
  isOpen: boolean;
  onClose: () => void;
  blog: BlogPost | null;
  onDeleted?: () => void;
}

export default function DeleteBlogDialog({
  isOpen,
  onClose,
  blog,
  onDeleted,
}: DeleteBlogDialogProps) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!blog) return;

    setIsDeleting(true);
    try {
      const result = await deleteBlog(blog.id);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Blog post deleted",
        description: `The post "${blog.title}" has been successfully deleted.`,
      });

      if (onDeleted) {
        onDeleted();
      }
      onClose();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting post",
        description: error.message,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the blog
            post "{blog?.title}".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} onClick={onClose}>
            Cancel
          </AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
````

## File: apps/admin/app/admin/contacts/columns.tsx
````typescript
"use client";

import type { Contact } from "@bilacert/shared/types";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ColumnsOptions {
  onEdit: (contact: Contact) => void;
  onDelete: (contact: Contact) => void;
}

export const columns = ({
  onEdit,
  onDelete,
}: ColumnsOptions): ColumnDef<Contact>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => row.getValue("phone") || "N/A",
  },
  {
    accessorKey: "service",
    header: "Service",
    cell: ({ row }) => row.getValue("service") || "N/A",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const contact = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/admin/contacts/${contact.id}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEdit(contact)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
              onClick={() => onDelete(contact)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
````

## File: apps/admin/app/admin/contacts/ContactDetails.tsx
````typescript
"use client";

import type { Contact } from "@bilacert/shared/types";
import { ArrowLeft, Edit, Phone, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteContactDialog from "./DeleteContactDialog";

interface ContactDetailsProps {
  contact: Contact;
}

export default function ContactDetails({ contact }: ContactDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!contact) return null;

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const onDeleted = () => {
    setIsDeleteDialogOpen(false);
    router.push("/admin/contacts");
    router.refresh();
  };

  const formatPhoneNumberForWhatsApp = (phone: string) => {
    // Remove all non-digit characters
    return phone.replace(/\D/g, "");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/contacts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Contacts
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/contacts/${contact.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{contact.name}</CardTitle>
            <CardDescription>{contact.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                {contact.phone && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Phone
                    </h4>
                    <a
                      href={`https://wa.me/${formatPhoneNumberForWhatsApp(contact.phone)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary transition-colors hover:underline"
                    >
                      <Phone className="h-4 w-4" />
                      {contact.phone}
                    </a>
                  </div>
                )}
                {contact.service && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Service of Interest
                    </h4>
                    <p className="text-sm text-card-foreground">
                      {contact.service}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {contact.message && (
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Message / Notes</h3>
                <div className="prose prose-sm dark:prose-invert mt-1 text-card-foreground text-sm whitespace-pre-wrap">
                  {contact.message}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteContactDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          contact={contact}
          onDeleted={onDeleted}
        />
      )}
    </>
  );
}
````

## File: apps/admin/app/admin/contacts/ContactsClient.tsx
````typescript
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
````

## File: apps/admin/app/admin/contacts/data-table.tsx
````typescript
"use client";

import type { Contact } from "@bilacert/shared/types";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Row,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      rowSelection,
      columnFilters,
    },
  });

  const handleRowClick = (row: Row<TData>) => {
    const contact = row.original as Contact;
    if (contact?.id) {
      router.push(`/admin/contacts/${contact.id}`);
    }
  };

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by name or email..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("name")?.setFilterValue(event.target.value);
            table.getColumn("email")?.setFilterValue(event.target.value);
          }}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  {columns.map((_col, j) => (
                    <TableCell key={j}>
                      <Skeleton className="h-6 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="cursor-pointer"
                  onClick={() => handleRowClick(row)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      onClick={(e) => {
                        if (
                          cell.column.id === "actions" ||
                          cell.column.id === "select"
                        ) {
                          e.stopPropagation();
                        }
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
````

## File: apps/admin/app/admin/contacts/DeleteContactDialog.tsx
````typescript
"use client";

import type { Contact } from "@bilacert/shared/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { deleteContact } from "./actions";

interface DeleteContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  contact: Contact | null;
  onDeleted?: () => void;
}

export default function DeleteContactDialog({
  isOpen,
  onClose,
  contact,
  onDeleted,
}: DeleteContactDialogProps) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!contact) return;

    setIsDeleting(true);
    try {
      const result = await deleteContact(contact.id);

      if (result?.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Contact deleted",
        description: `The contact "${contact.name}" has been successfully deleted.`,
      });
      if (onDeleted) {
        onDeleted();
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting contact",
        description: error.message,
      });
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            contact "{contact?.name}".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} onClick={onClose}>
            Cancel
          </AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
````

## File: apps/admin/app/admin/dashboard/DashboardClient.tsx
````typescript
"use client";

import { Icon } from "@bilacert/shared/Icon";
import type { Submission } from "@bilacert/shared/types";
import { useDashboardData } from "@bilacert/supabase/hooks/useDashboardData";
import { format, isValid, parseISO } from "date-fns";
import {
  BarChart as BarChartIcon,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";
import Link from "next/link";
import StatCard from "@/components/admin/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const safeFormatDate = (
  date: string | Date | undefined,
  fallback = "Invalid date",
) => {
  if (!date) return fallback;
  const d = typeof date === "string" ? parseISO(date) : date;
  return isValid(d) ? format(d, "dd MMM yyyy, HH:mm") : fallback;
};

export default function DashboardClient() {
  const { loading, error, stats, submissionsByService, recentActivity } =
    useDashboardData();

  if (error) {
    return (
      <div className="text-destructive">
        Error loading dashboard data: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Submissions"
          value={loading ? "..." : `${stats.totalSubmissions}`}
          icon={<Icon name="Package" className="h-4 w-4" />}
        />
        <StatCard
          title="New Applications"
          value={loading ? "..." : `${stats.newApplications}`}
          icon={<BarChartIcon className="h-4 w-4" />}
        />
        <StatCard
          title="Total Contacts"
          value={loading ? "..." : `${stats.totalContacts}`}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard
          title="Total Revenue"
          value={
            loading
              ? "..."
              : `R ${stats.totalRevenue.toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
          }
          icon={<DollarSign className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              Submissions by Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {submissionsByService.length > 0 ? (
                (() => {
                  const progressColorClasses = [
                    "[&>div]:bg-chart-1",
                    "[&>div]:bg-chart-2",
                    "[&>div]:bg-chart-3",
                    "[&>div]:bg-chart-4",
                    "[&>div]:bg-chart-5",
                  ];
                  return submissionsByService
                    .sort((a, b) => b.submissions - a.submissions)
                    .map((item, index) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            name={item.icon as any}
                            className="h-5 w-5 text-muted-foreground"
                          />
                          <span className="truncate text-sm font-medium">
                            {item.title}
                          </span>
                        </div>
                        <Progress
                          value={
                            (item.submissions / stats.totalSubmissions) * 100
                          }
                          className={`h-2 ${progressColorClasses[index % progressColorClasses.length]}`}
                        />
                        <span className="font-mono text-sm font-medium">
                          {item.submissions}
                        </span>
                      </div>
                    ));
                })()
              ) : (
                <div className="text-center text-muted-foreground pt-4">
                  No submissions yet.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              Recent Activity
            </CardTitle>
            <Clock className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity) => (
                  <Link
                    key={(activity as any).id}
                    href={
                      activity.type === "submission"
                        ? `/admin/form_submissions/${(activity as any).id}`
                        : `/admin/contacts/${(activity as any).id}`
                    }
                    className="block rounded-lg transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-start gap-4 p-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon
                          name={
                            activity.type === "submission"
                              ? "Package"
                              : "MessageSquare"
                          }
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="grid gap-0.5 flex-1">
                        <p className="text-sm font-medium">
                          {(activity as any).fullName || (activity as any).name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(activity as any).email}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {activity.type === "submission"
                            ? (activity as Submission).service_name ||
                              (activity as Submission).service_name
                            : "Contact Form"}
                        </p>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
                        {safeFormatDate((activity as any).date)}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center text-muted-foreground pt-4">
                  No recent activity.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
````

## File: apps/admin/app/admin/form_submissions/columns.tsx
````typescript
"use client";

import type { Submission } from "@bilacert/shared/types";
import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StatusUpdate from "./StatusUpdate";

export const statusVariantMap: {
  [key: string]: "default" | "secondary" | "destructive" | "outline";
} = {
  pending: "secondary",
  "in-progress": "outline",
  completed: "default",
  rejected: "destructive",
  archived: "secondary",
};

interface ColumnsOptions {
  onDelete: (submission: Submission) => void;
}

export const columns = ({
  onDelete,
}: ColumnsOptions): ColumnDef<Submission>[] => [
  {
    accessorKey: "form_type",
    header: "Form Type",
  },
  {
    accessorKey: "service_name",
    header: "Service Name",
  },
  {
    accessorKey: "full_name",
    header: "Client Name",
  },
  {
    accessorKey: "email",
    header: "Client Email",
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Submitted At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("created_at") as string;
      if (!date) return "N/A";
      const formattedDate = format(new Date(date), "PPpp");
      return <div className="font-medium">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <StatusUpdate submission={row.original} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const submission = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/admin/form_submissions/${submission.id}`}>
                View Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/admin/form_submissions/${submission.id}/edit`}>
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
              onClick={() => onDelete(submission)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
````

## File: apps/admin/app/admin/form_submissions/data-table.tsx
````typescript
"use client";

import type { Submission } from "@bilacert/shared/types";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Row,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const handleRowClick = (row: Row<TData>) => {
    const submission = row.original as Submission;
    if (submission?.id) {
      router.push(`/admin/form_submissions/${submission.id}`);
    }
  };

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  {columns.map((_col, j) => (
                    <TableCell key={j}>
                      <Skeleton className="h-6 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="cursor-pointer"
                  onClick={() => handleRowClick(row)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      onClick={(e) => {
                        if (cell.column.id === "actions") {
                          e.stopPropagation();
                        }
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
````

## File: apps/admin/app/admin/form_submissions/StatusUpdate.tsx
````typescript
"use client";

import type { Submission } from "@bilacert/shared/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { updateSubmissionStatus } from "./actions";
import { statusVariantMap } from "./columns";

interface StatusUpdateProps {
  submission: Submission;
}

const statuses: Submission["status"][] = [
  "pending",
  "in-progress",
  "completed",
  "rejected",
  "archived",
];

export default function StatusUpdate({ submission }: StatusUpdateProps) {
  const { toast } = useToast();
  const [currentStatus, setCurrentStatus] = useState(submission.status);
  const [isLoading, setIsLoading] = useState(false);

  const handleStatusChange = async (newStatus: Submission["status"]) => {
    if (newStatus === currentStatus) return;

    setIsLoading(true);
    try {
      if (!submission.id) {
        throw new Error("Submission ID is missing");
      }
      const result = await updateSubmissionStatus(submission.id, newStatus);

      if (result.error) throw new Error(result.error);

      setCurrentStatus(newStatus as Submission["status"]);
      toast({
        title: "Status updated",
        description: `Submission status changed to "${newStatus}".`,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error updating status",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      <Select
        value={currentStatus}
        onValueChange={handleStatusChange}
        disabled={isLoading}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue asChild>
            <Badge
              variant={statusVariantMap[currentStatus] || "default"}
              className="capitalize"
            >
              {currentStatus}
            </Badge>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {statuses.map((status) => (
            <SelectItem key={status} value={status} className="capitalize">
              <div className="flex items-center gap-2">{status}</div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
````

## File: apps/admin/app/admin/form_submissions/SubmissionsClient.tsx
````typescript
"use client";

import type { Submission } from "@bilacert/shared/types";
import { useSubmissions } from "@bilacert/supabase/hooks/useSubmissions";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "./columns";
import DeleteSubmissionDialog from "./DeleteSubmissionDialog";
import { DataTable } from "./data-table";

export default function SubmissionsClient() {
  const { data: submissions, loading, error } = useSubmissions();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);

  const handleDelete = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialogs = () => {
    setIsDeleteDialogOpen(false);
    setSelectedSubmission(null);
  };

  if (error) {
    return (
      <div className="text-destructive">
        Error loading submissions: {error.message}
      </div>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>All Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns({ onDelete: handleDelete })}
            data={submissions as Submission[]}
            isLoading={loading}
          />
        </CardContent>
      </Card>

      {isDeleteDialogOpen && (
        <DeleteSubmissionDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialogs}
          submission={selectedSubmission}
        />
      )}
    </>
  );
}
````

## File: apps/admin/app/admin/layout.tsx
````typescript
"use client";

import { isSupabaseConfigured } from "@bilacert/supabase/client";
import { useUser } from "@bilacert/supabase/hooks/useUser";
import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { useEffect } from "react";
import AdminHeader from "@/components/admin/Header";
import AdminSidebar from "@/components/admin/Sidebar";
import SupabaseNotConfigured from "@/components/admin/SupabaseNotConfigured";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useUser();

  useEffect(() => {
    if (!isSupabaseConfigured) {
      return;
    }
    if (!loading) {
      if (!user && pathname !== "/admin/login") {
        router.push("/admin/login");
      }
      if (user && pathname === "/admin/login") {
        router.push("/admin/dashboard");
      }
    }
  }, [user, loading, pathname, router]);

  if (pathname !== "/admin/login" && !isSupabaseConfigured) {
    return <SupabaseNotConfigured />;
  }

  if (loading && pathname !== "/admin/login") {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user && pathname !== "/admin/login") {
    return null;
  }

  if (user && pathname === "/admin/login") {
    return null;
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="flex min-h-svh flex-1 flex-col bg-background">
        <AdminHeader />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </SidebarProvider>
  );
}
````

## File: apps/admin/app/admin/services/[id]/ServiceDetails.tsx
````typescript
"use client";

import { Icon } from "@bilacert/shared/Icon";
import type {
  PricingPlan,
  ProcessStep,
  Service,
  SuccessStory,
} from "@bilacert/shared/types";
import { format } from "date-fns";
import { ArrowLeft, CheckCircle, Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteServiceDialog from "../DeleteServiceDialog";

interface ServiceDetailsProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!service) return null;

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
    router.push("/admin/services");
    router.refresh();
  };

  const renderStringArray = (data: string[] | undefined) => {
    if (!data || data.length === 0)
      return <p className="text-sm text-card-foreground">Not set.</p>;
    return (
      <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-card-foreground">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  const renderPricingPlans = (plans: PricingPlan[] | undefined) => {
    if (!plans || plans.length === 0)
      return (
        <p className="text-sm text-card-foreground">
          No pricing plans defined.
        </p>
      );
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{plan.title}</CardTitle>
                {plan.popular && <Badge variant="default">Popular</Badge>}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-2xl font-bold">{plan.price}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderProcessSteps = (steps: ProcessStep[] | undefined) => {
    if (!steps || steps.length === 0)
      return (
        <p className="text-sm text-card-foreground">
          No process steps defined.
        </p>
      );
    return (
      <div className="relative mt-4 pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border -translate-x-1/2 ml-3"></div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs z-10">
                {step.step}
              </div>
              <div className="flex-grow">
                <h5 className="font-semibold text-card-foreground">
                  {step.title}
                </h5>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSuccessStory = (story: SuccessStory | undefined) => {
    if (!story)
      return (
        <p className="text-sm text-card-foreground">
          No success story defined.
        </p>
      );
    return (
      <Card className="mt-2 bg-muted/50">
        <CardContent className="p-6 space-y-4">
          <div>
            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Scenario
            </h5>
            <p className="text-sm text-card-foreground">{story.scenario}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Challenge
            </h5>
            <p className="text-sm text-card-foreground">{story.challenge}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Solution
            </h5>
            <p className="text-sm text-card-foreground">{story.solution}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Result
            </h5>
            <p className="text-sm text-card-foreground font-medium">
              {story.result}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/services/${service.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.category}</CardDescription>
              </div>
              <Badge variant={service.featured ? "default" : "secondary"}>
                {service.featured ? "Featured" : "Not Featured"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Status
                  </h4>
                  <Badge variant={service.published ? "default" : "secondary"}>
                    {service.published ? "Published" : "Draft"}
                  </Badge>
                </div>
                {service.description && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Description
                    </h4>
                    <p className="text-sm text-card-foreground">
                      {service.description}
                    </p>
                  </div>
                )}
                {service.short_description && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Short Description
                    </h4>
                    <p className="text-sm text-card-foreground">
                      {service.short_description}
                    </p>
                  </div>
                )}
                {service.content && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Content
                    </h4>
                    <div className="prose prose-sm dark:prose-invert mt-1 text-card-foreground text-sm whitespace-pre-wrap">
                      {service.content}
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Features
                  </h4>
                  {renderStringArray(service.features)}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Requirements
                  </h4>
                  {renderStringArray(service.requirements)}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Includes
                  </h4>
                  {renderStringArray(service.includes)}
                </div>
              </div>
              <div className="space-y-6">
                {service.slug && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Slug
                    </h4>
                    <p className="text-sm font-mono text-card-foreground">
                      {service.slug}
                    </p>
                  </div>
                )}
                {service.href && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      HREF
                    </h4>
                    <p className="text-sm font-mono text-card-foreground">
                      {service.href}
                    </p>
                  </div>
                )}
                {service.icon && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Icon
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon
                        name={service.icon}
                        className="h-5 w-5 text-accent"
                      />
                      <p className="text-sm font-mono text-card-foreground">
                        {service.icon}
                      </p>
                    </div>
                  </div>
                )}
                {service.order_index !== undefined && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Order Index
                    </h4>
                    <p className="text-sm text-card-foreground">
                      {service.order_index}
                    </p>
                  </div>
                )}
                {service.processing_time && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Processing Time
                    </h4>
                    <p className="text-sm text-card-foreground">
                      {service.processing_time}
                    </p>
                  </div>
                )}
                {service.pricing !== null && service.pricing !== undefined && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Pricing
                    </h4>
                    <p className="text-sm font-mono text-card-foreground">
                      R{Number(service.pricing).toFixed(2)}
                    </p>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Created At
                  </h4>
                  <p className="text-sm text-card-foreground">
                    {format(new Date(service.created_at), "PPpp")}
                  </p>
                </div>
              </div>
            </div>

            {(service.image || service.thumbnail) && (
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Media</h3>
                <div className="flex gap-4">
                  {service.image && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        Image
                      </h4>
                      <Image
                        src={service.image}
                        alt="Service Image"
                        width={300}
                        height={200}
                        className="mt-1 rounded-md border"
                      />
                    </div>
                  )}
                  {service.thumbnail && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        Thumbnail
                      </h4>
                      <Image
                        src={service.thumbnail}
                        alt="Service Thumbnail"
                        width={150}
                        height={100}
                        className="mt-1 rounded-md border"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {(service.seo_title ||
              service.seo_description ||
              service.seo_keywords) && (
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-medium mb-4">SEO</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.seo_title && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        SEO Title
                      </h4>
                      <p className="text-sm text-card-foreground">
                        {service.seo_title}
                      </p>
                    </div>
                  )}
                  {service.seo_description && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        SEO Description
                      </h4>
                      <p className="text-sm text-card-foreground">
                        {service.seo_description}
                      </p>
                    </div>
                  )}
                  {service.seo_keywords && (
                    <div className="col-span-full">
                      <h4 className="text-sm font-medium text-muted-foreground">
                        SEO Keywords
                      </h4>
                      <p className="text-sm text-card-foreground">
                        {service.seo_keywords}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Pricing Plans</h3>
              {renderPricingPlans(service.pricing_plans)}
            </div>
            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Process Steps</h3>
              {renderProcessSteps(service.process_steps)}
            </div>
            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Success Story</h3>
              {renderSuccessStory(service.success_story)}
            </div>
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteServiceDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          service={service}
        />
      )}
    </>
  );
}
````

## File: apps/admin/app/admin/services/columns.tsx
````typescript
"use client";

import type { Service } from "@bilacert/shared/types";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ColumnsOptions {
  onDelete: (service: Service) => void;
}

export const columns = ({ onDelete }: ColumnsOptions): ColumnDef<Service>[] => [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Link
          href={`/admin/services/${row.original.id}`}
          className="font-medium text-primary hover:underline"
        >
          {row.original.title}
        </Link>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "published",
    header: "Status",
    cell: ({ row }) => {
      const published = row.getValue("published") as boolean;
      return (
        <Badge variant={published ? "default" : "secondary"}>
          {published ? "Published" : "Draft"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "featured",
    header: "Featured",
    cell: ({ row }) => {
      const featured = row.getValue("featured") as boolean;
      return featured ? <Badge variant="outline">Yes</Badge> : "No";
    },
  },
  {
    accessorKey: "pricing",
    header: "Pricing (ZAR)",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("pricing"));
      if (Number.isNaN(amount)) return "N/A";
      const formatted = new Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const service = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/admin/services/${service.id}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/admin/services/${service.id}/edit`}>Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
              onClick={() => onDelete(service)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
````

## File: apps/admin/app/admin/services/DeleteServiceDialog.tsx
````typescript
"use client";

import type { Service } from "@bilacert/shared/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { deleteService } from "./actions";

interface DeleteServiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  onDeleted?: () => void;
}

export default function DeleteServiceDialog({
  isOpen,
  onClose,
  service,
  onDeleted,
}: DeleteServiceDialogProps) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!service) return;

    setIsDeleting(true);
    try {
      const result = await deleteService(service.id);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Service deleted",
        description: `The service "${service.title}" has been successfully deleted.`,
      });
      if (onDeleted) {
        onDeleted();
      }
      onClose();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting service",
        description: error.message,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            service "{service?.title}".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} onClick={onClose}>
            Cancel
          </AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
````

## File: apps/admin/app/admin/services/ServicesClient.tsx
````typescript
"use client";

import type { Service } from "@bilacert/shared/types";
import { useServices } from "@bilacert/supabase/hooks/useServices";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminPage from "@/components/admin/AdminPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import DeleteServiceDialog from "./DeleteServiceDialog";

const ServiceCard = ({
  service,
  onEdit,
  onDelete,
}: {
  service: Service;
  onEdit: (service: Service) => void;
  onDelete: (service: Service) => void;
}) => {
  const router = useRouter();
  return (
    <div key={service.id} className="group relative">
      <Link
        href={`/admin/services/${service.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${service.title}`}
      >
        <span className="sr-only">View Details</span>
      </Link>
      <Card className="flex h-full flex-col transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/50">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg line-clamp-2">
              {service.title}
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
                      router.push(`/admin/services/${service.id}`);
                    }}
                  >
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      onEdit(service);
                    }}
                  >
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                    onClick={(e) => {
                      e.preventDefault();
                      onDelete(service);
                    }}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <CardDescription>{service.category}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex-grow">
          <div className="flex flex-wrap gap-2">
            <Badge variant={service.published ? "default" : "secondary"}>
              {service.published ? "Published" : "Draft"}
            </Badge>
            {service.featured && <Badge variant="outline">Featured</Badge>}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {service.short_description}
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-lg font-semibold">
            {service.pricing
              ? `R ${service.pricing.toLocaleString()}`
              : "Not Set"}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default function ServicesClient() {
  return (
    <AdminPage<Service>
      useData={useServices}
      title="Services"
      newItemButtonText="Add Service"
      newItemLink="/admin/services/new"
      renderItem={(service, onEdit, onDelete) => (
        <ServiceCard service={service} onEdit={onEdit} onDelete={onDelete} />
      )}
      DeleteDialog={DeleteServiceDialog as any}
    />
  );
}
````

## File: apps/admin/app/admin/testimonials/actions.ts
````typescript
"use server";

import {
  deleteTestimonial as deleteTestimonialMutation,
  upsertTestimonial as upsertTestimonialMutation,
} from "@bilacert/supabase/Mutations/testimonials";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";
import { testimonialSchema } from "./schema";

export async function upsertTestimonial(values: unknown) {
  const parsedValues = testimonialSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const { id, ...rest } = parsedValues.data;

  const dataToUpsert = id ? { ...rest, id } : rest;

  try {
    const result = await upsertTestimonialMutation(dataToUpsert);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/testimonials");

  return { error: null };
}

export async function deleteTestimonial(testimonialId: string) {
  try {
    const result = await deleteTestimonialMutation(testimonialId);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/testimonials");

  return { error: null };
}
````

## File: apps/admin/app/admin/testimonials/DeleteTestimonialDialog.tsx
````typescript
"use client";

import type { Testimonial } from "@bilacert/shared/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { deleteTestimonial } from "./actions";

interface DeleteTestimonialDialogProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: Testimonial | null;
}

export default function DeleteTestimonialDialog({
  isOpen,
  onClose,
  testimonial,
}: DeleteTestimonialDialogProps) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!testimonial) return;

    setIsDeleting(true);
    try {
      const result = await deleteTestimonial(testimonial.id);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Testimonial deleted",
        description: "The testimonial has been successfully deleted.",
      });
      onClose();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting testimonial",
        description: error.message,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            testimonial.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} onClick={onClose}>
            Cancel
          </AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
````

## File: apps/admin/app/admin/testimonials/TestimonialDetails.tsx
````typescript
"use client";

import type { Testimonial } from "@bilacert/shared/types";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DeleteTestimonialDialog from "./DeleteTestimonialDialog";
import TestimonialEmbed from "./TestimonialEmbed";

interface TestimonialDetailsProps {
  testimonial: Testimonial;
}

export default function TestimonialDetails({
  testimonial,
}: TestimonialDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!testimonial) {
    return null;
  }

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
    router.refresh();
    router.push("/admin/testimonials");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/testimonials">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Testimonials
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="h-[calc(100vh-20rem)] overflow-y-auto p-0">
            <TestimonialEmbed postUrl={testimonial.post_url} />
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteTestimonialDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          testimonial={testimonial}
        />
      )}
    </>
  );
}
````

## File: apps/admin/app/admin/testimonials/TestimonialsClient.tsx
````typescript
"use client";

import type { Testimonial } from "@bilacert/shared/types";
import { useTestimonials } from "@bilacert/supabase/hooks/useTestimonials";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminPage from "@/components/admin/AdminPage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import DeleteTestimonialDialog from "./DeleteTestimonialDialog";
import TestimonialEmbed from "./TestimonialEmbed";

const renderTestimonial = (
  testimonial: Testimonial,
  onEdit: (testimonial: Testimonial) => void,
  onDelete: (testimonial: Testimonial) => void,
) => {
  const router = useRouter();
  const date = new Date(testimonial.created_at);
  const formattedDate = !Number.isNaN(date.getTime())
    ? format(date, "PP")
    : "Date not available";
  return (
    <div key={testimonial.id} className="group relative">
      <Link
        href={`/admin/testimonials/${testimonial.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View testimonial`}
      >
        <span className="sr-only">View Details</span>
      </Link>
      <Card className="flex flex-col h-full hover:shadow-lg hover:border-primary/50 transition-all">
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">Testimonial</CardTitle>
            <CardDescription className="text-xs">
              Added on {formattedDate}
            </CardDescription>
          </div>
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
                    router.push(`/admin/testimonials/${testimonial.id}`);
                  }}
                >
                  View
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    onEdit(testimonial);
                  }}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                  onClick={(e) => {
                    e.preventDefault();
                    onDelete(testimonial);
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-0 overflow-hidden">
          <TestimonialEmbed postUrl={testimonial.post_url} />
        </CardContent>
      </Card>
    </div>
  );
};

export default function TestimonialsClient() {
  return (
    <AdminPage<Testimonial>
      useData={useTestimonials}
      title="Testimonials"
      newItemButtonText="Add Testimonial"
      newItemLink="/admin/testimonials/new"
      renderItem={renderTestimonial}
      DeleteDialog={DeleteTestimonialDialog as any}
    />
  );
}
````

## File: apps/admin/components/admin/Sidebar.tsx
````typescript
"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import {
  BarChart,
  Briefcase,
  FileSpreadsheet,
  FileText,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";

const supabase = createSupabaseBrowserClient();

const navItems = [
  { href: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/analysis", icon: BarChart, label: "Analysis" },
  { href: "/admin/services", icon: Briefcase, label: "Services" },
  { href: "/admin/blogs", icon: FileText, label: "Blogs" },
  { href: "/admin/testimonials", icon: MessageSquare, label: "Testimonials" },
  { href: "/admin/contacts", icon: Users, label: "Contacts" },
  {
    href: "/admin/form_submissions",
    icon: FileSpreadsheet,
    label: "Submissions",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const { setOpenMobile } = useSidebar();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setOpenMobile(false);
      router.push("/admin/login");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Logout Failed",
        description: error.message,
      });
    }
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2"
          onClick={() => setOpenMobile(false)}
        >
          <Logo className="h-8 w-8 text-sidebar-primary" />
          <span className="text-lg font-semibold text-sidebar-foreground">
            Bilacert Admin
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(item.href)}
                className="w-full justify-start"
                tooltip={item.label}
                onClick={() => setOpenMobile(false)}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="w-full justify-start"
              tooltip="Settings"
              onClick={() => setOpenMobile(false)}
            >
              <Link href="#">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="w-full justify-start"
              tooltip="Log out"
            >
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
````

## File: apps/client/lib/supabase-client.ts
````typescript
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
      .from("submissions")
      .insert({
        service_type: serviceType,
        name: fullName,
        email: email,
        phone: phone || null,
        message: message,
        service_data: serviceData || {},
        user_agent:
          typeof navigator !== "undefined" ? navigator.userAgent : null,
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
    let query = supabase.from("submissions").select("*").eq("email", email);

    if (serviceType) {
      query = query.eq("service_type", serviceType);
    }

    const { data, error } = await query.order("created_at", {
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
      .eq("verified", true)
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}
````

## File: apps/client/package.json
````json
{
  "name": "@bilacert/client",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write ."
  },
  "dependencies": {
    "@bilacert/shared": "workspace:*",
    "@bilacert/supabase": "workspace:*",
    "next": "catalog:",
    "react": "catalog:",
    "react-dom": "catalog:",
    "react-icons": "catalog:",
    "lucide-react": "catalog:",
    "tailwind-merge": "catalog:",
    "@supabase/supabase-js": "catalog:",
    "@mdx-js/loader": "^3.1.1",
    "@mdx-js/react": "^3.1.1",
    "@next/mdx": "^15.5.2",
    "@next/third-parties": "^16.0.1",
    "@radix-ui/react-slot": "catalog:",
    "@supabase/ssr": "catalog:",
    "@vercel/analytics": "^1.5.0",
    "class-variance-authority": "catalog:",
    "clsx": "catalog:",
    "date-fns": "catalog:",
    "uuid": "catalog:"
  },
  "devDependencies": {
    "@bilacert/typescript-config": "workspace:*",
    "@biomejs/biome": "catalog:",
    "@tailwindcss/postcss": "catalog:",
    "@types/node": "catalog:",
    "@types/react": "catalog:",
    "@types/react-dom": "catalog:",
    "babel-plugin-react-compiler": "1.0.0",
    "tailwindcss": "catalog:",
    "typescript": "catalog:"
  }
}
````

## File: packages/shared/package.json
````json
{
  "name": "@bilacert/shared",
  "version": "0.0.0",
  "private": true,
  "exports": {
    "./cn": "./src/utils/cn.ts",
    "./Icon": "./src/components/Icon.tsx",
    "./types": "./src/types/domain.ts"
  },
  "dependencies": {
    "clsx": "catalog:",
    "tailwind-merge": "catalog:",
    "typescript": "catalog:"
  }
}
````

## File: packages/supabase/src/server.ts
````typescript
import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./supabaseType";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch {
          // Server Component context
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch {
          // Server Component context
        }
      },
    },
  });
}
````

## File: apps/admin/app/admin/blogs/[id]/edit/page.tsx
````typescript
import type { BlogPost } from "@bilacert/shared/types";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BlogForm from "../../BlogForm";

export const metadata = {
  title: "Edit Blog Post | Bilacert Admin Pro",
  description: "Edit an existing blog post.",
};

async function getBlog(id: string): Promise<BlogPost | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: data.content,
    category: data.category,
    tags: data.tags,
    read_time: data.read_time,
    seo_title: data.seo_title,
    seo_description: data.seo_description,
    seo_keywords: data.seo_keywords,
    featured_image: data.featured_image,
    thumbnail: data.thumbnail,
    published: data.published,
    published_at: data.published_at,
    featured: data.featured,
    author_id: data.author_id,
    author_name: data.author_name,
    views_count: data.views_count,
    created_at: data.created_at,
    updated_at: data.updated_at,
  } as BlogPost;
}

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/blogs">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Edit Blog Post</CardTitle>
          <CardDescription>
            Update the details for "{blog.title}".
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BlogForm blog={blog} />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/admin/blogs/[id]/page.tsx
````typescript
import type { BlogPost } from "@bilacert/shared/types";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetails from "../BlogDetails";

async function getBlog(id: string): Promise<BlogPost | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: data.content,
    category: data.category,
    tags: data.tags,
    read_time: data.read_time,
    seo_title: data.seo_title,
    seo_description: data.seo_description,
    seo_keywords: data.seo_keywords,
    featured_image: data.featured_image,
    thumbnail: data.thumbnail,
    published: data.published,
    published_at: data.published_at,
    featured: data.featured,
    author_id: data.author_id,
    author_name: data.author_name,
    views_count: data.views_count,
    created_at: data.created_at,
    updated_at: data.updated_at,
  } as BlogPost;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blog = await getBlog(params.id);
  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }
  return {
    title: `${blog.title} | Bilacert Admin Pro`,
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  return <BlogDetails blog={blog} />;
}
````

## File: apps/admin/app/admin/contacts/actions.ts
````typescript
"use server";

import type { Contact } from "@bilacert/shared/types";
import { createSupabaseAdminClient } from "@bilacert/supabase/admin";
import {
  deleteContact as deleteContactMutation,
  upsertContact as upsertContactMutation,
} from "@bilacert/supabase/Mutations/contacts";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";
import { contactSchema } from "./schema";

export async function getContacts() {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data as Contact[];
}

export async function upsertContact(values: unknown, contactId?: string) {
  const parsedValues = contactSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  let data: Contact;
  try {
    const result = await upsertContactMutation(
      contactId ? { ...parsedValues.data, id: contactId } : parsedValues.data,
    );
    data = result.data as Contact;
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/contacts");
  revalidatePath(`/admin/contacts/${data.id}`);

  return {
    data,
    message: `Contact ${contactId ? "updated" : "created"} successfully!`,
  };
}

export async function deleteContact(contactId: string) {
  try {
    const result = await deleteContactMutation(contactId);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/contacts");

  return {
    message: "Contact deleted successfully!",
  };
}
````

## File: apps/admin/app/admin/form_submissions/[id]/edit/page.tsx
````typescript
import type { Submission } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SubmissionForm from "../../SubmissionForm";

const supabase = createSupabaseBrowserClient();

export const metadata = {
  title: "Edit Submission | Bilacert Admin Pro",
  description: "Edit a form submission.",
};

async function getSubmission(id: string): Promise<Submission | null> {
  const { data, error } = await supabase
    .from("form_submissions")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    form_type: data.form_type,
    status: data.status,
    service_id: data.service_id,
    service_name: data.service_name,
    full_name: data.full_name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    industry: data.industry,
    details: data.details,
    internal_notes: data.internal_notes,
    assigned_to: data.assigned_to,
    created_at: data.created_at,
    updated_at: data.updated_at,
    completed_at: data.completed_at,
  } as Submission;
}

export default async function EditSubmissionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const submission = await getSubmission(id);

  if (!submission) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href={`/admin/form_submissions/${submission.id}`}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Submission
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Edit Submission</CardTitle>
          <CardDescription>
            Update details for submission from "{submission.full_name}".
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubmissionForm submission={submission} />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/admin/form_submissions/DeleteSubmissionDialog.tsx
````typescript
"use client";

import type { Submission } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const supabase = createSupabaseBrowserClient();

interface DeleteSubmissionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  submission: Submission | null;
  onDeleted?: () => void;
}

export default function DeleteSubmissionDialog({
  isOpen,
  onClose,
  submission,
  onDeleted,
}: DeleteSubmissionDialogProps) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!submission) return;

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from("form_submissions")
        .delete()
        .eq("id", submission.id);

      if (error) throw error;

      toast({
        title: "Submission deleted",
        description: `The submission from "${submission.full_name}" has been successfully deleted.`,
      });
      if (onDeleted) {
        onDeleted();
      } else {
        onClose();
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting submission",
        description: error.message,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            submission from "{submission?.full_name}".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} onClick={onClose}>
            Cancel
          </AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
````

## File: apps/admin/app/admin/form_submissions/SubmissionDetails.tsx
````typescript
"use client";

import type { Submission } from "@bilacert/shared/types";
import { format } from "date-fns";
import { ArrowLeft, Edit, Phone, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { statusVariantMap } from "./columns";
import DeleteSubmissionDialog from "./DeleteSubmissionDialog";

interface SubmissionDetailsProps {
  submission: Submission;
}

export default function SubmissionDetails({
  submission,
}: SubmissionDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!submission) return null;

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const onDeleted = () => {
    setIsDeleteDialogOpen(false);
    router.push("/admin/form_submissions");
    router.refresh();
  };

  const renderJson = (data: unknown) => {
    if (data == null) {
      return <p className="text-sm text-card-foreground">Not set.</p>;
    }
    return (
      <div className="prose prose-sm dark:prose-invert mt-1 text-card-foreground text-sm whitespace-pre-wrap">
        <pre className="bg-muted/50 p-2 rounded-md">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    );
  };

  const formatPhoneNumberForWhatsApp = (phone: string) => {
    // Remove all non-digit characters
    return phone.replace(/\D/g, "");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/form_submissions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Submissions
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/form_submissions/${submission.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Submission from {submission.full_name}</CardTitle>
                <CardDescription>
                  {submission.service_name
                    ? `Service: ${submission.service_name}`
                    : `Form: ${submission.form_type}`}
                </CardDescription>
              </div>
              <Badge
                variant={statusVariantMap[submission.status] || "default"}
                className="capitalize"
              >
                {submission.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Client Name
                  </h4>
                  <p className="text-sm text-card-foreground">
                    {submission.full_name}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Client Email
                  </h4>
                  <p className="text-sm text-card-foreground">
                    {submission.email}
                  </p>
                </div>
                {submission.phone && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Phone
                    </h4>
                    <a
                      href={`https://wa.me/${formatPhoneNumberForWhatsApp(submission.phone)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary transition-colors hover:underline"
                    >
                      <Phone className="h-4 w-4" />
                      {submission.phone}
                    </a>
                  </div>
                )}
                {submission.company && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Company
                    </h4>
                    <p className="text-sm text-card-foreground">
                      {submission.company}
                    </p>
                  </div>
                )}
                {submission.industry && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Industry
                    </h4>
                    <p className="text-sm text-card-foreground">
                      {submission.industry}
                    </p>
                  </div>
                )}
              </div>
              <div className="space-y-6">
                {submission.assigned_to && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Assigned To
                    </h4>
                    <p className="text-sm text-mono text-card-foreground">
                      {submission.assigned_to}
                    </p>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Submitted At
                  </h4>
                  <p className="text-sm text-card-foreground">
                    {format(new Date(submission.created_at), "PPpp")}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Last Updated
                  </h4>
                  <p className="text-sm text-card-foreground">
                    {format(new Date(submission.updated_at), "PPpp")}
                  </p>
                </div>
                {submission.completed_at && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Completed At
                    </h4>
                    <p className="text-sm text-card-foreground">
                      {format(new Date(submission.completed_at), "PPpp")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {submission.details != null && (
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Submission Details</h3>
                {renderJson(submission.details)}
              </div>
            )}

            {submission.internal_notes && (
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Internal Notes</h3>
                <div className="prose prose-sm dark:prose-invert mt-1 text-card-foreground text-sm whitespace-pre-wrap">
                  {submission.internal_notes}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteSubmissionDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          submission={submission}
          onDeleted={onDeleted}
        />
      )}
    </>
  );
}
````

## File: apps/admin/app/admin/login/page.tsx
````typescript
"use client";

import {
  createSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@bilacert/supabase/client";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SupabaseNotConfigured from "@/components/admin/SupabaseNotConfigured";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const supabase = createSupabaseBrowserClient();

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isSupabaseConfigured) {
    return <SupabaseNotConfigured />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Failed to log in. Please check your credentials.");
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error.message || "Please check your credentials.",
      });
    } else {
      router.push("/admin/dashboard");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Logo className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Bilacert Admin Pro
          </CardTitle>
          <CardDescription>
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Log In"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm">
          <Link href="#" className="text-primary hover:underline">
            Forgot your password?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/admin/services/[id]/edit/page.tsx
````typescript
import type { Service } from "@bilacert/shared/types";
import { createSupabaseAdminClient } from "@bilacert/supabase/admin";
import { normalizeService } from "@bilacert/supabase/Queries/services";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ServiceForm from "./ServiceForm";

export const metadata = {
  title: "Edit Service | Bilacert Admin Pro",
  description: "Edit an existing regulatory service.",
};

async function getService(id: string): Promise<Service | null> {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching service:", error);
    return null;
  }

  return data ? normalizeService(data) : null;
}

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/services">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Edit Service</CardTitle>
          <CardDescription>
            Update the details for "{service.title}".
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ServiceForm service={service} />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/admin/services/actions.ts
````typescript
"use server";

import {
  deleteService as deleteServiceMutation,
  upsertService as upsertServiceMutation,
} from "@bilacert/supabase/Mutations/services";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";
import { serviceSchema } from "./schema";

export async function upsertService(values: unknown) {
  const parsedValues = serviceSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const {
    id,
    shortDescription,
    orderIndex,
    processingTime,
    seoTitle,
    seoDescription,
    seoKeywords,
    pricingPlans,
    processSteps,
    successStory,
    ...rest
  } = parsedValues.data;

  const dataToUpsert = {
    ...rest,
    id,
    short_description: shortDescription,
    order_index: orderIndex,
    processing_time: processingTime,
    seo_title: seoTitle,
    seo_description: seoDescription,
    seo_keywords: seoKeywords,
    pricing_plans: pricingPlans,
    process_steps: processSteps,
    success_story: successStory,
  };

  try {
    const result = await upsertServiceMutation(
      dataToUpsert as Parameters<typeof upsertServiceMutation>[0],
    );
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/services");

  return { error: null };
}

export async function deleteService(serviceId: string) {
  try {
    const result = await deleteServiceMutation(serviceId);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/services");

  return { error: null };
}
````

## File: apps/admin/app/admin/testimonials/[id]/edit/page.tsx
````typescript
import type { Testimonial } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TestimonialForm from "../../TestimonialForm";

const supabase = createSupabaseBrowserClient();

export const metadata = {
  title: "Edit Testimonial | Bilacert Admin Pro",
  description: "Edit an existing testimonial.",
};

async function getTestimonial(id: string): Promise<Testimonial | null> {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    post_url: data.post_url,
    created_at: data.created_at,
  } as Testimonial;
}

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonial = await getTestimonial(id);

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/testimonials">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Testimonials
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Edit Testimonial</CardTitle>
          <CardDescription>Update the Facebook post URL.</CardDescription>
        </CardHeader>
        <CardContent>
          <TestimonialForm testimonial={testimonial} />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/admin/testimonials/[id]/page.tsx
````typescript
import type { Testimonial } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TestimonialDetails from "../TestimonialDetails";

const supabase = createSupabaseBrowserClient();

async function getTestimonial(id: string): Promise<Testimonial | null> {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    post_url: data.post_url,
    created_at: data.created_at,
  } as Testimonial;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const testimonial = await getTestimonial(params.id);
  if (!testimonial) {
    return {
      title: "Testimonial Not Found",
    };
  }
  return {
    title: `Testimonial from ${new Date(testimonial.created_at).toLocaleDateString()} | Bilacert Admin Pro`,
  };
}

export default async function TestimonialDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonial = await getTestimonial(id);

  if (!testimonial) {
    notFound();
  }

  return <TestimonialDetails testimonial={testimonial} />;
}
````

## File: apps/admin/components/ui/ImageUpload.tsx
````typescript
"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { Loader2, Upload, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./button";

const supabase = createSupabaseBrowserClient();

interface ImageUploadProps {
  bucket: string;
  onUpload: (url: string) => void;
  initialUrl?: string | null;
  onRemove?: () => void;
}

export default function ImageUpload({
  bucket,
  onUpload,
  initialUrl,
  onRemove,
}: ImageUploadProps) {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    setImageUrl(initialUrl || null);
  }, [initialUrl]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileName = `${Date.now()}_${file.name.replace(/\s/g, "_")}`;
      const filePath = fileName;

      const { error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (error) throw error;

      const {
        data: { publicUrl },
      } = supabase.storage.from(bucket).getPublicUrl(filePath);

      setImageUrl(publicUrl);
      onUpload(publicUrl);
      toast({ title: "Image uploaded successfully" });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error uploading image",
        description: error.message,
      });
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    if (onRemove) {
      onRemove();
    } else {
      onUpload("");
    }
  };

  return (
    <div className="space-y-2">
      {imageUrl ? (
        <div className="relative group w-full max-w-sm">
          <Image
            src={imageUrl}
            alt="Uploaded image"
            width={400}
            height={200}
            className="rounded-lg object-cover border"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleRemoveImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor={`image-upload-${bucket}`}
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {uploading ? (
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              ) : (
                <>
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PNG, JPG, GIF</p>
                </>
              )}
            </div>
            <input
              id={`image-upload-${bucket}`}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              disabled={uploading}
              accept="image/*"
            />
          </label>
        </div>
      )}
    </div>
  );
}
````

## File: apps/client/app/blog/[slug]/page.tsx
````typescript
import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock, Folder, Tag, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { StickyShare } from "@/components/blog/StickyShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ViewTracker } from "@/components/blog/view";
import {
  getCachedBlogBySlug,
  getCachedBlogPostsByCategory,
  getCachedPublishedBlogSlugs,
} from "../../_lib/cached-public-data";

export async function generateStaticParams() {
  const slugs = await getCachedPublishedBlogSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCachedBlogBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Bilacert",
    };
  }

  return {
    title: post.seoTitle || `${post.title} - Bilacert`,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords || [
      post.title.toLowerCase(),
      ...(post.category?.split(", ").map((c: string) => c.toLowerCase()) || []),
      "blog",
      "compliance",
      "South Africa",
    ],
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: `https://bilacert.co.za/blog/${slug}`,
      type: "article",
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
    alternates: {
      canonical: `https://bilacert.co.za/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getCachedBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.category
    ? await getCachedBlogPostsByCategory(post.category, 3)
    : [];

  return (
    <div className="min-h-screen">
      <ViewTracker slug={slug} />
      <StickyShare />
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <section className="py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {post.category && (
              <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
            )}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            )}
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.authorName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {post.createdAt && format(new Date(post.createdAt), "PP")}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {post.featuredImage && (
        <div className="relative h-64 md:h-96 max-w-5xl mx-auto my-8 rounded-lg overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row-reverse">
          <div className="w-1/4 pl-8 sticky top-24 self-start">
            <TableOfContents content={post.content || ""} />
          </div>
          <div className="w-3/4">
            <div className="mt-6 border-t pt-6 max-w-[256] sm:max-w-lg  md:max-w-xl lg:max-w-3xl mx-auto">
              <article
                className="prose prose-slate prose-indigo text-sm
                                       break-words overflow-wrap-anywhere
                                       prose-headings:font-bold prose-headings:tracking-tight
                                       prose-a:text-indigo-600 prose-img:rounded-2xl prose-img:shadow-lg
                                       [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl 
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 
          [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-slate-700
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:my-4
          [&>img]:rounded-lg"
                dangerouslySetInnerHTML={{
                  __html:
                    post.content ||
                    '<p class="text-slate-400 italic">No content to display yet...</p>',
                }}
              />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12 mt-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Folder className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">{post.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag className="h-5 w-5 text-gray-600" />
                  {/* {(post.tags || []).map((tag: string) => (
                                <span key={tag} className="text-gray-600">{tag}</span>
                            ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reduced padding on mobile (p-5) and increased it on larger screens (md:p-8) */}
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
              Found this helpful?
            </h3>

            {/* Changed to a vertical grid on mobile (grid grid-cols-1 gap-3) 
        and switched back to a flex row on medium screens (md:flex md:space-x-4)
      */}
            <div className="grid grid-cols-1 gap-3 md:flex md:justify-center md:space-x-4 md:gap-0 mb-8">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-blue-400 text-white px-4 py-2.5 rounded-lg hover:bg-blue-500 w-full md:w-auto"
              >
                <FaTwitter className="h-5 w-5" />
                <span>Twitter</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 w-full md:w-auto"
              >
                <FaLinkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-blue-800 text-white px-4 py-2.5 rounded-lg hover:bg-blue-900 w-full md:w-auto"
              >
                <FaFacebook className="h-5 w-5" />
                <span>Facebook</span>
              </button>
            </div>

            <div className="border-t pt-8">
              {/* Added w-full on mobile and md:w-auto to make the CTA thumb-friendly */}
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold inline-block w-full md:w-auto text-center"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </div>
  );
}
````

## File: apps/client/app/forms/class-ecs-ecns-licensing/page.tsx
````typescript
import ClientPage from "./ClientPage";

export default function Page() {
  return <ClientPage />;
}
````

## File: apps/client/app/page.tsx
````typescript
import { Icon } from "@bilacert/shared/Icon";
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import Testimonials from "@/components/Testimonials";
import {
  getCachedFeaturedServices,
  getCachedPublishedBlogs,
} from "./_lib/cached-public-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Bilacert simplifies ICASA and NRCS LOA compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance. Get your approvals faster with our streamlined process.",
  keywords: [
    "ICASA type approval South Africa",
    "NRCS LOA applications",
    "radio dealer licensing",
    "ECS ECNS licensing",
    "VHF radio license",
    "compliance consultant South Africa",
    "regulatory approval services",
    "telecommunications compliance",
  ],
  openGraph: {
    title: "Bilacert - Your Compliance Partner | ICASA & NRCS Approvals",
    description:
      "Simplifying ICASA and NRCS compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance.",
    url: "https://bilacert.co.za",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za",
  },
};

export default async function HomePage() {
  const organizationData = {
    name: "Bilacert (Pty) Ltd",
    description:
      "Bilacert simplifies ICASA and NRCS LOA compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance.",
    serviceType: "Compliance Consulting",
    price: "From R1,000",
  };

  const services = await getCachedFeaturedServices();
  const allBlogPosts = await getCachedPublishedBlogs();
  const blogPosts = allBlogPosts.slice(0, 3);

  const whyChooseUs = [
    {
      title: "Expert Guidance",
      description:
        "Deep industry knowledge and regulatory expertise to guide you through complex compliance requirements.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Efficient Process",
      description:
        "Streamlined applications and proactive problem-solving to minimize delays and maximize success rates.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Personalized support and clear communication throughout your compliance journey.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <StructuredData type="Organization" data={organizationData} />
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32">
        <Image
          src="/herosetion/Home-Page.jpg"
          alt="Bilacert compliance"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Compliance Simplified
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200">
                Expert guidance for ICASA and NRCS approvals. We handle the
                complexity so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1 text-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">30+ Days Faster</h3>
                      <p className="text-gray-300">Than industry average</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-lg">
                      <Icon name="Shield" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">100% Compliance</h3>
                      <p className="text-gray-300">Guaranteed approval</p>
                    </div>
                  </div>
                  {/* <div className='flex items-center space-x-4'>
										<div className='bg-accent p-3 rounded-lg'>
											<Users className='h-6 w-6 text-white' />
										</div>
										<div>
											<h3 className='font-semibold'>500+ Clients</h3>
											<p className='text-gray-300'>Successfully served</p>
										</div>
									</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive compliance solutions covering all aspects of ICASA
              and NRCS regulatory approvals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon name={service.icon || "Shield"} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-accent font-medium">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose Bilacert?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make compliance simple, efficient, and stress-free for
              businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-accent">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Blog Preview */}
      <section className="py-20 bg-secondary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest compliance insights and industry
              updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(post.createdAt).toLocaleDateString("en-ZA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-accent font-medium">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors duration-200"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Simplify Your Compliance?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Get expert guidance and streamline your ICASA and NRCS approval
            process. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1"
            >
              Get Free Consultation
            </Link>
            <Link
              href="tel:0754304433"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200"
            >
              Call 075 430 4433
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
````

## File: apps/client/app/services/[serviceId]/form/ServiceApplicationForm.tsx
````typescript
"use client";

import type { FormSubmissionPayload, Service } from "@bilacert/shared/types";
import { useFormSubmission } from "@bilacert/supabase/hooks/useFormSubmission";
import { AlertCircle, CheckCircle, Loader, Send } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServiceApplicationForm() {
  const params = useParams();
  const serviceSlug = params.serviceId as string;

  const [service, setService] = useState<Service | null>(null);
  const [isFetchingService, setIsFetchingService] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    details: "",
  });

  const { isLoading, error, isSuccess, successMessage, handleSubmit, reset } =
    useFormSubmission();

  useEffect(() => {
    const fetchService = async () => {
      if (!serviceSlug) return;
      setIsFetchingService(true);
      try {
        const response = await fetch(
          `/api/form-submissions?serviceId=${serviceSlug}`,
        );
        if (!response.ok) {
          throw new Error("Service not found");
        }
        const serviceData: Service = await response.json();
        setService(serviceData);
      } catch (err) {
        console.error("Failed to fetch service:", err);
        // Optionally, set an error state to show in the UI
      } finally {
        setIsFetchingService(false);
      }
    };

    fetchService();
  }, [serviceSlug]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!service) {
      console.error("Attempted to submit form without a loaded service.");
      // You might want to show an error to the user here
      return;
    }

    const payload: FormSubmissionPayload = {
      formType: "service-inquiry",
      serviceId: service.id, // Use the fetched UUID
      serviceName: serviceSlug, // Use the service slug
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.company,
      industry: formData.industry,
      message: formData.details, // Wrap details in a JSON object if needed
    };

    const result = await handleSubmit(payload);

    if (result?.success) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        details: "",
      });
      setTimeout(reset, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isFetchingService) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader className="animate-spin h-8 w-8 text-primary" />
        <p className="ml-4 text-gray-600">Loading form...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-700">
          The service you are looking for could not be found. Please return to
          the services page and try again.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Apply for {service.title}
        </h2>

        {isSuccess && successMessage && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-green-700">{successMessage}</p>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="+27 XX XXX XXXX"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="industry"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Industry
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="e.g., Technology, Manufacturing, etc."
            />
          </div>

          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={6}
              value={formData.details}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Provide any additional details..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || isFetchingService}
            className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Submit Application
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
````

## File: apps/client/app/services/page.tsx
````typescript
import { Icon } from "@bilacert/shared/Icon";
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCachedServices } from "../_lib/cached-public-data";

export const metadata: Metadata = {
  title: "Our Services - Bilacert",
  description:
    "Comprehensive licensing and certification services for South African businesses. ICASA type approvals, NRCS LOA, radio dealer licensing, and more.",
  keywords: [
    "ICASA licensing",
    "NRCS certification",
    "radio licensing",
    "VHF licensing",
    "ECS ECNS licensing",
    "license exemptions",
    "compliance services South Africa",
  ],
  openGraph: {
    title: "Services - Bilacert",
    description:
      "Comprehensive licensing and certification services for South African businesses.",
    url: "https://bilacert.co.za/services",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za/services",
  },
};

export default async function ServicesPage() {
  const services = await getCachedServices();

  const whyChooseUs = [
    {
      title: "Expert Guidance",
      description:
        "Deep industry knowledge and regulatory expertise to guide you through complex compliance requirements.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Efficient Process",
      description:
        "Streamlined applications and proactive problem-solving to minimize delays and maximize success rates.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Personalized support and clear communication throughout your compliance journey.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <Image
          src="https://picsum.photos/seed/services/1920/1080"
          data-ai-hint="compliance document"
          alt="Bilacert Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive licensing and certification services to help your
              business stay compliant and competitive in South Africa's
              regulated industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group block h-full"
              >
                <div className="flex h-full flex-col rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
                  <div className="mb-4 flex-shrink-0 text-accent">
                    <Icon name={service.icon || "Shield"} className="h-8 w-8" />
                  </div>
                  <div className="flex flex-grow flex-col">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground flex-grow">
                      {service.description}
                    </p>
                    {service.includes && service.includes.length > 0 && (
                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-semibold text-card-foreground">
                          Includes:
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {service.includes
                            .slice(0, 4)
                            .map((item: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="h-4 w-4 text-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="mt-auto pt-6">
                    {service.pricing && (
                      <p className="mb-4 text-lg font-semibold text-primary">
                        From R
                        {service.pricing.toLocaleString("en-ZA", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </p>
                    )}
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose Bilacert?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make compliance simple, efficient, and stress-free for
              businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-accent">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Don't see what you need?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your specific licensing and
            certification needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:0754304433">Call 075 430 4433</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
````

## File: apps/client/app/sitemap.ts
````typescript
import type { MetadataRoute } from "next";
import {
  getCachedPublishedBlogSlugs,
  getCachedServiceSlugs,
} from "./_lib/cached-public-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://bilacert.co.za";
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Dynamic service pages
  const serviceSlugs = await getCachedServiceSlugs();
  const servicePages = serviceSlugs.map(({ slug }) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic blog posts
  const blogSlugs = await getCachedPublishedBlogSlugs();
  const blogPosts = blogSlugs.map(({ slug }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPosts];
}
````

## File: apps/client/components/blog/RelatedPosts.tsx
````typescript
import type { BlogPost } from "@bilacert/shared/types";
import Image from "next/image";
import Link from "next/link";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    layout="fill"
                    className="object-cover"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-primary group-hover:text-primary-light transition-colors duration-200 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
````

## File: packages/supabase/src/Queries/blogs.ts
````typescript
import type { BlogPost } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "../client";
import type { Database } from "../supabaseType";

type BlogPostRow = Database["public"]["Tables"]["blog_posts"]["Row"];

function normalizeBlogPost(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? undefined,
    content: row.content,
    category: row.category ?? undefined,
    tags: row.tags ?? undefined,
    readTime: row.read_time ?? undefined,
    seoTitle: row.seo_title ?? undefined,
    seoDescription: row.seo_description ?? undefined,
    seoKeywords: row.seo_keywords ?? undefined,
    featuredImage: row.featured_image ?? undefined,
    thumbnail: row.thumbnail ?? undefined,
    published: row.published ?? false,
    publishedAt: row.published_at ?? undefined,
    featured: row.featured ?? false,
    authorId: row.author_id ?? undefined,
    authorName: row.author_name ?? undefined,
    viewsCount: row.views_count ?? 0,
    createdAt: row.created_at ?? row.published_at ?? new Date(0).toISOString(),
    updatedAt: row.updated_at ?? undefined,
  };
}

export async function getAllPublishedBlogSlugs() {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("published", true);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getAllPublishedBlogPosts(): Promise<BlogPost[]> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(normalizeBlogPost);
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return normalizeBlogPost(data);
}

export async function getBlogPostsByCategory(
  category: string,
  limit: number = 3,
): Promise<BlogPost[]> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("category", category)
    .limit(limit);

  if (error) {
    return [];
  }

  return data.map(normalizeBlogPost);
}
````

## File: apps/admin/app/admin/blogs/BlogForm.tsx
````typescript
"use client";

import type { BlogPost } from "@bilacert/shared/types";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import PexelsImagePicker from "@/components/PexelsImagePicker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUpload from "@/components/ui/ImageUpload";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { upsertBlog } from "./actions";
import BlogEditor from "./BlogEditor";
import { type BlogFormValues, blogSchema } from "./schema";

interface BlogFormProps {
  blog?: BlogPost | null;
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function BlogForm({ blog }: BlogFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<BlogFormValues>({
    resolver: standardSchemaResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      author_name: "Bilacert Team",
      read_time: "5 min read",
      category: "",
      tags: "",
      excerpt: "",
      content: "",
      published: false,
      featured_image: "",
      thumbnail: "",
      featured: false,
      seo_title: "",
      seo_description: "",
      seo_keywords: "",
    },
  });

  const { handleSubmit, reset, watch, setValue } = form;

  const title = watch("title");
  const isEditing = !!blog;

  useEffect(() => {
    if (!isEditing && title) {
      setValue("slug", slugify(title), { shouldValidate: true });
    }
  }, [title, setValue, isEditing]);

  useEffect(() => {
    if (blog) {
      reset({
        ...blog,
        author_name: blog.author_name || "Bilacert Team",
        read_time: blog.read_time || "5 min read",
        tags: blog.tags || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        featured_image: blog.featured_image || "",
        thumbnail: blog.thumbnail || "",
        seo_title: blog.seo_title || "",
        seo_description: blog.seo_description || "",
        seo_keywords: blog.seo_keywords || "",
      });
    }
  }, [blog, reset]);

  const onSubmit = (values: BlogFormValues) => {
    startTransition(async () => {
      const result = await upsertBlog(values);
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error saving blog post",
          description: result.error,
        });
      } else {
        toast({
          title: "Blog post saved",
        });
        router.push("/admin/blogs");
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Core Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., My Awesome Blog Post"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., my-awesome-blog-post"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="excerpt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Excerpt</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="A short summary of the post."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
                <CardDescription>
                  Upload local images or pick from Pexels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="featured_image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Featured Image</FormLabel>
                        <FormControl>
                          <ImageUpload
                            bucket="blogs"
                            initialUrl={field.value}
                            onUpload={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Thumbnail Image</FormLabel>
                        <FormControl>
                          <ImageUpload
                            bucket="blogs"
                            initialUrl={field.value}
                            onUpload={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-sm font-medium mb-4">
                    Pexels Image Picker
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">
                        Quick pick for Featured Image
                      </p>
                      <PexelsImagePicker
                        onSelect={(url) => setValue("featured_image", url)}
                        currentImageUrl={watch("featured_image")}
                        suggestions={[
                          title,
                          watch("category"),
                          ...(watch("tags") || "")
                            .split(",")
                            .map((t) => t.trim()),
                        ].filter((t): t is string => !!t)}
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">
                        Quick pick for Thumbnail
                      </p>
                      <PexelsImagePicker
                        onSelect={(url) => setValue("thumbnail", url)}
                        currentImageUrl={watch("thumbnail")}
                        suggestions={[
                          title,
                          watch("category"),
                          ...(watch("tags") || "")
                            .split(",")
                            .map((t) => t.trim()),
                        ].filter((t): t is string => !!t)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <BlogEditor
                      featured_image={watch("featured_image")}
                      onImageSelect={(url) => setValue("featured_image", url)}
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      title={title}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Card>
              <CardHeader>
                <CardTitle>SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="seo_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seo_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seo_keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Keywords (comma separated)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="published"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel>Published</FormLabel>
                        <FormDescription>
                          Make this post visible.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="featured"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel>Featured Post</FormLabel>
                        <FormDescription>
                          Display this post prominently.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="author_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="read_time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Read Time</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 5 min read" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Tech" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags (comma separated)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., icasa, nrcs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/blogs">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? "Save Changes" : "Create Post"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
````

## File: apps/admin/app/admin/contacts/ContactForm.tsx
````typescript
"use client";

import type { Contact } from "@bilacert/shared/types";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { upsertContact } from "./actions";
import { contactSchema } from "./schema";

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  contact?: Contact | null;
}

export default function ContactForm({ contact }: ContactFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<ContactFormValues>({
    resolver: standardSchemaResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;
  const isEditing = !!contact;

  useEffect(() => {
    if (contact) {
      reset({
        name: contact.name,
        email: contact.email,
        phone: contact.phone || "",
        service: contact.service || "",
        message: contact.message || "",
      });
    }
  }, [contact, reset]);

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const result = await upsertContact(values, contact?.id);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: result.message,
      });
      router.push("/admin/contacts");
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving contact",
        description: error.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="(123) 456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Web Development" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message / Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Initial contact from the website..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4 pt-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/contacts">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? "Save Changes" : "Add Contact"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
````

## File: apps/admin/app/admin/form_submissions/[id]/page.tsx
````typescript
import type { Submission } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubmissionDetails from "../SubmissionDetails";

const supabase = createSupabaseBrowserClient();

async function getSubmission(id: string): Promise<Submission | null> {
  const { data, error } = await supabase
    .from("form_submissions")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    form_type: data.form_type,
    status: data.status,
    service_id: data.service_id,
    service_name: data.service_name,
    full_name: data.full_name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    industry: data.industry,
    details: data.details,
    internal_notes: data.internal_notes,
    assigned_to: data.assigned_to,
    created_at: data.created_at,
    updated_at: data.updated_at,
    completed_at: data.completed_at,
  } as Submission;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const submission = await getSubmission(id);
  if (!submission) {
    return {
      title: "Submission Not Found",
    };
  }
  return {
    title: `Submission from ${submission.full_name} | Bilacert Admin Pro`,
  };
}

export default async function SubmissionDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const submission = await getSubmission(id);

  if (!submission) {
    notFound();
  }

  return <SubmissionDetails submission={submission} />;
}
````

## File: apps/admin/app/admin/form_submissions/actions.ts
````typescript
"use server";

import type { Submission } from "@bilacert/shared/types";
import { updateFormSubmission } from "@bilacert/supabase/Mutations/formSubmissions";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";
import { submissionSchema } from "./schema";

export async function upsertSubmission(values: unknown, submissionId: string) {
  const parsedValues = submissionSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const submissionData = {
    full_name: parsedValues.data.full_name,
    email: parsedValues.data.email,
    phone: parsedValues.data.phone,
    company: parsedValues.data.company,
    industry: parsedValues.data.industry,
    service_name: parsedValues.data.service_name,
    status: parsedValues.data.status,
    details: parsedValues.data.details
      ? JSON.parse(parsedValues.data.details)
      : null,
    internal_notes: parsedValues.data.notes,
    assigned_to: parsedValues.data.contact_owner || null,
    updated_at: new Date().toISOString(),
  };

  let data: Submission;
  try {
    const result = await updateFormSubmission(submissionId, submissionData);
    data = result.data as Submission;
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/form_submissions");
  revalidatePath(`/admin/form_submissions/${data.id}`);

  return {
    data,
    message: `Submission updated successfully!`,
  };
}

export async function updateSubmissionStatus(
  submissionId: string,
  status: Submission["status"],
) {
  let data: Submission;
  try {
    const result = await updateFormSubmission(submissionId, {
      status,
      updated_at: new Date().toISOString(),
    });
    data = result.data as Submission;
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/form_submissions");
  revalidatePath(`/admin/form_submissions/${data.id}`);

  return {
    data,
    message: "Status updated successfully",
  };
}
````

## File: apps/admin/app/admin/form_submissions/SubmissionForm.tsx
````typescript
"use client";

import type { Submission } from "@bilacert/shared/types";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { upsertSubmission } from "./actions";
import { submissionSchema } from "./schema";

type SubmissionFormValues = z.infer<typeof submissionSchema>;

interface SubmissionFormProps {
  submission: Submission;
}

export default function SubmissionForm({ submission }: SubmissionFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<SubmissionFormValues>({
    resolver: standardSchemaResolver(submissionSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      service_name: "",
      status: "pending",
      details: "",
      notes: "",
      contact_owner: "",
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    if (submission) {
      reset({
        full_name: submission.full_name,
        email: submission.email,
        phone: submission.phone || "",
        company: submission.company || "",
        industry: submission.industry || "",
        service_name: submission.service_name || "",
        status: submission.status,
        details: submission.details
          ? JSON.stringify(submission.details, null, 2)
          : "",
        notes: submission.internal_notes || "",
        contact_owner: submission.assigned_to || "",
      });
    }
  }, [submission, reset]);

  const onSubmit = async (values: SubmissionFormValues) => {
    try {
      if (!submission.id) {
        throw new Error("Submission ID is missing");
      }
      const result = await upsertSubmission(values, submission.id);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: result.message,
      });
      router.push(`/admin/form_submissions/${submission.id}`);
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving submission",
        description: error.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="service_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        "pending",
                        "in-progress",
                        "completed",
                        "rejected",
                        "archived",
                      ].map((status) => (
                        <SelectItem
                          key={status}
                          value={status}
                          className="capitalize"
                        >
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assigned To (User ID)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter user UUID"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Details (JSON format)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., { "inquiry": "..." }'
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Internal Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add internal notes here..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link
              href={
                submission.id
                  ? `/admin/form_submissions/${submission.id}`
                  : "/admin/form_submissions"
              }
            >
              Cancel
            </Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
}
````

## File: apps/admin/app/admin/services/[id]/edit/ServiceForm.tsx
````typescript
"use client";

import type { Service } from "@bilacert/shared/types";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { upsertService } from "../../actions";
import CoreDetailsForm from "../../components/CoreDetailsForm";
import DetailsForm from "../../components/DetailsForm";
import FeaturesForm from "../../components/FeaturesForm";
import MediaForm from "../../components/MediaForm";
import PricingPlansForm from "../../components/PricingPlansForm";
import ProcessStepsForm from "../../components/ProcessStepsForm";
import PublishingForm from "../../components/PublishingForm";
import SeoForm from "../../components/SeoForm";
import SuccessStoryForm from "../../components/SuccessStoryForm";
import { type ServiceFormValues, serviceSchema } from "../../schema";

interface ServiceFormProps {
  service?: Service | null;
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function ServiceForm({ service }: ServiceFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const isEditing = !!service;

  const form = useForm<ServiceFormValues>({
    resolver: standardSchemaResolver(serviceSchema),
    defaultValues: {
      title: "",
      slug: "",
      href: "",
      category: "",
      description: "",
      short_description: "",
      icon: "",
      order_index: 0,
      content: "",
      features: "",
      requirements: "",
      includes: "",
      published: false,
      featured: false,
      processing_time: "",
      pricing: 0,
      image: "",
      thumbnail: "",
      seo_title: "",
      seo_description: "",
      seo_keywords: "",
      pricing_plans: [
        {
          title: "Basic",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
        {
          title: "Standard",
          description: "",
          price: "",
          features: "",
          popular: true,
        },
        {
          title: "Premium",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
      ],
      process_steps: [],
      success_story: { scenario: "", challenge: "", solution: "", result: "" },
    },
  });

  const {
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isSubmitting },
  } = form;

  const title = watch("title");

  useEffect(() => {
    if (!isEditing && title) {
      const slug = slugify(title);
      setValue("slug", slug);
      setValue("href", `/services/${slug}`);
    }
  }, [title, setValue, isEditing]);

  useEffect(() => {
    if (service) {
      const defaultPricingPlans = [
        {
          title: "Basic",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
        {
          title: "Standard",
          description: "",
          price: "",
          features: "",
          popular: true,
        },
        {
          title: "Premium",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
      ];

      const servicePricingPlans = (service.pricing_plans || []).map((p) => ({
        ...p,
        features: Array.isArray(p.features)
          ? p.features.join("\n")
          : p.features || "",
      }));

      const populatedPlans = defaultPricingPlans.map((defaultPlan, index) => {
        return servicePricingPlans[index] || defaultPlan;
      });

      reset({
        title: service.title || "",
        slug: service.slug || "",
        href: service.href || "",
        category: service.category || "",
        description: service.description || "",
        short_description: service.short_description || "",
        icon: service.icon || "",
        order_index: service.order_index || 0,
        content: service.content || "",
        features: Array.isArray(service.features)
          ? service.features.join("\n")
          : "",
        requirements: Array.isArray(service.requirements)
          ? service.requirements.join("\n")
          : "",
        includes: Array.isArray(service.includes)
          ? service.includes.join("\n")
          : "",
        published: service.published || false,
        featured: service.featured || false,
        processing_time: service.processing_time || "",
        pricing: service.pricing || 0,
        image: service.image || "",
        thumbnail: service.thumbnail || "",
        seo_title: service.seo_title || "",
        seo_description: service.seo_description || "",
        seo_keywords: service.seo_keywords || "",
        pricing_plans: populatedPlans,
        process_steps: (service.process_steps || []).map((p) => ({
          ...p,
          step: String(p.step),
        })),
        success_story: service.success_story || {
          scenario: "",
          challenge: "",
          solution: "",
          result: "",
        },
      });
    }
  }, [service, reset]);

  const onSubmit = async (values: ServiceFormValues) => {
    try {
      const processedValues = {
        ...values,
        process_steps: values.process_steps.map(
          (step): { title: string; description: string; step: string } => ({
            title: step.title,
            description: step.description,
            step: String(step.step),
          }),
        ),
      };

      const result = await upsertService(processedValues);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: isEditing ? "Service updated" : "Service created",
      });
      router.push("/admin/services");
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving service",
        description: error.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <CoreDetailsForm form={form} />
            <FeaturesForm form={form} />
            <PricingPlansForm form={form} />
            <ProcessStepsForm form={form} />
            <SuccessStoryForm form={form} />
          </div>
          <div className="space-y-6 lg:col-span-1">
            <PublishingForm form={form} />
            <DetailsForm form={form} />
            <SeoForm form={form} />
            <MediaForm form={form} />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/services">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? "Save Changes" : "Create Service"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
````

## File: apps/admin/app/admin/services/[id]/page.tsx
````typescript
import type { Service } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { normalizeService } from "@bilacert/supabase/Queries/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetails from "./ServiceDetails";

const supabase = createSupabaseBrowserClient();

async function getService(id: string): Promise<Service | null> {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return normalizeService(data);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = await getService(id);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} | Bilacert Admin Pro`,
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getService(id);

  if (!service) {
    notFound();
  }

  return <ServiceDetails service={service} />;
}
````

## File: apps/admin/app/admin/testimonials/TestimonialForm.tsx
````typescript
"use client";

import type { Testimonial } from "@bilacert/shared/types";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { upsertTestimonial } from "./actions";
import { testimonialSchema } from "./schema";

type TestimonialFormValues = z.infer<typeof testimonialSchema>;

interface TestimonialFormProps {
  testimonial?: Testimonial | null;
}

export default function TestimonialForm({ testimonial }: TestimonialFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const isEditing = !!testimonial;

  const form = useForm<TestimonialFormValues>({
    resolver: standardSchemaResolver(testimonialSchema),
    defaultValues: {
      post_url: "",
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    if (testimonial) {
      reset({
        post_url: testimonial.post_url,
      });
    } else {
      reset({
        post_url: "",
      });
    }
  }, [testimonial, reset]);

  const onSubmit = async (values: TestimonialFormValues) => {
    try {
      const result = await upsertTestimonial(values);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: isEditing ? "Testimonial updated" : "Testimonial created",
      });
      router.push("/admin/testimonials");
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving testimonial",
        description: error.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="post_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facebook Post URL</FormLabel>
              <FormControl>
                <Input placeholder="https://www.facebook.com/..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/testimonials">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? "Save Changes" : "Add Testimonial"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
````

## File: apps/client/app/api/form-submissions/route.ts
````typescript
import { getServiceBySlug } from "@bilacert/supabase/Queries/services";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      formType,
      serviceId,
      serviceName,
      fullName,
      email,
      phone,
      company,
      industry,
      details,
    } = body;

    // Validate required fields
    if (!formType || !fullName || !email) {
      return NextResponse.json(
        { error: "Missing required fields: formType, fullName, email" },
        { status: 400 },
      );
    }

    // Create Supabase client
    const supabase = await createSupabaseServerClient();

    // Insert form submission
    const { data, error } = await supabase
      .from("form_submissions")
      .insert([
        {
          formType,
          serviceId: serviceId || null,
          serviceName: serviceName || null,
          fullName,
          email,
          phone: phone || null,
          company: company || null,
          industry: industry || null,
          details: details || null,
          status: "pending",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: `Failed to submit form: ${error.message}` },
        { status: 500 },
      );
    }

    // Log the submission for monitoring
    console.log(`✓ Form submission received: ${formType} from ${email}`);

    return NextResponse.json(
      {
        success: true,
        message:
          "Form submitted successfully. We will review and contact you soon.",
        submissionId: data?.[0]?.id,
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

      const { data: userProfile } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .single();

      if (userProfile?.role !== "admin") {
        return NextResponse.json(
          { error: "Forbidden: Only admins can view submissions" },
          { status: 403 },
        );
      }

      const { data, error } = await supabase
        .from("form_submissions")
        .select("*")
        .eq("id", submissionId)
        .single();

      if (error) {
        return NextResponse.json(
          { error: "Submission not found" },
          { status: 404 },
        );
      }
      return NextResponse.json(data);
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
````

## File: apps/client/app/blog/page.tsx
````typescript
import type { BlogPost } from "@bilacert/shared/types";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getCachedPublishedBlogs } from "../_lib/cached-public-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest ICASA and NRCS compliance news, guides, and insights. Expert articles on type approvals, licensing, and regulatory changes in South Africa.",
  keywords: [
    "ICASA compliance blog",
    "NRCS LOA news",
    "compliance articles South Africa",
    "type approval guides",
    "licensing updates",
    "regulatory compliance news",
    "ICASA NRCS insights",
  ],
  openGraph: {
    title: "Blog - ICASA & NRCS Compliance Insights",
    description:
      "Stay updated with the latest ICASA and NRCS compliance news, guides, and insights. Expert articles on type approvals, licensing, and regulatory changes in South Africa.",
    url: "https://bilacert.co.za/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za/blog",
  },
};

export const revalidate = 0;

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${post.title}`}
      >
        <span className="sr-only">View Details</span>
      </Link>

      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={
            post.featuredImage ||
            `https://picsum.photos/seed/${post.id}/600/400`
          }
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          {post.category && (
            <Badge className="bg-accent hover:bg-accent-light text-white border-none shadow-sm">
              {post.category}
            </Badge>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-3 flex-grow leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            <span>
              {new Date(post.createdAt).toLocaleDateString("en-ZA", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1 text-accent font-bold group-hover:gap-1.5 transition-all duration-300">
            <span>Read More</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function BlogPage() {
  const categories = [
    "All",
    "ICASA Approvals",
    "NRCS Compliance",
    "Licensing",
    "Telecom Licensing",
    "Business Strategy",
    "Marine Compliance",
  ];

  const blogPosts = await getCachedPublishedBlogs();

  if (blogPosts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 bg-secondary-gray">
        <div className="text-center px-4">
          <h2 className="text-2xl font-bold text-primary mb-2">
            No blog posts found
          </h2>
          <p className="text-gray-600">Check back later for more updates.</p>
        </div>
      </div>
    );
  }

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-24 lg:py-32 overflow-hidden">
        <Image
          src="/herosetion/Blog.jpg"
          alt="Compliance Insights & Updates"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[1px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-accent text-white mb-6 px-4 py-1.5 text-xs uppercase tracking-wider font-bold border-none">
              Insights Hub
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Compliance Insights <br className="hidden md:block" /> & Updates
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
              Stay informed with the latest compliance news, regulatory updates,
              and expert insights to keep your business ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-20 bg-secondary-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] overflow-hidden">
                  <Image
                    src={
                      featuredPost.featuredImage ||
                      `https://picsum.photos/seed/${featuredPost.id}/600/400`
                    }
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-accent text-white px-4 py-1.5 border-none shadow-lg">
                      Featured Article
                    </Badge>
                  </div>
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-accent" />
                      {new Date(featuredPost.createdAt).toLocaleDateString(
                        "en-ZA",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </span>
                    {featuredPost.readTime && (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-accent" />
                          {featuredPost.readTime}
                        </span>
                      </>
                    )}
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="block group"
                  >
                    <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-6 leading-tight group-hover:text-accent transition-colors duration-200">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed line-clamp-4">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">
                          {featuredPost.authorName || "Bilacert Team"}
                        </p>
                        <p className="text-xs text-gray-500">
                          Compliance Expert
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-full font-bold hover:bg-accent-light transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      Read Full Article
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600">
                Expert insights and practical guidance to help you navigate
                South African compliance requirements with ease.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category) => (
                <button
                  key={category}
                  type="button"
                  className="px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-gray-200 text-gray-600 hover:border-accent hover:text-accent transition-all whitespace-nowrap"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {regularPosts.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500">More articles coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-accent/20 text-accent-light border-accent/30 mb-6 px-4 py-1 border shadow-sm">
            Newsletter
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">
            Stay Ahead of Regulatory Changes
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest compliance insights,
            regulatory updates, and expert guidance delivered straight to your
            inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-accent/20"
            >
              Subscribe Now
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-400">
            Join 500+ businesses receiving our weekly compliance updates.
          </p>
        </div>
      </section>
    </div>
  );
}
````

## File: apps/client/app/services/[serviceId]/page.tsx
````typescript
import type {
  PricingPlan,
  ProcessStep,
  SuccessStory as TSuccessStory,
} from "@bilacert/shared/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/service/CTASection";
import { PricingPlans } from "@/components/service/PricingPlans";
import { ProcessSteps } from "@/components/service/ProcessSteps";
import { ServiceHero } from "@/components/service/ServiceHero";
import { SuccessStory } from "@/components/service/SuccessStory";
import { WhatIsSection } from "@/components/service/WhatIsSection";
import { WhyChooseUs } from "@/components/service/WhyChooseUs";
import { getCachedServiceBySlug, getCachedServiceSlugs } from "../../_lib/cached-public-data";

interface Props {
  params: Promise<{ serviceId: string }>;
}

export async function generateStaticParams() {
  const slugs = await getCachedServiceSlugs();
  return slugs.map((item) => ({ serviceId: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = await getCachedServiceBySlug(serviceId);

  if (!service) {
    return {
      title: "Service Not Found - Bilacert",
    };
  }

  return {
    title: service.seoTitle || `${service.title} - Bilacert`,
    description: service.seoDescription || service.description,
    keywords: service.seoKeywords || [
      service.title.toLowerCase(),
      ...(service.category?.split(", ").map((c: string) => c.toLowerCase()) ||
        []),
      "licensing",
      "certification",
      "ICASA",
      "South Africa",
    ],
    openGraph: {
      title: service.seoTitle || service.title,
      description: service.seoDescription || service.shortDescription,
      url: `https://bilacert.co.za/services/${serviceId}`,
      type: "website",
      images: service.image ? [{ url: service.image }] : [],
    },
    alternates: {
      canonical: `https://bilacert.co.za/services/${serviceId}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { serviceId } = await params;
  const service = await getCachedServiceBySlug(serviceId);

  if (!service) {
    notFound();
  }

  const formPath = `/services/${serviceId}/form`;

  return (
    <div className="min-h-screen">
      <ServiceHero
        title={service.title}
        subtitle={service.shortDescription || ""}
        iconName={service.icon || ""}
        imageSrc={service.image || ""}
        processing_time={service.processingTime || ""}
        formPath={formPath}
        phone="075 430 4433"
      />

      {service.content && (
        <WhatIsSection
          title={`What is this ${service.title}?`}
          firstParagraph={service.content}
          secondParagraph=""
          checkpoints={[]}
        />
      )}

      <WhyChooseUs />

      {service.processSteps && (
        <ProcessSteps
          title="Our Process"
          subtitle="A streamlined approach to get you certified."
          steps={(service.processSteps as unknown as ProcessStep[]).map(
            (step) => ({ ...step, step: step.step.toString() }),
          )}
        />
      )}

      {service.pricingPlans && (
        <PricingPlans
          title="Pricing Plans"
          subtitle="Choose the best plan for your needs."
          plans={(service.pricingPlans as unknown as PricingPlan[]).map(
            (plan) => ({
              ...plan,
              title: plan.name,
              popular: false,
              description: plan.description || "",
            }),
          )}
          formPath={formPath}
        />
      )}

      {service.successStory && (
        <SuccessStory {...(service.successStory as TSuccessStory)} />
      )}

      <CTASection
        heading="Ready to get started?"
        description="Contact us today for a free consultation."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Learn More", href: "/about" }}
      />
    </div>
  );
}
````

## File: packages/supabase/package.json
````json
{
  "name": "@bilacert/supabase",
  "version": "0.0.0",
  "private": true,
  "exports": {
    "./client": "./src/client.ts",
    "./server": "./src/server.ts",
    "./admin": "./src/admin.ts",
    "./cache": "./src/cache.ts",
    "./middleware": "./src/middleware.ts",
    "./supabaseType": "./src/supabaseType.ts",
    "./Queries/*": "./src/Queries/*.ts",
    "./Mutations/*": "./src/Mutations/*.ts",
    "./hooks/*": "./src/hooks/*.ts"
  },
  "dependencies": {
    "@bilacert/shared": "workspace:*",
    "@supabase/ssr": "catalog:",
    "@supabase/supabase-js": "catalog:",
    "typescript": "catalog:" 
  },
  "scripts": {
    "supabase:types": "supabase gen types typescript --local > src/supabaseType.ts"
  }
}
````

## File: packages/supabase/src/Queries/services.ts
````typescript
import { createSupabaseBrowserClient } from "../client";
import type { Service } from "@bilacert/shared/types";
import type { Database } from "../supabaseType";

type ServiceRow = Database["public"]["Tables"]["services"]["Row"];

export function normalizeService(row: ServiceRow): Service {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    href: row.href,
    category: row.category ?? undefined,
    description: row.description ?? undefined,
    shortDescription: row.short_description ?? undefined,
    icon: row.icon ?? undefined,
    orderIndex: row.order_index ?? undefined,
    content: row.content ?? undefined,
    features: row.features ?? undefined,
    requirements: row.requirements ?? undefined,
    includes: row.includes ?? undefined,
    published: row.published ?? false,
    featured: row.featured ?? false,
    createdAt: row.created_at ?? new Date(0).toISOString(),
    processingTime: row.processing_time ?? undefined,
    pricing: row.pricing ?? undefined,
    image: row.image ?? undefined,
    thumbnail: row.thumbnail ?? undefined,
    seoTitle: row.seo_title ?? undefined,
    seoDescription: row.seo_description ?? undefined,
    seoKeywords: row.seo_keywords ?? undefined,
    pricingPlans:
      (row.pricing_plans as unknown as Service["pricingPlans"]) ?? undefined,
    processSteps:
      (row.process_steps as unknown as Service["processSteps"]) ?? undefined,
    successStory:
      (row.success_story as unknown as Service["successStory"]) ?? undefined,
    updatedAt: row.updated_at ?? undefined,
  };
}

export async function getPublishedServices(): Promise<Service[]> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("published", true)
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching services:", error);
    return [];
  }

  return (data || []).map(normalizeService);
}

export async function getFeaturedServices(): Promise<Service[]> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("order_index", { ascending: true })
    .limit(4);

  if (error) {
    console.error("Error fetching featured services:", error);
    return [];
  }

  return (data || []).map(normalizeService);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return normalizeService(data);
}

export async function getAllPublishedServiceSlugs(): Promise<
  { slug: string }[]
> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("slug")
    .eq("published", true);

  if (error) {
    console.error("Error fetching service slugs:", error);
    return [];
  }

  return data || [];
}
````

## File: apps/admin/app/admin/contacts/[id]/edit/page.tsx
````typescript
import type { Contact } from "@bilacert/shared/types";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../../ContactForm";

export const metadata = {
  title: "Edit Contact | Bilacert Admin Pro",
  description: "Edit an existing contact.",
};

async function getContact(id: string): Promise<Contact | null> {
  const supabase = await createSupabaseServerClient();
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
    message: data.message,
    submitted_at: data.submitted_at,
  } as Contact;
}

export default async function EditContactPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const contact = await getContact(id);

  if (!contact) {
    notFound();
  }

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
          <CardTitle>Edit Contact</CardTitle>
          <CardDescription>
            Update the details for "{contact.name}".
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm contact={contact} />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/admin/contacts/[id]/page.tsx
````typescript
import type { Contact } from "@bilacert/shared/types";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactDetails from "../ContactDetails";

async function getContact(id: string): Promise<Contact | null> {
  const supabase = await createSupabaseServerClient();
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
````

## File: apps/admin/app/admin/services/ServiceForm.tsx
````typescript
"use client";

import type { Service } from "@bilacert/shared/types";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUpload from "@/components/ui/ImageUpload";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { upsertService } from "./actions";
import { type ServiceFormValues, serviceSchema } from "./schema";

interface ServiceFormProps {
  service?: Service | null;
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function ServiceForm({ service }: ServiceFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const isEditing = !!service;

  const form = useForm<ServiceFormValues>({
    resolver: standardSchemaResolver(serviceSchema),
    defaultValues: {
      title: "",
      slug: "",
      href: "",
      category: "",
      description: "",
      shortDescription: "",
      icon: "",
      orderIndex: 0,
      content: "",
      features: "",
      requirements: "",
      includes: "",
      published: false,
      featured: false,
      processingTime: "",
      pricing: 0,
      image: "",
      thumbnail: "",
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
      pricingPlans: [
        {
          title: "Basic",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
        {
          title: "Standard",
          description: "",
          price: "",
          features: "",
          popular: true,
        },
        {
          title: "Premium",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
      ],
      processSteps: [],
      successStory: { scenario: "", challenge: "", solution: "", result: "" },
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { isSubmitting },
  } = form;

  const {
    fields: processStepFields,
    append: appendProcessStep,
    remove: removeProcessStep,
  } = useFieldArray({
    control,
    name: "processSteps",
  });

  const { fields: pricingPlanFields } = useFieldArray({
    control,
    name: "pricingPlans",
  });

  const title = watch("title");

  useEffect(() => {
    if (!isEditing && title) {
      const slug = slugify(title);
      setValue("slug", slug);
      setValue("href", `/services/${slug}`);
    }
  }, [title, setValue, isEditing]);

  useEffect(() => {
    if (service) {
      const defaultPricingPlans = [
        {
          title: "Basic",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
        {
          title: "Standard",
          description: "",
          price: "",
          features: "",
          popular: true,
        },
        {
          title: "Premium",
          description: "",
          price: "",
          features: "",
          popular: false,
        },
      ];

      const servicePricingPlans = (service.pricing_plans || []).map((p) => ({
        ...p,
        features: Array.isArray(p.features)
          ? p.features.join("\n")
          : p.features || "",
      }));

      const populatedPlans = defaultPricingPlans.map((defaultPlan, index) => {
        return servicePricingPlans[index] || defaultPlan;
      });

      reset({
        title: service.title || "",
        slug: service.slug || "",
        href: service.href || "",
        category: service.category || "",
        description: service.description || "",
        shortDescription: service.short_description || "",
        icon: service.icon || "",
        orderIndex: service.order_index || 0,
        content: service.content || "",
        features: Array.isArray(service.features)
          ? service.features.join("\n")
          : "",
        requirements: Array.isArray(service.requirements)
          ? service.requirements.join("\n")
          : "",
        includes: Array.isArray(service.includes)
          ? service.includes.join("\n")
          : "",
        published: service.published || false,
        featured: service.featured || false,
        processingTime: service.processing_time || "",
        pricing: service.pricing || 0,
        image: service.image || "",
        thumbnail: service.thumbnail || "",
        seoTitle: service.seo_title || "",
        seoDescription: service.seo_description || "",
        seoKeywords: service.seo_keywords || "",
        pricingPlans: populatedPlans,
        processSteps: (service.process_steps || []).map((p) => ({
          ...p,
          step: String(p.step),
        })),
        successStory: service.success_story || {
          scenario: "",
          challenge: "",
          solution: "",
          result: "",
        },
      });
    }
  }, [service, reset]);

  const onSubmit = async (values: ServiceFormValues) => {
    try {
      const processedValues = {
        ...values,
        processSteps: values.processSteps.map(
          (step): { title: string; description: string; step: string } => ({
            title: step.title,
            description: step.description,
            step: String(step.step),
          }),
        ),
      };

      const result = await upsertService(processedValues);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: isEditing ? "Service updated" : "Service created",
      });
      router.push("/admin/services");
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving service",
        description: error.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Core Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="href"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL (href)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shortDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features & Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="features"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Features (one per line)</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requirements (one per line)</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="includes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's Included (one per line)</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing Plans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-6">
                  {pricingPlanFields.map((field, index) => (
                    <Card key={field.id} className="bg-muted/30">
                      <CardHeader>
                        <CardTitle className="text-lg">{`Plan ${index + 1}`}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.title`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Plan Title</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.description`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Plan Description</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.price`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.features`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Features (one per line)</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`pricingPlans.${index}.popular`}
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-card p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  Most Popular
                                </FormLabel>
                                <FormDescription>
                                  Highlight this plan.
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Process Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {processStepFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex items-start gap-4 p-4 border rounded-md"
                  >
                    <div className="grid gap-2 flex-grow">
                      <FormField
                        control={form.control}
                        name={`processSteps.${index}.step`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Step Number</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`processSteps.${index}.title`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Step Title</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`processSteps.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Step Description</FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={2} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeProcessStep(index)}
                      className="mt-7"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendProcessStep({
                      step: `${processStepFields.length + 1}`,
                      title: "",
                      description: "",
                    })
                  }
                >
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Step
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Success Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="successStory.scenario"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Scenario</FormLabel>
                      <FormControl>
                        <Textarea {...field} value={field.value ?? ""} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="successStory.challenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Challenge</FormLabel>
                      <FormControl>
                        <Textarea {...field} value={field.value ?? ""} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="successStory.solution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Solution</FormLabel>
                      <FormControl>
                        <Textarea {...field} value={field.value ?? ""} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="successStory.result"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Result</FormLabel>
                      <FormControl>
                        <Textarea {...field} value={field.value ?? ""} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="published"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel>Published</FormLabel>
                        <FormDescription>
                          Make this service visible on the site.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="featured"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel>Featured</FormLabel>
                        <FormDescription>
                          Feature this service on the homepage.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="icon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Icon</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g., Shield" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="orderIndex"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order Index</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="processingTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Processing Time</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pricing"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (ZAR)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.01" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="seoTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seoDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seoKeywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Keywords</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          bucket="services"
                          initialUrl={field.value}
                          onUpload={(url) => field.onChange(url)}
                          onRemove={() => field.onChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="thumbnail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thumbnail</FormLabel>
                      <FormControl>
                        <ImageUpload
                          bucket="services"
                          initialUrl={field.value}
                          onUpload={(url) => field.onChange(url)}
                          onRemove={() => field.onChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/services">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? "Save Changes" : "Create Service"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
````

## File: apps/client/app/forms/icasa-type-approvals/page.tsx
````typescript
import ClientPage from "./ClientPage";

export default function Page() {
  return <ClientPage />;
}
````

## File: apps/client/app/forms/license-exemptions/page.tsx
````typescript
import ClientPage from "./ClientPage";

export default function Page() {
  return <ClientPage />;
}
````

## File: apps/client/app/forms/nrcs-loa-applications/page.tsx
````typescript
import ClientPage from "./ClientPage";

export default function Page() {
  return <ClientPage />;
}
````

## File: apps/client/app/forms/radio-dealer-licensing/page.tsx
````typescript
import ClientPage from "./ClientPage";

export default function Page() {
  return <ClientPage />;
}
````

## File: apps/client/app/forms/ski-boat-vhf-licensing/page.tsx
````typescript
import ClientPage from "./ClientPage";

export default function Page() {
  return <ClientPage />;
}
````

## File: package.json
````json
{
  "name": "bilacert-monorepo",
  "version": "0.0.0",
  "private": true,
  "packageManager": "pnpm@9.15.4",
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build --concurrency=1",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "typecheck": "turbo run typecheck"
  },
  "devDependencies": {
    "turbo": "latest"
  }
}
````

## File: pnpm-workspace.yaml
````yaml
packages:
  - 'apps/*'
  - 'packages/*'

catalog:
  "next": "16.2.7"
  "react": "19.2.4"
  "react-dom": "19.2.4"
  "typescript": "5.9.2"
  "postcss": "^8.5.14"
  "zod": "^4.4.3"
  "lucide-react": "^1.17.0"
  "tailwindcss": "^4.3.0"
  "@supabase/supabase-js": "^2.107.0"
  "@supabase/ssr": "^0.10.3"
  "uuid": "^13.0.0"
  "react-icons": "^5.5.0"
  "@genkit-ai/google-genai": "1.34.0"
  "@genkit-ai/googleai": "1.28.0"
  "@radix-ui/react-slot": "^1.2.3"
  "@stream-io/audio-filters-web": "^0.7.3"
  "@stream-io/video-react-sdk": "^1.36.1"
  "@tailwindcss/postcss": "^4.1.14"
  "@types/node": "^22.19.19"
  "@types/react": "19.2.4"
  "@types/react-dom": "19.2.3"
  "genkit": "1.34.0"
  "isomorphic-dompurify": "^2.15.0"
  "jose": "^6.2.3"
  "stream-chat": "^9.44.2"
  "stream-chat-react": "^14.2.0"
  "tailwind-merge": "^3.3.1"
  "clsx": "^2.1.1"
  "class-variance-authority": "^0.7.1"
  "sonner": "^2.0.7"
  "date-fns": "^4.1.0"
  "react-hook-form": "^7.53.0"
  "@hookform/resolvers": "^5.2.2"
  "autoprefixer": "^10.4.21"
  "tailwindcss-animate": "^1.0.7"
  "@radix-ui/react-dialog": "^1.1.15"
  "@radix-ui/react-label": "^2.1.0"
  "@radix-ui/react-toast": "^1.2.1"
  "@radix-ui/react-tabs": "^1.1.13"
  "@radix-ui/react-scroll-area": "^1.2.10"
  "@radix-ui/react-select": "^2.1.6"
  "@radix-ui/react-avatar": "^1.1.3"
  "@radix-ui/react-separator": "^1.1.2"
  "@radix-ui/react-dropdown-menu": "^2.1.6"
  "@radix-ui/react-popover": "^1.1.6"
  "@radix-ui/react-tooltip": "^1.1.8"
  "@radix-ui/react-checkbox": "^1.1.4"
  "@radix-ui/react-accordion": "^1.2.3"
  "@radix-ui/react-progress": "^1.1.2"
  "@radix-ui/react-switch": "^1.1.3"
  "@radix-ui/react-collapsible": "^1.1.11"
  "@radix-ui/react-menubar": "^1.1.6"
  "@radix-ui/react-radio-group": "^1.2.3"
  "@radix-ui/react-slider": "^1.3.6"
  "@radix-ui/react-alert-dialog": "^1.1.6"
  "biome": "2.2.0"
  "@biomejs/biome": "2.2.0"
````

## File: apps/admin/app/admin/analysis/AnalysisClient.tsx
````typescript
"use client";

import type {
  BlogPost,
  Contact,
  Service,
  Submission,
  Testimonial,
  User,
} from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { subYears } from "date-fns";
import { useEffect, useState } from "react";
import type { DateRange } from "react-day-picker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/ui/DateRangePicker";
import {
  BlogViewsChart,
  CombinedActivityChart,
  ContentBarChart,
  DetailedSubmissionsChart,
  SubmissionStatusPieChart,
  SubmissionsBarChart,
  SubmissionsLineChart,
  TurnaroundTimeChart,
} from "./charts";
import AnalysisLoading from "./loading";

const supabase = createSupabaseBrowserClient();

interface ChartData {
  submissionsByDay: { date: string; count: number }[];
  submissionsByService: { service_name: string; count: number }[];
  contentBreakdown: { contentType: string; count: number }[];
  blogViews: { title: string; views: number }[];
  submissionStatus: { status: string; count: number }[];
  detailedSubmissions: { date: string; [key: string]: number | string }[];
  turnaroundAnalysis: { service_name: string; average_days: number }[];
  combinedActivity: { date: string; [key: string]: number | string }[];
  combinedActivityKeys: string[];
  serviceKeys: string[];
  statusKeys: string[];
  totalSubmissions: number;
  publishedContent: number;
  totalViews: number;
}

async function getAnalyticsData(
  dateRange: DateRange | undefined,
): Promise<ChartData> {
  const queries = [
    supabase
      .from("blog_posts")
      .select(
        "createdAt,publishedAt,updatedAt,category,published,viewsCount,title",
      ),
    supabase.from("contacts").select("submittedAt"),
    supabase.from("services").select("createdAt,updatedAt"),
    supabase.from("testimonials").select("createdAt"),
    supabase
      .from("form_submissions")
      .select("createdAt,updatedAt,completedAt,serviceName,status"),
    supabase.from("users").select("createdAt"),
  ];

  const [
    blogRes,
    contactRes,
    serviceRes,
    testimonialRes,
    submissionRes,
    userRes,
  ] = await Promise.all(queries);

  const blogs = (blogRes?.data as BlogPost[]) || [];
  const contacts = (contactRes?.data as Contact[]) || [];
  const services = (serviceRes?.data as Service[]) || [];
  const testimonials = (testimonialRes?.data as Testimonial[]) || [];
  const submissions = (submissionRes?.data as Submission[]) || [];
  const users = (userRes?.data as User[]) || [];

  const activity = new Map<string, { [key: string]: number }>();
  const activityKeys = new Set<string>();

  const addToActivity = (dateStr: string | null | undefined, key: string) => {
    if (!dateStr) return;
    const activityDate = new Date(dateStr);
    const date = activityDate.toISOString().split("T")[0];
    if (!date) return;
    const dayData = activity.get(date) ?? {};
    activity.set(date, { ...dayData, [key]: (dayData[key] || 0) + 1 });
    activityKeys.add(key);
  };

  for (const b of blogs) {
    addToActivity(b.createdAt, "blogs_created");
    addToActivity(b.publishedAt, "blogs_published");
    addToActivity(b.updatedAt, "blogs_updated");
  }
  for (const c of contacts) addToActivity(c.submittedAt, "contacts_submitted");
  for (const s of services) {
    addToActivity(s.createdAt, "services_created");
    addToActivity(s.updatedAt, "services_updated");
  }
  for (const t of testimonials)
    addToActivity(t.createdAt, "testimonials_created");
  for (const s of submissions) {
    addToActivity(s.createdAt, "submissions_created");
    addToActivity(s.updatedAt, "submissions_updated");
  }
  for (const u of users) addToActivity(u.createdAt, "users_created");

  const combinedActivity = Array.from(activity.entries())
    .map(([date, dailyData]) => {
      const completeDailyData: {
        date: string;
        [key: string]: number | string;
      } = { date };
      activityKeys.forEach((key) => {
        completeDailyData[key] = dailyData[key] || 0;
      });
      return completeDailyData;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const fromDate = dateRange?.from;
  const toDate = dateRange?.to;
  const filteredSubmissions = submissions.filter((s) => {
    const date = new Date(s.createdAt);
    return (!fromDate || date >= fromDate) && (!toDate || date <= toDate);
  });
  const filteredBlogs = blogs.filter((b) => {
    const date = new Date(b.createdAt);
    return (!fromDate || date >= fromDate) && (!toDate || date <= toDate);
  });

  const dailyCounts = new Map<string, number>();
  for (const { createdAt } of filteredSubmissions) {
    if (!createdAt) continue;
    const date = new Date(createdAt as string)
      .toISOString()
      .split("T")[0] as string;
    dailyCounts.set(date, (dailyCounts.get(date) || 0) + 1);
  }
  const submissionsByDay = Array.from(dailyCounts.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const serviceCounts = new Map<string, number>();
  for (const { serviceName } of filteredSubmissions) {
    const aService = (serviceName || "Uncategorized") as string;
    serviceCounts.set(aService, (serviceCounts.get(aService) || 0) + 1);
  }
  const submissionsByService = Array.from(serviceCounts.entries()).map(
    ([service_name, count]) => ({ service_name, count }),
  );

  const categoryCounts = new Map<string, number>();
  for (const { category } of filteredBlogs) {
    const contentType = (category || "Uncategorized") as string;
    categoryCounts.set(contentType, (categoryCounts.get(contentType) || 0) + 1);
  }
  const contentBreakdown = Array.from(categoryCounts.entries()).map(
    ([contentType, count]) => ({ contentType, count }),
  );

  const blogViews = filteredBlogs
    .map(({ title, viewsCount }) => ({ title, views: viewsCount || 0 }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  const statusCounts = new Map<string, number>();
  for (const { status } of filteredSubmissions) {
    const aStatus = (status || "Unknown") as string;
    statusCounts.set(aStatus, (statusCounts.get(aStatus) || 0) + 1);
  }
  const submissionStatus = Array.from(statusCounts.entries()).map(
    ([status, count]) => ({ status, count }),
  );

  const turnaroundData = new Map<
    string,
    { total_days: number; count: number }
  >();
  for (const s of filteredSubmissions) {
    if (s.completedAt && s.createdAt) {
      const created = new Date(s.createdAt);
      const completed = new Date(s.completedAt);
      const diffDays =
        (completed.getTime() - created.getTime()) / (1000 * 3600 * 24);
      const service = (s.serviceName || "Uncategorized") as string;
      const data = turnaroundData.get(service) || { total_days: 0, count: 0 };
      data.total_days += diffDays;
      data.count += 1;
      turnaroundData.set(service, data);
    }
  }
  const turnaroundAnalysis = Array.from(turnaroundData.entries()).map(
    ([service_name, data]) => ({
      service_name,
      average_days: parseFloat((data.total_days / data.count).toFixed(2)),
    }),
  );

  const allServiceKeys = [
    ...new Set(
      filteredSubmissions.map(
        (s) => (s.serviceName || "Uncategorized") as string,
      ),
    ),
  ];
  const allStatusKeys = [
    ...new Set(
      filteredSubmissions.map((s) => (s.status || "Unknown") as string),
    ),
  ];
  const detailedCounts = new Map<
    string,
    { total: number } & Record<string, number>
  >();

  for (const { createdAt, serviceName, status } of filteredSubmissions) {
    if (!createdAt) continue;
    const date = new Date(createdAt as string)
      .toISOString()
      .split("T")[0] as string;
    if (!detailedCounts.has(date)) {
      const initial: { total: number } & Record<string, number> = { total: 0 };
      for (const k of allServiceKeys) initial[k] = 0;
      for (const k of allStatusKeys) initial[k] = 0;
      detailedCounts.set(date, initial);
    }
    const dayData = detailedCounts.get(date)!;
    dayData.total += 1;
    dayData[(serviceName || "Uncategorized") as string]! += 1;
    dayData[(status || "Unknown") as string]! += 1;
  }
  const detailedSubmissions = Array.from(detailedCounts.entries())
    .map(([date, data]) => ({ date, ...data }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const publishedContent = filteredBlogs.filter(
    (blog) => blog.published,
  ).length;
  const totalSubmissions = filteredSubmissions.length;
  const totalViews = filteredBlogs.reduce(
    (acc, { viewsCount }) => acc + (viewsCount || 0),
    0,
  );
  return {
    submissionsByDay,
    submissionsByService,
    contentBreakdown,
    blogViews,
    submissionStatus,
    detailedSubmissions,
    turnaroundAnalysis,
    combinedActivity,
    combinedActivityKeys: Array.from(activityKeys),
    serviceKeys: allServiceKeys,
    statusKeys: allStatusKeys,
    totalSubmissions,
    publishedContent,
    totalViews,
  };
}
export default function AnalysisClient() {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subYears(new Date(), 1),
    to: new Date(),
  });
  const [visibleKeys, setVisibleKeys] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getAnalyticsData(dateRange);
      setChartData(data);
      setLoading(false);
    }
    fetchData();
  }, [dateRange]);

  useEffect(() => {
    if (chartData?.combinedActivityKeys) {
      setVisibleKeys(chartData.combinedActivityKeys);
    }
  }, [chartData]);

  const handleKeyVisibilityChange = (key: string) => {
    setVisibleKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  if (loading || !chartData) {
    return <AnalysisLoading />;
  }

  const {
    submissionsByDay,
    submissionsByService,
    contentBreakdown,
    blogViews,
    submissionStatus,
    detailedSubmissions,
    turnaroundAnalysis,
    combinedActivity,
    combinedActivityKeys,
    serviceKeys,
    statusKeys,
    totalSubmissions,
    publishedContent,
    totalViews,
  } = chartData;

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Analysis Dashboard</h1>
          <p className="text-muted-foreground">
            Live insights into submissions and content performance.
          </p>
        </div>
        <DateRangePicker date={dateRange} onDateChange={setDateRange} />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalSubmissions}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Published Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{publishedContent}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalViews}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Submissions Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <SubmissionsLineChart data={submissionsByDay} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Submissions by Service</CardTitle>
          </CardHeader>
          <CardContent>
            <SubmissionsBarChart data={submissionsByService} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ContentBarChart data={contentBreakdown} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blog Views</CardTitle>
          </CardHeader>
          <CardContent>
            <BlogViewsChart data={blogViews} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Submission Status</CardTitle>
          </CardHeader>
          <CardContent>
            <SubmissionStatusPieChart data={submissionStatus} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Turnaround Time</CardTitle>
          </CardHeader>
          <CardContent>
            <TurnaroundTimeChart data={turnaroundAnalysis} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <DetailedSubmissionsChart
            data={detailedSubmissions}
            serviceKeys={serviceKeys}
            statusKeys={statusKeys}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Combined Activity</CardTitle>
        </CardHeader>
        <CardContent>
         <CombinedActivityChart
  data={combinedActivity}
  keys={visibleKeys}
/>
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/client/components/Testimonials.tsx
````typescript
"use client";

import type { Testimonial } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { useEffect, useState } from "react";

type TestimonialEmbed = Pick<Testimonial, "id" | "postUrl">;

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void;
      };
      init: (options: { xfbml: boolean; version: string }) => void;
    };
    fbAsyncInit?: () => void;
  }
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialEmbed[]>([]);
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("id, post_url")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching testimonials:", error);
        return;
      }

      if (data) {
        const normalized = data.map((t: any) => ({
          id: t.id,
          postUrl: t.post_url,
        }));
        setTestimonials(normalized);
      }
    };

    fetchTestimonials();
  }, [supabase]);

  useEffect(() => {
    if (testimonials.length > 0) {
      if (window.FB?.XFBML) {
        window.FB.XFBML.parse();
      } else {
        window.fbAsyncInit = () => {
          if (window.FB) {
            window.FB.init({
              xfbml: true,
              version: "v18.0",
            });
            window.FB.XFBML.parse();
          }
        };
        ((d, s, id) => {
          var js,
            fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s) as HTMLScriptElement;
          js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          if (fjs?.parentNode) {
            fjs.parentNode.insertBefore(js, fjs);
          } else {
            d.head.appendChild(js);
          }
        })(document, "script", "facebook-jssdk");
      }
    }
  }, [testimonials]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="fb-root"></div>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by South African Businesses
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            See what our clients say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="fb-post bg-white rounded-xl overflow-hidden"
              data-href={t.postUrl}
              data-width="500"
              data-show-text="true"
            >
              <blockquote cite={t.postUrl} className="fb-xfbml-parse-ignore">
                <a href={t.postUrl}>Post</a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
````
