import classes from "./PlannerElement.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";
import MealElement from "../../../../components/mealArticle/MealElement";
import { Weekday } from "../../../../Models";
import { onPickedElementClick, onUnpickedElementClick } from "../Planner";
import useMealContext from "../../../../hooks/use-meal-context";
import { Plus } from "phosphor-react";

type PlannerElementProps = {
  mealName: string;
  weekday: Weekday;
  mealIndex: number;
  onUnpickedClick: onUnpickedElementClick;
  onPickedClick: onPickedElementClick;
  className?: string;
};

const PlannerElement = ({
  mealName,
  mealIndex,
  weekday,
  onUnpickedClick,
  onPickedClick,
}: PlannerElementProps) => {
  const { meal, mealRemove } = useMealContext(weekday, mealIndex);

  return (
    <motion.article
      className={clsx("centerContents", "clrGreen", classes.container)}
    >
      <p className={clsx("fw600", "fs500", classes.title)}>{mealName}</p>
      {!meal ? (
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className={clsx("clrGreen", classes.cta)}
          onClick={() => onUnpickedClick(weekday, mealIndex)}
        >
          <Plus size={"3em"} weight={"bold"} />
        </motion.button>
      ) : (
        <MealElement
          meal={meal}
          className={classes.mealElement}
          onClick={() => onPickedClick(meal)}
        />
      )}
    </motion.article>
  );
};

export default PlannerElement;
