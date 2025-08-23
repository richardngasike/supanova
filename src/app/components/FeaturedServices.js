"use client"; // Client-side component for interactivity

import { FaCode, FaPaintBrush, FaShieldAlt } from "react-icons/fa"; // Updated icons
import styles from "../styles/featuredServices.module.css";

const services = [
  {
    icon: <FaCode />,
    title: "Software Development",
    description: "Build robust, scalable applications tailored to your business needs with our expert developers.",
    link: "/services/software-development",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    description: "Create stunning visuals and branding with our creative design solutions for all platforms.",
    link: "/services/graphic-design",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    description: "Protect your digital assets with our state-of-the-art security measures and monitoring.",
    link: "/services/cybersecurity",
  },
];

export default function FeaturedServices() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Featured Services</h2>
        <p className={styles.sectionSubtitle}>
          Discover how SupaNova can empower your business with cutting-edge technology and creative solutions.
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href={service.link} className={styles.cardButton}>
                Explore Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}