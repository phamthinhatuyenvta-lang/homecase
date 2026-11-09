"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { sendGAEvent } from "@next/third-parties/google";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventParams?: Record<string, string | number | boolean>;
};

export default function TrackedLink({
  eventName,
  eventParams = {},
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        sendGAEvent("event", eventName, eventParams);
        onClick?.(event);
      }}
    />
  );
}