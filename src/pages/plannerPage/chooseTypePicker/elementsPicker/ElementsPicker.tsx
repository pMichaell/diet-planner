import classes from "./ElementsPicker.module.css";
import clsx from "clsx";

const ElementsPicker = ({
  data,
  onClick,
}: {
  data: string[];
  onClick: (fetchParam: string) => void;
}) => {
  //TODO add data pagination for ingredients mode

  return (
    <div className={clsx("fillParent", "centerContents", classes.container)}>
      {data.map((element) => (
        <button
          key={element}
          onClick={() => onClick(element)}
          className={clsx("fs600", "clrGreen", classes.element)}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default ElementsPicker;
