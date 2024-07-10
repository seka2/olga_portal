import clsx from "clsx";

import { Button } from "shared/ui/Button/Button";

import { InfoItem, InfoItemProps } from "../InfoItem/InfoItem";

import classes from "./InfoCard.module.scss";
import { Link } from "react-router-dom";

export interface InfoCardProps {
  title: string;
  list: InfoItemProps[];
  more: string;
}

export const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { list, more, title } = props;

  return (
    <div className={classes.card}>
      <div>
        <div className={classes.title}>{title}</div>
        <div className={classes.list}>
          {list.map(({ text, date, link }, idx) => (
            <InfoItem key={idx.toString()} date={date} text={text} link={link} />
          ))}
        </div>
      </div>
      <Link to={more} target="_blank">
        <Button className={clsx("button", classes.button)}>
          Смотреть все
        </Button>
      </Link>
    </div>
  );
};
