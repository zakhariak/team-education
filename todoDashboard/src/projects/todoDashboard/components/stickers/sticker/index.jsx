import styles from "./styles.module.scss";

const Sticker = ({ children }) => {
  return <div className={styles.sticker}>{children}</div>;
};

export default Sticker;
