import React from "react";
import styles from "./Welcome.module.css";

const Welcome = ({ onClick }) => {
  return (
    <div className={styles.welcome}>
      <p>
        This is a simple game where you have to find some items in a picture.
      </p>
      <button onClick={onClick}>Let's play!</button>
    </div>
  );
};

export default Welcome;
