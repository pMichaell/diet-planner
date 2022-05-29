import classes from "./NotificationModal.module.css";
import { Fragment } from "react";
import clsx from "clsx";

type NotificationModalProps = {
  notificationText: string;
  onClick?: () => void;
  buttonText?: string;
};

const NotificationModal = ({
  notificationText,
  onClick,
  buttonText,
}: NotificationModalProps) => {
  return (
    <div className={clsx("fillParent", classes.modal)}>
      <p className={clsx("fontHeadlines", "fw500", "fs700", "txtAlgCenter")}>
        {notificationText}
      </p>
      <button
        onClick={onClick}
        className={clsx(
          "curvedBorder",
          "clrGreen",
          "uppercase",
          "fw500",
          classes.cta
        )}
      >
        {buttonText ? buttonText : "OK"}
      </button>
    </div>
  );
};

export default NotificationModal;
