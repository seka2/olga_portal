import { Form, Formik } from "formik";
import classes from "./Safety.module.scss";
import { FormikField } from "shared/ui/FormikField/FormikField";
import { Button } from "shared/ui/Button/Button";

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const Safety = () => {
  return (
    <div className={classes.safety}>
      <Formik initialValues={initialValues} onSubmit={console.log}>
        <Form>
          <div className={classes.fields}>
            <FormikField
              type="password"
              name="currentPassword"
              placeholder="Текущий пароль"
              className={classes.input}
            />
            <FormikField
              type="password"
              name="newPassword"
              placeholder="Новый пароль"
              className={classes.input}
            />
            <FormikField
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              className={classes.input}
            />
            <Button className={classes.button} type="submit">
              Сохранить
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
