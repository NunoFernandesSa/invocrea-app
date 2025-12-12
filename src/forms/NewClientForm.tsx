import React from "react";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/shadcn/ui/dialog";
import { Label } from "../components/shadcn/ui/label";
import { Input } from "../components/shadcn/ui/input";
import { Button } from "../components/shadcn/ui/button";

interface NewClientFormProps {
  onSuccess?: () => void;
}

export default function NewClientForm({ onSuccess }: NewClientFormProps) {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation simple : vérifier si le nom est vide
    if (name.trim() === "" || name.length < 2) {
      setError("Le nom du client est requis. Minimum 2 caractères.");
      console.error("Le nom du client est requis.");
      return;
    }

    try {
      // TODO: Send the form data to the server

      // After successful submission close the dialog
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Erreur:", error);
      // TODO: set error message to display it in the form
      // TODO: Don't close the dialog if error occurs
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader className="mb-6">
        <DialogTitle>Créer un nouveau client</DialogTitle>
        <DialogDescription>
          Remplissez le formulaire ci-dessous pour créer un nouveau client.
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4">
        {/* ----- name ----- */}
        <div className="grid gap-3">
          <Label htmlFor="client-name">Nom du client</Label>
          <Input
            id="client-name"
            placeholder="Nom du client"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="text-xs text-red-300">
            {/* TODO: add error message */}
            {error}
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
  );
}
