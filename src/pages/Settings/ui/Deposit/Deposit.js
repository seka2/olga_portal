import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, Formik } from "formik";
import DepositIcon from "shared/assets/icons/deposit.svg?react";
import { Button } from "shared/ui/Button/Button";
import { Note } from "shared/ui/Note/Note";
import { DepositRange } from "../DepositRange/DepositRange";
import classes from "./Deposit.module.scss";
import { useSelector } from "react-redux";
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
    const user = useSelector((state) => state.site.user);
    const [risk, setRisk] = useState(user.deposit_risk_12 ?? 1);
    const [deposit, setDeposit] = useState(user.deposit_amount_12 ?? '');
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
    };
    const [calcParams, setCalcParams] = useState(defaultData);
    const changeRisk = (value) => {
        setRisk(value);
    };
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
                dispatch(setUser(user));
                dispatch(showAlertSuccess("Сохранено!"));
            }
            else {
                data.error = data.error ?? "Ошибка";
                dispatch(showAlertDanger(data.error));
            }
        }
        catch (e) {
            dispatch(showAlertDanger("Неизвестная ошибка, попробуйте снова."));
        }
    };
    return (_jsx("div", { className: classes.deposit, children: _jsx(Formik, { initialValues: initialValues, onSubmit: console.log, children: _jsxs(Form, { className: classes.form, children: [_jsxs("div", { className: classes.items, children: [_jsxs("div", { className: classes.item, children: [_jsx("div", { className: classes.number, children: "1" }), _jsxs("div", { className: classes.size, children: [_jsx("div", { className: classes.label, children: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430" }), _jsxs("div", { className: classes.field, children: [_jsx("div", { className: classes.icon, children: _jsx(DepositIcon, {}) }), _jsx("input", { type: "text", value: deposit, className: classes.input, onChange: (e) => setDeposit(e.target.value) })] })] })] }), _jsxs("div", { className: classes.item, children: [_jsx("div", { className: classes.number, children: "2" }), _jsxs("div", { className: classes.coefficient, children: [_jsx("div", { className: classes.label, children: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0440\u0438\u0441\u043A\u0430" }), _jsx("div", { className: classes.slider, children: _jsx(DepositRange, { risk: risk, changeRisk: changeRisk }) })] })] }), _jsxs("div", { className: classes.item, children: [_jsx("div", { className: classes.number, children: "3" }), _jsx("div", { className: classes.content, children: _jsxs("div", { className: classes.list, children: [_jsxs("div", { className: classes.el, children: [_jsx("div", { className: classes.title, children: "\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0441\u0434\u0435\u043B\u043E\u043A" }), _jsxs("ul", { className: classes.options, children: [_jsxs("li", { children: ["\u0420\u0438\u0441\u043A \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443 = ", _jsxs("span", { children: [prettyNumber10(calcParams.risk1), "-", prettyNumber10(calcParams.risk2), "%"] })] }), _jsxs("li", { children: ["\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0441\u0430\u0434\u043A\u0430 = ", _jsxs("span", { children: ["\u00B1", prettyNumber10(calcParams.dropdown), "%"] })] }), _jsxs("li", { children: ["\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0433\u043E \u043F\u043B\u0435\u0447\u0430 = ", _jsx("span", { children: calcParams.credit == 1 ? "Да" : "Нет" })] })] })] }), _jsxs("div", { className: classes.el, children: [_jsx("div", { className: classes.title, children: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u0430\u044F \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432" }), _jsxs("ul", { className: classes.options, children: [_jsxs("li", { children: ["2020 \u0433\u043E\u0434 ", _jsxs("span", { children: ["+", calcParams.year_2020, "%"] })] }), _jsxs("li", { children: ["2021 \u0433\u043E\u0434 ", _jsxs("span", { children: ["+", calcParams.year_2021, "%"] })] }), _jsxs("li", { children: ["2022 \u0433\u043E\u0434 ", _jsxs("span", { children: ["+", calcParams.year_2022, "%"] })] }), _jsxs("li", { children: ["2023 \u0433\u043E\u0434 ", _jsxs("span", { children: ["+", calcParams.year_2023, "%"] })] })] })] })] }) })] })] }), _jsx(Note, { className: classes.note, title: "\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435", text: "\u0414\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0430\u0440\u0445\u0438\u0432\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0434\u0435\u043B\u043E\u043A \u0441 2020 \u0433\u043E\u0434\u0430, \u0443\u043C\u043D\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0440\u0438\u0441\u043A\u0430." }), _jsx(Button, { className: classes.button, type: "submit", onClick: handleSubmit, children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" })] }) }) }));
};
