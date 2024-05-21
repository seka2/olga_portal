/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { CountryCode } from "libphonenumber-js/core";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";
import ru from "react-phone-number-input/locale/ru";
import "react-phone-number-input/style.css";

import ArrowIcon from "shared/assets/icons/phone-arrow.svg?react";

import classes from "./PhoneSelect.module.scss";
import "./PhoneSelect.scss";

interface PhoneSelectProps {
  label?: string;
  placeholder?: string;
  info?: string;
  onInfoClick?: () => void;
}

export const PhoneSelect: React.FC<PhoneSelectProps> = (props) => {
  const { label, placeholder, info, onInfoClick } = props;
  const [value, setValue] = useState<any>("");
  const [showCountryList, setShowCountryList] = useState(false);

  const [country, setCountry] = useState<CountryCode>("RU");

  const closeCountryList = () => setShowCountryList(false);

  const handleCountryChange = (country: CountryCode) => {
    setCountry(country);
    setShowCountryList(false);
  };

  useEffect(() => {
    if (country) {
      setValue(`+${getCountryCallingCode(country)}`);
    }
  }, [country]);

  return (
    <ClickAwayListener onClickAway={closeCountryList}>
      <div
        className={clsx(
          classes.phone,
          showCountryList && classes.openCountryList
        )}
      >
        {label && (
          <div className={classes.header}>
            <div className={classes.label}>{label}</div>
            <div className={classes.info} onClick={onInfoClick}>
              {info}
            </div>
          </div>
        )}
        <div className={classes.field}>
          <PhoneInput
            labels={ru}
            international
            defaultCountry={country}
            placeholder={placeholder}
            value={value}
            onChange={setValue}
            autoComplete="off"
          />
          <div
            className={classes.arrow}
            onClick={() => setShowCountryList((prev) => !prev)}
          >
            <ArrowIcon />
          </div>
        </div>
        {showCountryList && (
          <div className={classes.list}>
            {getCountries().map((c) => (
              <div
                key={c}
                className={classes.item}
                onClick={() => handleCountryChange(c)}
              >
                {ru[c]} +{getCountryCallingCode(c)}
              </div>
            ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};
