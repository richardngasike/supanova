import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Image from "next/image"; // Import Image for background
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/about-hero.jpg" // Placeholder path; replace with your image
              alt="SupaNova Technologies Background"
              fill
              sizes="100vw"
              className={styles.heroImage}
              priority // Load image eagerly for hero section
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About SupaNova Technologies</h1>
            <p className={styles.heroSubtitle}>
              Innovating the future with cutting-edge software, design, and cybersecurity solutions.
            </p>
          </div>
        </section>
        <section className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.sectionText}>
            At SupaNova Technologies, we are dedicated to empowering businesses through innovative technology. Our team of experts delivers top-tier software development, creative graphic design, and robust cybersecurity solutions to drive success.
          </p>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p className={styles.sectionText}>
            To be a global leader in transformative technology, creating solutions that inspire and secure the digital world.
          </p>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}