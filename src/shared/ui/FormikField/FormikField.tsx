import clsx from "clsx";
import { useField } from "formik";
import React, { HTMLAttributes, useState } from "react";

import EyeHideIcon from "shared/assets/icons/eye.svg?react";
import EyeShowIcon from "shared/assets/icons/eye-show.svg?react";

import classes from "./FormikField.module.scss";

interface FormikFieldProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  multiline?: boolean;
  rows?: number;
  changeHandler?: (value: string) => void;
  onClick?: () => void;
  type?: string;
  placeholder?: string;
  info?: string;
  onInfoClick?: () => void;
  helperText?: string;
  isTextarea?: boolean;
}

export const FormikField: React.FC<FormikFieldProps> = (props) => {
  const {
    name,
    label,
    info,
    placeholder,
    disabled,
    className,
    changeHandler,
    type = "text",
    onInfoClick,
    isTextarea,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const [field, meta, helpers] = useField(props);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(event.target.value);
    changeHandler && changeHandler(event.target.value);
  };

  return (
    <div
      className={clsx(
        classes.field,
        type === "password" && classes.withPassword
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
      <div className={classes.box}>
        {isTextarea ? (
          <textarea
            {...field}
            name={name}
            className={clsx(classes.textarea, className)}
          ></textarea>
        ) : (
          <input
            {...field}
            name={name}
            type={showPassword ? "text" : type}
            value={field.value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            className={clsx(classes.input, className)}
            autoComplete="off"
          />
        )}
        {type === "password" && (
          <div
            className={classes.passwordIcon}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeShowIcon /> : <EyeHideIcon />}
          </div>
        )}
      </div>

      {meta.touched && meta.error && (
        <div className={classes.helperText}>{meta.error}</div>
      )}
    </div>
  );
};
