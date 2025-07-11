import { useEffect, useState } from "react";

const useElementPosition = (element) => {
  const [cordinates, setCordinates] = useState();

  useEffect(() => {
    const updatePositionElement = () => {
      setCordinates(element?.getBoundingClientRect());
    };
    if (element) {
      updatePositionElement();
      window.addEventListener("resize", updatePositionElement);
    }
    return () => {
      window.removeEventListener("resize", updatePositionElement);
    };
  }, [element]);

  return cordinates;
};
export default useElementPosition;
