import { Filter } from "features/filter";
import { ReportBug } from "features/report";
import { AnalyticsTable } from "widgets/AnalyticsTable";

import classes from "./Analytics.module.scss";
import { useState } from "react";
import useDebounce from "hooks/useDebounce"; 

export const Analytics = () => {
  
  const [search, setSearch] = useState(""); // Состояние для строки поиска
  const debouncedSearch = useDebounce(search, 500); // Задержка в 500 мс

  return (
    <>
      <div className={classes.header}>
        <div className="container">
          <h1 className={classes.title}>Аналитика</h1>
          <Filter className={classes.filter} search={search} setSearch={setSearch} />
          <AnalyticsTable search={debouncedSearch} />
          <ReportBug className={classes.reportBug} />
        </div>
      </div>
    </>
  );
};
