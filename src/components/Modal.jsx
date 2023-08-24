import classes from "./Modal.module.css";
const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}>
        <dialog open={true} className={classes.modal}>
          {props.children}
        </dialog>
      </div>
    </>
  );
};

export default Modal;
