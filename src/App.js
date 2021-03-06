import { useDispatch } from "react-redux";
import { Selector } from "./components/selector/Selector";
import { useState } from "react";
import { imageActions } from "./features/image/imageSlice";
import puzzleImg from "./assets/puzzle.jpeg";
import styles from "./App.module.css";
import Welcome from "./components/welcome/Welcome";
import Ui from "./components/ui/Ui";

function App() {
  const { setFound } = imageActions;
  const dispatch = useDispatch();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [offX, setOffX] = useState(null);
  const [offY, setOffY] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("idle");
  const [choice, setChoice] = useState("idle");

  function clickHandler(e) {
    setClicked((prev) => !prev);
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    const { clientX, clientY } = e;
    setOffX(clientX);
    setOffY(clientY);
    setX(Math.round((offsetX / width) * 100));
    setY(Math.round((offsetY / height) * 100));
    console.log({ x, y, offsetX, offsetY });
  }

  function selectHandler({ item, k }) {
    if (item.x > x - 5 && item.x < x + 5 && item.y > y - 5 && item.y < y + 5) {
      dispatch(setFound(k));
      setClicked(false);
      setScore((prev) => prev + 1);
      setChoice("correct");
    } else {
      setChoice("wrong");
    }
  }

  function playHandler() {
    setStatus("playing");
  }

  return (
    <Ui>
      {status === "idle" && <Welcome onClick={playHandler} />}
      {status === "playing" && (
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
          <div className={styles.score}>score: {score}</div>
        </>
      )}
    </Ui>
  );
}

export default App;
