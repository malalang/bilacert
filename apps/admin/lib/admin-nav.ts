import {
  BarChart,
  Briefcase,
  ClipboardList,
  FileSpreadsheet,
  FileText,
  LayoutDashboard,
  type LucideIcon,
  Mail,
  MessageSquare,
  Users,
} from "lucide-react";

export type AdminNavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

/**
 * The admin task groups.
 *
 * Single source of truth for the sidebar, the command overlay, and the breadcrumb
 * labels. Three surfaces read this list, so a route can only ever be called one
 * thing - `/formSubmissions` is "Submissions" everywhere, never
 * "FormSubmissions" in the breadcrumb and "Submissions" in the sidebar.
 */
export const adminNavItems: AdminNavItem[] = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/analysis", icon: BarChart, label: "Analysis" },
  { href: "/tasks", icon: ClipboardList, label: "Tasks" },
  { href: "/services", icon: Briefcase, label: "Services" },
  { href: "/blogs", icon: FileText, label: "Blogs" },
  { href: "/emails", icon: Mail, label: "Email" },
  { href: "/testimonials", icon: MessageSquare, label: "Testimonials" },
  { href: "/contacts", icon: Users, label: "Contacts" },
  {
    href: "/formSubmissions",
    icon: FileSpreadsheet,
    label: "Submissions",
  },
];

/** Human labels for fixed nested routes that are not top-level nav entries. */
const nestedLabels: Record<string, string> = {
  "/blogs/new": "New Blog Post",
  "/services/new": "New Service",
  "/tasks/new": "New Task",
};

function humanize(segment: string) {
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export type Crumb = {
  href: string;
  label: string;
  isLast: boolean;
};

/**
 * Build the breadcrumb trail for a pathname.
 *
 * A root-level route yields an empty array on purpose: a single segment is noise,
 * and the page's own heading already says where you are. See
 * `05-admin-header-standard.md` -> "Zone 1 - Breadcrumb".
 */
export function breadcrumbsFor(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length < 2) {
    return [];
  }

  return segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const navItem = adminNavItems.find((item) => item.href === href);

    return {
      href,
      label: navItem?.label ?? nestedLabels[href] ?? humanize(segment),
      isLast: index === segments.length - 1,
    };
  });
}
