import { motion } from "framer-motion";
import classes from "./BreathingButton.module.css";
import clsx from "clsx";
import { ReactNode } from "react";

const BreathingButton = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}) => {
  return (
    <motion.button
      animate={{
        scale: [1.0, 1.1, 1.0],
        borderWidth: [2, 6, 2],
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default BreathingButton;
