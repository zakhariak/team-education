import styles from "./styles.module.scss";
import { useState } from "react";

const Sticker = ({ removeListElem, onSelectHandler, selected, children }) => {
  const [showBack, setShowBack] = useState(false);
  return (
    <div className={styles.sticker}>
      <div className={styles.stickerFront}>
        <div className={styles.stickerHeader}>
          <button onClick={removeListElem}>X</button>
          <button onClick={onSelectHandler}>{selected ? "+" : "-"}</button>
        </div>
        <div className="stickerBody">{children}</div>
      </div>
      <div className={styles.stickerBack}>
        <div className="stickerBody">{children}</div>
      </div>
    </div>
  );
};

export default Sticker;