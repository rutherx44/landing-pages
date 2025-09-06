import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <>
      <section className="section_spacing">
        <div className="text-center">
          <h1 className="display_text">faq</h1>
        </div>
        <div className="md:px-[60px] lg:px-[100px] z-50">
          <Accordion
            title="Is this really free?"
            answer="Yes! This webinar is completely free. We believe in providing massive value upfront to help you succeed."
          />
          <Accordion
            title="What if I can't attend live?"
            answer="You'll get access to a limited-time replay that will be available for 48 hours after the webinar ends."
          />
          <Accordion
            title="What level of experience do I need?"
            answer="This webinar is designed for all levels - from complete beginners to experienced marketers looking to scale."
          />
          <Accordion
            title="Will there be a Q&A session?"
            answer="Yes! We'll have a live Q&A session at the end where you can get your specific questions answered."
          />
        </div>
      </section>
    </>
  );
};

export default FAQ;
