import clsx from "clsx";
import { useField } from "formik";
import React from "react";

import classes from "./FormikCheckbox.module.scss";

interface FormikCheckboxProps {
  name: string;
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
}

export const FormikCheckbox: React.FC<FormikCheckboxProps> = (props) => {
  const { label, disabled, defaultChecked, className = "" } = props;

  const [field, , helpers] = useField(props);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(event.target.checked);
  };

  return (
    <label className={clsx(classes.checkbox, className)}>
      <input
        {...field}
        type="checkbox"
        disabled={disabled}
        checked={field.value}
        onChange={handleChange}
        defaultChecked={defaultChecked}
        className={classes.input}
      />
      <div className={classes.box} />
      {label && (
        <div
          className={classes.label}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )}
    </label>
  );
};
