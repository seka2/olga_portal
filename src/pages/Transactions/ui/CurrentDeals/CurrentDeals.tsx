import { ReportBug } from "features/report";
import { TransactionsTable } from "widgets/TransactionsTable";

import classes from "./CurrentDeals.module.scss";
import { Filter } from "features/filter";
import { useState } from "react";
import useDebounce from "hooks/useDebounce";

export const CurrentDeals = () => {
  
  const [search, setSearch] = useState(""); // Состояние для строки поиска
  const debouncedSearch = useDebounce(search, 500); // Задержка в 500 мс

  return (
    <div className={classes.deals}>
      <div className={classes.analytics}>
        <Filter search={search} setSearch={setSearch} className={classes.filter} />
        <TransactionsTable search={debouncedSearch}/>
        <ReportBug />
      </div>
    </div>
  );
};
