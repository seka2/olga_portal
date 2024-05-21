import { Form, Formik } from "formik";

import DepositIcon from "shared/assets/icons/deposit.svg?react";
import { Button } from "shared/ui/Button/Button";
import { Note } from "shared/ui/Note/Note";

import { DepositRange } from "../DepositRange/DepositRange";

import classes from "./Deposit.module.scss";

const initialValues = {
  depositAmount: "",
  riskRatio: "",
};

export const Deposit = () => {
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
                  <input type="text" className={classes.input} />
                </div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.number}>2</div>
              <div className={classes.coefficient}>
                <div className={classes.label}>Укажите коэффициент риска</div>
                <div className={classes.slider}>
                  <DepositRange />
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
                        Риск на сделку = <span>0.5-2.0%</span>
                      </li>
                      <li>
                        Потенциальная просадка = <span>±15%</span>
                      </li>
                      <li>
                        Использование кредитного плеча = <span>Да</span>
                      </li>
                    </ul>
                  </div>
                  <div className={classes.el}>
                    <div className={classes.title}>
                      Расчетная доходность в следующие 12 месяцев
                    </div>
                    <ul className={classes.options}>
                      <li>
                        2020 год <span>+78%</span>
                      </li>
                      <li>
                        2021 год <span>+98%</span>
                      </li>
                      <li>
                        2022 год <span>+143%</span>
                      </li>
                      <li>
                        2023 год <span>+635%</span>
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
          <Button className={classes.button} type="submit">
            Сохранить
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
