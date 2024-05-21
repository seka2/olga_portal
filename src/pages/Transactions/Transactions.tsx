import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { useMediaQuery } from "usehooks-ts";

import classes from "./Transactions.module.scss";
import { CurrentDeals } from "./ui/CurrentDeals/CurrentDeals";

const tabs = ["Текущие сделки", "Архив сделок", "Архив результатов"];

export const Transactions = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={classes.transactions}>
      <div className="container">
        <div className={classes.body}>
          <h1 className={classes.title}>Сделки</h1>
          {isMobile && (
            <Dropdown
              options={tabs}
              selected={selectedIndex}
              onSelect={setSelectedIndex}
              className={classes.dropdown}
            />
          )}
          <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
            <TabList className={classes.list}>
              {tabs.map((tab) => (
                <Tab className={classes.tab} key={tab}>
                  {tab}
                </Tab>
              ))}
            </TabList>
            <TabPanel>
              <CurrentDeals />
            </TabPanel>
            <TabPanel>Архив сделок</TabPanel>
            <TabPanel>Архив результатов</TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
