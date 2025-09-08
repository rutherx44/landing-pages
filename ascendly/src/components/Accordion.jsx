import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="container font-lato py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between w-full cursor-pointer"
      >
        <span className="title uppercase font-bold">{title}</span>
        <ChevronDown
          className={`text-primary icon transform origin-center transition duration-200 ease-out ${
            accordionOpen && "!rotate-180"
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white/60 description ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
