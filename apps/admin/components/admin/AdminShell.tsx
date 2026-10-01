"use client";

import { isSupabaseConfigured } from "@bilacert/supabase/client";
import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { useEffect } from "react";
import AdminHeader from "@/components/admin/Header";
import AdminSidebar from "@/components/admin/Sidebar";
import SupabaseNotConfigured from "@/components/admin/SupabaseNotConfigured";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useUser } from "@/lib/hooks/useUser";

const LOGIN_PATH = "/login";
const HOME_PATH = "/";

export default function AdminShell({
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
      if (!user && pathname !== LOGIN_PATH) {
        router.push(LOGIN_PATH);
      }
      if (user && pathname === LOGIN_PATH) {
        router.push(HOME_PATH);
      }
    }
  }, [user, loading, pathname, router]);

  if (pathname !== LOGIN_PATH && !isSupabaseConfigured) {
    return <SupabaseNotConfigured />;
  }

  if (loading && pathname !== LOGIN_PATH) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user && pathname !== LOGIN_PATH) {
    return null;
  }

  if (user && pathname === LOGIN_PATH) {
    return null;
  }

  if (pathname === LOGIN_PATH) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset className="min-w-0">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
