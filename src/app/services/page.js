import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedServices from "../components/FeaturedServices";
import Image from "next/image"; // Import Image for background
import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/services-hero.jpg" // Replace with your image
              alt="SupaNova Services Background"
              fill
              sizes="100vw"
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.heroSubtitle}>
              Discover our comprehensive solutions in software development, graphic design, and cybersecurity.
            </p>
          </div>
        </section>
        <FeaturedServices />
      </main>
      <Footer />
    </div>
  );
}