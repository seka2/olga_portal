import clsx from "clsx";

import SearchIcon from "shared/assets/icons/search-grey.svg?react";

import { DropdownFilter } from "../DropdownFilter/DropdownFilter";

import classes from "./Filter.module.scss";

interface FilterProps {
  className?: string;
}

export const Filter: React.FC<FilterProps> = (props) => {
  const { className = "" } = props;

  return (
    <div className={clsx(classes.filter, className)}>
      <div className={classes.body}>
        <DropdownFilter />
        <div className={classes.search}>
          <div className={classes.icon}>
            <SearchIcon />
          </div>
          <input
            className={classes.input}
            type="text"
            placeholder="Введите название компании или тикер"
          />
        </div>
      </div>
    </div>
  );
};
