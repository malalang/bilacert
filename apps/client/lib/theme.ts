import type { Viewport } from "next";

/**
 * Shared viewport themeColor values (browser-chrome colors).
 * Consumed as `themeColor: viewportThemeColor` by every page's
 * `export const viewport: Viewport`.
 */
export const viewportThemeColor: Viewport["themeColor"] = [
  { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
];
