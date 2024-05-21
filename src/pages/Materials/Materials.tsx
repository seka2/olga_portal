import { useMediaQuery } from "usehooks-ts";

import { MaterialsList } from "widgets/MaterialsList";

import classes from "./Materials.module.scss";

export const Materials = () => {
  const isTablet = useMediaQuery("(max-width: 992px)");

  return (
    <div className={classes.materials}>
      <div className="container">
        <div className={classes.body}>
          <h1 className={classes.title}>Дополнительные материалы</h1>
          <div className={classes.content}>
            <div className={classes.subtitle}>
              Открытый разбор с подписчиками канала. 23.01.2024г.
            </div>
            <div className={classes.caption}>Ключевые вопросы встречи:</div>
            <ul className={classes.list}>
              <li>Индекс ММВБ</li>
              <li>Мосбиржа</li>
              <li>АФК Система</li>
              <li>Банк СПБ</li>
              <li>ВТБ</li>
              <li>Роснефть</li>
              <li>Газпром</li>
              <li>ДВМП</li>
              <li>Алроса</li>
              <li> VKCO</li>
              <li> ФСК Россети</li>
            </ul>
            <div className={classes.text}>
              Видео доступно по ссылке
              <a href="#" target="_blank">
                https://www.youtube.com/live/dnjBjhNXvCw?si=bYpdIFhBln8s_llg
              </a>
            </div>
          </div>
          {isTablet && <MaterialsList className={classes.materialsList} />}
        </div>
      </div>
    </div>
  );
};
