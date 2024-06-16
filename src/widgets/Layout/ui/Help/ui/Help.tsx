import TelegramIcon from "shared/assets/icons/telegram.svg?react";
import YoutubeIcon from "shared/assets/icons/youtube.svg?react";

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
              href="https://t.me/+G5iiOnpZUOwzYjMy"
              target="_blank"
            >
              <TelegramIcon />
            </a>
            <a
              className={classes.link}
              href="https://www.youtube.com/@wise-olga"
              target="_blank"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
