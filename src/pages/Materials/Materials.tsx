import { useMediaQuery } from "usehooks-ts";

import { MaterialsList } from "widgets/MaterialsList";

import classes from "./Materials.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useEffect, useState } from "react";
import { getMaterial } from "http/siteApi";
import { useParams } from "react-router-dom";
import useAppDispatch from "hooks/useAppDispatch";
import { setSelectedMaterialId } from "reducers/siteReducer";

export const Materials = () => {
  const isTablet = useMediaQuery("(max-width: 992px)");

  let { id } = useParams();

  const dispatch = useAppDispatch();

  const selectedMaterialId = useSelector((state: RootState) => state.site.selectedMaterialId);

  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const __load_async_material = async() => {
    setTitle('');
    setText('Данные загружаются...');
    try {
      let data = await getMaterial(selectedMaterialId);
      if (data.result) {
        if (data.text) setText(data.text);
        if (data.title) setTitle(data.title);
      }
    } catch (e) {

    }
  }

  useEffect(() => {
    __load_async_material();
  }, [selectedMaterialId]);

  useEffect(() => {
    if (id == undefined) id = "1008";
    dispatch(setSelectedMaterialId(parseFloat(id)));
  }, [id]);

  return (
    <div className={classes.materials}>
      <div className="container">
        <div className={classes.body}>
          <h1 className={classes.title}>{ title }</h1>
          <div className={classes.content}>
            <div> 
              <div
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          </div>
          {isTablet && <MaterialsList className={classes.materialsList} />}
        </div>
      </div>
    </div>
  );
};
