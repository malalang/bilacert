"use client";

import { useEffect } from "react";
import { trackBlogPostView } from "@/app/blog/actions";

interface ViewTrackerProps {
  slug: string;
}

export function ViewTracker({ slug }: ViewTrackerProps) {
  useEffect(() => {
    trackBlogPostView(slug);
  }, [slug]);

  return null;
}
