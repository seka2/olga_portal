import DotsImage from "shared/assets/icons/dots-vertical.svg?react";

import classes from "./User.module.scss";

interface UserProps {
  name: string;
  email: string;
  avatarUrl: string;
}


function truncateEmail(email: string, maxLength: number) {
  if (email.length <= maxLength) return email;

  const [localPart, domainPart] = email.split('@');
  const maxLocalLength = Math.floor((maxLength - domainPart.length - 3) / 2); // -3 for the ellipsis
  const truncatedLocal = localPart.substring(0, maxLocalLength) + '...';

  return `${truncatedLocal}@${domainPart}`;
}


export const User: React.FC<UserProps> = (props) => {
  const { name, email, avatarUrl } = props;

  return (
    <div className={classes.user}>
      <div className={classes.actions}>
        <DotsImage />
      </div>
      <div className={classes.avatar}>
        { avatarUrl != "" ? (
          <img src={avatarUrl} alt={name} />
        ) : (
          <img src={"/nopick.png"} alt={name} />
        )}
      </div>
      <div className={classes.name}>{name}</div>
      <a className={classes.email} href={`mailto:${email}`}>
        {truncateEmail(email, 20)}
      </a>
    </div>
  );
};
