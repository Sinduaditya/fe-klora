import { Link } from "react-router-dom";
import {
  AreYouReady,
  FAQPage,
  Footer,
  Hero,
  Klora,
  Problem,
  Roadmap,
  Solutions,
} from "../../components/landing_page";

export default function LandingPages() {
  return (
    <>
      <main className="bg-neutral-50  overflow-hidden">
        <Link to="/app">Go to App</Link>
        <div className="flex flex-col bg-primary-50 pt-[15vh] z-30">
          <Hero />
          <Problem />
          <Solutions />
          <Klora />
          <Roadmap />
          <FAQPage />
          <AreYouReady />
          <Footer />
        </div>
      </main>
    </>
  );
}
