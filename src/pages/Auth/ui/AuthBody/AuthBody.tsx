import { Logo } from "shared/ui/Logo/Logo";

import authorizationImage from "../../assets/authorization.png";
import registrationImage from "../../assets/registration.png";

import classes from "./AuthBody.module.scss";

interface AuthBodyProps {
  selectedIndex: number;
  children: JSX.Element;
}

export const AuthBody: React.FC<AuthBodyProps> = (props) => {
  const { selectedIndex, children } = props;

  return (
    <>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url('${
            selectedIndex === 0 ? registrationImage : authorizationImage
          }')`,
        }}
      >
        <Logo className={classes.logo} />
      </div>
      <div className={classes.body}>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};
