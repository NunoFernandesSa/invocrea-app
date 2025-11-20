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
import { useEffect } from "react";

export function NewInvoiceForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsTypes>({
    defaultValues: {
      invoiceName: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<InputsTypes> = (data) =>
    console.log(data.invoiceName.trim());

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
            <DialogTitle>Create new invoice</DialogTitle>
            <DialogDescription>
              Fill the form below to create a new invoice.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* ----- name ----- */}
            <div className="grid gap-3">
              <Label htmlFor="invoice-name">Invoice Name</Label>
              <Input
                id="invoice-name"
                placeholder="Invoice Name"
                type="text"
                {...register("invoiceName", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                  maxLength: {
                    value: 60,
                    message: "Maximum 60 characters",
                  },
                  validate: (value) =>
                    value.trim().length >= 6 || value.trim().length < 60,
                })}
              />
              {errors.invoiceName && (
                <span className="text-xs text-red-300">
                  {errors.invoiceName.message}
                </span>
              )}
            </div>
          </div>

          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
