// ----- React -----
import React from "react";

// ----- custom components -----
import Container from "../../common/Container";

// ----- constants -----
import { features } from "@/src/constants/features";

/**
 * Features component
 * @returns {JSX.Element}
 */
export default function Features(): JSX.Element {
  return (
    <section className="border-b border-border py-16">
      <Container>
        <h3 className="text-center text-3xl font-bold text-foreground">
          Why Choose InvocreaApp?
        </h3>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg dark:bg-card/50"
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-linear-to-br from-primary/20 to-primary/10">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h4>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
