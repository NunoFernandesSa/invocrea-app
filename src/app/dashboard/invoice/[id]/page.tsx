"use client";

import Container from "@/src/components/common/Container";
import GoBackButton from "@/src/components/features/invoices/GoBackButton";
import { Badge } from "@/src/components/shadcn/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/shadcn/ui/select";
import { Spinner } from "@/src/components/shadcn/ui/spinner";
import { InvoiceDetailsProps } from "@/src/types/invoice-details-props-types";
import { Invoice } from "@/src/types/invoice-types";
import { fetchInvoice } from "@/src/utils/fetch-invoice";
import { getStatusLabel } from "@/src/utils/get-status-label";
import { useCallback, useEffect, useState } from "react";

export default function InvoiceDetailsPage({ params }: InvoiceDetailsProps) {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [initialInvoice, setInitialInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadInvoice = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const invoice = await fetchInvoice(params);
      if (!invoice) {
        setError("Facture non trouvée");
        return;
      }
      setInvoice(invoice);
      setInitialInvoice(invoice);
    } catch (error) {
      setError("Erreur lors du chargement de la facture.");
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    loadInvoice();
  }, [params]);

  // ----- check if loading state is true and return loading screen -----
  if (loading) {
    return (
      <Container>
        <div className="flex flex-col justify-center items-center min-h-40">
          <Spinner className="size-8" />
          <p className="text-center text-xs">Chargement...</p>
        </div>
      </Container>
    );
  }

  // ----- check if error state is not null and return error screen -----
  if (error) {
    return (
      <Container>
        <GoBackButton href="dashboard" />
        <div className="text-red-500 text-center mt-4">{error}</div>
      </Container>
    );
  }

  // ----- check if invoice state is null and return not found screen -----
  if (!invoice) {
    return (
      <Container>
        <GoBackButton href="dashboard" />
        <div className="text-red-500 text-center mt-4">
          Facture non trouvée.
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <GoBackButton href={`dashboard`} />

      <div className="flex items-center justify-between">
        <div className="mt-6">
          <h1 className="text-2xl font-bold mb-4">Détails de la facture</h1>
          <Badge className="text-md">Facture - {invoice.id}</Badge>
        </div>

        <div className="">
          {/* select status for change invoice status */}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder={getStatusLabel(invoice.status.toString())}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="mb-2 text-muted-foreground font-light">
                  État de la facture
                </SelectLabel>
                <SelectItem value="1">Brouillon</SelectItem>
                <SelectItem value="2">Envoyée</SelectItem>
                <SelectItem value="3">Validée</SelectItem>
                <SelectItem value="4">En attente</SelectItem>
                <SelectItem value="5">Payée</SelectItem>
                <SelectItem value="6">Annulée</SelectItem>
                <SelectItem value="7">Impayée</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Container>
  );
}
