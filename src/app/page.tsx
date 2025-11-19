import Footer from "../components/common/Footer";
import CallToAction from "../components/common/CallToAction";
import Features from "../components/features/features/Features";
import Hero from "../components/features/hero/Hero";
import NavigationBar from "../components/features/navigation-bar/NavigationBar";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* CTA Section */}
      <CallToAction />
      {/* Footer */}
      <Footer />
    </>
  );
}
