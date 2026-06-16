"use client";

import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { useUser } from "@bilacert/supabase/hooks/useUser";
import { ChevronDown, LogOut, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
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
import { PlaceHolderImages } from "@/lib/placeholder-images";

const supabase = createSupabaseBrowserClient();

function generateBreadcrumbs(pathname: string) {
  const paths = pathname.split("/").filter(Boolean);
  return paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`;
    const label =
      path.charAt(0).toUpperCase() + path.slice(1).replace(/_/g, " ");
    return { href, label, isLast: index === paths.length - 1 };
  });
}

export default function AdminHeader() {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const avatar = PlaceHolderImages.find((img) => img.id === "user-avatar-1");
  const breadcrumbs = generateBreadcrumbs(pathname);

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
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-card px-4 sm:px-6 shadow-sm">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 h-4 hidden sm:block"
        />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            {breadcrumbs.map((bc, _i) => (
              <React.Fragment key={bc.href}>
                <BreadcrumbItem>
                  {bc.isLast ? (
                    <BreadcrumbPage>{bc.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={bc.href}>{bc.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!bc.isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 px-2 hover:bg-accent/50 transition-colors"
            >
              <Avatar className="h-8 w-8 border">
                <AvatarImage src={avatarUrl} alt={displayName || "Admin"} />
                <AvatarFallback>{getInitials(user.email || "")}</AvatarFallback>
              </Avatar>
              <div className="hidden flex-col items-start text-left md:flex">
                <span className="text-sm font-medium line-clamp-1">
                  {displayName}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-medium">{displayName}</span>
                <span className="text-xs text-muted-foreground truncate">
                  {user.email}
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/profile" className="flex w-full items-center">
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer"
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

import React from "react";
