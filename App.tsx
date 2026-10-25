import { SiteContentProvider } from "./context/SiteContentContext";
import ControlPanel from "./components/control/ControlPanel";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Accommodation from "./components/Accommodation";
import Facilities from "./components/Facilities";
import Soul from "./components/Soul";
import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <SiteContentProvider>
      <div className="min-h-screen bg-sand-50 font-body text-ink-800 antialiased">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Accommodation />
          <Facilities />
          <Soul />
          <Activities />
          <Booking />
        </main>
        <Footer />
        <ControlPanel />
      </div>
    </SiteContentProvider>
  );
}
