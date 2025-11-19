import Container from "../../common/Container";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { Button } from "../../shadcn/ui/button";

export default function Hero() {
  return (
    <section className="border-b border-border bg-linear-to-b from-background via-background to-card/50 py-20">
      <Container className="text-center">
        <h2 className="text-4xl font-bold text-foreground md:text-5xl">
          Create Professional Invoices in Seconds
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Simple, fast, and professional invoice generator. Create and download
          your quotes and invoices as PDF in just a few clicks.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <SignedOut>
            <SignUpButton mode="modal">
              <Button variant="default" size="lg">
                Start Creating Invoices
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Button variant="default" size="lg" asChild>
              <a href="/invoices">View Invoices</a>
            </Button>
          </SignedIn>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
}
