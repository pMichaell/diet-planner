import classes from "./LoadingSpinner.module.css";
import { IconWeight, SpinnerGap } from "phosphor-react";
import clsx from "clsx";

const LoadingSpinner = ({
  size,
  color,
  weight,
}: {
  size?: string;
  color?: string;
  weight?: IconWeight;
}) => {
  return (
    <SpinnerGap
      size={size ?? "4em"}
      color={color ?? ""}
      weight={weight ?? "regular"}
      className={clsx("clrGreen", classes.spinner)}
    />
  );
};

export default LoadingSpinner;
