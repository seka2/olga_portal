import { HeaderSearch } from "../HeaderSearch/HeaderSearch";
import { Notifications } from "../Notifications/Notifications";

import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <div className="container">
      <div className={classes.header}>
        <HeaderSearch className={classes.search} />
        <div className={classes.info}>
          <a className={classes.phone} href="tel:88003203040">
            8 (800) 320-30-40
          </a>
          <Notifications />
        </div>
      </div>
    </div>
  );
};
