import clsx from "clsx";

import SubscriptionScheduleIcon from "shared/assets/icons/subscription-schedule.svg?react";
import JoinedIcon from "shared/assets/icons/joined.svg?react";
import PaybackIcon from "shared/assets/icons/payback.svg?react";
import SubscriptionIcon from "shared/assets/icons/subscription.svg?react";

import classes from "./ServiceInfo.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface ServiceInfoProps {
  className?: string;
}

export const ServiceInfo: React.FC<ServiceInfoProps> = ({ className = "" }) => {

  const stat = useSelector((state: RootState) => state.site.stat);

  return (
    <div className={clsx(classes.service, className)}>
      <h2 className={classes.title}>Информация о сервисе</h2>
      <div className={classes.list}>
        <div className={classes.item}>
          <div className={classes.icon}>
            <JoinedIcon />
          </div>
          <div className={classes.subtitle}>
            <span>Вы присоединились</span> к сервису
          </div>
          <div className={classes.value}>{ stat?.subscribe?.start }</div>
        </div>
        <div className={classes.item}>
          <div className={classes.icon}>
            <PaybackIcon />
          </div>
          <div className={classes.subtitle}>
            <span>Окупаемость</span> сервиса составила
          </div>
          <div className={classes.value}>{ stat?.subscribe?.payback }</div>
        </div>
        <div className={classes.item}>
          <div className={classes.icon}>
            <SubscriptionIcon />
          </div>
          <div className={classes.subtitle}>
            <span>Подписка </span> завершается
          </div>
          <div className={classes.value}>{ stat?.subscribe?.end }</div>
        </div>
        <a href="https://wise-olga.ru/invest" target="_blank">
          <div className={classes.info}>
            <span>Продлить подписку</span>
            <SubscriptionScheduleIcon />
          </div>
        </a>
      </div>
    </div>
  );
};
