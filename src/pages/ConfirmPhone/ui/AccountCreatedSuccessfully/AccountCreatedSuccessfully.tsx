import { useNavigate } from "react-router-dom";

import { Button } from "shared/ui/Button/Button";

import successfullyIcon from "./assets/accoutn-successfully.svg";
import classes from "./AccountCreatedSuccessfully.module.scss";

export const AccountCreatedSuccessfully = () => {
  const navigate = useNavigate();

  const handleStart = () => navigate("/auth");

  return (
    <div className={classes.created}>
      <div className={classes.image}>
        <div className={classes.skip}>Пропускать</div>
        <img
          className={classes.img}
          src={successfullyIcon}
          alt="created successfully"
        />
      </div>
      <div className={classes.body}>
        <div className={classes.content}>
          <div className={classes.title}>
            Ваша учетная запись успешно создана!
          </div>
          <Button className={classes.button} onClick={handleStart}>
            Начать
          </Button>
        </div>
      </div>
    </div>
  );
};
