import { useEffect, useState } from "react";

const useOnScreen = function (
  element: Element,
  rootMargin: string = "0px"
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (element !== null) {
      observer.observe(element);
    }
    return () => {
      if (element !== null) {
        observer.unobserve(element);
      }
    };
  }, [element, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
