/* eslint-disable react-hooks/rules-of-hooks */
import clsx from "clsx";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

import BackIcon from "shared/assets/icons/back.svg?react";
import CloseIcon from "shared/assets/icons/close-lg.svg?react";
import { Button } from "shared/ui/Button/Button";
import { Logo } from "shared/ui/Logo/Logo";

import confirmImage from "./assets/confirm-bg.png";
import classes from "./ConfirmPhone.module.scss";
import { AccountCreatedSuccessfully } from "./ui/AccountCreatedSuccessfully/AccountCreatedSuccessfully";
import { ProgressBar } from "shared/ui/ProgressBar/ProgressBar";

export const ConfirmPhone = () => {
  const [isCreated, setCreated] = useState(false);
  const [codes, setCodes] = useState(Array(6).fill(""));
  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef<HTMLInputElement | null>(null));
  const isMobile = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const newCodes = [...codes];
      newCodes[index] = value;

      setCodes(newCodes);

      if (value && index < 5 && inputRefs[index + 1]?.current) {
        inputRefs[index + 1]?.current?.focus();
      }
    };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const handleBack = () => navigate("/auth");

  const handleConfirm = () => {
    console.log("codes: ", codes.join(""));
    setCreated(true);
  };

  const progressBar = <ProgressBar className={classes.progress} value={100} />;

  if (isCreated) {
    return <AccountCreatedSuccessfully />;
  }

  return (
    <div className={classes.confirm}>
      <div className={classes.image}>
        <Logo className={classes.logo} />
        <img
          className={classes.img}
          src={confirmImage}
          alt="confirm phone number"
        />
      </div>
      {isMobile && (
        <div className={classes.header}>
          <span onClick={handleBack}>
            <BackIcon />
          </span>
          <span onClick={handleBack}>
            <CloseIcon />
          </span>
          {progressBar}
        </div>
      )}
      <div className={classes.body}>
        <form className={classes.form}>
          <div className={classes.title}>Подтвердите свой номер телефона</div>
          <div className={classes.subtitle}>
            Мы отправили 6-ти значный код на номер +8 888 670 99 02
          </div>
          <div className={classes.inputs}>
            {codes.map((code, index) => (
              <div
                className={clsx(classes.input, code && classes.hasValue)}
                key={index}
              >
                <input
                  key={index}
                  ref={inputRefs[index]}
                  className={classes.number}
                  type="text"
                  maxLength={1}
                  value={code}
                  onChange={handleChange(index)}
                  onKeyPress={handleKeyPress}
                />
              </div>
            ))}
          </div>
          {isMobile && (
            <div className={classes.resend}>
              Не пришел код? <span>Отправить заново</span>
            </div>
          )}
          <Button className={classes.button} onClick={handleConfirm}>
            Подтвердить
          </Button>
          {!isMobile && progressBar}
        </form>
      </div>
    </div>
  );
};
