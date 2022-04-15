import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
  },
};

type AnimatedPageProps = {
  children: ReactNode;
  className?: string;
};

const AnimatedPage = ({ children, className }: AnimatedPageProps) => {
  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;