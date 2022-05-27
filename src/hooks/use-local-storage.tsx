import { useEffect, useState } from "react";

function useLocalStorage<T>(
  key: string,
  initial?: T
): [state: T, setState?: (data: T) => void] {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
