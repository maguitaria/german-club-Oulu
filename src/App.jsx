import styles from "./style";
import {
  Events,
  Business,
  CardDeal,
  Contact,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path="/home" index element={<Hero />} />
          <Route path="/events" element={<Events />} />
          <Route path="/business" element={<Business />} />
          <Route path="/card-deal" element={<CardDeal />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cta" element={<CTA />} />
          <Route path="/footer" element={<Footer />} />
          
        </Routes>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <CardDeal />{" "}
        {/* Billing component removed, not defined in the imports */}
        <Testimonials />
        <Contact />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
