import React from "react";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <>
      <div className="faq mt-20 lg:mt-32" id="faq">
        <div className="container mx-auto">
          <h2 className="text-center text-secondary text-4xl uppercase font-bold">
            Frequently Ask question
          </h2>
          <div className="px-4 pt-4 sm:pt-8">
            <div
              className="text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="TEXT TE XTTEXTTE XTTEX TTEXT TEXTTEXTTEX TTEXTT EXTTEXT
                    "
                  content="TEX TTEXTTEXTTEXTTEX TTEXTTEXTT  EXTTEXTTEXTTE XTTEXTTEXT EXT  TEXTTEXTTE XTTEXTTEXTTE XTTEXTTEXTTEXTT EXTTEXTTEX TTEXTTEXT TEXTTE  XTTEXTTEXTTEX TTEXTTEXTTEXTT EXTTEXTTEXTTE XTTEXTTEX TTEXTTE XTTEXTTE XTTEXT TEXTTEXTTEXTT EXTTEXT"
                />
              </div>
            </div>

            <div
              className="text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="TEXT TEXTTE XTTEX TTEXTTE XTT EXTTEXTT EXTTEXTT EXTTEXT
                    "
                  content="TEXTTEXTTE XTTEXTTEXT TEXTTE XTT EXTTEXTT EXTTEXTTEX TTEXTTEXT  TEXTTEXTTE XTTEXT TEXTTEXTT EXTTEXTTEXT TEXTTE XTTEXTTE XTTEXTTEXTT EXTTEXTTEXTTEX TTEXTTEXTT EXTTEXTTEX TTEXT TEXTTEXTTEX TTEXTTEXTTEXTTE XTTEXTTEXT TEXTTEXTT EXTTEXT"
                />
              </div>
            </div>

            <div
              className="text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="TEXT TE XTTEXTTEX TTEXTTEX TTEXTTEXTT EXTTEXT TEX TTEXT
                    "
                  content="TEXTTEXTTEXT TEXTTEXTTEX TTEXTT EXTTEXTTEXTTEXTTEXTTEXT TEXT  TEXTTEXTTEXTTEXTTEXT TEXTTEXT TEXTTEXTTEXTTEX TTEXTTEXTTEXTTE XTTEXTTEXTTEX TTEX TTEXTTEXTTEX TTE XTTEX TTEXTTEXTTEXTTEX TTEXTTEXTTEXTTE XTTEXT TEXTTEXTTEXTT EXTTEXT"
                />
              </div>
            </div>

            <div
              className="text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="TEXT TEXTT EXTTE XTTEXT TEXTTE XTTEXTT EXTTE XTTEXT TEXT
                    "
                  content="TEXTTEXT TEXTTEXTTE XTTEXTTEXTT EXTTEXTT EXTTEXTTEXTTEXT TEXT  TEXTTEXTTEXTTEX TTEXTTEX TTEXTTEX TTEXTTEXTTEXTT "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
