import { useState } from "react";
import puzzleImg from "./assets/puzzle.jpeg";
import styles from "./App.module.css";
function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  function clickHandler(e) {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    setX(Math.round((offsetX / width) * 100));
    setY(Math.round((offsetY / height) * 100));
    console.log({ x, y });
  }

  return (
    <div className={styles.imgCtn}>
      <img src={puzzleImg} onClick={clickHandler} />
    </div>
  );
}

export default App;
