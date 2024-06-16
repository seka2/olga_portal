import classes from "./AlertDanger.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const AlertDanger = () => {

  const alert_danger = useSelector((state: RootState) => state.site.alert_danger);
  const alert_danger_message = useSelector((state: RootState) => state.site.alert_danger_message);

  if (alert_danger) {
    return (
      <div className={classes.alert}>
        { alert_danger_message }
      </div>
    );
  }

  return null;
};
