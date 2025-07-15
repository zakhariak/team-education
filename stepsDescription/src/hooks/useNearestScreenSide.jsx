import React, { useEffect, useState } from "react";

const useNearestScreenSide = (elementCoords) => {
  const [horizontalNearestSide, setHorizontalNearestSide] = useState("");
  const [verticalNearestSide, setVerticalNearestSide] = useState("");

  const calculateNearestSides = () => {
    const windowScrollY = window.scrollY;
    const windowScrollX = window.scrollX;
    const windowInnerHeight = window.innerHeight;
    const windowInnerWidth = window.innerWidth;

    const viewPortTop = windowScrollY;
    const viewPortBottom = windowScrollY + windowInnerHeight;
    const viewPortLeft = windowScrollX;
    const viewPortRight = windowScrollX + windowInnerWidth;

    const { top, bottom, left, right } = elementCoords;

    const deltaTop = Math.abs(viewPortTop - top);
    const deltaBottom = Math.abs(viewPortBottom - bottom);
    const deltaLeft = Math.abs(viewPortLeft - left);
    const deltaRight = Math.abs(viewPortRight - right);

    setHorizontalNearestSide(deltaLeft > deltaRight ? "right" : "left");
    setVerticalNearestSide(deltaTop > deltaBottom ? "bottom" : "top");
  };

  useEffect(() => {
    if (elementCoords) {
      calculateNearestSides();
    }
  }, [elementCoords]);

  // useEffect(() => {
  //   const fnScroll = () => {
  //     if (elementCoords) {
  //       calculateNearestSides();
  //       console.log("work");
  //     }
  //   };
  //   document.addEventListener("scroll", fnScroll);

  //   return () => {
  //     document.removeEventListener("scroll", fnScroll);
  //   };
  // }, [elementCoords]);

  console.log({
    horizontalNearestSide,
    verticalNearestSide,
  });

  return { horizontalNearestSide, verticalNearestSide };
};

export default useNearestScreenSide;
