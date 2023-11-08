import React from "react";
import { apple, bill, esn, events, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Events = () => (
  <section id="events" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={events}
        alt="Events"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        📢 Stay Updated:
        <br className="sm:block hidden text-gradient" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We are announcing weekly meetings in our Telegram channel.
      </p>

      <br />

      <div className="flex flex-row  justify-center items-center space-x-0.5 space-y-4 bg-discount-gradient rounded-[10px] mb-4">
        <div className="flex items-center justify-center w-full">
          <a href="https://t.me/+z_p7lHuhjnxlNWUy" target="_blank">
            <Button styles={"mt-4"} />
          </a>
        </div>

        
      </div>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li>
            <p className={`${styles.paragraph} mt-2 max-w-[312px]`}>
              Partnered with ESN Oulu.
            </p>
            <div className="flex items-center justify-center w-full">
              <button
                type="button"
                className="bg-500 bg-yellow-gradient py-2 px-4 rounded-full"
              >
                <strong> Follow ESN Oulu in Instagram. </strong>
              </button>
            </div>
            <img
              key="ESN"
              src={esn}
              alt="ESN"
              className={`w-[150px] h-[150px] object-contain cursor-pointer mr-1`}
            ></img>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Events;
