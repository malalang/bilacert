"use client";

import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { adminNavItems } from "@/lib/admin-nav";

/**
 * The admin sidebar.
 *
 * The footer carries workspace state only. Sign-out is deliberately absent: the
 * header user menu is the shell's single identity control, and a second one here
 * would be the redundancy the header standard rules out - and it would vanish on
 * mobile, taking the only reachable sign-out with it. See
 * `docs/ARCHITECTURE/frontend-blueprint/02-admin-ui-grammar/05-admin-header-standard.md`.
 */
export default function AdminSidebar() {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="h-(--header-height) group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-2">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center"
          onClick={() => setOpenMobile(false)}
        >
          <Image
            src="/logo.jpg"
            alt="Bilacert logo"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 rounded-lg object-cover"
            priority
          />
          <span className="text-lg font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            Bilacert Admin
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {adminNavItems.map((item) => (
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
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
