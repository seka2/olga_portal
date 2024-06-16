import classes from "./AlertSuccess.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const AlertSuccess = () => {

  const alert_success = useSelector((state: RootState) => state.site.alert_success);
  const alert_success_message = useSelector((state: RootState) => state.site.alert_success_message);

  if (alert_success) {
    return (
      <div className={classes.alert}>
        { alert_success_message }
      </div>
    );
  }

  return null;
};
