import clsx from "clsx";
import { useState } from "react";

import SearchImage from "shared/assets/icons/search.svg?react";

import classes from "./HeaderSearch.module.scss";

interface HeaderSearchProps {
  className?: string;
}

export const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const { className = "" } = props;

  const [value, setValue] = useState("");
  console.log("search value: ", value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
  };

  return (
    <div className={clsx(classes.search, className)}>
      <span className={classes.icon}>
        <SearchImage />
      </span>
      <input
        className={classes.input}
        type="text"
        placeholder="Поиск"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
