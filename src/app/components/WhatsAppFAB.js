"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/WhatsAppFAB.module.css";

const WhatsAppFAB = () => {
  useEffect(() => {
    // Create the WhatsApp FAB container
    const fabContainer = document.createElement("div");
    fabContainer.id = "whatsappFabContainer";

    // Check if the element already exists to avoid duplicates
    if (!document.getElementById("whatsappFabContainer")) {
      const link = document.createElement("a");
      link.href = `https://wa.me/254739745946`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = styles.whatsappFab;

      // Create an img element for the WhatsApp icon
      const icon = document.createElement("span");
      icon.className = styles.whatsappIcon;
      const img = document.createElement("img");
      img.src = "https://img.icons8.com/?size=100&id=BkugfgmBwtEI&format=png&color=000000";
      img.alt = "WhatsApp Icon";
      img.width = 50;
      img.height = 50;
      icon.appendChild(img);

      link.appendChild(icon);
      fabContainer.appendChild(link);

      // Append to body
      document.body.appendChild(fabContainer);

      // Cleanup on unmount
      return () => {
        if (fabContainer.parentNode) {
          fabContainer.parentNode.removeChild(fabContainer);
        }
      };
    }
  }, []); // Empty dependency array for mount/unmount

  return null; // No JSX, just side effects
};

export default WhatsAppFAB;