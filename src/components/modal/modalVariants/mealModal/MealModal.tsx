import classes from "./MealModal.module.css";
import useMealDetails from "../../../../hooks/fetchHooks/use-meal-details";
import clsx from "clsx";
import SpinnerImg from "../../../spinnerImg/SpinnerImg";
import { CaretDown } from "phosphor-react";
import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "../../../loadingComponents/LoadingSpinner";

const MealModal = ({
  idMeal,
  onClick,
}: {
  idMeal: string;
  onClick: () => void;
}) => {
  const [ingredientsVisible, setIngredientsVisible] = useState(false);
  const [recipeVisible, setRecipeVisible] = useState(false);
  const [mealDetails, error] = useMealDetails(idMeal);

  return (
    <div className={clsx("fillParent", classes.container)}>
      {mealDetails ? (
        <Fragment>
          <h2
            className={clsx("txtAlgCenter", "centerContents", classes.heading)}
          >
            {mealDetails?.strMeal}
          </h2>
          <SpinnerImg
            src={mealDetails?.strMealThumb}
            alt={mealDetails?.strMeal}
            className={clsx("curvedBorder", "overflowHidden", classes.imageDiv)}
            imgClassName={clsx("overflowHidden", classes.image)}
          />
          <section className={clsx("txtAlgCenter", classes.tagsSection)}>
            <div>
              <p className={clsx(classes.area)}>Area</p>
              <p className={clsx("fw500", "fs600")}>{mealDetails?.strArea}</p>
            </div>
            <div>
              <p className={clsx(classes.category)}>Category</p>
              <p className={clsx("fw500", "fs600")}>
                {mealDetails?.strCategory}
              </p>
            </div>
          </section>
          <button
            onClick={() => setIngredientsVisible((prevState) => !prevState)}
            className={clsx(
              "clrGreen",
              "fs600",
              "fw500",
              classes.ingredientsButton
            )}
          >
            See Ingredients <CaretDown weight={"bold"} />
          </button>
          <AnimatePresence initial={false}>
            {ingredientsVisible && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className={clsx(classes.ingredientsList)}
              >
                {mealDetails?.strIngredients.map((ingredient, index) => {
                  return (
                    <li key={`${ingredient}${index}`}>
                      <em>{ingredient}</em>
                      <i>{mealDetails?.strMeasures[index]}</i>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
          <button
            onClick={() => setRecipeVisible((prevState) => !prevState)}
            className={clsx("clrGreen", "fs600", "fw500", classes.recipeButton)}
          >
            See Recipe <CaretDown weight={"bold"} />
          </button>
          <AnimatePresence initial={false}>
            {recipeVisible && (
              <motion.section
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className={clsx(
                  "fs400",
                  "fw500",
                  "txtAlgCenter",
                  classes.recipeSection
                )}
              >
                {mealDetails?.strInstructions}
              </motion.section>
            )}
          </AnimatePresence>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={clsx("clrGreen", "fw600", "fs500", classes.cta)}
            onClick={onClick}
          >
            Add To Plan
          </motion.button>
        </Fragment>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default MealModal;
