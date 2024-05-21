import { ReportBug } from "features/report";
import { TransactionsTable } from "widgets/TransactionsTable";

import classes from "./CurrentDeals.module.scss";
import { Filter } from "features/filter";

export const CurrentDeals = () => {
  return (
    <div className={classes.deals}>
      <div className={classes.analytics}>
        <Filter className={classes.filter} />
        <TransactionsTable />
        <ReportBug />
      </div>
    </div>
  );
};
