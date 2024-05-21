import { InfoCard } from "entities/info";

import classes from "./HelpfulInfo.module.scss";

const analytics = [
  {
    date: "21.02.2024",
    text: "➡️ Что рассмотреть после вчерашнего пролива рынка?",
    link: "https://www.google.com/",
  },
  {
    date: "21.02.2024",
    text: "➡️ Что рассмотреть после вчерашнего пролива рынка?",
    link: "https://www.google.com/",
  },
  {
    date: "21.02.2024",
    text: "➡️ Что рассмотреть после вчерашнего пролива рынка?",
    link: "https://www.google.com/",
  },
];

const materials = [
  {
    date: "21.02.2024",
    text: "⚡️ Магия Фибоначи в анализе.",
    link: "https://www.google.com/",
  },
  {
    date: "21.02.2024",
    text: "🔥 Как правильно строить Фибо сетку?",
    link: "https://www.google.com/",
  },
  {
    date: "21.02.2024",
    text: "🔥 Как правильно строить Фибо сетку?",
    link: "https://www.google.com/",
  },
];

export const HelpfulInfo = () => {
  return (
    <div className={classes.help}>
      <h2 className={classes.title}>Полезная информация</h2>
      <div className={classes.items}>
        <InfoCard
          title="Свежая аналитика"
          list={analytics}
          onClick={console.log}
        />
        <InfoCard
          title="Обучающие материалы"
          list={materials}
          onClick={console.log}
        />
      </div>
    </div>
  );
};
