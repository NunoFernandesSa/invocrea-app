import Container from "../../common/Container";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../../shadcn/ui/button";

export default function NavigationBar() {
  return (
    <nav className="border-b border-border bg-card">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="py-2 px-3 rounded-md bg-linear-to-r from-primary to-primary/60 flex items-center justify-center text-white text-xl font-bold">
            Invocrea
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="default">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="default" size="default">
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Container>
    </nav>
  );
}
