import React from "react";
import styles from "./styles.module.css";

export const TooltipModal = ({
  activeElement,
  onNextStepClick,
  onPrevStepClick,
  onSkipStepClick,
  elementIndex,
  maxIndex,
}) => {
  console.log(activeElement);
  if (!activeElement) return null;

  return (
    <div className={styles.container}>
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
