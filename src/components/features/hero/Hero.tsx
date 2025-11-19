import Container from "../../common/Container";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { Button } from "../../shadcn/ui/button";

export default function Hero() {
  return (
    <section className="h-[calc(100vh-200px)] border-b border-border bg-linear-to-b from-background via-background to-card/50 py-20">
      <Container className="h-full grid md:grid-cols-2 grid-cols-1 items-center gap-12">
        {/* left side content */}
        <div className="">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Create Professional Invoices in Seconds
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple, fast, and professional invoice generator.
          </p>
          <p className="text-lg text-muted-foreground">
            Create and download your quotes and invoices as PDF in just a few
            clicks.
          </p>
          <div className="mt-8 flex justify-start gap-4">
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
          </div>
        </div>
        {/* right side image or illustration */}
        <div className=""></div>
      </Container>
    </section>
  );
}
