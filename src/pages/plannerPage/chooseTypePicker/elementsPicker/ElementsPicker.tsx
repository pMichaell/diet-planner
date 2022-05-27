import classes from "./ElementsPicker.module.css";
import clsx from "clsx";
import { PickMode } from "../../../../Models";

const ElementsPicker = ({
  mode,
  data,
  onClick,
}: {
  mode: PickMode;
  data: string[];
  onClick: (mode: PickMode, fetchParam: string) => void;
}) => {
  //TODO add data pagination for ingredients mode

  return (
    <div className={clsx("fillParent", "centerContents", classes.container)}>
      {data.map((element) => (
        <button
          key={element}
          onClick={() => onClick(mode, element)}
          className={clsx("fs600", "clrGreen", classes.element)}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default ElementsPicker;
