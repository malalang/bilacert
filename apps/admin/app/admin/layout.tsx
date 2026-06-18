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
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

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
      <SidebarInset className="min-w-0 md:ml-[calc(var(--sidebar-width)_+_theme(spacing.2))] md:w-[calc(100%-var(--sidebar-width)-theme(spacing.2))]">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
