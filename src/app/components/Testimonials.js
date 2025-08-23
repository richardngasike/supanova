"use client"; // Client-side component for interactivity

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa"; // Quote icon for styling
import styles from "../styles/testimonials.module.css";

const testimonials = [
  {
    avatar: "/avatars/lekerpes.jpg",
    name: "Sylvester Lekerpes",
    title: "CTO, TechCorp",
    quote:
      "SupaNova transformed our workflow with their innovative software solutions. Their team's expertise and dedication are unmatched!",
  },
  {
    avatar: "/avatars/sarah.jpg",
    name: "Sarah Wanjiku",
    title: "Creative Director, DesignHub",
    quote:
      "The graphic design services from SupaNova elevated our brand to new heights. Their creativity and attention to detail are exceptional.",
  },
  {
    avatar: "/avatars/rose.jpg",
    name: "Celina Chebet",
    title: "Owner, Malindi Supermaket",
    quote:
      "SupaNova's Developers developed our Supermaket POS thats robust and truly top-notch.",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoSliding(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoSliding(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoSliding(false);
  };

  const handleInteraction = () => {
    setIsAutoSliding(false);
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 10000);
  };

  return (
    <section
      className={styles.testimonialsSection}
      onMouseEnter={() => setIsAutoSliding(false)}
      onMouseLeave={() => setIsAutoSliding(true)}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <p className={styles.sectionSubtitle}>
          Hear from those who’ve experienced SupaNova’s exceptional services.
        </p>
        <div className={styles.testimonialWrapper}>
          <div className={styles.testimonial}>
            <div className={styles.avatarContainer}>
              <Image
                src={testimonials[currentTestimonial].avatar}
                alt={`${testimonials[currentTestimonial].name}'s avatar`}
                width={120}
                height={120}
                className={styles.avatar}
              />
            </div>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.quote}>{testimonials[currentTestimonial].quote}</p>
            <h3 className={styles.name}>{testimonials[currentTestimonial].name}</h3>
            <p className={styles.title}>{testimonials[currentTestimonial].title}</p>
          </div>
          <button
            className={styles.prev}
            onClick={() => {
              prevTestimonial();
              handleInteraction();
            }}
            aria-label="Previous testimonial"
          >
            &#10094;
          </button>
          <button
            className={styles.next}
            onClick={() => {
              nextTestimonial();
              handleInteraction();
            }}
            aria-label="Next testimonial"
          >
            &#10095;
          </button>
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${currentTestimonial === index ? styles.activeDot : ""}`}
                onClick={() => {
                  goToTestimonial(index);
                  handleInteraction();
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}