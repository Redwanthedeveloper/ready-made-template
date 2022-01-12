import React from "react";
import roundShape from "../assets/images/demo.png";
const About = () => {
  return (
    <div className="about lg:mt-48" id="about">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[75px] justify-between items-center">
          <div className="about__left relative flex-1 my-20 lg:my-0">
            <div className="xl:h-[400px] xl:w-[400px] h-[280px] w-[280px] bg-[#d7d7d7] rounded-full border-primary border-[10px] overflow-hidden z-10 relative ">
              <img src={roundShape} alt="" />
            </div>
            <div className="xl:h-[240px] xl:w-[240px] h-[120px] w-[120px]  bg-[#d7d7d7] rounded-full border-secondary border-[10px] overflow-hidden absolute left-0 -bottom-12 2xl:-left-32 2xl:-bottom-32 xl:-bottom-32  -z-0">
              <img src={roundShape} alt="" />
            </div>
            <div className="xl:h-[240px] xl:w-[240px] h-[120px] w-[120px]  bg-[#d7d7d7] rounded-full border-secondary border-[10px] overflow-hidden absolute -right-0 -bottom-16 lg:right-40 xl:-right-0 xl:-bottom-16 z-20">
              <img src={roundShape} alt="" />
            </div>
          </div>
          <div className="about__right flex-1">
            <h2 className="text-left text-[40px] text-white font-bold leading-[50px] font-heading pb-[50px]">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h2>
            <p className="text-left font-normal font-heading text-[22px] text-white leading-[28px] pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium vitae dolores autem tenetur sapiente! <br /> <br />
            </p>
            <p className="text-left text-lg font-heading text-white font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              odit maxime sed nemo, consequatur tenetur? Adipisci expedita
              ratione, autem consectetur corrupti ad atque. Nihil, odit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
