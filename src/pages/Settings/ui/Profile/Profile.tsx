import { Form, Formik } from "formik";

import { Button } from "shared/ui/Button/Button";
import { FormikField } from "shared/ui/FormikField/FormikField";
import { FormikUpload } from "shared/ui/FormikUpload/FormikUpload";

import classes from "./Profile.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useEffect, useState } from "react";
import { changeUserProfile } from "http/userAPI";
import useAppDispatch from "hooks/useAppDispatch";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { showAlertDanger, showAlertSuccess } from "reducers/thunks";
import { setUser } from "reducers/siteReducer";
import { User } from "shared/types/Common";


interface FormValues {
  name: string;
  photo: string;
}


export const Profile = () => {

  const user = useSelector((state : RootState) => state.site.user);

  const dispatch = useAppDispatch();

  const handleSubmit = async (values : FormValues) => {

    const { name, photo } = values;

    try {
      let data = await changeUserProfile(name, photo);
      if (data.result) {
        let decodedToken = jwtDecode<JwtPayload>(data.token);
        let user = decodedToken as User;

        dispatch(setUser(user)) ;
        dispatch(showAlertSuccess("Данные успешно изменены!"));
      } else {
        data.error = data.error ?? "Ошибка";
        dispatch(showAlertDanger(data.error));
      }
    } catch (e) {
      dispatch(showAlertDanger("Неизвестная ошибка, попробуйте снова."));
    }

  }

  
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
    return (
      <div className={classes.profile}>
        <Formik 
          initialValues={initialValues} 
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <Form>
            <div className={classes.fields}>
              <FormikField
                className={classes.input}
                name="name"
                placeholder="Имя Фамилия"
              />
            </div>
            <div className={classes.bottom}>
              <FormikUpload className={classes.upload} name="photo" />
              <Button className={classes.button} type="submit">
                Сохранить
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }

  return (<></>);
};
