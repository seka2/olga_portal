/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";

import { SelectFilter } from "shared/ui/SelectFilter/SelectFilter";
import { Option } from "shared/types/Options";

import classes from "./ServiceDynamics.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

ChartJS.defaults.font.size = 10;

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "#1D2B43",
      titleFont: { weight: 600, size: 8 },
      bodyFont: { weight: 300, size: 6 },
      callbacks: {
        title: (context: any) => `${prices[context[0].dataIndex]} ₽`,
        label: (context: any) => `Продано ${orders[context.dataIndex]} ордеров`,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 25,
        min: 0,
        max: 100,
      },
    },
  },
};

const data = {
  labels: [
    "31.03.2023 г.",
    "01.04.2023 г.",
    "02.04.2023 г.",
    "03.04.2023 г.",
    "04.04.2023 г.",
    "05.04.2023 г.",
    "06.04.2023 г.",
  ],
  datasets: [
    {
      fill: true,
      data: [8, 27, 50, 72, 24, 46, 65, 100],
      borderColor: "#01D8DD",
      backgroundColor: "rgba(1, 216, 221, 0.2)",
    },
  ],
};

const dayOptions = [
  { value: "Сегодня", label: "Сегодня" },
  { value: "Завтра", label: "Завтра" },
];

const prices: number[] = [25000, 26000, 27000, 28000, 29000, 30000, 31000];
const orders: number[] = [300, 310, 320, 330, 340, 350, 360];

export const ServiceDynamics = () => {
  const [selected, setSelected] = useState<Option>();
  console.log("selected: ", selected);

  return (
    <div className={classes.schedule}>
      <div className={classes.overlay}>
        <div className={classes.body}>
          <div className={classes.header}>
            <div className={classes.title}>Динамика сервиса</div>
            <SelectFilter options={dayOptions} onChange={setSelected} />
          </div>
          <div className={classes.chart}>
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
