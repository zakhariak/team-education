import React, { useEffect, useState } from "react";

const useNearestScreenSide = (elementCoords) => {
  const [horizontalNearestSide, setHorizontalNearestSide] = useState("");
  const [verticalNearestSide, setVerticalNearestSide] = useState("");

  useEffect(() => {
    if (elementCoords) {

      const windowScrollX = window.scrollX;
      const windowInnerHeight = window.innerHeight;
      const windowInnerWidth = window.innerWidth;

      const viewPortBottom =  windowInnerHeight;
      const viewPortRight = windowScrollX + windowInnerWidth;

      const { top, bottom, left, right } = elementCoords;

      const deltaTop = Math.abs(top);
      const deltaBottom = Math.abs(viewPortBottom - bottom);
      const deltaLeft = Math.abs(left);
      const deltaRight = Math.abs(viewPortRight - right);

      setHorizontalNearestSide(deltaLeft > deltaRight ? "right" : "left");
      setVerticalNearestSide(deltaTop > deltaBottom ? "bottom" : "top");

    }
  }, [elementCoords]);

  return { horizontalNearestSide, verticalNearestSide };
};

export default useNearestScreenSide;
