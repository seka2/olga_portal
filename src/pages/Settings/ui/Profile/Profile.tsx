import { Form, Formik } from "formik";

import { Button } from "shared/ui/Button/Button";
import { FormikField } from "shared/ui/FormikField/FormikField";
import { FormikUpload } from "shared/ui/FormikUpload/FormikUpload";

import classes from "./Profile.module.scss";

const initialValues = {
  name: "",
  email: "",
  photo: "",
};

export const Profile = () => {
  return (
    <div className={classes.profile}>
      <Formik initialValues={initialValues} onSubmit={console.log}>
        <Form>
          <div className={classes.fields}>
            <FormikField
              className={classes.input}
              name="name"
              placeholder="Введите ваше ФИО"
            />
            <FormikField
              className={classes.input}
              name="email"
              placeholder="Введите ваш Email"
            />
          </div>
          <div className={classes.bottom}>
            <FormikUpload className={classes.upload} name="photo" />
            <Button className={classes.button} type="submit">
              Сохранить
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
