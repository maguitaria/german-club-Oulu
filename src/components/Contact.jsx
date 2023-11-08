import React from "react";
import { contacts } from "../constants";
import styles, { layout } from "../style";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { esn, oulu_uni } from "../assets";
import Mailto from "./Mailto";

const Contact = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Contact Us</h2>
      <p className={styles.paragraph}>
        We are welcome to hear from you! Please, send an email to our organiser:
        <p className="text-white">
          Mariia Glushenkova, board member of ESN Oulu. <br/>
           P.S. Sie können mir auf Deutsch schreiben ;) 
          <Mailto
            email="t2glma00@students.oamk.fi"
            subject="Sprich mit uns message"
            body=""
          >
            <br/>
            <button className=" bg-500 bg-yellow-gradient py-2 px-4 rounded-full" >
              Email organiser
            </button>
          </Mailto>
        </p>
        <br />
      </p>
    </div>
    <Link to="/contactus">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={contact.logo}
            alt={contact.id}
            className="sm:w-[200px] w-[200px] object-contain"
          />
        </div>
      ))}
    </Link>
  </section>
);

export default Contact;
