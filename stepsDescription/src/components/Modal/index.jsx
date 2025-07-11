import styles from "./styles.module.css";
import useElementPosition from "../../hooks/useElementPosition";

export const TooltipModal = ({
  activeElement,
  onNextStepClick,
  onPrevStepClick,
  onSkipStepClick,
  elementIndex,
  maxIndex,
}) => {
  const elementCoords = useElementPosition(activeElement?.element);

  console.log({ elementCoords });
  if (!activeElement || !elementCoords) return null;

  activeElement.element.style.border = "1px solid red";

  return (
    <div
      className={styles.container}
      style={{
        top: `${elementCoords.bottom + window.scrollY}px`,
        left: `${elementCoords.left + window.scrollX}px`,
      }}
    >
      <div className={styles.top_container}>
        <div className={styles.counter}>{`${
          elementIndex + 1
        } / ${maxIndex}`}</div>
        <button className={styles.skip_button} onClick={onSkipStepClick}>
          Skip
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
        <button className={styles.next_button} onClick={onNextStepClick}>
          {maxIndex === elementIndex + 1 ? "Close" : "Next"}
        </button>
      </div>
    </div>
  );
};
