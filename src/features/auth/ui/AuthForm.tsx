import { Form, Formik } from "formik";

import AppleIcon from "shared/assets/icons/apple.svg?react";
import GmailIcon from "shared/assets/icons/gmail.svg?react";
import { Button } from "shared/ui/Button/Button";
import { FormikCheckbox } from "shared/ui/FormikCheckbox/FormikCheckbox";
import { FormikField } from "shared/ui/FormikField/FormikField";

import classes from "./AuthForm.module.scss";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "shared/ui/ProgressBar/ProgressBar";
import { useMediaQuery } from "usehooks-ts";

interface AuthFormProps {
  isRegistration?: boolean;
}

interface FormValues {
  email: string;
  password: string;
  policy?: boolean;
}

const initialValues: FormValues = {
  email: "",
  password: "",
  policy: false,
};

export const AuthForm: React.FC<AuthFormProps> = (props) => {
  const { isRegistration } = props;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();

  const handleSubmit = (values: FormValues) => {
    const { email, password, policy } = values;

    if (isRegistration) {
      console.log("Registration", email, password, policy);
      navigate("/confirm");
    } else {
      console.log("Login", email, password);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
          <FormikField
            name="password"
            type="password"
            label="Пароль"
            placeholder="Введите свой пароль"
          />
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
        {isRegistration && !isMobile && (
          <ProgressBar className={classes.progress} value={50} />
        )}
      </Form>
    </Formik>
  );
};
