'use client'
import About from "./homepage/About";
import Contact from "./homepage/Contact";
import Footer from "./footer/Footer";
import Header from "./homepage/Header";
import Navbar from "./navigation-bar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
