import clsx from "clsx";
import { motion } from "framer-motion";

export type PickMode = "Region" | "Category" | "Ingredient";

const ElementsPicker = ({ mode, data }: { mode: PickMode; data: string[] }) => {
  return (
    <motion.div className={clsx("fillParent", "centerContents")}>
      {data.map((element) => (
        <button key={element}>{element}</button>
      ))}
    </motion.div>
  );
};

export default ElementsPicker;
