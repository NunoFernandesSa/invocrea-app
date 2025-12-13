import Link from "next/link";
import React from "react";
import { Button } from "../shadcn/ui/button";
import { GoToLinkPropsType } from "@/src/types/go-to-link-props-type";

/**
 * GoToLink component
 * @param {{ text: string, icon?: React.ReactNode, href: string }} props - The props of the GoToLink component.
 * @returns {JSX.Element} The GoToLink component.
 * @example
 * <GoToLink text="Mes factures" icon={<BsEye />} href="/dashboard/invoice" />
 */
export default function GoToLink({
  text,
  icon,
  href,
  variant,
  size,
}: GoToLinkPropsType): JSX.Element {
  return (
    <Link href={href} className="text-primary underline">
      <Button variant={variant} size={size}>
        {text} {icon}
      </Button>
    </Link>
  );
}
