"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@bilacert/shared/cn";
import { adminNavItems } from "@/lib/admin-nav";

const SHORTCUT_KEY = "k";

/**
 * The header's command trigger and its overlay.
 *
 * This is a *navigation* affordance, never a live filter for the collection on
 * screen - two jobs sharing one control fail at both. The overlay is a list of
 * rows with exactly one active row; `aria-selected` carries the active state so
 * colour is never the only signal. See
 * `docs/ARCHITECTURE/frontend-blueprint/02-admin-ui-grammar/05-admin-header-standard.md`.
 */
export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [shortcutLabel, setShortcutLabel] = React.useState("Ctrl K");
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Label the key hint for the platform. Deferred to an effect so the server and
  // client render the same markup.
  React.useEffect(() => {
    if (/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      setShortcutLabel("⌘K");
    }
  }, []);

  const items = React.useMemo(() => {
    const needle = query.trim().toLowerCase();

    if (!needle) {
      return adminNavItems;
    }

    return adminNavItems.filter((item) =>
      item.label.toLowerCase().includes(needle),
    );
  }, [query]);

  // A changed query changes the row set, so the active row must not fall off it.
  React.useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (
        event.key.toLowerCase() !== SHORTCUT_KEY ||
        !(event.metaKey || event.ctrlKey)
      ) {
        return;
      }

      event.preventDefault();
      setOpen((current) => !current);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleOpenChange(next: boolean) {
    setOpen(next);

    if (!next) {
      setQuery("");
      // The trigger is a plain button rather than a DialogTrigger, so focus is
      // not restored for us. The standard requires it to come back here.
      requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }

  function go(href: string) {
    handleOpenChange(false);
    router.push(href);
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (items.length ? (index + 1) % items.length : 0));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) =>
        items.length ? (index - 1 + items.length) % items.length : 0,
      );
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const target = items[activeIndex];
      if (target) {
        go(target.href);
      }
    }
  }

  const isEmpty = items.length === 0;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search or jump to..."
        aria-haspopup="dialog"
        aria-expanded={open}
        className={cn(
          "inline-flex h-10 max-md:size-11 items-center gap-2 rounded-full border border-input bg-background px-3 text-sm text-muted-foreground transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="hidden md:inline">Search or jump to...</span>
        <kbd className="pointer-events-none hidden select-none items-center gap-0.5 rounded border border-input bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground md:inline-flex">
          {shortcutLabel}
        </kbd>
      </button>

      <DialogContent
        className="gap-0 overflow-hidden p-0 sm:max-w-lg"
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          inputRef.current?.focus();
        }}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search or jump to</DialogTitle>
          <DialogDescription>
            Search admin sections and jump to one.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-2 border-b px-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Search or jump to..."
            aria-label="Search or jump to..."
            aria-controls="command-menu-listbox"
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        {isEmpty ? (
          <p className="px-4 py-10 text-center text-sm text-muted-foreground">
            No sections match &ldquo;{query.trim()}&rdquo;. Try a different term.
          </p>
        ) : (
          <div
            id="command-menu-listbox"
            role="listbox"
            aria-label="Admin sections"
            className="max-h-72 overflow-y-auto p-1.5"
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = item.icon;

              return (
                <button
                  key={item.href}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => go(item.href)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm outline-none",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
