import BackButton from "@/src/components/common/BackButton";
import Container from "@/src/components/common/Container";
import Section from "@/src/components/common/Section";
import React from "react";

export default function CleintsPage() {
  return (
    <Container>
      <Section>
        <BackButton linkTo="/dashboard" />
      </Section>
      <h1>Mes clients</h1>
    </Container>
  );
}
