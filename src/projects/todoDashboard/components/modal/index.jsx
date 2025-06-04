import styles from "./styles.module.scss";

const Modal = ({ children, show, onClose }) => {
  return show ? (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
