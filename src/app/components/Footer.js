import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>SupaNova Technologies</h3>
          <p>Empowering the future with innovative tech solutions.</p>
          <p>
            At SupaNova, we specialize in Graphic Designs, cybersecurity, and cutting-edge
            software development to drive progress and innovation.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <a
            href="https://supanovatech.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            About Us
          </a>
          <a
            href="/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Our Products
          </a>
          <a
            href="https://supanovatech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Visit SupaNova
          </a>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <p>
            <Image
              aria-hidden
              src="/email.png"
              alt="Email icon"
              width={16}
              height={16}
            />
            Email: <a href="mailto:info@supanovatech.com">supanovatech@gmail.com</a>
          </p>
          <p>
            <Image
              aria-hidden
              src="/phone.png"
              alt="Phone icon"
              width={16}
              height={16}
            />
            Phone: +254 739 745946
          </p>
          <p>
            <Image
              aria-hidden
              src="/address.png"
              alt="Location icon"
              width={16}
              height={16}
            />
            Address: Nairobi, Kenya
          </p>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialLinks}>
            <a
              href="https://twitter.com/supanovatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/twitter.png"
                alt="Twitter icon"
                width={20}
                height={20}
              />
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/supanovatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/linkedin.svg"
                alt="LinkedIn icon"
                width={20}
                height={20}
              />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/supanovatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/instagram.svg"
                alt="Instagram icon"
                width={20}
                height={20}
              />
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h4>Newsletter Signup</h4>
          <p>Stay updated with our latest innovations and news.</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
              aria-label="Email for newsletter"
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} SupaNova Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}