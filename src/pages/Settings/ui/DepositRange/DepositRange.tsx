import { Range } from "react-range";

import classes from "./DepositRange.module.scss";
import { prettyNumber10 } from "consts/functions";

const MIN = 0.3;
const MAX = 2.0;

interface DepositRangeProps {
  risk: number,
  changeRisk: (value: number) => void,
}

export const DepositRange = (props: DepositRangeProps) => {

  const { risk, changeRisk } = props;

  const handleChange = (values: number[]) => {
    changeRisk(values[0]);
  };

  return (
    <Range
      step={0.1}
      min={MIN}
      max={MAX}
      values={[risk]}
      onChange={handleChange}
      renderTrack={({ props, children }) => (
        <div className={classes.track} {...props} style={{ ...props.style }}>
          <div className={classes.min} data-value={MIN} />
          <div className={classes.max} data-value={prettyNumber10(MAX)} />
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div className={classes.thumb} {...props} style={{ ...props.style }}>
          <span className={classes.tooltip}>{prettyNumber10(risk)}</span>
        </div>
      )}
    />
  );
};
