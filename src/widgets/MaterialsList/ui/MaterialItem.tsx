import DateIcon from "shared/assets/icons/date.svg?react";

import classes from "./MaterialItem.module.scss";

interface MaterialItemProps {
  title?: string;
  list: MaterialItem[];
}

export type MaterialItem = {
  date: string;
  name: string;
};

export const MaterialItem: React.FC<MaterialItemProps> = (props) => {
  const { title, list } = props;

  return (
    <div className={classes.material}>
      {title && <div className={classes.title}>{title}</div>}
      <div className={classes.list}>
        {list.map(({ date, name }, index) => (
          <div className={classes.item} key={index.toString()}>
            <div className={classes.date}>
              <DateIcon />
              <span>{date}</span>
            </div>
            <div className={classes.name}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
