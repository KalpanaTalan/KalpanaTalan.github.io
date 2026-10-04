"use client";

// Renders the visitor's current year, so the footer never goes out of date.
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
