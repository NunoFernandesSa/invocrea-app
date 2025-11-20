// ----- Shadcn -----
import { Button } from "../components/shadcn/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/shadcn/ui/dialog";
import { Input } from "../components/shadcn/ui/input";
import { Label } from "../components/shadcn/ui/label";

// ----- Icons -----
import { MdAdd } from "react-icons/md";

// ----- React Hook Form -----
import { useForm, SubmitHandler } from "react-hook-form";

// ----- Types -----
import { InputsTypes } from "../types/inputs-types";
import { useRef } from "react";

export function NewInvoiceForm() {
  const closeDialogRef = useRef<HTMLButtonElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsTypes>({
    defaultValues: {
      invoiceName: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<InputsTypes> = (data) => {
    console.log(data);
    reset();
    if (closeDialogRef.current) {
      closeDialogRef.current.click();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={"lg"} className="cursor-pointer">
          New Invoice <MdAdd />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="mb-6">
            <DialogTitle>Créer une nouvelle facture</DialogTitle>
            <DialogDescription>
              Remplissez le formulaire ci-dessous pour créer une nouvelle
              facture.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* ----- name ----- */}
            <div className="grid gap-3">
              <Label htmlFor="invoice-name">Nom de la facture</Label>
              <Input
                id="invoice-name"
                placeholder="Nom de la facture"
                type="text"
                {...register("invoiceName", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Minimum 6 caractères",
                  },
                  maxLength: {
                    value: 60,
                    message: "Maximum 60 caractères",
                  },
                  validate: (value) => {
                    const trimmedValue = value.trim();
                    if (trimmedValue.length < 6) {
                      return "Minimum 6 caractères.";
                    }
                    if (trimmedValue.length > 60) {
                      return "Maximum 60 caractères.";
                    }
                    return true;
                  },
                })}
              />
              <span className="text-xs text-red-300">
                {errors.invoiceName && errors.invoiceName.message}
              </span>
            </div>
          </div>

          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button variant="outline" ref={closeDialogRef}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
