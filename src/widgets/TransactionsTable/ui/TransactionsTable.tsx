import { useState } from "react";

import DownDirectionIcon from "shared/assets/icons/down-dir.svg?react";
import SortingIcon from "shared/assets/icons/sorting.svg?react";
import UpDirectionIcon from "shared/assets/icons/up-dir.svg?react";
import InfoIcon from "shared/assets/icons/info.svg?react";
import NotesIcon from "shared/assets/icons/notes.svg?react";
import { Status, StatusType } from "shared/ui/Status/Status";

import classes from "./TransactionsTable.module.scss";

function getTextColor(result: string) {
  return parseFloat(result) < 0 ? "#B3004F" : "#00817A";
}

export const TransactionsTable = () => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [deals, setDeals] = useState([
    {
      number: 1,
      id: 2031,
      tool: "Сбербанк",
      direction: "up",
      status: "IN_PROGRESS",
      opening: "11.02.2024 г. ",
      risk: "1,5%",
      entryPrice: "203.45₽",
      stop: "184.21₽",
      profitOne: "214.45₽",
      profitTwo: "-",
      profitThree: "-",
      priceBeginningOfMonth: "714.45₽",
      priceClosing: "714.45₽",
      volumeLot: "1",
      volumeRub: "714.45₽",
      share: "+12,5%",
      resultMonth: "+12,5%",
      resultFromOpening: "+12,5%",
    },
    {
      number: 2,
      id: 2032,
      tool: "Сбербанк",
      direction: "up",
      status: "IN_PROGRESS",
      opening: "16.02.2024 г. ",
      risk: "1,5%",
      entryPrice: "203.45₽",
      stop: "184.21₽",
      profitOne: "214.45₽",
      profitTwo: "-",
      profitThree: "-",
      priceBeginningOfMonth: "714.45₽",
      priceClosing: "714.45₽",
      volumeLot: "1,3",
      volumeRub: "714.45₽",
      share: "+12,5%",
      resultMonth: "+102,5%",
      resultFromOpening: "+12,5%",
      active: true,
    },
    {
      number: 3,
      id: 2033,
      tool: "Транснефть АП",
      direction: "down",
      status: "CLOSED",
      opening: "19.02.2024 г. ",
      risk: "1,5%",
      entryPrice: "203.45₽",
      stop: "184.21₽",
      profitOne: "214.45₽",
      profitTwo: "-",
      profitThree: "-",
      priceBeginningOfMonth: "714.45₽",
      priceClosing: "714.45₽",
      volumeLot: "0,1",
      volumeRub: "714.45₽",
      share: "+12,5%",
      resultMonth: "-3,5%",
      resultFromOpening: "-3,5%",
    },
    {
      number: 4,
      id: 2034,
      tool: "Транснефть АП",
      direction: "down",
      status: "CANCEL",
      opening: "01.09.2024 г. ",
      risk: "1,5%",
      entryPrice: "203.45₽",
      stop: "184.21₽",
      profitOne: "214.45₽",
      profitTwo: "-",
      profitThree: "-",
      priceBeginningOfMonth: "714.45₽",
      priceClosing: "714.45₽",
      volumeLot: "6",
      volumeRub: "714.45₽",
      share: "+12,5%",
      resultMonth: "-21,5%",
      resultFromOpening: "-21,5%",
    },
    {
      number: 5,
      id: 2035,
      tool: "Сбербанк",
      direction: "up",
      status: "CANCEL",
      opening: "21.12.2024 г. ",
      risk: "1,5%",
      entryPrice: "203.45₽",
      stop: "184.21₽",
      profitOne: "214.45₽",
      profitTwo: "-",
      profitThree: "-",
      priceBeginningOfMonth: "714.45₽",
      priceClosing: "714.45₽",
      volumeLot: "1",
      volumeRub: "714.45₽",
      share: "+12,5%",
      resultMonth: "+32,1%",
      resultFromOpening: "+12,5%",
      active: true,
    },
    {
      number: 6,
      id: 2036,
      tool: "Транснефть АП",
      direction: "up",
      status: "ORDER",
      opening: "14.06.2024 г. ",
      risk: "1,5%",
      entryPrice: "203.45₽",
      stop: "184.21₽",
      profitOne: "214.45₽",
      profitTwo: "-",
      profitThree: "-",
      priceBeginningOfMonth: "714.45₽",
      priceClosing: "714.45₽",
      volumeLot: "3",
      volumeRub: "714.45₽",
      share: "+12,5%",
      resultMonth: "+23,9%",
      resultFromOpening: "+12,5%",
    },
  ]);

  const handleSort = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
      setDeals((prev) => [...prev.sort((a, b) => b.id - a.id)]);
    } else {
      setSortDirection("asc");
      setDeals((prev) => [...prev.sort((a, b) => a.id - b.id)]);
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
                    <SortingIcon />
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
                <th>СТОП</th>
                <th>ПРОФИТ №1</th>
                <th>ПРОФИТ №2</th>
                <th>ПРОФИТ №3</th>
                <th>Цена (начало месяца)</th>
                <th>Цена (закрытие)</th>
                <th>Объем (лот)</th>
                <th>Объем (руб.)</th>
                <th>Доля, %</th>
                <th>Результат,% (месяц)</th>
                <th>Результат,% (с открытия)</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((item) => (
                <tr key={item.id}>
                  <td>{item.number}</td>
                  <td>{item.id}</td>
                  <td className={item.active ? classes.active : ""}>
                    {item.tool}
                  </td>
                  <td>
                    {item.direction === "up" ? (
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
                      <NotesIcon />
                      <span>{item.opening}</span>
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
                  <td>{item.priceBeginningOfMonth}</td>
                  <td>{item.priceClosing}</td>
                  <td>{item.volumeLot}</td>
                  <td>{item.volumeRub}</td>
                  <td>{item.share}</td>
                  <td style={{ color: getTextColor(item.resultMonth) }}>
                    {item.resultMonth}
                  </td>
                  <td style={{ color: getTextColor(item.resultMonth) }}>
                    {item.resultFromOpening}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={classes.footer}>
            <div className={classes.items}>
              <div className={classes.item}>
                <div className={classes.label}>
                  Количество закрытых сделок -{" "}
                </div>
                <div className={classes.value}>21 шт.</div>
              </div>
              <div className={classes.item}>
                <div className={classes.label}>Прибыльных сделок - </div>
                <div className={classes.value}>57%</div>
              </div>
            </div>
            <div className={classes.items}>
              <div className={classes.item}>
                <div className={classes.label}>Ваш депозит - </div>
                <div className={classes.value}>1 000 000 рублей</div>
              </div>
              <div className={classes.item}>
                <div className={classes.label}>Открытые сделки - </div>
                <div className={classes.value}>1 500 000 рублей</div>
              </div>
              <div className={classes.item}>
                <div className={classes.label}>Заемные средства - </div>
                <div className={classes.value}>64%</div>
              </div>
              <div className={classes.result}>Результат +4.53%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
