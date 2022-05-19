import classes from "./SuspenseSpinner.module.css";
import { SpinnerGap } from "phosphor-react";
import clsx from "clsx";

const SuspenseSpinner = () => {
  return (
    <SpinnerGap size={"4em"} className={clsx("clrGreen", classes.spinner)}>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </SpinnerGap>
  );
};

export default SuspenseSpinner;
