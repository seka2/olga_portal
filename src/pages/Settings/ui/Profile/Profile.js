import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Form, Formik } from "formik";
import { Button } from "shared/ui/Button/Button";
import { FormikField } from "shared/ui/FormikField/FormikField";
import { FormikUpload } from "shared/ui/FormikUpload/FormikUpload";
import classes from "./Profile.module.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeUserProfile } from "http/userAPI";
import useAppDispatch from "hooks/useAppDispatch";
import { jwtDecode } from "jwt-decode";
import { showAlertDanger, showAlertSuccess } from "reducers/thunks";
import { setUser } from "reducers/siteReducer";
export const Profile = () => {
    const user = useSelector((state) => state.site.user);
    const dispatch = useAppDispatch();
    const handleSubmit = async (values) => {
        const { name, photo } = values;
        try {
            let data = await changeUserProfile(name, photo);
            if (data.result) {
                let user = jwtDecode(data.token);
                dispatch(setUser(user));
                dispatch(showAlertSuccess("Данные успешно изменены!"));
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
    const [initialValues, setInitialValues] = useState({
        name: "",
        photo: "",
    });
    useEffect(() => {
        if (user) {
            setInitialValues({
                name: user.name || "",
                photo: user.photo || "",
            });
        }
    }, [user]);
    if (user && user.email != '') {
        return (_jsx("div", { className: classes.profile, children: _jsx(Formik, { initialValues: initialValues, onSubmit: handleSubmit, enableReinitialize: true, children: _jsxs(Form, { children: [_jsx("div", { className: classes.fields, children: _jsx(FormikField, { className: classes.input, name: "name", placeholder: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F" }) }), _jsxs("div", { className: classes.bottom, children: [_jsx(FormikUpload, { className: classes.upload, name: "photo" }), _jsx(Button, { className: classes.button, type: "submit", children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" })] })] }) }) }));
    }
    return (_jsx(_Fragment, {}));
};
