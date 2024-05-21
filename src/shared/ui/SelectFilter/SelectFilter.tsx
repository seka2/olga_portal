/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Select, { SingleValue } from "react-select";

import { Option, Options } from "shared/types/Options";

import filterIcon from "./assets/filter.svg";

interface SelectFilterProps {
  options: Options;
  onChange: (value: Option) => void;
}

export const SelectFilter: React.FC<SelectFilterProps> = (props) => {
  const { options, onChange } = props;

  const [selectedOption, setSelectedOption] = useState<SingleValue<Option>>(
    options[0]
  );

  const handleChange = (newValue: SingleValue<Option>) => {
    setSelectedOption(newValue);
    onChange(newValue as Option);
  };

  return (
    <Select
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
      styles={{
        container: (base) => ({
          ...base,
          flexShrink: 0,
        }),
        valueContainer: (base) => ({
          ...base,
          position: "relative",
          paddingLeft: "30px",
        }),
        control: (base) => ({
          ...base,
          minHeight: "25px",
          borderRadius: "6px",
          borderColor: "#D5D9E0",
          boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, .1)",
          fontSize: "12px",
        }),
        input: (base) => ({
          ...base,
          ":before": {
            content: "' '",
            position: "absolute",
            top: "50%",
            left: "8px",
            transform: "translateY(-50%)",
            width: "17px",
            height: "17px",
            backgroundImage: `url('${filterIcon}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          },
        }),
        option: (base) => ({ ...base, fontSize: "12px" }),
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
          "+ div": {
            transform: "scale(.8)",
            padding: "0",
            "svg path": { fill: "#464F60" },
          },
        }),
      }}
    />
  );
};
