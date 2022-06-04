import { useState } from "react";
import LoadingSpinner from "../loadingComponents/LoadingSpinner";
import clsx from "clsx";

const SpinnerImg = ({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={clsx("centerContents", "clrGreen", className)}>
      {loading && <LoadingSpinner />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        className={imgClassName}
        style={{
          visibility: `${loading ? "hidden" : "visible"}`,
        }}
      />
    </div>
  );
};

export default SpinnerImg;
