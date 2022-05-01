import { useEffect, useState } from "react";

function useSessionState<T>(key: string, initial: T) {
  const [value, setValue] = useState(() => {
    const saved = sessionStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useSessionState;
