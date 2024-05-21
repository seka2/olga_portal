import classes from "./Status.module.scss";

enum StatusEnum {
  IN_PROGRESS = "В работе",
  CLOSED = "Закрыта",
  CANCEL = "Отмена",
  ORDER = "Ордер",
}

export type StatusType = keyof typeof StatusEnum;

interface StatusProps {
  status: StatusType;
}

export const Status: React.FC<StatusProps> = (props) => {
  const { status } = props;

  const getStatusStyle = () => {
    if (status === "IN_PROGRESS") {
      return { color: "#14804A", background: "#E1FCEF" };
    }
    if (status === "CANCEL") {
      return { color: "#D1293D", background: "#FFCFD4" };
    }
    if (status === "CLOSED") {
      return { color: "#5A6376", background: "#E9EDF5" };
    }
    if (status === "ORDER") {
      return { color: "#C1BA14", background: "#FFFCB8" };
    }
  };

  return (
    <div className={classes.status} style={getStatusStyle()}>
      <div className={classes.dot} />
      <div className={classes.text}>{StatusEnum[status]}</div>
    </div>
  );
};
