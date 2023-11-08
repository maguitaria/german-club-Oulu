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
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
        <div className="flex flex-row items-center  px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-3`}>
            <a
              href="https://forms.gle/4zLGYZngKZsHU64k7"
              target="_blank"
              className="text-yellow-gradient"
            >
              <span className="text-white">
                <strong>DEUTSCHER SPRACHKLUB "Sprich mit uns" </strong>
              </span>
              <span className="rw">
                <br />
                First meeting on November 14th, Tuesday!
              </span>
            </a>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold xs:text-[40px] xs:pl-4 
          sm:text-[40px] text-white "
          >
            Join our <br className="sm:block hidden sm:text-[40px] sm:px-6" />
            <div className="text-gradient xs:text-[80px] sm:text-[42px]">
              German Speaking club
            </div>
            at Oulu University!
          </h1>
          {/* // Register here button */}
          <div className="flex  md:mr-3 mr-1">
            <a href="https://forms.gle/4zLGYZngKZsHU64k7" target="_blank">
              <GetStarted />
            </a>
          </div>
        </div>
      </div>

      <div className={`flex-3 flex ${styles.flexCenter} relative`}>
        {/* gradient start */}
        <div
          className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient"
          style={{ right: "10%", bottom: "10%" }}
        />
        {/* gradient end */}
        <div>
          <img
            src={germanclub}
            alt="German_CLUB"
            className="w-[600px] h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
