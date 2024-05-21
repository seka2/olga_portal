import { ProgressCircle } from "shared/ui/ProgressCircle/ProgressCircle";

import classes from "./IndicatorsChart.module.scss";

interface IndicatorsChartProps {
  title: string;
  progress: number;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

export const IndicatorsChart: React.FC<IndicatorsChartProps> = (props) => {
  const { title, progress, Icon } = props;

  return (
    <div className={classes.chart}>
      <div className={classes.title}>{title}</div>
      <div className={classes.box}>
        <ProgressCircle progress={progress} size={90} />
      </div>
      <div className={classes.icon}>
        <Icon />
      </div>
    </div>
  );
};
