import React from "react";
import { contacts } from "../constants";
import styles from "../style";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Contact = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <Link to="/contactus">
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={contact.logo}
              alt="contact_logo"
              className="sm:w-[200px] w-[200px] object-contain"
            />
          </div>
        ))}
      </div>
    </Link>
  </section>
);

export default Contact;
