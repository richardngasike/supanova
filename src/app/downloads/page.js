"use client"; // Mark as Client Component for potential interactivity

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react"; // For future expansions (e.g., modals)
import styles from "./downloads.module.css";

export default function Downloads() {
  // Sample data for downloads (customize with real items)
  const downloads = [
    {
      type: "android",
      title: "Nairobi Vacant Houses",
      description: "A mobile app for vacant listings built with Flutter.",
      image: "/nvh.png",
      action: { type: "download", url: "/downloads/my-android-app.apk" },
    },
    {
      type: "ios",
      title: "iOS PDF reader",
      description: "iOS document reading app for Apple devices.",
      image: "/pdfreader.png",
      action: { type: "download", url: "/downloads/my-ios-app.ipa" },
    },
    {
      type: "desktop",
      title: "Point Of Sale",
      description: "Premium Supermaket point of sale software.",
      image: "/pos.png",
      action: { type: "download", url: "/downloads/desktop-app.exe" },
    },
    {
      type: "graphic",
      title: "Brand Logo Pack",
      description: "High-res graphic design images for branding.",
      image: "/brand.png",
      action: { type: "download", url: "/brand.png" },
    },
    {
      type: "website",
      title: "Portfolio Site",
      description: "Live website showcasing interactive web projects.",
      image: "/portfolio.png",
      action: { type: "view", url: "https://richardngasike.co.ke" },
    },
    {
      type: "more",
      title: "UI Kit Resources",
      description: "Additional design templates and assets.",
      image: "/ui.jpeg",
      action: { type: "download", url: "/downloads/ui-kit.zip" },
    },
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/downloads.jpg" // Replace with tech/downloads-themed image
              alt="SupaNova Downloads Background"
              fill
              sizes="100vw"
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Downloads & Resources</h1>
            <p className={styles.heroSubtitle}>
              Access our latest Android & iOS apps, desktop software, graphic designs, and more. View live websites or download directly to enhance your projects.
            </p>
            <a href="#downloads-grid" className={styles.heroCta}>
              Browse Downloads
            </a>
          </div>
        </section>

        {/* Downloads Grid Section */}
        <section id="downloads-grid" className={styles.downloadsSection}>
          <h2 className={styles.sectionTitle}>Available Downloads</h2>
          <p className={styles.sectionSubtitle}>
            Explore and download our curated collection of apps, designs, and web previews. All resources are free for personal and commercial use.
          </p>
          <div className={styles.downloadsGrid}>
            {downloads.map((item, index) => (
              <div key={index} className={styles.downloadCard}>
                <Image
                  src={item.image}
                  alt={`${item.title} Preview`}
                  width={300}
                  height={200}
                  className={styles.downloadImage}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.downloadActions}>
                  {item.action.type === "download" ? (
                    <a
                      href={item.action.url}
                      download
                      className={styles.downloadButton}
                    >
                      Download {item.type.toUpperCase()}
                    </a>
                  ) : (
                    <a
                      href={item.action.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewButton}
                    >
                      View Website
                    </a>
                  )}
                </div>
              </div>
            ))}
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
                className={styles.ceoImage}
              />
            </div>
            <div className={styles.ceoText}>
              <p className={styles.ceoBio}>
                Richard Ngasike is the visionary CEO of SupaNova, a Kenya-based Flutter and Web Developer with expertise in mobile and web solutions. Passionate about innovative software and design, Richard leads our team in delivering cutting-edge apps and resources that empower businesses across Africa and beyond.
              </p>
              <a href="https://richardngasike.co.ke" target="_blank" rel="noopener noreferrer" className={styles.portfolioButton}>
                View My Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
