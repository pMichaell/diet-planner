export const mealPickerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const mealElementVariants = {
  initial: {
    opacity: 0,
    x: "-20px",
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.05 },
  }),
};
