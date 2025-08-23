"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image"; // Import Image for background
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    setStatus("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/contact-hero.jpg" // Replace with your image
              alt="Contact SupaNova Background"
              fill
              sizes="100vw"
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              Get in touch with our team for inquiries, support, or collaboration.
            </p>
          </div>
        </section>
        <section className={styles.contactContent}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
            {status && <p className={styles.status}>{status}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}