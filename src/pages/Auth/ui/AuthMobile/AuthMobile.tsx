import { Button } from "shared/ui/Button/Button";

import authMobileImage from "../../assets/auth-mobile.png";
import classes from "./AuthMobile.module.scss";

interface AuthMobileProps {
  onLogin: () => void;
  onRegistration: () => void;
}

export const AuthMobile: React.FC<AuthMobileProps> = (props) => {
  const { onLogin, onRegistration } = props;

  return (
    <div className={classes.mobile}>
      <div className={classes.skip}>Пропустить</div>
      <img className={classes.img} src={authMobileImage} alt="" />
      <div className={classes.title}>Войти в личный кабинет</div>
      <div className={classes.buttons}>
        <Button variant="secondary" onClick={onLogin}>
          Войти
        </Button>
        <Button onClick={onRegistration}>Регистрация</Button>
      </div>
    </div>
  );
};
