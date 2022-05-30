import { MutableRefObject, useEffect, useState } from "react";

const useOnScreen = function <T extends Element>(
  ref: MutableRefObject<T>,
  rootMargin: string = "0px"
) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let refCurrent = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(refCurrent);
    }
    return () => {
      observer.unobserve(refCurrent);
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
