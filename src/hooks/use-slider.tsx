import { useState } from "react";
import { wrap } from "popmotion";

function useSlider<T>(data: T[]) {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = wrap(0, data.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return {
    page,
    direction,
    currentIndex,
    paginate,
  };
}

export default useSlider;
