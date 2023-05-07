import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick}></div>;
};
const ModalWindow = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Modal = ({ children, onHideCart }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onHideCart} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </>
  );
};

export default Modal;
