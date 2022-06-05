import classes from "./LoadingSpinner.module.css";
import { IconWeight, SpinnerGap } from "phosphor-react";
import clsx from "clsx";

const LoadingSpinner = ({
  size,
  weight,
  center,
  className,
}: {
  size?: string;
  weight?: IconWeight;
  center?: boolean;
  className?: string;
}) => {
  return (
    <SpinnerGap
      size={size ?? "4em"}
      weight={weight ?? "regular"}
      className={clsx(
        "clrGreen",
        classes.spinner,
        center && classes.center,
        className
      )}
    />
  );
};

export default LoadingSpinner;
