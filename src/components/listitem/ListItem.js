import React from "react";
import styles from "./ListItem.module.css";

export function ListItem({ k, item, onSelect, index }) {
  function clickHandler() {
    onSelect({ item, k });
  }
  return (
    <li className={styles.listitem} onClick={clickHandler}>
      {index + 1}. {k}
    </li>
  );
}
