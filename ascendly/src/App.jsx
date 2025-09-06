import Agenda from "./components/Agenda";
import Benefits from "./components/Benefits";
import Carousel from "./components/Carousel";
import { CTA1, CTA2 } from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Speakers from "./components/Speakers";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <Benefits />
      <Speakers />
      <Agenda />
      <Reviews />
      <CTA1 />
      <FAQ />
      <CTA2 />
      <Footer />
    </>
  );
}

export default App;
