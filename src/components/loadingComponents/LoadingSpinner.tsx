import classes from "./LoadingSpinner.module.css";
import { IconWeight, SpinnerGap } from "phosphor-react";
import clsx from "clsx";

const LoadingSpinner = ({
  size,
  weight,
  center,
}: {
  size?: string;
  weight?: IconWeight;
  center?: boolean;
}) => {
  return (
    <SpinnerGap
      size={size ?? "4em"}
      weight={weight ?? "regular"}
      className={clsx("clrGreen", classes.spinner, center && classes.center)}
    />
  );
};

export default LoadingSpinner;
