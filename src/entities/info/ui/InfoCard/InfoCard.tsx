import clsx from "clsx";

import { Button } from "shared/ui/Button/Button";

import { InfoItem, InfoItemProps } from "../InfoItem/InfoItem";

import classes from "./InfoCard.module.scss";

export interface InfoCardProps {
  title: string;
  list: InfoItemProps[];
  onClick: () => void;
}

export const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { list, onClick, title } = props;

  return (
    <div className={classes.card}>
      <div className={classes.title}>{title}</div>
      <div className={classes.list}>
        {list.map(({ text, date, link }, idx) => (
          <InfoItem key={idx.toString()} date={date} text={text} link={link} />
        ))}
      </div>
      <Button className={clsx("button", classes.button)} onClick={onClick}>
        Смотреть все
      </Button>
    </div>
  );
};
