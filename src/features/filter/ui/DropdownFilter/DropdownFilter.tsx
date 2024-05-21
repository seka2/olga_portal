import clsx from "clsx";
import { useState } from "react";

import ArrowDownIcon from "shared/assets/icons/arrow-down.svg?react";
import ArrowRightIcon from "shared/assets/icons/arrow-right.svg?react";
import FilterIcon from "shared/assets/icons/filter.svg?react";

import classes from "./DropdownFilter.module.scss";

interface Filter {
  projectName: string;
  projectManager: string[];
  lastUpdate: string;
  resources: string[];
  estimation: string;
}

interface Option {
  label: string;
  value: string;
}

const initialSelectedState: Filter = {
  projectName: "",
  projectManager: [],
  lastUpdate: "",
  resources: [],
  estimation: "",
};

const options = [
  { label: "Project name", value: "projectName" },
  {
    label: "Project manager",
    value: "projectManager",
    options: [
      { label: "Leo Gouse", value: "Leo Gouse" },
      { label: "Roger Vaccaro", value: "Roger Vaccaro" },
      { label: "Tatiana Dias", value: "Tatiana Dias" },
    ],
  },
  { label: "Last update", value: "lastUpdate" },
  {
    label: "Resources",
    value: "resources",
    options: [
      { label: "UX/UI Design", value: "UX/UI Design" },
      { label: "Frontend", value: "Frontend" },
      { label: "Backend", value: "Backend" },
      { label: "Full Stack", value: "Full Stack" },
      { label: "Graphic Designer", value: "Graphic Designer" },
      { label: "Web Designer", value: "Web Designer" },
      { label: "QA", value: "QA" },
    ],
  },
  { label: "Estimation", value: "estimation" },
];

export const DropdownFilter = () => {
  // const [open, setOpen] = useState(false);
  const [selected, setSelected] =
    useState<Partial<Filter>>(initialSelectedState);
  console.log("selected: ", selected);

  const handleOptionClick = (value: keyof Filter) => {
    if (typeof value === "string") {
      setSelected((prev) => ({
        ...prev,
        [value]: prev[value] === value ? "" : value,
      }));
    }
  };

  const handleCheckboxChange = (value: keyof Filter, option: string) => {
    setSelected((prev) => {
      const prevValue = (prev[value] as string[]) || [];

      return {
        ...prev,
        [value]: prevValue.includes(option)
          ? prevValue.filter((item) => item !== option)
          : [...prevValue, option],
      };
    });
  };

  const handleSelectAll = (value: keyof Filter, options: Option[]) => {
    const allOptions = options.map((option) => option.value);
    setSelected((prev) => ({
      ...prev,
      [value]: prev[value]?.length === options.length ? [] : allOptions,
    }));
  };

  return (
    <div className={classes.filter}>
      <div className={classes.selection}>
        <FilterIcon />
        <span>Фильтр</span>
        <ArrowDownIcon />
      </div>
      <ul className={classes.list}>
        {options.map(({ label, value, options }) => (
          <li
            className={classes.option}
            key={label}
            onClick={() =>
              !options?.length && handleOptionClick(value as keyof Filter)
            }
          >
            {options?.length ? (
              <>
                <span>{label}</span>
                <span className={classes.arrow}>
                  <ArrowRightIcon />
                </span>
                <ul className={classes.sublist}>
                  <li className={classes.subitem} key="All">
                    <label className={clsx(classes.checkbox, classes.all)}>
                      <input
                        className={classes.input}
                        type="checkbox"
                        onChange={() =>
                          handleSelectAll(value as keyof Filter, options)
                        }
                        checked={
                          (selected[value as keyof Filter] || []).length ===
                          options.length
                        }
                      />
                      <span className={classes.box} />
                      <span>All</span>
                    </label>
                  </li>
                  {options.map((option) => (
                    <li className={classes.subitem} key={option.label}>
                      <label className={classes.checkbox}>
                        <input
                          className={classes.input}
                          type="checkbox"
                          onChange={() =>
                            handleCheckboxChange(
                              value as keyof Filter,
                              option.value
                            )
                          }
                          checked={(
                            selected[value as keyof Filter] || []
                          ).includes(option.value)}
                        />
                        <span className={classes.box} />
                        <span>{option.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
