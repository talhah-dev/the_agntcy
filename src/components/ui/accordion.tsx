"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("w-full", className)} {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"details">) {
  return (
    <details
      className={cn("group border-b border-border/60 py-3", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"summary">) {
  return (
    <summary
      className={cn(
        "flex cursor-pointer list-none items-center justify-between gap-3 rounded-md py-1 text-sm font-medium text-foreground outline-none transition-colors hover:text-[#00545f] [&::-webkit-details-marker]:hidden",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180" />
    </summary>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mt-3 grid gap-2 pl-1 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
