import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useInfiniteScroll from "../../hooks/use-infinite-scroll";
import useOnScreen from "../../hooks/use-on-screen";
import { int } from "framer-motion/types/render/dom/value-types/type-int";

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
  const intersectionRef: any = useRef<HTMLButtonElement>(null);
  const intersected = useOnScreen(intersectionRef);

  useEffect(() => {
    if (intersected) {
      paginate();
    }
  }, [intersected, paginate]);

  return (
    <div className={className}>
      {currentData.map((element, index) => {
        if (currentData.length - 1 === index) {
          return (
            <button
              key={keys[index]}
              ref={intersectionRef}
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
