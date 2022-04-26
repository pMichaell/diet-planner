import { motion } from "framer-motion";
import classes from "./BreathingButton.module.css";
import clsx from "clsx";

const BreathingButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      animate={{ scale: [1.0, 1.1, 1.0] }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
      className={className}
      onClick={onClick}
    />
  );
};

export default BreathingButton;
