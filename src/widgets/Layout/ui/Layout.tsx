import clsx from "clsx";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

import { Header } from "./Header/Header";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { Help } from "./Help";
import classes from "./Layout.module.scss";
import { Sidebar } from "./Sidebar/Sidebar";

interface LayoutProps {
  secondary?: boolean;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { secondary } = props;

  const isTablet = useMediaQuery("(max-width: 992px)");

  return (
    <div className={clsx(classes.layout, secondary && classes.secondary)}>
      <Sidebar secondary={secondary} />
      <div className={classes.body}>
        {isTablet ? <HeaderMobile /> : <Header />}
        <Outlet />
        <Help />
      </div>
    </div>
  );
};
