import useElementPosition from "../../hooks/useElementPosition";
import useNearestScreenSide from "../../hooks/useNearestScreenSide";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

const ShadowToolTipWrapper = ({ children }) => {
  const rootRef = useRef(null);
  useEffect(() => {
    const div = document.getElementById("shadow");
    if (!div.shadowRoot) {
      const shadowRoot = div.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = `
        *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main_container {
position: absolute;
  width: 250px;

  background-color: white;
  border-radius: 10px;
  border: 2px solid black;
  padding: 10px;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.top_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 18px;
}

.description {
  font-size: 14px;
}

.button_container {
  display: flex;
  column-gap: 5px;
}

.skip_button,
.prev_button,
.next_button {
  cursor: pointer;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
}

.prev_button,
.next_button {
  width: 100%;
}

      `;
      shadowRoot.appendChild(style);

      rootRef.current = createRoot(shadowRoot);
    }
    rootRef.current?.render(children);
  }, [children]);

  return <div id="shadow"></div>;
};

export const TooltipModal = ({
  activeElement,
  elementIndex,
  maxIndex,
  bodyContent,
  config,
}) => {
  const elementCoords = useElementPosition(activeElement?.element);

  const { horizontalNearestSide, verticalNearestSide } =
    useNearestScreenSide(elementCoords);

  if (!activeElement || !elementCoords) return null;

  const tooltipInlineStyle = {
    inset: "unset",
    [verticalNearestSide]:
      (verticalNearestSide === "bottom"
        ? window.innerHeight - window.scrollY - elementCoords["top"]
        : elementCoords["bottom"] + window.scrollY) + "px",
    [horizontalNearestSide]:
      (horizontalNearestSide === "right"
        ? window.innerWidth -
          window.scrollX -
          elementCoords[horizontalNearestSide]
        : elementCoords[horizontalNearestSide] + window.scrollX) + "px",
  };

  return (
    // додати shadow блок
    <ShadowToolTipWrapper>
      <div
        className="main_container"
        {...config?.mainContainer}
        style={{ ...config?.mainContainer?.style, ...tooltipInlineStyle }}
      >
        <div className="top_container" {...config?.topContainer}>
          <div className="currentStep" {...config?.currentStep}>{`${
            elementIndex + 1
          } / ${maxIndex}`}</div>
          <button className="skip_button" {...config?.skipButton}>
            {maxIndex === elementIndex + 1 ? "Close" : "Skip"}
          </button>
        </div>
        {bodyContent}
        <div className="button_container" {...config?.buttonContainer}>
          <button
            className="prev_button"
            disabled={!elementIndex}
            {...config?.prevButton}
          >
            Prev
          </button>
          <button
            disabled={maxIndex === elementIndex + 1}
            className="next_button"
            {...config?.nextButton}
          >
            Next
          </button>
        </div>
      </div>
    </ShadowToolTipWrapper>
  );
};
