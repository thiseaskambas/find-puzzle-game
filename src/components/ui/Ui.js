import React from "react";
import styles from "./Ui.module.css";

const ui = ({ children }) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>Find the lost items</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Created by TK</footer>
    </div>
  );
};

export default ui;
