import BackIcon from "shared/assets/icons/back.svg?react";
import CloseIcon from "shared/assets/icons/close-lg.svg?react";
import { Logo } from "shared/ui/Logo/Logo";

import classes from "./AuthMobileForm.module.scss";
import { ProgressBar } from "shared/ui/ProgressBar/ProgressBar";

interface AuthMobileFormProps {
  selectedIndex: number;
  onClose: () => void;
  children: JSX.Element;
}

export const AuthMobileForm: React.FC<AuthMobileFormProps> = (props) => {
  const { selectedIndex, onClose, children } = props;

  const isRegistration = selectedIndex === 1;

  return (
    <div className={classes.box}>
      <div className={classes.header}>
        <span onClick={onClose}>
          <BackIcon />
        </span>
        <span onClick={onClose}>
          <CloseIcon />
        </span>
        {isRegistration && (
          <ProgressBar className={classes.progress} value={50} />
        )}
      </div>
      {children}
      <div className={classes.footer}>
        <Logo />
      </div>
    </div>
  );
};
