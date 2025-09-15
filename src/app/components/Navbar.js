"use client"; // Client-side component for interactivity

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/support" },
  ];

  const socialItems = [
    {
      name: "Twitter",
      href: "https://twitter.com/supanovatech",
      icon: "/twitter.png",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/supanovatech",
      icon: "/linkedin.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/supanovatech",
      icon: "/instagram.svg",
    },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo on the Left */}
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/supanovalogo.png"
                alt="SupaNova Technologies Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links (Visible on Desktop) or Hamburger (Small Devices) */}
          <div className={styles.navRight}>
            <button className={styles.hamburger} onClick={toggleSidebar}>
              <span className={styles.hamburgerIcon}>&#9776;</span>
            </button>
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar for Small Devices */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""}`}>
        <button className={styles.closeButton} onClick={toggleSidebar}>
          &times;
        </button>
        <ul className={styles.sidebarLinks}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={styles.sidebarLink}
                onClick={toggleSidebar} // Close sidebar on link click
              >
                {item.name}
              </Link>
              <hr className={styles.sidebarSeparator} />
            </li>
          ))}
          <li className={styles.socialLinks}>
            <h4 className={styles.socialTitle}>Follow Us</h4>
            {socialItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={styles.sidebarSocialLink}
                  onClick={toggleSidebar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={20}
                    height={20}
                    className={styles.socialIcon}
                  />
                  {item.name}
                </Link>
                <hr className={styles.sidebarSeparator} />
              </div>
            ))}
          </li>
        </ul>
      </div>

      {/* Overlay for Sidebar (dims background when sidebar is open) */}
      {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </>
  );
}