import { FinancialIndicatorsList } from "widgets/FinancialIndicatorsList";
import { HelpfulInfo } from "widgets/HelpfulInfo";
import { ServiceDynamics } from "widgets/ServiceDynamics";
import { ServiceInfo } from "widgets/ServiceInfo";
import { TradingIndicators } from "widgets/TradingIndicators";

import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className="container">
      <div className={classes.home}>
        <h1 className={classes.title}>Рабочий стол</h1>
        <h2 className={classes.subtitle}>Финансовые показатели</h2>
        <div className={classes.list}>
          <ServiceDynamics />
          <FinancialIndicatorsList />
        </div>
        <TradingIndicators className={classes.indicators} />
        <ServiceInfo className={classes.service} />
        <HelpfulInfo />
      </div>
    </div>
  );
};
