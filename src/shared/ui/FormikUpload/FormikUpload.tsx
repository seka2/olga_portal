import clsx from "clsx";
import { useField } from "formik";

import { readFileAsDataURL } from "shared/libs/readFileAsDataURL/readFileAsDataURL";

import PlusIcon from "../../assets/icons/plus.svg?react";

import classes from "./FormikUpload.module.scss";

interface FormikUpload {
  name: string;
  className?: string;
}

export const FormikUpload: React.FC<FormikUpload> = (props) => {
  const { name, className = "" } = props;

  const [field, , helpers] = useField(props);
  console.log("FormikUpload: ", field);

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
      <PlusIcon />
      <span className={classes.text}>Загрузить фото профиля</span>
    </label>
  );
};
