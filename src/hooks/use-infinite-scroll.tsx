import { useCallback, useState } from "react";

type InfiniteScrollState<T> = {
  currentPage: number;
  currentData: T[];
};

const useInfiniteScroll = function <T>(data: T[], itemsPerPage: number) {
  const [scrollState, setScrollState] = useState<InfiniteScrollState<T>>(() => {
    return { currentPage: 1, currentData: data.slice(0, itemsPerPage) };
  });

  const paginate = useCallback(
    () =>
      setScrollState((prevState) => {
        return {
          currentPage: prevState.currentPage + 1,
          currentData: [
            ...prevState.currentData,
            ...data.slice(
              prevState.currentPage * itemsPerPage,
              (prevState.currentPage + 1) * itemsPerPage
            ),
          ],
        };
      }),
    [data, itemsPerPage]
  );

  return {
    currentData: scrollState.currentData,
    paginate,
  };
};

export default useInfiniteScroll;
