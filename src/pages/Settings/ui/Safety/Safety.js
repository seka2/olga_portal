import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, Formik } from "formik";
import classes from "./Safety.module.scss";
import { FormikField } from "shared/ui/FormikField/FormikField";
import * as Yup from 'yup';
import { Button } from "shared/ui/Button/Button";
import { showAlertDanger, showAlertSuccess } from "reducers/thunks";
import useAppDispatch from "hooks/useAppDispatch";
import { setIsAuth, setPassword, setUser } from "reducers/siteReducer";
import { changeUserPassword } from "http/userAPI";
import { jwtDecode } from "jwt-decode";
const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
};
export const Safety = () => {
    const dispatch = useAppDispatch();
    const handleSubmit = async (values) => {
        const { currentPassword, newPassword, confirmPassword } = values;
        try {
            let data = await changeUserPassword(currentPassword, newPassword, confirmPassword);
            if (data.result) {
                let user = jwtDecode(data.token);
                dispatch(setPassword(""));
                dispatch(setIsAuth(true));
                dispatch(setUser(user));
                dispatch(showAlertSuccess("Пароль успешно изменен!"));
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
    return (_jsx("div", { className: classes.safety, children: _jsx(Formik, { initialValues: initialValues, onSubmit: handleSubmit, validationSchema: Yup.object({
                currentPassword: Yup.string()
                    .min(6, 'Длина пароля должна быть больше 5 символов')
                    .required('Необходимо заполнить'),
                newPassword: Yup.string()
                    .min(6, 'Длина пароля должна быть больше 5 символов')
                    .required('Необходимо заполнить'),
                confirmPassword: Yup.string()
                    .min(6, 'Длина пароля должна быть больше 5 символов')
                    .required('Необходимо заполнить'),
            }), children: _jsx(Form, { children: _jsxs("div", { className: classes.fields, children: [_jsx(FormikField, { type: "password", name: "currentPassword", placeholder: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", className: classes.input }), _jsx(FormikField, { type: "password", name: "newPassword", placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", className: classes.input }), _jsx(FormikField, { type: "password", name: "confirmPassword", placeholder: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", className: classes.input }), _jsx(Button, { className: classes.button, type: "submit", children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" })] }) }) }) }));
};
