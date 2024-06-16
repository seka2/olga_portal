import clsx from "clsx";
import { useState } from "react";

import CloseIcon from "shared/assets/icons/close.svg?react";

import classes from "./Notifications.module.scss";

interface NotificationsProps {
  className?: string;
}

export const Notifications: React.FC<NotificationsProps> = (props) => {
  const { className = "" } = props;

  /*const [notifications, setNotifications] = useState([
    {
      text: "У вас завершается подписка у вас завершается подписка завершается ",
      link: "https://www.google.com/",
    },
  ]);*/

  
  const [notifications, setNotifications] = useState([]);


  const handleClose = (index: number) => {
    const updatedNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(updatedNotifications);
  };

  return (
    <div className={clsx(classes.notifications, className)}>
      <div className={classes.icon}>
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4993 16.4667H6.48408C6.33615 16.4667 6.20935 16.5511 6.12482 16.6778C6.04029 16.8044 6.04029 16.9733 6.12482 17.1C6.23049 17.29 7.28713 19 8.49171 19C9.69629 19 10.7529 17.29 10.8586 17.1C10.9431 16.9733 10.9431 16.8044 10.8586 16.6778C10.7952 16.5511 10.6473 16.4667 10.4993 16.4667ZM15.6135 13.3422L14.8316 12.0967C14.6414 11.78 14.4301 11.1678 14.4089 10.7878L14.0708 6.46C13.5002 6.90333 12.7606 7.17778 11.9786 7.17778C10.1189 7.17778 8.59738 5.65778 8.59738 3.8C8.59738 2.72333 9.1257 1.75222 9.90762 1.14C9.88649 1.14 9.86535 1.11889 9.86535 1.11889C9.65402 0.443333 9.08343 0 8.38605 0C7.68866 0 7.11807 0.443333 6.90674 1.11889C4.58212 1.9 2.89148 3.99 2.70128 6.41778L2.36316 10.7878C2.34202 11.1678 2.13069 11.78 1.9405 12.0967L1.15858 13.3422C0.73592 14.0178 0.672521 14.6933 0.968382 15.2211C1.26424 15.7489 1.8771 16.0444 2.68015 16.0444H8.38605H14.1131C14.9161 16.0444 15.529 15.7489 15.8248 15.2211C16.1207 14.6933 16.0362 14.0178 15.6135 13.3422Z"
            fill="#E5E5E5"
          />
          <path
            d="M12.5768 6.08025C14.0412 6.08025 15.2393 4.88325 15.2393 3.42025C15.2393 1.95725 14.0412 0.760254 12.5768 0.760254C11.1124 0.760254 9.91431 1.95725 9.91431 3.42025C9.91431 4.88325 11.1124 6.08025 12.5768 6.08025Z"
            fill="#FE2C89"
          />
        </svg>
      </div>
      {!!notifications.length && (
        <div className={classes.list}>
          {notifications.map(({ text, link }, index) => (
            <div className={classes.item} key={text}>
              <div className={classes.close} onClick={() => handleClose(index)}>
                <CloseIcon />
              </div>
              <div className={classes.text}>{text}</div>
              <a className={classes.link} href={link}>
                Подробнее
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
