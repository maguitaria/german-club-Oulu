import styles from "./style";
import {
  Events,
  Business,
  Aboutus,
  Contact,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import GetStarted from "./components/GetStarted";

const App = () => (
  <HashRouter basename="/home">
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
            <Route path="/aboutus" element={<Aboutus />} />
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
          <Aboutus />{" "}
          {/* Billing component removed, not defined in the imports */}
          <Testimonials />
          <Contact />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </HashRouter>
);
export default App;
