import clsx from "clsx";
import classes from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  color?: "primary" | "info";
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    color = "primary",
    className = "",
    onClick,
    type = "button",
    variant = "primary",
  } = props;

  return (
    <button
      type={type}
      className={clsx(
        classes.button,
        classes[color],
        classes[variant],
        className
      )}
      onClick={onClick && onClick}
    >
      {children}
    </button>
  );
};
