import clsx from "clsx";
import { useEffect, useState } from "react";

import classes from "./ProgressBar.module.scss";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { max = 100, value, className = "" } = props;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage((value / max) * 100);
    }, 100);

    return () => clearTimeout(timer);
  }, [value, max]);

  return (
    <div className={clsx(classes.progress, className)}>
      <div className={classes.bar} style={{ width: `${percentage}%` }} />
    </div>
  );
};
