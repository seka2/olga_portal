import { Link } from "react-router-dom";

import LogoImage from "shared/assets/icons/logo.svg?react";
import LogoImageMobile from "shared/assets/icons/logo-mobile.svg?react";

interface LogoProps {
  menuOpen?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
  const { menuOpen = true, className = "" } = props;

  return (
    <Link className={className} to="/">
      {menuOpen ? <LogoImage /> : <LogoImageMobile />}
    </Link>
  );
};
