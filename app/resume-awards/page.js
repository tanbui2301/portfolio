'use client'
import Footer from "../footer/Footer";
import Navbar from "../navigation-bar/Navbar";
import Awards from "./Awards";
import Resume from "./Resume";

export default function Resume_Page() {
  return (
    <>
        <Navbar />
        <Resume />
        <Awards />
        <Footer />
    </>
  );
}
