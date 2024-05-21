import { useState } from "react";
import { Range } from "react-range";

import classes from "./DepositRange.module.scss";

const MIN = 0.1;
const MAX = 0.5;

export const DepositRange = () => {
  const [value, setValue] = useState(0.3);
  console.log("value: ", value);

  const handleChange = (values: number[]) => {
    setValue(values[0]);
  };

  return (
    <Range
      step={0.1}
      min={MIN}
      max={MAX}
      values={[value]}
      onChange={handleChange}
      renderTrack={({ props, children }) => (
        <div className={classes.track} {...props} style={{ ...props.style }}>
          <div className={classes.min} data-value={MIN} />
          <div className={classes.max} data-value={MAX} />
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div className={classes.thumb} {...props} style={{ ...props.style }}>
          <span className={classes.tooltip}>{value}</span>
        </div>
      )}
    />
  );
};
