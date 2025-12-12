import Link from "next/link";
import React from "react";
import { Button } from "../shadcn/ui/button";
import { ArrowBigLeft } from "lucide-react";

export default function BackButton({ linkTo }: { linkTo: string }) {
  return (
    <Link href={linkTo} className="text-primary underline mr-4">
      <Button variant="default" size={"sm"} className="cursor-pointer">
        <ArrowBigLeft className="mr-2" />
      </Button>
    </Link>
  );
}
