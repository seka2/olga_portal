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
import { useSelector } from "react-redux";
import { RootState } from "store";

interface TradingIndicatorsProps {
  className?: string;
}

const options = [
  { value: "1_month", label: "Прошлый месяц" },
  { value: "3_months", label: "3 месяца" },
  { value: "6_months", label: "6 месяцев" },
  { value: "12_months", label: "12 месяцев" },
];

export const TradingIndicators: React.FC<TradingIndicatorsProps> = (props) => {

  const stat = useSelector((state: RootState) => state.site.stat);

  const { className = "" } = props;

  const [selected, setSelected] = useState<Option>(options[0]);

  const selectedPeriod = selected?.value;
  const keyTradingFigures = selectedPeriod ? `${selectedPeriod}` : '1_month';

  const isKeyTradingFigures = (key: any): key is keyof typeof stat.trading_figures => {
    return key === "3_months" || key === "6_months" || key === "1_month" || key === "12_months";
  };

  let loaded = false;
  if (stat && stat.dynamic && isKeyTradingFigures(keyTradingFigures) && stat.trading_figures[keyTradingFigures]) {
    loaded = true;
  }
  
  return (
    <div className={clsx(classes.indicators, className)}>
      <div className={classes.header}>
        <h2 className={classes.title}>Торговые показатели</h2>
        <SelectFilter options={options} onChange={setSelected} selectedIndex={0} />
      </div>
      <div className={classes.list}>
        <IndicatorsNumber
          value={ loaded && isKeyTradingFigures(keyTradingFigures) ? stat.trading_figures[keyTradingFigures].amount_deals : "" }
          title="Количество сделок"
          Icon={AmountIcon}
        />
        <IndicatorsChart
          title="Доля прибыльных сделок"
          progress={ loaded && isKeyTradingFigures(keyTradingFigures) ? stat.trading_figures[keyTradingFigures].share_of_profitable_trades : 100 }
          Icon={ShareIcon}
        />
        <IndicatorsNumber
          value={ loaded && isKeyTradingFigures(keyTradingFigures) ? stat.trading_figures[keyTradingFigures].average_duration_of_trades : "" }
          label="дн."
          title="Средняя продолжительность сделок"
          Icon={DurationIcon}
        />
        <IndicatorsChart
          title="Средняя прибыль на сделку"
          progress={ loaded && isKeyTradingFigures(keyTradingFigures) ? stat.trading_figures[keyTradingFigures].average_profit_per_trade : 0 }
          Icon={ProfitIcon}
        />
      </div>
    </div>
  );
};
