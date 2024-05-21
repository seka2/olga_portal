import DotsImage from "shared/assets/icons/dots-vertical.svg?react";

import classes from "./User.module.scss";

interface UserProps {
  name: string;
  email: string;
  avatarUrl: string;
}

export const User: React.FC<UserProps> = (props) => {
  const { name, email, avatarUrl } = props;

  return (
    <div className={classes.user}>
      <div className={classes.actions}>
        <DotsImage />
      </div>
      <div className={classes.avatar}>
        <img src={avatarUrl} alt={name} />
      </div>
      <div className={classes.name}>{name}</div>
      <a className={classes.email} href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
};
