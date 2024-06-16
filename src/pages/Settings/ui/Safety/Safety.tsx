import { Form, Formik } from "formik";
import classes from "./Safety.module.scss";
import { FormikField } from "shared/ui/FormikField/FormikField";
import * as Yup from 'yup';
import { Button } from "shared/ui/Button/Button";
import { showAlertDanger, showAlertSuccess } from "reducers/thunks";
import useAppDispatch from "hooks/useAppDispatch";
import { setIsAuth, setPassword, setUser } from "reducers/siteReducer";
import { changeUserPassword } from "http/userAPI";
import { jwtDecode } from "jwt-decode";

interface FormValues {
  currentPassword: string,
  newPassword: string,
  confirmPassword: string,
}

const initialValues: FormValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const Safety = () => {

  const dispatch = useAppDispatch();

  const handleSubmit = async (values : FormValues) => {

    const { currentPassword, newPassword, confirmPassword } = values;

    try {
      let data = await changeUserPassword(currentPassword, newPassword, confirmPassword);
      if (data.result) {
        let user = jwtDecode(data.token);
        dispatch(setPassword(""));
        dispatch(setIsAuth(true));
        dispatch(setUser(user)) ;
        dispatch(showAlertSuccess("Пароль успешно изменен!"));
      } else {
        data.error = data.error ?? "Ошибка";
        dispatch(showAlertDanger(data.error));
      }
    } catch (e) {
      dispatch(showAlertDanger("Неизвестная ошибка, попробуйте снова."));
    }

  }

  return (
    <div className={classes.safety}>
      <Formik 
        initialValues={initialValues} 
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          currentPassword: Yup.string()
            .min(6, 'Длина пароля должна быть больше 5 символов')
            .required('Необходимо заполнить'),
          newPassword: Yup.string()
            .min(6, 'Длина пароля должна быть больше 5 символов')
            .required('Необходимо заполнить'),
          confirmPassword: Yup.string()
            .min(6, 'Длина пароля должна быть больше 5 символов')
            .required('Необходимо заполнить'),
        })}
      >
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
