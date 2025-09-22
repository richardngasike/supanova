"use client"; // Add this directive to mark as a Client Component

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedServices from "../components/FeaturedServices";
import Image from "next/image";
import { useState } from "react"; // Import useState for toggle functionality
import styles from "./services.module.css";

export default function Services() {
  // State to manage which FAQ is open
  const [activeFaq, setActiveFaq] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "What types of software development services do you offer?",
      answer:
        "We provide custom software development, including web and mobile applications, cloud-based solutions, and API integrations, using technologies like NextJs,Flutter, Node.js, and Postgresql.",
    },
    {
      question: "How does your graphic design process work?",
      answer:
        "Our graphic design process involves understanding your brand, creating initial concepts, iterating based on feedback, and delivering high-quality visuals for branding, marketing, or UI/UX.",
    },
    {
      question: "What cybersecurity measures do you implement?",
      answer:
        "We offer comprehensive cybersecurity services, including penetration testing, vulnerability assessments, secure coding practices, and ongoing monitoring to protect your digital assets.",
    },
    {
      question: "How do you compare to larger tech companies?",
      answer:
        "Unlike big tech firms, we provide personalized, agile, and cost-effective solutions tailored to small and medium businesses, ensuring faster turnaround and dedicated support.",
    },
    {
      question: "What is the typical timeline for a project?",
      answer:
        "Project timelines vary based on complexity, but we typically complete software projects in 3-6 months, graphic design in 2-8 weeks, and cybersecurity audits in 1-4 weeks.",
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
              src="/services-hero.jpg"
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
              Discover our comprehensive solutions in software development, graphic design, and cybersecurity, tailored to empower your business in the digital age.
            </p>
            <a href="#services-overview" className={styles.heroCta}>
              Explore Our Solutions
            </a>
          </div>
        </section>

        {/* Featured Services Section */}
        <FeaturedServices />

        {/* Services Overview Section */}
        <section id="services-overview" className={styles.servicesOverview}>
          <h2 className={styles.sectionTitle}>Our Core Services</h2>
          <p className={styles.sectionSubtitle}>
            At SupaNova, we provide innovative solutions to help your business thrive. Our expertise spans multiple domains, ensuring high-quality deliverables that meet modern standards.
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <Image
                src="/software-dev.jpg"
                alt="Software Development"
                width={400}
                height={300}
                className={styles.serviceImage}
              />
              <h3>Software Development</h3>
              <p>
                Custom software solutions, including web and mobile applications, built with cutting-edge technologies like React, Node.js, and cloud infrastructure.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/graphic-design.jpg"
                alt="Graphic Design"
                width={400}
                height={300}
                className={styles.serviceImage}
              />
              <h3>Graphic Design</h3>
              <p>
                Stunning visuals for branding, marketing, and UI/UX design, crafted to captivate your audience and elevate your brand identity.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/cybersecurity.jpg"
                alt="Cybersecurity"
                width={400}
                height={300}
                className={styles.serviceImage}
              />
              <h3>Cybersecurity</h3>
              <p>
                Robust security solutions, including penetration testing, threat analysis, and secure infrastructure, to protect your digital assets.
              </p>
            </div>
          </div>
        </section>

        {/* Big Tech Comparison Section */}
        <section className={styles.comparisonSection}>
          <h2 className={styles.sectionTitle}>How We Compare to Big Tech</h2>
          <p className={styles.sectionSubtitle}>
            Unlike larger tech giants, SupaNova offers personalized, agile, and cost-effective solutions while maintaining enterprise-grade quality.
          </p>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
              <h3>SupaNova</h3>
              <ul>
                <li>Personalized service with dedicated support</li>
                <li>Cost-effective solutions tailored to your needs</li>
                <li>Agile development with faster turnaround</li>
                <li>Focus on small to medium businesses</li>
              </ul>
            </div>
            <div className={styles.comparisonCard}>
              <h3>Big Tech (e.g., Google, Amazon)</h3>
              <ul>
                <li>Scalable but often impersonal services</li>
                <li>Higher costs for enterprise solutions</li>
                <li>Complex processes with longer timelines</li>
                <li>Focus on large-scale clients</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Got questions? We have answers. Explore some of the most common inquiries about our services.
          </p>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${activeFaq === index ? styles.active : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className={styles.faqToggle}>{activeFaq === index ? "−" : "+"}</span>
                </button>
                <div className={`${styles.faqAnswer} ${activeFaq === index ? styles.show : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.sectionTitle}>Ready to Transform Your Business?</h2>
          <p className={styles.sectionSubtitle}>
            Partner with SupaNova to unlock innovative solutions tailored to your needs.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get Started Today
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}