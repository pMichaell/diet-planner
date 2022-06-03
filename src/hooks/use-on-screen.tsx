import { MutableRefObject, useEffect, useState } from "react";

const useOnScreen = function <T extends Element>(
  ref: MutableRefObject<T>,
  rootMargin: string = "0px"
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const refVariable = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(refVariable);
    }
    return () => {
      observer.unobserve(refVariable);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
