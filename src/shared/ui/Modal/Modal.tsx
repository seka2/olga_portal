import { ReactNode } from "react";
import ReactModal from "react-modal";
import clsx from "clsx";

import CloseIcon from "shared/assets/icons/close-lg.svg?react";

import classes from "./Modal.module.scss";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}
export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, children, className } = props;

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <div className={clsx(classes.modal, className)}>
        <button className={classes.close} onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </ReactModal>
  );
};
