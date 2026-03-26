"use client";

import React from "react";
import Link, { LinkProps } from "next/link";

interface AffiliateLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  href: string;
  children: React.ReactNode;
  analyticsEvent?: string;
  className?: string;
}

export function AffiliateLink({ href, children, analyticsEvent, className, ...props }: AffiliateLinkProps) {
  const handleClick = () => {
    if (analyticsEvent) {
      console.log(`Tracking affiliate click: ${analyticsEvent}`);
    }
  };

  return (
    <Link
      href={href}
      className={className}
      rel="sponsored nofollow"
      target="_blank"
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
