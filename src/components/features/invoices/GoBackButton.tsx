import React from "react";
import Link from "next/link";
import { Button } from "../../shadcn/ui/button";
import { FaArrowLeft } from "react-icons/fa";

/**
 * Renders a back button that navigates to a specified path.
 *
 * @param href The path name to navigate back to (e.g., "invoices", "dashboard").
 */
export default function GoBackButton({ href }: { href: string }) {
  return (
    <span>
      <Link href={`/${href}`}>
        <Button variant="outline" className="text-xs">
          <FaArrowLeft className="mr-2 " size={9} />
          Back to {href}
        </Button>
      </Link>
    </span>
  );
}
