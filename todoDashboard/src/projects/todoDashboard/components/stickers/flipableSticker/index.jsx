import React, { useState } from "react";
import Sticker from "../sticker";
import styles from "./styles.module.scss";

const FlipableSticker = ({ frontSide, backSide }) => {
  const [activeSide, setActiveSide] = useState("frontSide");
  const [isFrontSideHovered, setIsFrontSideHovered] = useState(false);
  const [isBackSideHovered, setIsBackSideHovered] = useState(false);
  console.log({ isFrontSideHovered, isBackSideHovered });
  return (
    <Sticker>
      <div
        onMouseEnter={() => setIsFrontSideHovered(true)}
        onMouseLeave={() => setIsFrontSideHovered(false)}
        className={[
          styles.front,
          isFrontSideHovered
            ? styles.forwardAnimation
            : styles.backwardAnimation,
        ].join(" ")}
      >
        {frontSide}
      </div>
      <div
        onMouseEnter={() => setIsBackSideHovered(true)}
        onMouseLeave={() => setIsBackSideHovered(false)}
        className={[
          styles.back,
          isBackSideHovered
            ? styles.backwardAnimation
            : styles.forwardAnimation,
        ].join(" ")}
      >
        {backSide}
      </div>
    </Sticker>
  );
};

export default FlipableSticker;
