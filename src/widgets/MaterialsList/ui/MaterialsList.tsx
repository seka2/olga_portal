import clsx from "clsx";
import { useState } from "react";
import { TabPanel, Tabs } from "react-tabs";
import { useMediaQuery } from "usehooks-ts";

import { Dropdown } from "shared/ui/Dropdown/Dropdown";

import { MaterialItem } from "./MaterialItem";
import classes from "./MaterialsList.module.scss";

const materials = [
  {
    title: "Детальные разборы рынков",
    list: [
      { date: "23.01.2024г.", name: "Открытый разбор с подписчиками канала." },
      { date: "23.01.2024г.", name: "Открытый разбор с подписчиками канала." },
      { date: "23.01.2024г.", name: "Открытый разбор с подписчиками канала." },
      { date: "23.01.2024г.", name: "Открытый разбор с подписчиками канала." },
    ],
  },
  {
    title: "Самостоятельное изучение",
    list: [
      { date: "23.01.2025г.", name: "Открытый разбор с подписчиками канала." },
      { date: "23.01.2025г.", name: "Открытый разбор с подписчиками канала." },
      { date: "23.01.2025г.", name: "Открытый разбор с подписчиками канала." },
      { date: "23.01.2025г.", name: "Открытый разбор с подписчиками канала." },
    ],
  },
];

interface MaterialsListProps {
  className?: string;
}

export const MaterialsList: React.FC<MaterialsListProps> = (props) => {
  const { className = "" } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={clsx(classes.materials, className)}>
      {isMobile ? (
        <>
          <Dropdown
            options={materials.map((m) => m.title)}
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
