"use client";

import { cn } from "@bilacert/shared/cn";
import * as React from "react";

type ToggleGroupContextValue = {
  value: string[];
  toggleValue: (value: string) => void;
  disabled?: boolean;
};

const ToggleGroupContext = React.createContext<ToggleGroupContextValue | null>(
  null,
);

type ToggleGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  multiple?: boolean;
  disabled?: boolean;
};

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  (
    {
      className,
      value,
      defaultValue = [],
      onValueChange,
      multiple = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const selectedValue = value ?? internalValue;

    const toggleValue = React.useCallback(
      (itemValue: string) => {
        const nextValue = multiple
          ? selectedValue.includes(itemValue)
            ? selectedValue.filter((currentValue) => currentValue !== itemValue)
            : [...selectedValue, itemValue]
          : selectedValue.includes(itemValue)
            ? []
            : [itemValue];

        if (value === undefined) {
          setInternalValue(nextValue);
        }

        onValueChange?.(nextValue);
      },
      [multiple, onValueChange, selectedValue, value],
    );

    return (
      <ToggleGroupContext.Provider
        value={{ value: selectedValue, toggleValue, disabled }}
      >
        <div
          ref={ref}
          role="group"
          className={cn("flex flex-wrap items-center gap-2", className)}
          {...props}
        >
          {children}
        </div>
      </ToggleGroupContext.Provider>
    );
  },
);
ToggleGroup.displayName = "ToggleGroup";

type ToggleGroupItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  ToggleGroupItemProps
>(({ className, value, disabled, children, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  if (!context) {
    throw new Error("ToggleGroupItem must be used within ToggleGroup");
  }

  const isPressed = context.value.includes(value);
  const isDisabled = disabled || context.disabled;

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={isPressed}
      data-state={isPressed ? "on" : "off"}
      disabled={isDisabled}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-full px-3 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-muted text-muted-foreground shadow-sm shadow-black/5 hover:bg-muted/80 hover:text-foreground",
        "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-md data-[state=on]:shadow-primary/20",
        className,
      )}
      onClick={() => context.toggleValue(value)}
      {...props}
    >
      {children}
    </button>
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
