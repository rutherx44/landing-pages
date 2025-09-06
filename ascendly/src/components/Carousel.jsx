import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from "./Assets";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 1 }),
  ]);
  return (
    <>
      <section className="container mt-[60px] md:mt-20 lg:mt-[100px] mx-auto flex flex-col items-center gap-2.5 md:gap-5 lg:gap-[30px]">
        <div>
          <span className="font-lato font-bold text-primary description">
            Trusted by
          </span>
        </div>
        <div className="embla w-72 md:w-[708px] xl:w-[1206px]" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <Logo1 />
            </div>
            <div className="embla__slide">
              <Logo2 />
            </div>
            <div className="embla__slide">
              <Logo3 />
            </div>
            <div className="embla__slide">
              <Logo4 />
            </div>
            <div className="embla__slide">
              <Logo5 />
            </div>
            <div className="embla__slide">
              <Logo6 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
