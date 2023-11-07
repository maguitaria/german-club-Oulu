import styles from "../style";
import { discount, germanclub } from "../assets";
import GetStarted from "./GetStarted";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-3`}>
            <a
              href="https://forms.gle/4zLGYZngKZsHU64k7"
              target="_blank"
              className="text-yellow-gradient"
            >
              <span className="text-white">Join us for the</span>
              <span className="text-white"> first</span> meeting on November
              14th, Tuesday!
            </a>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold xs:text-[40px] sm:text-[40px] text-white xs:leading-[100.8px] leading-[75px]">
            Ready for <br className="sm:block hidden" />{" "}
            <span className="text-gradient xs:text-[40px] sm:text-[42px]">
              German Speaking club
            </span>{" "}
          </h1>

          <div className="flex  md:mr-3 mr-0">
            <a href="https://forms.gle/4zLGYZngKZsHU64k7" target="_blank">
              <GetStarted />
            </a>
          </div>
        </div>

        <h1 className="flex-1 font-poppins font-semibold xs:text-[0px] sm:text-[40px] text-white xs:leading-[100.8px] leading-[75px]">
          at Oulu University?
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}></p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={germanclub}
          alt="German_CLUB"
          className="w-[600px] h-[600px]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
