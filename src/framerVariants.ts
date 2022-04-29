export const verticalListItemsVariants = {
  initial: (i: number) => ({
    x: i % 2 === 0 ? "100vw" : "-100vw",
    opacity: 0.5,
  }),
  animate: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  exit: (i: number) => ({
    x: i % 2 === 0 ? "100vw" : "-100vw",
    opacity: 0,
    transition: {
      delay: i * 0.15,
    },
  }),
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.9,
  },
};

export const verticalAlignmentVariants = {
  initial: (i: number) => ({
    x: i % 2 === 0 ? "100vw" : "-100vw",
    opacity: 0.5,
  }),
  animate: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  exit: (i: number) => ({
    x: i % 2 === 0 ? "100vw" : "-100vw",
    opacity: 0,
    transition: {
      delay: i * 0.15,
    },
  }),
};

export const validationVariants = {
  initial: {
    opacity: 0,
    rotateY: -180,
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    rotateY: 180,
  },
};

export const hoverNPress = {
  hover: {
    scale: 1.1,
  },
  press: {
    scale: 0.9,
  },
};

export const breathingVariants = {
  animate: {
    scale: [1.0, 1.1, 1.0],
    borderWidth: [2, 6, 2],
  },
  transition: {
    type: "tween",
    ease: "easeInOut",
    duration: 1,
    repeat: Infinity,
    repeatType: "loop",
  },
};

export const opacityVariants = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
