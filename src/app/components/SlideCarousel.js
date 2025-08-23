"use client";

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

  useEffect(() => {
    if (!isAutoSliding) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoSliding(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoSliding(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoSliding(false);
  };

  const handleInteraction = () => {
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 10000);
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Desktop Carousel */}
      <div className={styles.carousel}>
        <div className={styles.slideContainer}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : ""}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.caption}>{slide.caption}</h3>
                <p className={styles.subCaption}>{slide.subCaption}</p>
                <a href="https://supanovatech.com" className={styles.learnMoreButton}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className={styles.prev}
          onClick={() => {
            prevSlide();
            handleInteraction();
          }}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className={styles.next}
          onClick={() => {
            nextSlide();
            handleInteraction();
          }}
          aria-label="Next slide"
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
              role="tab"
              aria-selected={currentSlide === index}
              aria-label={`Go to slide ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Mobile Static Image Layout */}
      <div className={styles.mobileLayout}>
        <Image
          src="/mobile.png" // New image for mobile
          alt="SupaNova Mobile Background"
          fill
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.mobileOverlay}>
          <h3 className={styles.mobileCaption}>Welcome to SupaNova</h3>
          <a href="/services" className={styles.mobileStartButton}>
            Start with Us
          </a>
          <a href="/about" className={styles.mobileExploreButton}>
            Explore Our World!
          </a>
        </div>
      </div>
    </div>
  );

}
