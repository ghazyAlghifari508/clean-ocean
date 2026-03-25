import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactSocials from "../components/contact/ContactSocials";
import ContactCloser from "../components/contact/ContactCloser";

export default function Contact() {
  return (
    <main className="w-full bg-white overflow-clip">
      <ContactHero />
      <ContactFormSection />
      <ContactSocials />
      <ContactCloser />
    </main>
  );
}
