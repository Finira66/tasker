import styles from './Modal.module.scss'

const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.modal]

  if (visible) {
    rootClasses.push(styles.active);
  }

  return <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>;
};

export default Modal;
