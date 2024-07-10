import { Button } from "shared/ui/Button/Button";
import classes from "./AuthMobile.module.scss";

interface AuthMobileProps {
  onLogin: () => void;
  onRegistration: () => void;
}

export const AuthMobile: React.FC<AuthMobileProps> = (props) => {
  const { onLogin, onRegistration } = props;

  return (
    <div className={classes.mobile}>
      <div className={classes.background}></div>
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
