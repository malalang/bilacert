"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { ChevronDown, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { CommandMenu } from "@/components/admin/CommandMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import { breadcrumbsFor } from "@/lib/admin-nav";
import { useUser } from "@/lib/hooks/useUser";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const supabase = createSupabaseBrowserClient();

function getInitials(email: string) {
  const local = email.split("@")[0] ?? "";

  return (
    local
      .split(/[\s._-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("") || "AD"
  );
}

/**
 * The admin header.
 *
 * One row, three zones, in order: trigger + breadcrumb, command trigger, then the
 * user menu last. Height and the sub-nav offset both read `--header-height` /
 * `--subnav-height`. Sign-out lives here and only here - the sidebar footer keeps
 * workspace state, so the shell has exactly one identity control. See
 * `docs/ARCHITECTURE/frontend-blueprint/02-admin-ui-grammar/05-admin-header-standard.md`.
 */
export default function AdminHeader() {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const avatar = PlaceHolderImages.find((img) => img.id === "user-avatar-1");
  const crumbs = React.useMemo(() => breadcrumbsFor(pathname), [pathname]);

  // Below the mobile breakpoint keep the last two segments; the parent stays
  // reachable through the sidebar Sheet, so truncation costs nothing.
  const visibleCrumbs = crumbs.length > 2 ? crumbs.slice(-2) : crumbs;

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push("/login");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Logout failed",
        description:
          error instanceof Error ? error.message : "Unable to log out.",
      });
    }
  };

  const displayName = user?.user_metadata?.full_name || user?.email || "Admin";
  const avatarUrl =
    user?.user_metadata?.avatar_url ||
    user?.user_metadata?.profile_image ||
    (avatar ? avatar.imageUrl : undefined);

  return (
    <header className="sticky top-0 z-20 flex h-(--header-height) items-center gap-2 border-b bg-background px-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-2">
        <SidebarTrigger className="-ml-1 size-11 sm:size-8" />
        <Separator orientation="vertical" className="mr-2 hidden h-4 sm:block" />

        {visibleCrumbs.length > 0 ? (
          <Breadcrumb aria-label="Breadcrumb" className="min-w-0">
            <BreadcrumbList>
              {visibleCrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {crumb.isLast ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={crumb.href}>{crumb.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < visibleCrumbs.length - 1 ? (
                    <BreadcrumbSeparator />
                  ) : null}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        ) : null}
      </div>

      {/* Zone 2 is the only flexible zone: it shrinks before the breadcrumb or the
          sign-out do, because a truncated crumb is more recoverable than a
          missing sign-out. */}
      <div className="ml-auto flex min-w-0 flex-1 justify-end gap-2 sm:justify-center">
        <CommandMenu />
      </div>

      <div className="flex shrink-0 items-center">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label={displayName}
                className="inline-flex size-11 items-center justify-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Avatar className="h-8 w-8 border">
                  {avatarUrl ? <AvatarImage src={avatarUrl} alt="" /> : null}
                  <AvatarFallback>{getInitials(user.email || "")}</AvatarFallback>
                </Avatar>
                <span className="hidden max-w-32 truncate text-sm font-medium md:inline">
                  {displayName}
                </span>
                <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuLabel className="font-normal">
                <span className="block truncate text-sm font-medium">
                  {displayName}
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  {user.email}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => {
                  void handleLogout();
                }}
                className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : null}
      </div>
    </header>
  );
}
