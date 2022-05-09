import { ReactNode } from "react";
import { motion } from "framer-motion";

type sliderMovementProps = {
  page: number;
  direction: number;
  paginate: (direction: number) => void;
};

type SliderProps<T> = {
  render?: (item?: T) => ReactNode;
  className?: string;
  sliderMovement: sliderMovementProps;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ContentSlider = function ContentSlider<T>({
  render,
  className,
  sliderMovement,
}: SliderProps<T>) {
  const { page, direction, paginate } = sliderMovement;
  return (
    <motion.section
      className={className}
      key={page}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: {
          type: "tween",
          stiffness: 300,
          damping: 30,
          duration: 0.2,
        },
        opacity: { duration: 0.2 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    >
      {render?.()}
    </motion.section>
  );
};

export default ContentSlider;
