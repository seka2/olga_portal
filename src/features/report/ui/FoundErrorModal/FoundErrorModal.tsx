import { Formik, Form } from "formik";

import { Modal } from "shared/ui/Modal/Modal";

import classes from "./FoundErrorModal.module.scss";
import { FormikField } from "shared/ui/FormikField/FormikField";
import * as Yup from 'yup';
import { Button } from "shared/ui/Button/Button";
import { FormikCheckbox } from "shared/ui/FormikCheckbox/FormikCheckbox";
import { FormikAttach } from "shared/ui/FormikAttach/FormikAttach";
import { sendMistake } from "http/siteApi";
import { showAlertDanger, showAlertSuccess } from "reducers/thunks";
import useAppDispatch from "hooks/useAppDispatch";

interface FoundErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}


interface FormValues {
  message: string;
  file: string;
  policy: boolean;
}

const initialValues: FormValues = {
  message: "",
  file: "",
  policy: false,
};

export const FoundErrorModal: React.FC<FoundErrorModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const dispatch = useAppDispatch();

  const handleSubmit = async (values : FormValues) => {

    const { message, file } = values;

    console.log("handleSubmit");
    console.log(values);

    try {
      let data = await sendMistake(message, file);
      if (data.result) {
        
        dispatch(showAlertSuccess("Данные успешно отправлены. Спасибо за обратную связь!"));
      } else {
        data.error = data.error ?? "Ошибка";
        dispatch(showAlertDanger(data.error));
      }
    } catch (e) {
      dispatch(showAlertDanger("Неизвестная ошибка, попробуйте снова."));
    }

    onClose();

  }


  const validationSchema = Yup.object({
    message: Yup.string().required("Необходимо заполнить текст сообщения."),
    file: Yup.mixed().nullable(),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classes.modal}>
      <div className={classes.title}>Нашли ошибку?</div>
      <div className={classes.subtitle}>
        Подробно опишите ошибку или прикрепите скриншот экрана
      </div>
      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormikField name="message" className={classes.textarea} isTextarea />
          <FormikAttach name="file" className={classes.upload} />
          <FormikCheckbox
            name="policy"
            className={classes.checkbox}
            label="Нажимая кнопку «Отправить», я соглашаюсь с <a href='#'>политикой конфиденциальности</a>"
          />
          <Button className={classes.button} type="submit">
            отправить
          </Button>
        </Form>
      </Formik>
    </Modal>
  );
};
