"use client";

import { useState, useCallback, useEffect } from "react";
import { Invoice } from "../types/invoice-types";
import { getInvoiceById } from "@/lib/actions/invoice-actions";

export function useInvoiceById(
  invoiceId?: string,
  options?: {
    enabled?: boolean;
    initialData?: Invoice;
  }
) {
  const { enabled = true, initialData } = options || {};

  const [invoice, setInvoice] = useState<Invoice | null>(initialData || null);
  const [loading, setLoading] = useState<boolean>(!!invoiceId);
  const [error, setError] = useState<string | null>(null);

  const fetchInvoice = useCallback(async (id: string, forceRefresh = false) => {
    console.log(
      `📡 Call server action for invoice:${id}`,
      forceRefresh ? "(force)" : ""
    );

    setLoading(true);
    setError(null);

    try {
      const result = await getInvoiceById(id);

      if (!result.success) {
        throw new Error(result.error || "Erreur lors du chargement");
      }

      if (!result.data) {
        throw new Error("Facture non trouvée");
      }

      setInvoice(result.data);
      return result.data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Une erreur est survenue";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const refetch = useCallback(async () => {
    if (!invoiceId) return null;
    return fetchInvoice(invoiceId);
  }, [invoiceId, fetchInvoice]);

  useEffect(() => {
    if (enabled && invoiceId) {
      fetchInvoice(invoiceId);
    } else if (!invoiceId) {
      setLoading(false);
    }
  }, [invoiceId, enabled, fetchInvoice]);

  const updateInvoice = useCallback(
    (updates: Partial<Invoice>) => {
      if (invoice) {
        setInvoice({ ...invoice, ...updates });
      }
    },
    [invoice]
  );

  return {
    invoice,
    loading,
    error,

    fetchInvoice: invoiceId ? () => fetchInvoice(invoiceId) : undefined,
    refetch,
    updateInvoice,
  };
}
