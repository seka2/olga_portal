import HeroIcon from "shared/assets/icons/hero.svg?react";
import DateIcon from "shared/assets/icons/date.svg?react";

import classes from "./InfoItem.module.scss";

export interface InfoItemProps {
  date: string;
  text: string;
  link: string;
}

export const InfoItem: React.FC<InfoItemProps> = (props) => {
  const { date, text, link } = props;

  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <div className={classes.date}>
          <DateIcon />
          <span>{date}</span>
        </div>
        <div className={classes.text}>{text}</div>
      </div>
      <div className={classes.info}>
        <HeroIcon />
        <a className={classes.link} href={link} target="_blank">
          Перейти
        </a>
      </div>
    </div>
  );
};
