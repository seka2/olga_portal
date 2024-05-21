import { IndicatorCard } from "entities/info/ui/IndicatorCard/IndicatorCard";

import classes from "./FinancialIndicatorsList.module.scss";

const indicators = [
  { title: "за 1 месяц", number: "1", progress: 13.4 },
  { title: "за 3 месяца", number: "3", progress: 33.4 },
  { title: "за 6 месяцев", number: "6", progress: 73.4 },
  { title: "за 12 месяцев", number: "12" },
];

export const FinancialIndicatorsList = () => {
  return (
    <div className={classes.indicators}>
      {indicators.map(({ title, number, progress }) => (
        <IndicatorCard
          key={title}
          title={title}
          number={number}
          progress={progress}
        />
      ))}
    </div>
  );
};
