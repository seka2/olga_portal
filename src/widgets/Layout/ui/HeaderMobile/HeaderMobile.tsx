import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import BurgerIcon from "shared/assets/icons/burger.svg?react";
import CloseIcon from "shared/assets/icons/close.svg?react";
import PhoneIcon from "shared/assets/icons/phone.svg?react";

import { HeaderSearch } from "../HeaderSearch/HeaderSearch";
import { Notifications } from "../Notifications/Notifications";
import { menu } from "../Sidebar/Sidebar";

import classes from "./HeaderMobile.module.scss";

export const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={classes.header}>
      <div
        className={classes.burger}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        {openMenu ? <CloseIcon /> : <BurgerIcon />}
        <span className={classes.text}>Меню</span>
      </div>
      {openMenu && (
        <div className={classes.menu}>
          {menu.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                isActive ? clsx(classes.item, classes.active) : classes.item
              }
              onClick={() => setOpenMenu(false)}
            >
              <span className={classes.icon}>{item.icon}</span>
              <span className={classes.text}>{item.title}</span>
            </NavLink>
          ))}
        </div>
      )}
      <div className={classes.content}>
        <HeaderSearch className={classes.search} />
        <Notifications className={classes.notifications} />
        <a className={classes.phone} href="tel:88003203040">
          <PhoneIcon />
        </a>
      </div>
    </div>
  );
};
