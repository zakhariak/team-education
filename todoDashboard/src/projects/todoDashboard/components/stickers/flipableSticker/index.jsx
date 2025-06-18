import React, { useState } from "react";
import Sticker from "../sticker";
import styles from "./styles.module.scss";

const FlipableSticker = ({ frontSide, backSide }) => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip((prev) => !prev);
  };

  return (
    <Sticker>
      <div className={styles.flipableSticker}>
        <div
          onClick={handleFlip}
          className={styles.front}
          style={{ transform: `rotateY(${flip ? "180deg" : "0deg"})` }}
        >
          {frontSide}
        </div>
        <div
          onClick={handleFlip}
          className={styles.back}
          style={{ transform: `rotateY(${flip ? "0deg" : "180deg"})` }}
        >
          {backSide}
        </div>
      </div>
    </Sticker>
  );
};

export default FlipableSticker;
