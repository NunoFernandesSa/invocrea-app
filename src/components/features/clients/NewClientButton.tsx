import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../../shadcn/ui/dialog";
import { Button } from "../../shadcn/ui/button";
import { NewClientButtonPropsType } from "@/src/types/new-client-button-props-type";
import { MdAdd } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function NewClientButton({
  newClientForm,
}: NewClientButtonPropsType) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size={"sm"} className="cursor-pointer">
          Nouveau client <MdAdd />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        {newClientForm}
      </DialogContent>
    </Dialog>
  );
}
