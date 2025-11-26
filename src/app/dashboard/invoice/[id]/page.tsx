"use client";

import Container from "@/src/components/common/Container";
import GoBackButton from "@/src/components/features/invoices/GoBackButton";
import { InvoiceDetailsProps } from "@/src/types/invoice-details-props-types";
import { Invoice } from "@/src/types/invoice-types";
import { fetchInvoice } from "@/src/utils/fetch-invoice";
import { useEffect, useState } from "react";

export default function InvoiceDetailsPage({ params }: InvoiceDetailsProps) {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [initialInvoice, setInitialInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInvoice = async () => {
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
        setLoading(false);
      } catch (error) {
        setError("Erreur lors du chargement de la facture.");
      } finally {
        setLoading(false);
      }
    };

    loadInvoice();
  }, [params]);

  if (loading) {
    return (
      <Container>
        <div className="flex justify-center items-center min-h-40">
          <p>Chargement...</p>
        </div>
      </Container>
    );
  }

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

  if (error) {
    return (
      <Container>
        <GoBackButton href="dashboard" />
        <div className="text-red-500 text-center mt-4">{error}</div>
      </Container>
    );
  }

  return (
    <Container>
      <GoBackButton href={`dashboard`} />

      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-4">Détails de la facture</h1>
        <p className="text-lg">ID: {invoice.id}</p>
      </div>
    </Container>
  );
}
