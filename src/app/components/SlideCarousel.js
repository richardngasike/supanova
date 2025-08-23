"use client"; // Client-side component for interactivity

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/carousel.module.css";

const slides = [
  {
    src: "/cover4.jpg",
    alt: "SupaNova Project 1",
    caption: "Welcome to SupaNova",
    subCaption: "Discover innovative solutions for a brighter future",
  },
  {
    src: "/cover1.jpg",
    alt: "SupaNova Project 2",
    caption: "Tech Support 24/7/365",
    subCaption: "Round-the-clock assistance for all your needs",
  },
  {
    src: "/cover3.jpg",
    alt: "SupaNova Project 3",
    caption: "Cybersecurity Excellence",
    subCaption: "Protecting your digital world with advanced security",
  },
  {
    src: "/cover2.jpg",
    alt: "SupaNova Project 4",
    caption: "Meet Tech Experts",
    subCaption: "Meet our intellectual tech enthusiasts",
  },
  {
    src: "/cover5.jpg",
    alt: "SupaNova Project 5",
    caption: "AI-Powered Innovation",
    subCaption: "Harnessing AI to drive cutting-edge advancements",
  },
];

export default function SlideCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isAutoSliding]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoSliding(false); // Pause auto-slide on user interaction
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoSliding(false); // Pause auto-slide on user interaction
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoSliding(false); // Pause auto-slide on user interaction
  };

  // Resume auto-sliding after 10 seconds of inactivity
  const handleInteraction = () => {
    setIsAutoSliding(false);
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 10000);
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsAutoSliding(false)}
      onMouseLeave={() => setIsAutoSliding(true)}
    >
      <div className={styles.slide}>
        <Image
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          fill
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <h3 className={styles.caption}>{slides[currentSlide].caption}</h3>
          <p className={styles.subCaption}>{slides[currentSlide].subCaption}</p>
          <a href="https://supanovatech.com" className={styles.learnMoreButton}>
            Learn More
          </a>
        </div>
      </div>
      <button
        className={styles.prev}
        onClick={() => {
          prevSlide();
          handleInteraction();
        }}
      >
        &#10094; 
      </button>
      <button
        className={styles.next}
        onClick={() => {
          nextSlide();
          handleInteraction();
        }}
      >
         &#10095;
      </button>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ""}`}
            onClick={() => {
              goToSlide(index);
              handleInteraction();
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}