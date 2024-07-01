import clsx from "clsx";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Added useNavigate
import { useDrag } from "react-use-gesture"; // TODO: @use-gesture/react

import AnalyticsImage from "shared/assets/icons/analytics.svg?react";
import DesktopImage from "shared/assets/icons/desktop.svg?react";
import ExitImage from "shared/assets/icons/exit.svg?react";
import FaqImage from "shared/assets/icons/faq.svg?react";
import MaterialsImage from "shared/assets/icons/materials.svg?react";
import SettingsImage from "shared/assets/icons/settings.svg?react";
import TransactionsImage from "shared/assets/icons/transactions.svg?react";
import { Logo } from "shared/ui/Logo/Logo";
import { MaterialsList } from "widgets/MaterialsList";

import { User } from "../User/User";

import classes from "./Sidebar.module.scss";
import useAppDispatch from "hooks/useAppDispatch";
import { setAuthStep, setEmail, setIsAuth, setPassword } from "reducers/siteReducer";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const menu = [
  { icon: <DesktopImage />, title: "Рабочий стол", path: "/" },
  { icon: <AnalyticsImage />, title: "Аналитика", path: "/analytics" },
  { icon: <TransactionsImage />, title: "Сделки", path: "/transactions" },
  { icon: <MaterialsImage />, title: "Доп. материалы", path: "/materials" },
  { icon: <FaqImage />, title: "FAQ", path: "/FAQ" },
  { icon: <SettingsImage />, title: "Настройки", path: "/settings" },
];

interface SidebarProps {
  secondary?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { secondary } = props;
  const navigate = useNavigate(); // Hook to programmatically navigate

  const dispatch = useAppDispatch();

  const [menuOpen, setMenuOpen] = useState(true);

  const user = useSelector((state: RootState) => state.site.user);

  const bind = useDrag(({ offset }) => {
    if (offset[0]) {
      setMenuOpen(offset[0] > 0);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setEmail(""));
    dispatch(setPassword(""));
    dispatch(setAuthStep(1));
    dispatch(setIsAuth(false));
    navigate('/auth');
  };

  return (
    <div
      className={clsx(classes.sidebar, !secondary && !menuOpen && classes.open)}
    >
      <div className={classes.top}>
        <Logo menuOpen={secondary ? true : menuOpen} />
        {!secondary && (
          <div className={classes.user}>
            <User
              name={user.name}
              email={user.email}
              avatarUrl={user.photo}
            />
          </div>
        )}
      </div>
      <div className={classes.body}>
        {secondary ? (
          <MaterialsList className={classes.materials} />
        ) : (
          <div className={classes.menu}>
            <div className={classes.swipe} {...bind()} />
            {menu.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? clsx(classes.item, classes.active) : classes.item
                }
              >
                <span className={classes.icon}>{item.icon}</span>
                <span className={classes.text}>{item.title}</span>
              </NavLink>
            ))}
            <div
              className={classes.item}
              onClick={handleLogout}
            >
              <span className={classes.icon}><ExitImage /></span>
              <span className={classes.text}>Выйти</span>
            </div>
          </div>
        )}
      </div>

      <div className={classes.info}>
        {secondary && (
          <Link to="/" className={classes.desktop}>
            <DesktopImage />
            <span>На рабочий стол</span>
          </Link>
        )}
        <a className={classes.link} href="tel:88003500857">
          8 (800) 350-08-57
        </a>
        <a className={classes.link} href="mailto:support@wise-olga.ru">
          support@wise-olga.ru
        </a>
      </div>
    </div>
  );
};
