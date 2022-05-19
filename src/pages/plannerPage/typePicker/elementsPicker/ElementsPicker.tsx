import classes from "./ElementsPicker.module.css";
import clsx from "clsx";

export type PickMode = "Region" | "Category" | "Ingredient";

const ElementsPicker = ({ mode, data }: { mode: PickMode; data: string[] }) => {
  return (
    <div className={clsx("fillParent", "centerContents", classes.container)}>
      {data.map((element) => (
        <button
          key={element}
          className={clsx("fs600", "clrGreen", classes.element)}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default ElementsPicker;
