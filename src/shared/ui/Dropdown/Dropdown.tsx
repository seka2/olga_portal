import ClickAwayListener from "react-click-away-listener";

import ArrowDownIcon from "shared/assets/icons/arrow-down-black.svg?react";

import classes from "./Dropdown.module.scss";
import { useState } from "react";
import clsx from "clsx";

interface DropdownProps {
  options: string[];
  selected: number;
  onSelect: (num: number) => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options, selected, onSelect, className = "" } = props;
  const [open, setOpen] = useState(false);

  const handleClick = (index: number) => {
    onSelect(index);
    setOpen(false);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={clsx(classes.dropdown, className)}>
        <div
          className={classes.selected}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{options[selected]}</span>
          <ArrowDownIcon />
        </div>
        {open && (
          <ul className={classes.list}>
            {options.map((item, index) => (
              <li key={item} onClick={() => handleClick(index)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
};
