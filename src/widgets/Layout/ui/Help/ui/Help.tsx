import TelegramIcon from "shared/assets/icons/telegram.svg?react";
import PhoneIcon from "shared/assets/icons/phone-icon-v3.svg?react";

// https://www.svgrepo.com/svg/375858/phone?edit=true

import classes from "./Help.module.scss";
 
export const Help = () => {
  return (
    <div className={classes.help}>
      <div className="container">
        <div className={classes.body}>
          <div className={classes.content}>
            <div className={classes.title}>Нужна помощь?</div>
            <div className={classes.subtitle}>
              Используйте оперативные способы связи
            </div>
          </div>
          <div className={classes.links}>
            <a
              className={classes.link}
              href="https://t.me/assistant_Olgawise"
              target="_blank"
            >
              <TelegramIcon />
            </a>
            <a
              className={classes.link}
              href="tel:+78003500857"
              target="_blank"
            >
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
