import Navbar from "./Navbar";
import Hero from "./Hero";

// import { BrowserRouter, Routes, Route } from "react-router-dom";z

import Footer from "./Footer";
import Contact from "./Contact";
import Founder from "./Founder";
import Write from "./Write";
import About from "./About";
import Download from "./Download";
import Supporters from "./Supporters";
import Testimonials from "./Testimonials";
// import PagenotFound from "./Page_not_found";
// import { useLocation } from "react";

export default function Routes() {
  // const location = useLocation();
  // const lastSegment = location.pathname;
  // return lastSegment === "/write_for_us" || lastSegment === "/home" ? (
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <Write />
      <Download />
      <Supporters />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    
  );
}
