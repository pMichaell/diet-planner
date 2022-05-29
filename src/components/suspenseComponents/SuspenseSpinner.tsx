import classes from "./SuspenseSpinner.module.css";
import { SpinnerGap } from "phosphor-react";
import clsx from "clsx";

const SuspenseSpinner = () => {
  return (
    <SpinnerGap size={"4em"} className={clsx("clrGreen", classes.spinner)} />
  );
};

export default SuspenseSpinner;
