import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>SupaNova Technologies</h3>
          <p>Empowering the future with innovative tech solutions.</p>
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
            href="https://supanovatech.com/projects"
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
            Our Projects
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
          <p>&copy; {new Date().getFullYear()} SupaNova Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}