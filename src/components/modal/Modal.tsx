import classes from "./Modal.module.css";
import Backdrop from "../backdrop/Backdrop";
import { motion } from "framer-motion";
import ModalContext from "../../contexts/modalContext/ModalContext";
import { useContext } from "react";

const modalVariants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
  },
};

const Modal = () => {
  const { closeModal, modalText } = useContext(ModalContext);

  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={classes.modal}
        variants={modalVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
      >
        <h3>{modalText}</h3>
        <motion.button onClick={closeModal}>
          <h4>Close</h4>
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
