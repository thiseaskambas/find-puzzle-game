import { ListItem } from "./../listitem/ListItem";
import React from "react";
import styles from "./Selector.module.css";
import { useSelector } from "react-redux";

export function Selector({ style, onSelect }) {
  const items = useSelector((state) => state.image.items);
  const selectHandler = ({ item, k }) => {
    onSelect({ item, k });
  };

  return (
    <div style={{ ...style }}>
      <div className={styles.select} style={{ ...style }}></div>
      <div className={styles.menu} style={{ ...style }}>
        <ul>
          {Object.keys(items).map((k, i) => {
            if (!items[k].found) {
              return (
                <ListItem
                  index={i}
                  k={k}
                  item={items[k]}
                  key={items[k].id}
                  onSelect={selectHandler}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
