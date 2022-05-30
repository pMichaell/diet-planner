import classes from "./ScrollablePicker.module.css";
import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import useInfiniteScroll from "../../hooks/use-infinite-scroll";
import useOnScreen from "../../hooks/use-on-screen";

type ScrollablePickerProps<T> = {
  data: T[];
  itemsPerPage: number;
  render: (element: T) => ReactNode;
  onElementClick: (element: T) => void;
  className?: string;
  elementClassName?: string;
};

const ScrollablePicker = function <T>({
  data,
  itemsPerPage,
  render,
  onElementClick,
  className,
  elementClassName,
}: ScrollablePickerProps<T>) {
  const { currentData, paginate } = useInfiniteScroll(data, itemsPerPage);
  const intersectionRef: any = useRef<HTMLButtonElement>(null);
  const lastElementOnScreen = useOnScreen(intersectionRef, "-50px");

  useEffect(() => {
    paginate();
  }, [lastElementOnScreen, paginate]);

  return (
    <div className={className}>
      {currentData.map((element, index) => {
        if (currentData.length === index) {
          return (
            <button
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
