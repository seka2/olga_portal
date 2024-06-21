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
import { useSelector } from "react-redux";
import { RootState } from "store";
import { finishLogin, finishRegistration } from 'http/userAPI';
import useAppDispatch from "hooks/useAppDispatch";
import { setConfirmPassword, setIsAuth, setName, setPassword, setUser } from "reducers/siteReducer";
import { showAlertDanger } from "reducers/thunks";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { AlertDanger, AlertSuccess } from "widgets/Alert";
import { User } from "shared/types/Common";

export const ConfirmPhone = () => {
  const [isCreated, setCreated] = useState(false);
  const [codes, setCodes] = useState(Array(6).fill(""));
  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef<HTMLInputElement | null>(null));
  const isMobile = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const email = useSelector((state: RootState) => state.site.email);
  const password = useSelector((state: RootState) => state.site.password);
  const confirm_password = useSelector((state: RootState) => state.site.confirm_password);
  const name = useSelector((state: RootState) => state.site.name);
  const isRegistration = useSelector((state: RootState) => state.site.isRegistration);

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const newCodes = [...codes];

      if (value.length === 1) {
        newCodes[index] = value;
      } else if (value.length === 6) {
        value.split("").forEach((char, i) => {
          newCodes[i] = char;
        });
      }

      setCodes(newCodes);

      if (value.length === 6) {
        inputRefs[5]?.current?.focus();
      } else if (value && index < 5 && inputRefs[index + 1]?.current) {
        inputRefs[index + 1]?.current?.focus();
      }
    };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const newCodes = [...codes];
      if (newCodes[index] === "") {
        if (index > 0) {
          newCodes[index - 1] = "";
          inputRefs[index - 1]?.current?.focus();
        }
      } else {
        newCodes[index] = "";
      }
      setCodes(newCodes);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData('text');
    if (paste.length === 6 && /^\d+$/.test(paste)) {
      setCodes(paste.split(""));
      inputRefs[5]?.current?.focus();
      e.preventDefault();
    }
  };

  const handleBack = () => navigate("/auth");

  const handleConfirm = async () => {
    const code = codes.join("");

    if (isRegistration) {
      try {
        let data = await finishRegistration(email, password, confirm_password, name, code);
        if (data.result) {
          
          let decodedToken = jwtDecode<JwtPayload>(data.token);
          let user = decodedToken as User;

          dispatch(setPassword(""));
          dispatch(setConfirmPassword(""));
          dispatch(setName(""));
          dispatch(setIsAuth(true));
          dispatch(setUser(user)) ;
          setCreated(true);
        } else {
          data.error = data.error ?? "Ошибка";
          dispatch(showAlertDanger(data.error));
        }
      } catch (e) {
        dispatch(showAlertDanger("Неизвестная ошибка. Попробуйте снова."));
      }
    } else {
      try {
        let data = await finishLogin(email, password, code);
        if (data.result) {
          
          let decodedToken = jwtDecode<JwtPayload>(data.token);
          let user = decodedToken as User;

          dispatch(setPassword(""));
          dispatch(setIsAuth(true));
          dispatch(setUser(user)) ;
          setCreated(true);
        } else {
          data.error = data.error ?? "Ошибка";
          dispatch(showAlertDanger(data.error));
        }
      } catch (e) {
        dispatch(showAlertDanger("Неизвестная ошибка. Попробуйте снова."));
      }
    }
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
          <div className={classes.title}>Подтвердите свой email</div>
          <div className={classes.subtitle}>
            Мы отправили 6-ти значный код на Email адрес: { email }
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
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
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

      <AlertDanger/>
      <AlertSuccess/>

    </div>
  );
};
