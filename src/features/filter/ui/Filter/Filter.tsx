import clsx from "clsx";
import SearchIcon from "shared/assets/icons/search-grey.svg?react";
import { DropdownFilter } from "../DropdownFilter/DropdownFilter";
import classes from "./Filter.module.scss";

interface FilterProps {
  className?: string;
  search: string;
  setSearch: (value: string) => void;
}

export const Filter: React.FC<FilterProps> = (props) => {
  
  const { className = "", search, setSearch } = props;

  return (
    <div className={clsx(classes.filter, className)}>
      <div className={classes.body}>
        { false && <DropdownFilter /> }
        <div className={classes.search}>
          <div className={classes.icon}>
            <SearchIcon />
          </div>
          <input
            className={classes.input}
            type="text"
            placeholder="Введите название компании или тикер"
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
      </div>
    </div>
  );
};
