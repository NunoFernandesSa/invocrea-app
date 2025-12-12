import Link from "next/link";
import React from "react";
import { Button } from "../shadcn/ui/button";
import { ArrowBigLeft } from "lucide-react";

/**
 * BackButton component
 * @param {{ linkTo: string }} props - The props of the BackButton component.
 * @returns {JSX.Element} The BackButton component.
 * @example
 * <BackButton linkTo="/dashboard/invoice" />
 */
export default function BackButton({ linkTo }: { linkTo: string }) {
  return (
    <Link href={linkTo} className="text-primary underline mr-4">
      <Button variant="default" size={"sm"} className="cursor-pointer">
        <ArrowBigLeft className="mr-2" />
      </Button>
    </Link>
  );
}
