import type { NextPage } from "next";
import Image from "next/image";
import styles from "./index.module.css";

const Frame1948755428: NextPage = () => {
  return (
    <div className={styles.billeifParent}>
      <div className={styles.billeif}>
        <span className={styles.billeifText}>bille</span>
        <span className={styles.if}>if</span>
      </div>
      <div className={styles.aboutParent}>
        <b className={styles.about}>About</b>
        <b className={styles.pricing}>Pricing</b>
        <b className={styles.pricing}>F.A.Qs</b>
        <b className={styles.pricing}>Contact</b>
      </div>
      <div className={styles.demo}>
        <div className={styles.demoChild} />
        <img
          className={styles.rivideoLineIcon}
          width={48}
          height={48}
          alt=""
          src="/hicon.svg"
        />
      </div>
    </div>
  );
};

export default Frame1948755428;
