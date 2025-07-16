import styles from "./styles.module.css";
import useElementPosition from "../../hooks/useElementPosition";
import useNearestScreenSide from "../../hooks/useNearestScreenSide";

export const TooltipModal = ({
  activeElement,
  onNextStepClick,
  onPrevStepClick,
  onSkipStepClick,
  elementIndex,
  maxIndex,
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
    <div className={styles.container} style={tooltipInlineStyle}>
      <div className={styles.top_container}>
        <div className={styles.counter}>{`${
          elementIndex + 1
        } / ${maxIndex}`}</div>
        <button className={styles.skip_button} onClick={onSkipStepClick}>
          {maxIndex === elementIndex + 1 ? "Close" : "Skip"}
        </button>
      </div>
      <h2 className={styles.title}>{activeElement.label}</h2>
      <p className={styles.description}>{activeElement.description}</p>
      <div className={styles.button_container}>
        <button
          className={styles.prev_button}
          onClick={onPrevStepClick}
          disabled={!elementIndex}
        >
          Prev
        </button>
        <button
          disabled={maxIndex === elementIndex + 1}
          className={styles.next_button}
          onClick={onNextStepClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};
