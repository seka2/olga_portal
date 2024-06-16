import { Form, Formik } from "formik";

import DepositIcon from "shared/assets/icons/deposit.svg?react";
import { Button } from "shared/ui/Button/Button";
import { Note } from "shared/ui/Note/Note";

import { DepositRange } from "../DepositRange/DepositRange";

import classes from "./Deposit.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useEffect, useState } from "react";
import { prettyNumber, prettyNumber10 } from "consts/functions";
import useAppDispatch from "hooks/useAppDispatch";
import { changeUserDeposit } from "http/userAPI";
import { jwtDecode } from "jwt-decode";
import { setUser } from "reducers/siteReducer";
import { showAlertDanger, showAlertSuccess } from "reducers/thunks";

const initialValues = {
  depositAmount: "",
  riskRatio: "",
};

export const Deposit = () => {

  const dispatch = useAppDispatch();

  const user = useSelector((state: RootState) => state.site.user);

  const [ risk, setRisk ] = useState(user.deposit_risk_12 ?? 1);
  const [ deposit, setDeposit ] = useState(user.deposit_amount_12 ?? '');
  
  useEffect(() => {
    setRisk(user.deposit_risk_12);
  }, [user]);

  const defaultData = {
    risk1: 0.5,
    risk2: 2,
    dropdown: 15,
    credit: 1,
    year_2020: 78,
    year_2021: 98,
    year_2022: 143,
    year_2023: 635,
  }

  const [calcParams, setCalcParams] = useState(defaultData);

  const changeRisk = (value: number) => {
    setRisk(value);
  }

  useEffect(() => {
    setCalcParams({
      risk1: prettyNumber(defaultData.risk1 * risk),
      risk2: prettyNumber(defaultData.risk2 * risk),
      dropdown: prettyNumber(defaultData.dropdown * risk),
      credit: prettyNumber(risk == 0.3 ? 0 : 1),
      year_2020: prettyNumber(defaultData.year_2020 * risk),
      year_2021: prettyNumber(defaultData.year_2021 * risk),
      year_2022: prettyNumber(defaultData.year_2022 * risk),
      year_2023: prettyNumber(defaultData.year_2023 * risk),
    });
  }, [risk]);


  const handleSubmit = async () => {

    try {
      let data = await changeUserDeposit(deposit, risk);
      if (data.result) {
        let user = jwtDecode(data.token);
        dispatch(setUser(user)) ;
        dispatch(showAlertSuccess("Сохранено!"));
      } else {
        data.error = data.error ?? "Ошибка";
        dispatch(showAlertDanger(data.error));
      }
    } catch (e) {
      dispatch(showAlertDanger("Неизвестная ошибка, попробуйте снова."));
    }

  }


  return (
    <div className={classes.deposit}>
      <Formik initialValues={initialValues} onSubmit={console.log}>
        <Form className={classes.form}>
          <div className={classes.items}>
            <div className={classes.item}>
              <div className={classes.number}>1</div>
              <div className={classes.size}>
                <div className={classes.label}>Укажите размер депозита</div>
                <div className={classes.field}>
                  <div className={classes.icon}>
                    <DepositIcon />
                  </div>
                  <input type="text" value={ deposit } className={classes.input} onChange={(e: any) => setDeposit(e.target.value)} />
                </div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.number}>2</div>
              <div className={classes.coefficient}>
                <div className={classes.label}>Укажите коэффициент риска</div>
                <div className={classes.slider}>
                  <DepositRange risk={risk} changeRisk={changeRisk} />
                </div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.number}>3</div>
              <div className={classes.content}>
                <div className={classes.list}>
                  <div className={classes.el}>
                    <div className={classes.title}>
                      Исходные параметры сделок
                    </div>
                    <ul className={classes.options}>
                      <li>
                        Риск на сделку = <span>{ prettyNumber10(calcParams.risk1) }-{ prettyNumber10(calcParams.risk2) }%</span>
                      </li>
                      <li>
                        Потенциальная просадка = <span>±{ prettyNumber10(calcParams.dropdown) }%</span>
                      </li>
                      <li>
                        Использование кредитного плеча = <span>{ calcParams.credit == 1 ? "Да" : "Нет" }</span>
                      </li>
                    </ul>
                  </div>
                  <div className={classes.el}>
                    <div className={classes.title}>
                      Расчетная доходность в следующие 12 месяцев
                    </div>
                    <ul className={classes.options}>
                      <li>
                        2020 год <span>+{ calcParams.year_2020 }%</span>
                      </li>
                      <li>
                        2021 год <span>+{ calcParams.year_2021 }%</span>
                      </li>
                      <li>
                        2022 год <span>+{ calcParams.year_2022 }%</span>
                      </li>
                      <li>
                        2023 год <span>+{ calcParams.year_2023 }%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Note
            className={classes.note}
            title="Примечание"
            text="Доходность рассчитана на основе архива исторических сделок с 2020 года, умноженный на выбранный коэффициент риска."
          />
          <Button className={classes.button} type="submit" onClick={handleSubmit}>
            Сохранить
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
