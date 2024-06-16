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
import { useSelector } from "react-redux";
import { RootState } from "store";

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
      titleFont: { weight: 600, size: 10 },
      bodyFont: { weight: 300, size: 12 },
      callbacks: {
        title: (context: any) => context[0].label,
        label: (context: any) => context['raw'] > 0 ? "+" + context['raw'] + "%" : context['raw'] + "%",
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

const dayOptions = [
  { value: "3_months", label: "3 месяца" },
  { value: "6_months", label: "6 месяцев" },
  { value: "9_months", label: "9 месяцев" },
  { value: "12_months", label: "12 месяцев" },
];

export const ServiceDynamics = () => {
  const stat = useSelector((state: RootState) => state.site.stat);


  const [selected, setSelected] = useState<Option>(dayOptions[3]); // Default to 12 months

  console.log("selected: ", selected);

  const selectedPeriod = selected?.value;
  const dynamicKey = selectedPeriod ? `${selectedPeriod}` : '12_months';

  const isDynamicKey = (key: any): key is keyof typeof stat.dynamic => {
    return key === "3_months" || key === "6_months" || key === "9_months" || key === "12_months";
  };

  if (stat && stat.dynamic && isDynamicKey(dynamicKey) && stat.dynamic[dynamicKey]) {
    const data = {
      labels: stat.dynamic[dynamicKey].labels,
      datasets: [
        {
          fill: true,
          data: stat.dynamic[dynamicKey].data,
          borderColor: "#01D8DD",
          backgroundColor: "rgba(1, 216, 221, 0.2)",
        },
      ],
    };

    return (
      <div className={classes.schedule}>
        <div className={classes.overlay}>
          <div className={classes.body}>
            <div className={classes.header}>
              <div className={classes.title}>Динамика сервиса</div>
              <SelectFilter options={dayOptions} onChange={setSelected} selectedIndex={3} />
            </div>
            <div className={classes.chart}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  
  return (
    <div className={classes.schedule}>
      <div className={classes.overlay}>
        <div className={classes.body}>
          <div className={classes.header}>
            <div className={classes.title}>Динамика сервиса</div>
            <SelectFilter options={dayOptions} onChange={setSelected} selectedIndex={3} />
          </div>
          <div className={classes.chart}>
       
          </div>
        </div>
      </div>
    </div>
  );

};
