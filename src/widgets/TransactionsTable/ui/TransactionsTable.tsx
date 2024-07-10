import { useEffect, useState } from "react";

import DownDirectionIcon from "shared/assets/icons/down-dir.svg?react";
import SortingIcon from "shared/assets/icons/sorting.svg?react";
import UpDirectionIcon from "shared/assets/icons/up-dir.svg?react";
import InfoIcon from "shared/assets/icons/info.svg?react";
import NotesIcon from "shared/assets/icons/notes.svg?react";
import { Status, StatusType } from "shared/ui/Status/Status";

import classes from "./TransactionsTable.module.scss";
import { getSignals } from "http/siteApi";
import { SignalDeal } from "types/signals";

function getTextColor(result: string) {
  return result == 'red' ? "#B3004F" : "#00817A";
}

interface TransactionsTableProps {
  search: string;
}

export const TransactionsTable = (props: TransactionsTableProps) => {

  const { search } = props;

  const [sortDirection, setSortDirection] = useState("asc");
  const [result, setResult] = useState({
    closed_amount: "",
    pr_profit: "",
    summ_deposit: "",
    opened_deals: "",
    rent_pr: "",
    itog_d_all: "",
  })

  const [deals, setDeals] = useState([]);

  const getSignalDeals = async () => {
    const data = await getSignals({ search });
    if (data.result) {
      setDeals(data.deals);
      setResult(data.statistic);
    }
    return data;
  }

  const __load_async = async() => {
    try {
      await getSignalDeals();
    } catch (e) {

    }
  }

  useEffect(() => {
    __load_async();
  }, [search]);
  

  const handleSort = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
      // setDeals((prev) => [...prev.sort((a, b) => b.id - a.id)]);
    } else {
      setSortDirection("asc");
      // setDeals((prev) => [...prev.sort((a, b) => a.id - b.id)]);
    }
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.overflow}>
        <div className={classes.wrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>
                  <div className={classes.head} onClick={handleSort}>
                    <span>#</span>
                    { false && <SortingIcon /> }
                  </div>
                </th>
                <th>ID</th>
                <th>Инструмент</th>
                <th>направление</th>
                <th>
                  <div className={classes.head}>
                    <span>Статус</span>
                    <InfoIcon />
                  </div>
                </th>
                <th>Открытие</th>
                <th>Риск</th>
                <th>Цена входа</th>
                <th>Стоп</th>
                <th>Профит №1</th>
                <th>Профит №2</th>
                <th>Профит №3</th>
                <th>Текущая цена</th>
                <th>Объем (лот)</th>
                <th>Объем (руб.)</th>
                <th>Доля, %</th>
                <th>Результат, %</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((item : SignalDeal) => (
                <tr key={item.id}>
                  <td>{item.number}</td>
                  <td>{item.id}</td>
                  <td>
                    {item.tool}
                  </td>
                  <td>
                    {item.diraction === "up" ? (
                      <UpDirectionIcon />
                    ) : (
                      <DownDirectionIcon />
                    )}
                  </td>
                  <td>
                    <Status status={item.status as StatusType} />
                  </td>
                  <td>
                    <div className={classes.opening}>
                      { item.opening == '-' ? (
                        <span>{item.opening}</span>
                      ) : (
                        <>
                          <NotesIcon />
                          <span>{item.opening}</span>
                        </>
                      )}
                      
                    </div>
                  </td>
                  <td style={{ color: "#00817A" }}>{item.risk}</td>
                  <td>
                    <span className={classes.price}>{item.entryPrice}</span>
                  </td>
                  <td>
                    <span className={classes.price}>{item.stop}</span>
                  </td>
                  <td>{item.profitOne}</td>
                  <td>{item.profitTwo}</td>
                  <td>{item.profitThree}</td>
                  <td>{item.priceClosing}</td>
                  <td>{item.volumeLot}</td>
                  <td>{item.volumeRub}</td>
                  <td>{item.share}</td>
                  <td style={{ color: getTextColor(item.colorResult) }}>
                    {item.resultFromOpening}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={classes.footer}>
            <div className={classes.items}>
              { false && (
              <div className={classes.item}>
                <div className={classes.label}>
                  Количество закрытых сделок -{" "}
                </div>
                <div className={classes.value}>{ result.closed_amount }</div>
              </div>
              ) }
              <div className={classes.item}>
                <div className={classes.label}>Прибыльных сделок - </div>
                <div className={classes.value}>{ result.pr_profit }</div>
              </div>
            </div>
            
            <div className={classes.items}>
              <div className={classes.item}>
                <div className={classes.label}>Ваш депозит - </div>
                <div className={classes.value}>{ result.summ_deposit }</div>
              </div>
              <div className={classes.item}>
                <div className={classes.label}>Открытые сделки - </div>
                <div className={classes.value}>{ result.opened_deals }</div>
              </div>
              <div className={classes.item}>
                <div className={classes.label}>Заемные средства - </div>
                <div className={classes.value}>{ result.rent_pr }</div>
              </div>
              <div className={classes.result}>Результат { result.itog_d_all }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
