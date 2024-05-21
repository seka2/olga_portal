import TelegramIcon from "shared/assets/icons/telegram.svg?react";
import VkIcon from "shared/assets/icons/vk.svg?react";

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
              href="https://www.google.com/"
              target="_blank"
            >
              <TelegramIcon />
            </a>
            <a
              className={classes.link}
              href="https://www.google.com/"
              target="_blank"
            >
              <VkIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
