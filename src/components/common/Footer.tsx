// ----- custom components -----
import Container from "./Container";

/**
 * Footer component
 *
 * A footer component that renders a copyright message and links to
 * privacy, terms, and contact pages.
 *
 * @returns {JSX.Element} The footer component.
 */
export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-border bg-card py-8">
      <Container>
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 InvocreaApp. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
