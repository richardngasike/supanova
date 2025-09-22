"use client"; // Mark as Client Component for FAQ toggle functionality

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Image from "next/image";
import { useState } from "react";
import styles from "./about.module.css";

export default function About() {
  // State for FAQ toggle
  const [activeFaq, setActiveFaq] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "What is SupaNova Technologies' main focus?",
      answer:
        "We specialize in software development, graphic design, and cybersecurity, delivering innovative solutions for businesses worldwide.",
    },
    {
      question: "Who leads SupaNova Technologies?",
      answer:
        "SupaNova is led by Richard Ngasike, a skilled Flutter and web developer dedicated to advancing technology in Africa and beyond.",
    },
    {
      question: "What makes SupaNova different from competitors?",
      answer:
        "Our personalized, agile approach and focus on small to medium businesses ensure tailored, cost-effective solutions with enterprise-grade quality.",
    },
    {
      question: "How can I collaborate with SupaNova?",
      answer:
        "Contact us via our website or email to discuss your project needs. We offer consultations to align our solutions with your goals.",
    },
  ];

  // Toggle FAQ answer visibility
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/about-hero.jpg" // Replace with a tech-themed image
              alt="SupaNova Technologies Background"
              fill
              sizes="100vw"
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} ${styles.animateFadeIn}`}>
              About SupaNova Technologies
            </h1>
            <p className={styles.heroSubtitle}>
              Innovating the future with cutting-edge software, design, and cybersecurity solutions.
            </p>
            <a href="#our-story" className={styles.heroCta}>
              Learn Our Story
            </a>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className={styles.storySection}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p className={styles.sectionSubtitle}>
            From a vision to transform technology in Africa to a global innovator, SupaNova Technologies has grown through dedication and creativity.
          </p>
          <div className={styles.storyGrid}>
            <div className={`${styles.storyCard} ${styles.animateSlideUp}`}>
              <Image
                src="/startup.jpg" 
                alt="Founding of SupaNova"
                width={400}
                height={300}
                className={styles.storyImage}
              />
              <h3>2018: The Beginning</h3>
              <p>
                Founded by Richard Ngasike in Kenya, SupaNova started as a small team focused on mobile app development with Flutter.
              </p>
            </div>
            <div className={`${styles.storyCard} ${styles.animateSlideUp}`}>
              <Image
                src="/expansion.jpg"
                alt="Growth Milestone"
                width={400}
                height={300}
                className={styles.storyImage}
              />
              <h3>2020: Expansion</h3>
              <p>
                Expanded services to include graphic design and cybersecurity, serving clients across Africa and Europe.
              </p>
            </div>
            <div className={`${styles.storyCard} ${styles.animateSlideUp}`}>
              <Image
                src="/global.jpg"
                alt="Global Reach"
                width={400}
                height={300}
                className={styles.storyImage}
              />
              <h3>2025: Global Impact</h3>
              <p>
                Today, SupaNova is a recognized leader in innovative tech solutions, with a growing global presence.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.aboutContent}>
  <div className={styles.aboutContentImageContainer}>
    <Image
      src="/aboutcontent.jpg" // Replace with your background image
      alt="SupaNova Mission and Vision Background"
      fill
      sizes="100vw"
      className={styles.aboutContentImage}
    />
    <div className={styles.aboutContentOverlay}></div>
  </div>
  <div className={styles.aboutContentInner}>
    <h2 className={styles.sectionTitle}>Our Mission</h2>
    <p className={styles.sectionText}>
      At SupaNova Technologies, we are dedicated to empowering businesses through innovative technology. Our team of experts delivers top-tier software development, creative graphic design, and robust cybersecurity solutions to drive success.
    </p>
    <h2 className={styles.sectionTitle}>Our Vision</h2>
    <p className={styles.sectionText}>
      To be a global leader in transformative technology, creating solutions that inspire and secure the digital world.
    </p>
  </div>
</section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <p className={styles.sectionSubtitle}>
            Meet the talented individuals driving SupaNova's success.
          </p>
          <div className={styles.teamGrid}>
            <div className={`${styles.teamCard} ${styles.animateZoomIn}`}>
              <Image
                src="/richy4.jpg" // Replace with team member image
                alt="Team Member 1"
                width={200}
                height={200}
                className={styles.teamImage}
              />
              <h3>Richard Ngasike</h3>
              <p>Lead Software Developer</p>
            </div>
            <div className={`${styles.teamCard} ${styles.animateZoomIn}`}>
              <Image
                src="/britk.jpg" // Replace with team member image
                alt="Team Member 2"
                width={200}
                height={200}
                className={styles.teamImage}
              />
              <h3>Brit. K</h3>
              <p>Graphics Designer</p>
            </div>
            <div className={`${styles.teamCard} ${styles.animateZoomIn}`}>
              <Image
                src="/sarah.jpg" // Replace with team member image
                alt="Team Member 3"
                width={200}
                height={200}
                className={styles.teamImage}
              />
              <h3>Sarah</h3>
              <p>Cybersecurity Specialist</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <p className={styles.sectionSubtitle}>
            The principles that guide our work and define our culture.
          </p>
          <div className={styles.valuesGrid}>
            <div className={`${styles.valueCard} ${styles.animateFadeIn}`}>
              <Image
                src="/innovations.jpg" // Replace with icon/image
                alt="Innovation"
                width={80}
                height={80}
                className={styles.valueIcon}
              />
              <h3>Innovation</h3>
              <p>Pushing boundaries with creative and forward-thinking solutions.</p>
            </div>
            <div className={`${styles.valueCard} ${styles.animateFadeIn}`}>
              <Image
                src="/intergrity.jpg" // Replace with icon/image
                alt="Integrity"
                width={80}
                height={80}
                className={styles.valueIcon}
              />
              <h3>Integrity</h3>
              <p>Building trust through transparency and ethical practices.</p>
            </div>
            <div className={`${styles.valueCard} ${styles.animateFadeIn}`}>
              <Image
                src="/excellence.jpg" // Replace with icon/image
                alt="Excellence"
                width={80}
                height={80}
                className={styles.valueIcon}
              />
              <h3>Excellence</h3>
              <p>Delivering high-quality solutions that exceed expectations.</p>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className={styles.ceoSection}>
          <h2 className={styles.sectionTitle}>Meet Our CEO</h2>
          <div className={styles.ceoContent}>
            <div className={styles.ceoImageContainer}>
              <Image
                src="/richardngasike.jpg" // Replace with actual photo
                alt="Richard Ngasike, CEO"
                width={250}
                height={250}
                className={`${styles.ceoImage} ${styles.animateZoomIn}`}
              />
            </div>
            <div className={styles.ceoText}>
              <p className={styles.ceoBio}>
                Richard Ngasike is the visionary CEO of SupaNova Technologies, a Kenya-based Flutter and Web Developer with a passion for creating impactful digital solutions. With extensive experience in mobile and web development, Richard leads our team in delivering innovative software, design, and cybersecurity solutions that empower businesses across Africa and beyond.
              </p>
              <a
                href="https://richardngasike.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.portfolioButton}
              >
                View My Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Got questions? We have answers about SupaNova Technologies.
          </p>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${activeFaq === index ? styles.active : ""}`}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <span className={styles.faqToggle}>{activeFaq === index ? "−" : "+"}</span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`${styles.faqAnswer} ${activeFaq === index ? styles.show : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}