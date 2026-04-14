import type { NextPage } from "next";
import Image from "next/image";
import styles from "./index.module.css";

const Frame1948755428: NextPage = () => {
  return (
    <div className={styles.billeifParent}>
      <Image
        src="/assets/billeif-header.png"
        alt="Billeif"
        width={120}
        height={40}
        className={styles.headerLogo}
      />
      <div className={styles.aboutParent}>
        <a href="#about" className={styles.about}>About</a>
        <a href="#pricing" className={styles.pricing}>Pricing</a>
        <a href="#faqs" className={styles.pricing}>F.A.Qs</a>
        <a href="#contact" className={styles.pricing}>Contact</a>
      </div>
      <a href="#contact" className={styles.demo}>
        <div className={styles.demoChild} />
        <img
          className={styles.rivideoLineIcon}
          width={48}
          height={48}
          alt=""
          src="/hicon.svg"
        />
      </a>
    </div>
  );
};

export default Frame1948755428;
