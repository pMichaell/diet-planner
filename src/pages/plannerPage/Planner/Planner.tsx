import classes from "./Planner.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";

const Planner = () => {
  return (
    <AnimatedPage
      className={clsx("fillParent", "pagePadding", "centerContents")}
    >
      <div>PLANNER</div>
    </AnimatedPage>
  );
};

export default Planner;
