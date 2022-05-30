import classes from "./ElementsPicker.module.css";
import clsx from "clsx";

const ElementsPicker = ({
  data,
  onElementClick,
}: {
  data: string[];
  onElementClick: (fetchParam: string) => void;
}) => {
  return (
    <div className={clsx("fillParent", "centerContents", classes.container)}>
      {data.map((element) => (
        <button
          key={element}
          onClick={() => onElementClick(element)}
          className={clsx("fs600", "clrGreen", classes.element)}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default ElementsPicker;
