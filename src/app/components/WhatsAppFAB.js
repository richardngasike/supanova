"use client";

import { useEffect } from "react";
import styles from "./WhatsAppFAB.module.css";

const WhatsAppFAB = () => {
  useEffect(() => {
    // Create the WhatsApp FAB container
    const fabContainer = document.createElement("div");
    fabContainer.id = "whatsappFabContainer";

    // Check if the element already exists to avoid duplicates
    if (!document.getElementById("whatsappFabContainer")) {
      const link = document.createElement("a");
      link.href = `https://wa.me/+254739745946?text=Hello,%20I%20have%20a%20question!`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = styles.whatsappFab;

      const icon = document.createElement("span");
      icon.className = styles.whatsappIcon;
      icon.textContent = "📱"; // Placeholder for WhatsApp icon (use Unicode or custom icon)

      const text = document.createElement("span");
      text.className = styles.chatText;
      text.textContent = "Chat Us";

      link.appendChild(icon);
      link.appendChild(text);
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