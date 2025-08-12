import Content from "./components/Content";
import Footer from "./components/Footer";
import Genres from "./components/Genres";
import Hero from "./components/Hero";
import LatestMovies from "./components/LatestMovies";
import LatestTv from "./components/LatestTv";
import Navbar from "./components/Navbar";
import TopTenMovies from "./components/TopTenMovies";
import TopTenTv from "./components/TopTenTv";
import Trailers from "./components/Trailers";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="flex flex-col gap-[1.875rem] mt-[3.75rem]">
        <TopTenMovies />
        <TopTenTv />
      </section>
      <Trailers />
      <section className="flex flex-col gap-[1.875rem] mt-[3.75rem]">
        <LatestMovies />
        <LatestTv />
      </section>
      <Genres />
      <Content />
      <Footer />
    </>
  );
}

export default App;
