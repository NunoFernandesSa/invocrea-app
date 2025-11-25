// ----- custom components -----
import Container from "./Container";

// ----- Clerk -----
import { SignedOut, SignUpButton } from "@clerk/nextjs";

// ----- Shadcn -----
import { Button } from "../shadcn/ui/button";

/**
 * Call to action component
 * @returns {JSX.Element}
 */
export default function CallToAction(): JSX.Element {
  return (
    <section className="bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 py-16">
      <Container className="text-center">
        <h3 className="text-3xl font-bold text-foreground">
          Ready to get started?
        </h3>
        <p className="mt-4 text-muted-foreground">
          Join thousands of businesses creating professional invoices every day.
        </p>
        <SignedOut>
          <div className="mt-8">
            <SignUpButton mode="modal">
              <Button variant="default" size="lg">
                Create Your First Invoice
              </Button>
            </SignUpButton>
          </div>
        </SignedOut>
      </Container>
    </section>
  );
}
