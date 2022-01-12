import React from "react";
import image from "../assets/images/demo.png";

const Team = () => {
  return (
    <>
      <div className="team lg:mt-32" id="team">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-center text-secondary text-4xl uppercase font-bold mb-12 font-heading">
            Meet our team
          </h2>
          <div className="team__wrapper grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div
              className="team__item overflow-hidden rounded-t-xl rounded-b-sm bg-secondary"
              data-aos="zoom-in"
            >
              <img src={image} alt="" className="" />
              <h3 className="text-white text-center py-6 text-lg  font-normal font-body">
                TEAM MEMBER
              </h3>
            </div>

            <div
              className="team__item overflow-hidden rounded-t-xl rounded-b-sm bg-secondary"
              data-aos="zoom-in"
            >
              <img src={image} alt="" className="" />
              <h3 className="text-white text-center py-6 text-lg font-normal font-body">
                TEAM MEMBER
              </h3>
            </div>

            <div
              className="team__item overflow-hidden rounded-t-xl rounded-b-sm bg-secondary"
              data-aos="zoom-in"
            >
              <img src={image} alt="" className="" />
              <h3 className="text-white text-center py-6 text-lg  font-normal font-body">
                TEAM MEMBER
              </h3>
            </div>

            <div
              className="team__item overflow-hidden rounded-t-xl rounded-b-sm bg-secondary"
              data-aos="zoom-in"
            >
              <img src={image} alt="" className="" />
              <h3 className="text-white text-center py-6 text-lg  font-normal font-body">
                TEAM MEMBER
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
