import { useMediaQuery } from "usehooks-ts";

import { ProgressCircle } from "shared/ui/ProgressCircle/ProgressCircle";

import classes from "./IndicatorCard.module.scss";

interface IndicatorCardProps {
  title: string;
  number: string;
  progress?: number | string;
}

export const IndicatorCard: React.FC<IndicatorCardProps> = (props) => {
  const { title, number, progress } = props;
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <span>Результат</span>
        <span>{title}</span>
      </div>
      <div className={classes.progress}>
        <ProgressCircle progress={progress} size={isMobile ? 90 : 105} />
      </div>
      <div className={classes.number}>{number}</div>
    </div>
  );
};
