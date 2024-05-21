import classes from "./IndicatorsNumber.module.scss";

interface IndicatorsNumberProps {
  value: string;
  title: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  label?: string;
}

export const IndicatorsNumber: React.FC<IndicatorsNumberProps> = (props) => {
  const { title, value, label, Icon } = props;

  return (
    <div className={classes.number}>
      <div className={classes.value}>
        {value}
        {label && <span className={classes.label}>{label}</span>}
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.icon}>
        <Icon />
      </div>
    </div>
  );
};
