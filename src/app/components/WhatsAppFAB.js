import { useEffect } from "react";
import styles from "../styles/WhatsAppFAB.module.css";

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

      // Create an SVG element for the WhatsApp icon
      const icon = document.createElement("span");
      icon.className = styles.whatsappIcon;
      icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#ffffffff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.297-.298.473-.297.178-.001.356.098.534.298.177.198.683.765.94 1.063.257.297.514.446.712.347.198-.099.913-.473 1.789-.872.876-.399 1.484-.297 1.682.099.198.495.955 1.063 1.053 1.361.099.297.099.645-.099.894-.297.297-.644.446-.942.595z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.776.463 3.447 1.267 4.9L2 22l5.1-1.267A9.916 9.916 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.776 0-3.447-.463-4.9-1.267l-.366-.091-3.02.749.749-3.02-.091-.366C3.463 15.447 3 13.776 3 12c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9z"/>
        </svg>
      `; // Official WhatsApp SVG icon

      const text = document.createElement("span");
      text.className = styles.chatText;
      text.textContent = "ChatUs";

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


