import { useEffect, useState } from "react";

function useLocalStorage<T>(
  key: string,
  initial?: T
): [state: T, setState?: (data: T) => void] {
  const [value, setValue] = useState(() => {
    const saved = sessionStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
