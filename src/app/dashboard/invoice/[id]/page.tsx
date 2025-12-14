"use client";

import BackButton from "@/src/components/common/BackButton";
import Container from "@/src/components/common/Container";
import Section from "@/src/components/common/Section";
import { Badge } from "@/src/components/shadcn/ui/badge";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/ui/card";
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
import { useInvoiceById } from "@/src/hooks/useInvoiceById";
import { getStatusLabel } from "@/src/utils/get-status-label";
import { BsTrash } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";

export default function InvoiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { invoice, loading, error, refetch } = useInvoiceById(params.id, {
    enabled: true,
  });

  const renderContent = () => {
    // ----- loading state -----
    if (loading) {
      return (
        <Container>
          <div className="flex flex-col justify-center items-center min-h-40">
            <Spinner className="size-8" />
            <p className="text-center text-xs">Chargement de la facture...</p>
          </div>
        </Container>
      );
    }

    // ----- invoice fetch error -----
    if (error) {
      return (
        <Container>
          <BackButton linkTo="/dashboard/invoice" />
          <Card className="mx-auto border-red-600 w-1/3 flex flex-col items-center justify-center">
            <CardHeader className="flex flex-col items-center justify-center text-red-500">
              <CardTitle className="text-lg">Erreur</CardTitle>
              <MdError size={32} />
            </CardHeader>

            <CardContent>
              <CardDescription>
                {error || "Une erreur est survenue."}
              </CardDescription>
            </CardContent>
          </Card>
        </Container>
      );
    }

    // ----- invoice not found -----
    if (!invoice) {
      return (
        <Container>
          <BackButton linkTo="/dashboard/invoice" />
          <Card className="mx-auto border-red-600 w-1/3 flex flex-col items-center justify-center">
            <CardHeader className="flex flex-col items-center justify-center text-red-500">
              <CardTitle className="text-lg">Erreur</CardTitle>
              <MdError size={32} />
            </CardHeader>

            <CardContent>
              <CardDescription>Facture non trouvée.</CardDescription>
            </CardContent>
          </Card>
        </Container>
      );
    }

    return (
      <Container>
        <Section className="bg-transparent">
          <BackButton linkTo={`/dashboard/invoice`} />

          {/* invoice actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
            <div className="flex gap-2">
              <Badge className="text-md">Facture {invoice.id}</Badge>
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

            <div className="flex gap-2">
              <Button className="bg-green-800 text-white hover:bg-green-900">
                Sauvegarder <TfiSave />
              </Button>
              <Button variant={"destructive"}>
                Supprimer <BsTrash />
              </Button>
            </div>
          </div>

          <div className="flex w-full md:w-1/3 flex-col mt-6">
            {/* invoice info */}
          </div>

          <div className="flex w-full md:w-2/3 flex-col "></div>
        </Section>
      </Container>
    );
  };

  return renderContent();
}
