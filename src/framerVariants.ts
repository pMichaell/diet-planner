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

export const userValidationVariants = {
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
