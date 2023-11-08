import React from "react";
import { aboutus } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Aboutus = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Us - German Club University
        <br className="sm:block hidden" />
      </h2>
      <div className="bg-primary py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-semibold text-white mb-6">
            Lots of people in University learn German language, but don't have
            enough practice with speaking it. Soo...
          </h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4"></p>

            <p className="text-lg text-gray-700 mb-4">
              Here you can immerse into German language and meet new people! 🇩🇪
            </p>
            <br />
            <p className="text-gradient">
              Our mission is to bring together Finnish German-speaking people
              and German exchange students, providing them with a welcoming and
              engaging platform for cultural exchange.
              <br className="sm:block hidden" />
              <strong>
                All our meetings are free and we offer snacks, drinks for our
                participants.
              </strong>
            </p>

            <p className="text-lg text-gray-700 mb-4">
              <strong>What We Do:</strong>
            </p>

            <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
              <li>
                <strong>Language Exchange: </strong>
                We invite our German-speaking people warmly to our club :) In
                sessions we play board games in German, meet new people and
                learn together!
                <br />
                Whether you're a native German speaker, a student of the
                language, or someone who's simply interested in learning more,
                you're welcome to participate.
              </li>
              <li>
                <strong>Community and Friendship:</strong> The German Club is a
                place where you can make new friends, share your experiences,
                and find a sense of belonging.
              </li>
              <li>
                <strong>Movie nights:</strong> Wathing Films with German
                subtitles is a great way to learn about culture and deepen into
                historical context of German Language!
              </li>
            </ul>

            <p className="text-lg text-gradient">
              <strong></strong>
            </p>
          </div>
        </div>
      </div>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={aboutus} alt="About us" className="w-[100%] h-[50%]" />
    </div>
  </section>
);

export default Aboutus;
