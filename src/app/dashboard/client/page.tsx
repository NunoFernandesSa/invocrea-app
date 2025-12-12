"use client";

import BackButton from "@/src/components/common/BackButton";
import Container from "@/src/components/common/Container";
import Section from "@/src/components/common/Section";
import NewClientButton from "@/src/components/features/clients/NewClientButton";
import NewClientForm from "@/src/forms/NewClientForm";
import React from "react";

export default function ClientsPage() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <Container>
      <Section>
        <div className="w-full mb-10 flex items-center justify-center md:justify-start">
          <BackButton linkTo="/dashboard" />

          <NewClientButton
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            newClientForm={
              <NewClientForm onSuccess={() => setIsDialogOpen(false)} />
            }
          />
        </div>
      </Section>
    </Container>
  );
}
