import clsx from "clsx";

import { Button } from "shared/ui/Button/Button";

import classes from "./ReportBug.module.scss";
import { useState } from "react";
import { FoundErrorModal } from "../FoundErrorModal/FoundErrorModal";

interface ReportBugProps {
  className?: string;
}

export const ReportBug: React.FC<ReportBugProps> = (props) => {
  const { className = "" } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={clsx(classes.report, className)}>
      <div className={classes.body}>
        <Button className={classes.button} onClick={() => setOpen(true)}>
          сообщить об ошибке
        </Button>
        <FoundErrorModal isOpen={isOpen} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};
