import { Form, Formik } from "formik";

import AppleIcon from "shared/assets/icons/apple.svg?react";
import GmailIcon from "shared/assets/icons/gmail.svg?react";
import { Button } from "shared/ui/Button/Button";
import { FormikCheckbox } from "shared/ui/FormikCheckbox/FormikCheckbox";
import { FormikField } from "shared/ui/FormikField/FormikField";
import * as Yup from 'yup';
import { login, registration } from 'http/userAPI';
import classes from "./AuthForm.module.scss";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "shared/ui/ProgressBar/ProgressBar";
import { useMediaQuery } from "usehooks-ts";
import useAppDispatch from "hooks/useAppDispatch"
import { showAlertDanger } from "reducers/thunks";
import { setAuthStep, setConfirmPassword, setEmail, setIsRegistration, setName, setPassword } from "reducers/siteReducer";

interface AuthFormProps {
  isRegistration?: boolean;
}

interface FormValues {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
  policy?: boolean;
}

const initialValues: FormValues = {
  email: "",
  name: "",
  password: "",
  confirm_password: "",
  policy: false,
};

export const AuthForm: React.FC<AuthFormProps> = (props) => {
  const { isRegistration } = props;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  dispatch(setIsRegistration((isRegistration ?? false)));

  const handleSubmit = async (values: FormValues) => {
    const { email, password, confirm_password, name } = values;

    if (isRegistration) {

      try {
        let data = await registration(email, password, confirm_password, name);
        if (data.result) {
          dispatch(setEmail(email));
          dispatch(setPassword(password));
          dispatch(setConfirmPassword(confirm_password));
          dispatch(setName(name));
          dispatch(setAuthStep(2));
          navigate("/confirm");
        } else {
          data.error = data.error ?? "Ошибка";
          dispatch(showAlertDanger(data.error));
        }
      } catch (e) {
        
      }


    } else {

      try {
        let data = await login(email, password);
        if (data.result) {
          dispatch(setEmail(email));
          dispatch(setPassword(password));
          dispatch(setAuthStep(2));
          navigate("/confirm");
        } else {
          data.error = data.error ?? "Ошибка";
          dispatch(showAlertDanger(data.error));
        }
      } catch (e) {
        
      }
      
    }
  };

  let validationSchema = {}
  if (isRegistration) {
    validationSchema = Yup.object({
      email: Yup.string()
        .email('Невалидный Email адрес')
        .required('Необходимо заполнить'),
      password: Yup.string()
        .min(6, 'Длина пароля должна быть больше 5 символов')
        .required('Необходимо заполнить'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), ""], 'Пароли должны совпадать')
        .required('Необходимо заполнить'),
      name: Yup.string()
        .required('Необходимо заполнить'),
    });
  } else {
    validationSchema = Yup.object({
      email: Yup.string()
        .email('Невалидный Email адрес')
        .required('Необходимо заполнить'),
      password: Yup.string()
        .min(6, 'Длина пароля должна быть больше 5 символов')
        .required('Необходимо заполнить'),
    });
  }

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className={classes.title}>
          {isRegistration ? "Начать прямо сейчас" : "Добро пожаловать!"}
        </div>
        {!isRegistration && (
          <div className={classes.subtitle}>
            Введите свои учетные данные для доступа к вашей учетной записи
          </div>
        )}
        <div className={classes.fields}>
          {/* <PhoneSelect
            label="Номер телефона"
            placeholder="Введите номер телефона"
            info="Зарегистрироваться с помощью Email"
            onInfoClick={() => setEmail(false)}
          /> */}
          <FormikField
            name="email"
            label="Email"
            placeholder="username@gmail.com"
          />
          {!isRegistration ? (
            <FormikField
              name="password"
              type="password"
              label="Пароль"
              placeholder="Введите свой пароль"
            />
          ) : (
            <>
              <FormikField
                name="name"
                type="text"
                label="Имя Фамилия"
                placeholder="Имя Фамилия"
              />
              <FormikField
                name="password"
                type="password"
                label="Пароль"
                placeholder="Придумайте пароль"
              />
              <FormikField
                name="confirm_password"
                type="password"
                label="Повторите пароль"
                placeholder="Повторите пароль"
              />
            </>
          )}
        </div>
        {isRegistration ? (
          <FormikCheckbox
            name="policy"
            label="Нажимая кнопку «Зарегистрироваться», я соглашаюсь с <a href='#'>политикой конфиденциальности</a>"
            className={classes.checkbox}
          />
        ) : (
          <div className={classes.forgot}>Забыли пароль?</div>
        )}
        <div className={classes.items}>
          <Button type="submit">
            {isRegistration ? "Зарегистрироваться" : "Войти"}
          </Button>
          <div style={{display: 'none'}}>
            <div className={classes.or}>
              <span>или</span>
            </div>
            <Button color="info">
              <GmailIcon />
              <span>Войти с помощью Google</span>
            </Button>
            <Button className={classes.button} color="info">
              <AppleIcon />
              <span>Войти с помощью Apple</span>
            </Button>
          </div>
        </div>
        {isRegistration && !isMobile && (
          <ProgressBar className={classes.progress} value={50} />
        )}
      </Form>
    </Formik>
  );
};
