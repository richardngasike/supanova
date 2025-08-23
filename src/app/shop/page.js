import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "./shop.module.css";

const products = [
  {
    id: 1,
    name: "SupaNova Security Suite",
    description: "Comprehensive cybersecurity software for businesses.",
    price: 1200,
    image: "/products/security.jpg",
  },
  {
    id: 2,
    name: "Custom Design Package",
    description: "Tailored graphic design solutions for your brand.",
    price: 1000,
    image: "/products/supanovabrands.png",
  },
  {
    id: 3,
    name: "Enterprise Software",
    description: "Scalable software development solutions for enterprises.",
    price: 35000,
    image: "/products/pos.webp",
  },
];

export default function Shop() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/shop-hero.jpg" // Replace with your image
              alt="SupaNova Shop Background"
              fill
              sizes="100vw"
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Shop SupaNova</h1>
            <p className={styles.heroSubtitle}>
              Explore our premium products and services to elevate your business.
            </p>
          </div>
        </section>
        <section className={styles.shopContent}>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productPrice}>Ksh {product.price.toFixed(2)}</p>
                <Link href={`/shop/${product.id}`} className={styles.buyButton}>
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}