import { useEffect, useState } from "react";

export const useDescriptionTooltips = (idList) => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    setElements(idList.map((id) => document.getElementById(id)));
  }, []);
  return elements;
};

