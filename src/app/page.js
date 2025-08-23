"use client";

import Image from "next/image";
import styles from "./styles/page.module.css";
import SlideCarousel from "./components/SlideCarousel";
import FeaturedServices from "./components/FeaturedServices";
import Testimonials from "./components/Testimonials"; // Import the Testimonials component
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppFAB from "../components/WhatsAppFAB";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <SlideCarousel />
        <FeaturedServices />
        <Testimonials /> {/* Add Testimonials below FeaturedServices */}
        <WhatsAppFAB />
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://supanovatech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Our Solutions
          </a>
          <a
            className={styles.secondary}
            href="https://supanovatech.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Our Docs
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}