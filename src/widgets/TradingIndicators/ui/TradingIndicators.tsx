import clsx from "clsx";

import AmountIcon from "shared/assets/icons/amount.svg?react";
import DurationIcon from "shared/assets/icons/duration.svg?react";
import ShareIcon from "shared/assets/icons/share.svg?react";
import ProfitIcon from "shared/assets/icons/profit.svg?react";

import classes from "./TradingIndicators.module.scss";
import { IndicatorsNumber } from "./IndicatorsNumber/IndicatorsNumber";
import { IndicatorsChart } from "./IndicatorsChart/IndicatorsChart";
import { SelectFilter } from "shared/ui/SelectFilter/SelectFilter";
import { useState } from "react";
import { Option } from "shared/types/Options";

interface TradingIndicatorsProps {
  className?: string;
}

const options = [
  { value: "Сегодня", label: "Сегодня" },
  { value: "Завтра", label: "Завтра" },
];

export const TradingIndicators: React.FC<TradingIndicatorsProps> = (props) => {
  const { className = "" } = props;

  const [selected, setSelected] = useState<Option>();
  console.log("selected: ", selected);

  return (
    <div className={clsx(classes.indicators, className)}>
      <div className={classes.header}>
        <h2 className={classes.title}>Торговые показатели</h2>
        <SelectFilter options={options} onChange={setSelected} />
      </div>
      <div className={classes.list}>
        <IndicatorsNumber
          value="12"
          title="Количество сделок"
          Icon={AmountIcon}
        />
        <IndicatorsChart
          title="Доля прибыльных сделок"
          progress={62.4}
          Icon={ShareIcon}
        />
        <IndicatorsNumber
          value="34"
          label="дн."
          title="Средняя продолжительность сделок"
          Icon={DurationIcon}
        />
        <IndicatorsChart
          title="Средняя прибыль на сделку"
          progress={0}
          Icon={ProfitIcon}
        />
      </div>
    </div>
  );
};
