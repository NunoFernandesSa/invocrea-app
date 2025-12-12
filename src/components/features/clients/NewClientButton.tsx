import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../../shadcn/ui/dialog";
import { Button } from "../../shadcn/ui/button";
import { NewClientButtonPropsType } from "@/src/types/new-client-button-props-type";
import { MdAdd } from "react-icons/md";

export default function NewClientButton({
  isOpen,
  setIsOpen,
  newClientForm,
}: NewClientButtonPropsType) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche tout comportement par défaut
    setIsOpen(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size={"sm"}
          className="cursor-pointer"
          onClick={handleClick}
        >
          Nouveau client <MdAdd />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        {newClientForm}
      </DialogContent>
    </Dialog>
  );
}
