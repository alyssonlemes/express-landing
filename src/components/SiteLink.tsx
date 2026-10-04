import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type SiteLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  internal?: boolean;
  onClick?: () => void;
  "aria-current"?: "page" | undefined;
};

export function SiteLink({ href, className, children, internal, onClick, ...rest }: SiteLinkProps) {
  const isInternal = internal ?? href.startsWith("/");
  if (isInternal) {
    return (
      <Link to={href} className={className} onClick={onClick} aria-current={rest["aria-current"]}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer" onClick={onClick}>
      {children}
    </a>
  );
}
