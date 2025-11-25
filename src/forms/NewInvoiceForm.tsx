"use client";

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
import { NewInvoiceFormProps } from "../types/invoice-types";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

// ----- Canvas confetti -----
import confetti from "canvas-confetti";

/**
 * Component form for creating a new empty invoice.
 * The form will reset when submitted successfully.
 *
 * @param {NewInvoiceFormProps} createEmptyInvoiceAction - A function that creates a new empty invoice.
 * @returns {JSX.Element} - A JSX element representing the form component.
 */
export function NewInvoiceForm({
  createEmptyInvoiceAction,
}: NewInvoiceFormProps): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();
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

  const onSubmit: SubmitHandler<InputsTypes> = async (data) => {
    try {
      const result = await createEmptyInvoiceAction(
        user.user?.primaryEmailAddress?.emailAddress || "",
        data.invoiceName
      );

      if (!result.success) {
        console.error(
          "Erreur lors de la création de la facture:",
          result.error
        );
        // TODO: You might want to show this error to the user via a toast or alert
        return;
      }

      // Reset the form
      reset();
      setIsOpen(false);
      router.refresh();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          y: 0.6,
        },
      });
    } catch (error) {
      console.error("Erreur lors de la création de la facture:", error);
      throw error;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size={"lg"} className="cursor-pointer">
          Nouvelle Facture <MdAdd />
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
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button type="submit">Enregistrer</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
