import classes from "./BinaryModal.module.css";
import clsx from "clsx";

type BinaryModalProps = {
  text: string;
  leftOptionText: string;
  rightOptionText: string;
  leftOptionHandler: () => void;
  rightOptionHandler: () => void;
};

const BinaryModal = ({
  text,
  leftOptionText,
  rightOptionText,
  leftOptionHandler,
  rightOptionHandler,
}: BinaryModalProps) => {
  return (
    <div className={clsx("fillParent", classes.modal)}>
      <p className={clsx("fs500", "fw600", "txtAlgCenter", classes.modalText)}>
        {text}
      </p>
      <button
        onClick={leftOptionHandler}
        className={clsx(
          "uppercase",
          "curvedBorder",
          "clrGreen",
          "fs400",
          "fw600",
          classes.modalButton
        )}
      >
        {leftOptionText}
      </button>
      <button
        onClick={rightOptionHandler}
        className={clsx(
          "uppercase",
          "curvedBorder",
          "clrGreen",
          "fs400",
          "fw600",
          classes.modalButton
        )}
      >
        {rightOptionText}
      </button>
    </div>
  );
};

export default BinaryModal;
