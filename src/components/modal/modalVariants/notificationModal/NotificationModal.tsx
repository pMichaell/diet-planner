import classes from "./NotificationModal.module.css";
import { Fragment } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

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
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className={clsx(
          "curvedBorder",
          "clrGreen",
          "uppercase",
          "fw500",
          "fs500",
          classes.cta
        )}
      >
        {buttonText ? buttonText : "OK"}
      </motion.button>
    </div>
  );
};

export default NotificationModal;
