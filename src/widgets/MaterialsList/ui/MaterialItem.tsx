import DateIcon from "shared/assets/icons/date.svg?react";

import classes from "./MaterialItem.module.scss";
import { setSelectedMaterialId } from "reducers/siteReducer";
import useAppDispatch from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface MaterialItemProps {
  title?: string;
  list: MaterialItem[];
}

export type MaterialItem = {
  date: string;
  name: string;
  id: number;
};

export const MaterialItem: React.FC<MaterialItemProps> = (props) => {

  const { title, list } = props;

  const dispatch = useAppDispatch();

  const chooseMaterial = (id: number) => {
    dispatch(setSelectedMaterialId(id));
  }

  const selectedMaterialId = useSelector((state: RootState) => state.site.selectedMaterialId);

  return (
    <div className={classes.material}>
      {title && <div className={classes.title}>{title}</div>}
      <div className={classes.list}>
        {list.map(({ date, id, name }, index) => (
          <div className={selectedMaterialId == id ? classes.item_active : classes.item} key={index.toString()} onClick={() => chooseMaterial(id)}>
            { false && <div className={classes.date}>
              <DateIcon />
              <span>{date}</span>
            </div> }
            <div className={classes.name}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
