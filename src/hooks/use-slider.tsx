import { useCallback, useState } from "react";
import { wrap } from "popmotion";

function useSlider<T>(data: T[], storageKey: string) {
  const [[page, direction], pageSet] = useState<[number, number]>(() => {
    const saved = sessionStorage.getItem(storageKey);
    return saved !== null ? JSON.parse(saved) : [0, 0];
  });

  const currentIndex = wrap(0, data.length, page);

  const paginate = useCallback(
    (newDirection: number) => {
      pageSet([page + newDirection, newDirection]);
      const storageValue = [page + newDirection, 0];
      sessionStorage.setItem(storageKey, JSON.stringify(storageValue));
    },
    [page, storageKey]
  );

  return {
    page,
    direction,
    currentIndex,
    paginate,
  };
}

export default useSlider;
