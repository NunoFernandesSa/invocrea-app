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
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [siret, setSiret] = React.useState("");

  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Add more validation as needed
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

      <div className="grid gap-2">
        {/* ----- name ----- */}
        <div className="grid gap-1">
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

        {/* ----- email ----- */}
        <div className="grid gap-1">
          <Input
            id="client-email"
            placeholder="Email du client"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-xs text-red-300">
            {/* TODO: add error message */}
            {error}
          </span>
        </div>

        {/* ----- address ----- */}
        <div className="grid gap-1">
          <Input
            id="client-address"
            placeholder="Address du client"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <span className="text-xs text-red-300">
            {/* TODO: add error message */}
            {error}
          </span>
        </div>

        {/* ----- phone ----- */}
        <div className="grid gap-1">
          <Input
            id="client-phone"
            placeholder="Téléphone du client"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="text-xs text-red-300">
            {/* TODO: add error message */}
            {error}
          </span>
        </div>

        {/* ----- siret ----- */}
        <div className="grid gap-1">
          <Input
            id="client-siret"
            placeholder="SIRET du client"
            type="text"
            value={siret}
            onChange={(e) => setSiret(e.target.value)}
          />
          <span className="text-xs text-red-300">
            {/* TODO: add error message */}
            {error}
          </span>
        </div>
      </div>

      <DialogFooter className="flex flex-wrap gap-3 mt-3">
        <DialogClose asChild>
          <Button variant="outline">Annuler</Button>
        </DialogClose>
        <Button type="submit">Enregistrer</Button>
      </DialogFooter>
    </form>
  );
}
