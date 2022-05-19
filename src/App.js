import { useDispatch } from "react-redux";
import { Selector } from "./components/selector/Selector";
import { useState } from "react";
import { imageActions } from "./features/image/imageSlice";
import puzzleImg from "./assets/puzzle.jpeg";
import styles from "./App.module.css";

function App() {
  const { setFound } = imageActions;
  const dispatch = useDispatch();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [offX, setOffX] = useState(null);
  const [offY, setOffY] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [score, setScore] = useState(0);

  function clickHandler(e) {
    setClicked((prev) => !prev);
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    setOffX(offsetX);
    setOffY(offsetY);
    setX(Math.round((offsetX / width) * 100));
    setY(Math.round((offsetY / height) * 100));
  }

  function selectHandler({ item, k }) {
    if (item.x > x - 5 && item.x < x + 5 && item.y > y - 5 && item.y < y + 5) {
      dispatch(setFound(k));
      setClicked(false);
      setScore((prev) => prev + 1);
    }
  }

  return (
    <>
      <div className={styles.imgCtn}>
        <img src={puzzleImg} onClick={clickHandler} />
        {clicked && (
          <Selector
            style={{
              left: offX,
              top: offY,
            }}
            onSelect={selectHandler}
            coordinates={{ x, y }}
          />
        )}
      </div>
      <div>score: {score}</div>
    </>
  );
}

export default App;
