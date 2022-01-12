import React from "react";
import boxImage from "../assets/images/demo.png";
const Feature = () => {
  return (
    <div className="feature mt-24 lg:mt-36" id="gallery">
      <div className="container mx-auto px-4 ">
        <h2 className="text-[40px] text-center font-bold font-heading text-white leading-[50px] pb-14">
          We have the Best NFT's collection
        </h2>
        <div className="box__wrapper grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-8">
          <div className="box overflow-hidden">
            <img
              src={boxImage}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>
          <div className="box overflow-hidden">
            <img
              src={boxImage}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div className="box overflow-hidden">
            <img
              src={boxImage}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div className="box overflow-hidden">
            <img
              src={boxImage}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div className="box overflow-hidden">
            <img
              src={boxImage}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div className="box overflow-hidden">
            <img
              src={boxImage}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div className="box overflow-hidden">
            <img
              src={boxImage}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div className="box overflow-hidden">
            <img
              src={boxImage}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
