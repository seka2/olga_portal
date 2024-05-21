import clsx from "clsx";
import { useField } from "formik";

import { readFileAsDataURL } from "shared/libs/readFileAsDataURL/readFileAsDataURL";

import FileDownloadIcon from "../../assets/icons/file-download.svg?react";

import classes from "./FormikAttach.module.scss";

interface FormikAttach {
  name: string;
  className?: string;
}

export const FormikAttach: React.FC<FormikAttach> = (props) => {
  const { name, className = "" } = props;

  const [field, , helpers] = useField(props);
  console.log("FormikAttach: ", field);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      readFileAsDataURL(file).then((dataUrl) => {
        helpers.setValue(dataUrl);
      });
    }
  };

  return (
    <label className={clsx(classes.upload, className)}>
      <input
        name={name}
        onChange={handleChange}
        className={classes.input}
        type="file"
        accept="image/png, image/jpeg"
      />
      <span className={classes.text}>Прикрепить скриншот</span>
      <div className={classes.icon}>
        <FileDownloadIcon />
      </div>
    </label>
  );
};
