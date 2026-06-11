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
