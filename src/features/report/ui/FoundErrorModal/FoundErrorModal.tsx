import { Formik, Form } from "formik";

import { Modal } from "shared/ui/Modal/Modal";

import classes from "./FoundErrorModal.module.scss";
import { FormikField } from "shared/ui/FormikField/FormikField";
import { Button } from "shared/ui/Button/Button";
import { FormikCheckbox } from "shared/ui/FormikCheckbox/FormikCheckbox";
import { FormikAttach } from "shared/ui/FormikAttach/FormikAttach";

interface FoundErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialValues = {
  message: "",
  file: "",
  policy: false,
};

export const FoundErrorModal: React.FC<FoundErrorModalProps> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classes.modal}>
      <div className={classes.title}>Нашли ошибку?</div>
      <div className={classes.subtitle}>
        Подробно опишите ошибку или прикрепите скриншот экрана
      </div>
      <Formik initialValues={initialValues} onSubmit={console.log}>
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
