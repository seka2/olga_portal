import { InfoCard } from "entities/info";

import classes from "./HelpfulInfo.module.scss";
import { useEffect, useState } from "react";
import { getFreeAnalytics, getFreeEducation } from "http/siteApi";

export const HelpfulInfo = () => {

  const [analytics, setAnalytics] = useState([]);
  const [materials, setMaterials] = useState([]);

  const __load_async = async() => {

    let analyticsData = await getFreeAnalytics();
    setAnalytics(analyticsData);
    
    let educationData = await getFreeEducation();
    setMaterials(educationData);
    
  }

  useEffect(() => {
    __load_async();
  }, []);

  return (
    <div className={classes.help}>
      <h2 className={classes.title}>Полезная информация</h2>
      <div className={classes.items}>
        <InfoCard
          title="Бесплатная аналитика"
          list={analytics}
          more={"https://wise-olga.ru/analytics"}
        />
        <InfoCard
          title="Обучающие материалы"
          list={materials}
          more={"https://wise-olga.ru/training-materials"}
        />
      </div>
    </div>
  );
};
