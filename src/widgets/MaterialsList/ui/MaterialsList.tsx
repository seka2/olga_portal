import clsx from "clsx";
import { useEffect, useState } from "react";
import { TabPanel, Tabs } from "react-tabs";
import { useMediaQuery } from "usehooks-ts";

import { Dropdown } from "shared/ui/Dropdown/Dropdown";

import { MaterialItem } from "./MaterialItem";
import classes from "./MaterialsList.module.scss";
import { getMaterials } from "http/siteApi";
import { Material } from "shared/types/Common";

interface MaterialsListProps {
  className?: string;
}

export const MaterialsList: React.FC<MaterialsListProps> = (props) => {
  const { className = "" } = props;

  const [materials, setMaterials] = useState([]);

  const __load_async = async() => {
    let materialsData = await getMaterials();
    setMaterials(materialsData);
  }

  useEffect(() => {
    __load_async();
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={clsx(classes.materials, className)}>
      {isMobile ? (
        <>
          <Dropdown
            options={materials.map((m: Material) => m.title)}
            selected={selectedIndex}
            onSelect={setSelectedIndex}
            className={classes.dropdown}
          />
          <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
            {materials.map(({ list }, index) => (
              <TabPanel>
                <MaterialItem key={index.toString()} list={list} />
              </TabPanel>
            ))}
          </Tabs>
        </>
      ) : (
        materials.map(({ list, title }) => (
          <MaterialItem key={title} title={title} list={list} />
        ))
      )}
    </div>
  );
};
