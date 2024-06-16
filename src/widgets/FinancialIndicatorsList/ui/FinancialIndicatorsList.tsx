import { IndicatorCard } from "entities/info/ui/IndicatorCard/IndicatorCard";

import classes from "./FinancialIndicatorsList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const FinancialIndicatorsList = () => {

  const stat = useSelector((state: RootState) => state.site.stat);
  
  const indicators = [
    { title: "за 1 месяц", number: "1", progress: stat.last_month },
    { title: "за 3 месяца", number: "3", progress: stat.last_3_months },
    { title: "за 6 месяцев", number: "6", progress: stat.last_6_months },
    { title: "за 12 месяцев", number: "12", progress: stat.last_12_months },
  ];

  
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
