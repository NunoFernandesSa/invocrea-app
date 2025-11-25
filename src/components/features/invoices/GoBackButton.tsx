// ----- React -----
import React from "react";

// ----- Next -----
import Link from "next/link";

// ----- shadcn -----
import { Button } from "../../shadcn/ui/button";

// ----- icons -----
import { FaArrowLeft } from "react-icons/fa";

/**
 * GoBackButton component
 * @param href The path name to navigate back to (e.g., "invoices", "dashboard").
 * @returns {JSX.Element} The GoBackButton component.
 */
export default function GoBackButton({ href }: { href: string }): JSX.Element {
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
