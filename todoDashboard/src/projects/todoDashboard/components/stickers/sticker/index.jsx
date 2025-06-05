import styles from "./styles.module.scss";

const Sticker = ({ children, classNames }) => {
  return <div className={[classNames, styles.sticker].join(" ")}>{children}</div>;
};

export default Sticker;
