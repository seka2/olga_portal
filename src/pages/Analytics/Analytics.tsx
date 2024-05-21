import { Filter } from "features/filter";
import { ReportBug } from "features/report";
import { AnalyticsTable } from "widgets/AnalyticsTable";

import classes from "./Analytics.module.scss";

export const Analytics = () => {
  return (
    <>
      <div className={classes.header}>
        <div className="container">
          <h1 className={classes.title}>Аналитика</h1>
          <Filter className={classes.filter} />
          <AnalyticsTable />
          <ReportBug className={classes.reportBug} />
        </div>
      </div>
    </>
  );
};
