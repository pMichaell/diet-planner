import { useCallback, useEffect, useState } from "react";

const useInfiniteScroll = function <T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<T[]>(data.slice(0, 30));

  useEffect(() => {
    setCurrentData((prevState) => [
      ...prevState,
      ...data.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      ),
    ]);
  }, [currentPage, data, itemsPerPage]);

  const paginate = useCallback(
    () => setCurrentPage((prevState) => prevState + 1),
    []
  );

  return {
    currentData,
    paginate,
  };
};

export default useInfiniteScroll;
