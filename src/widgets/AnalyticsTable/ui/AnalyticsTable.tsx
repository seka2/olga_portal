import ScheduleIcon from "shared/assets/icons/schedule.svg?react";
import TickerIcon from "shared/assets/icons/ticker.svg?react";
import SortingIcon from "shared/assets/icons/sorting.svg?react";

import classes from "./AnalyticsTable.module.scss";
import { useState } from "react";

export const AnalyticsTable = () => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [analytics, setAnalytics] = useState([
    {
      id: 1,
      name: "Сбербанк",
      ticker: "SBER",
      sector: "Энергетические и минеральные ресурсы",
      schedule: "График",
    },
    {
      id: 2,
      name: "Сбербанк",
      ticker: "SBER",
      sector: "Энергетические и минеральные ресурсы",
      schedule: "График",
      active: true,
    },
    {
      id: 3,
      name: "Транснефть АП",
      ticker: "TRNFPS",
      sector: "Энергетические и минеральные ресурсы",
      schedule: "График",
    },
    {
      id: 4,
      name: "Транснефть АП",
      ticker: "TRNFPS",
      sector: "Энергетические и минеральные ресурсы",
      schedule: "График",
    },
    {
      id: 5,
      name: "Газпром",
      ticker: "GAZP",
      sector: "Энергетические и минеральные ресурсы",
      schedule: "График",
      active: true,
    },
    {
      id: 6,
      name: "Транснефть АП",
      ticker: "TRNFPS",
      sector: "Энергетические и минеральные ресурсы",
      schedule: "График",
    },
  ]);

  const handleSort = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
      setAnalytics((prev) => [...prev.sort((a, b) => b.id - a.id)]);
    } else {
      setSortDirection("asc");
      setAnalytics((prev) => [...prev.sort((a, b) => a.id - b.id)]);
    }
  };

  return (
    <div className={classes.analytics}>
      <div className={classes.overlay}>
        <div className={classes.overflow}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>
                  <div className={classes.sort} onClick={handleSort}>
                    <span>#</span>
                    <SortingIcon />
                  </div>
                </th>
                <th>Название</th>
                <th>Тикер</th>
                <th>Сектор</th>
                <th>
                  <div className={classes.head}>
                    <span>график</span>
                    <ScheduleIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {analytics.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className={item.active ? classes.active : ""}>
                    {item.name}
                  </td>
                  <td>
                    <div className={classes.ticker}>
                      <TickerIcon />
                      <span>{item.ticker}</span>
                    </div>
                  </td>
                  <td>{item.sector}</td>
                  <td>
                    <div className={classes.schedule}>{item.schedule}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
