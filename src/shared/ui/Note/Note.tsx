import clsx from "clsx";

import NoteIcon from "../../assets/icons/note.svg?react";

import classes from "./Note.module.scss";

interface NoteProps {
  title: string;
  text: string;
  className?: string;
}

export const Note: React.FC<NoteProps> = (props) => {
  const { text, title, className = "" } = props;

  return (
    <div className={clsx(classes.note, className)}>
      <div className={classes.icon}>
        <NoteIcon />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.text}>{text}</div>
      </div>
    </div>
  );
};
