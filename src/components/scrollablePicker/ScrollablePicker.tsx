import React, { ReactNode, useEffect, useRef, useState } from "react";
import useInfiniteScroll from "../../hooks/use-infinite-scroll";

type ScrollablePickerProps<T> = {
  data: T[];
  keys: string[];
  itemsPerPage: number;
  render: (element: T) => ReactNode;
  onElementClick: (element: T) => void;
  className?: string;
  elementClassName?: string;
};

const ScrollablePicker = function <T>({
  data,
  keys,
  itemsPerPage,
  render,
  onElementClick,
  className,
  elementClassName,
}: ScrollablePickerProps<T>) {
  const { currentData, paginate } = useInfiniteScroll(data, itemsPerPage);
  const [element, setElement] = useState<HTMLElement | null>(null);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          paginate();
        }
      },
      { rootMargin: "30px" }
    )
  );

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <div className={className}>
      {currentData.map((element, index) => {
        if (currentData.length - 1 === index) {
          return (
            <button
              key={keys[index]}
              ref={setElement}
              onClick={() => onElementClick(element)}
              className={elementClassName}
            >
              {render(element)}
            </button>
          );
        }
        return (
          <button
            key={keys[index]}
            onClick={() => onElementClick(element)}
            className={elementClassName}
          >
            {render(element)}
          </button>
        );
      })}
    </div>
  );
};

export default ScrollablePicker;
