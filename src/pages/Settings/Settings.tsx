import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { useMediaQuery } from "usehooks-ts";

import classes from "./Settings.module.scss";
import { Deposit } from "./ui/Deposit/Deposit";
import { Profile } from "./ui/Profile/Profile";
import { Safety } from "./ui/Safety/Safety";
import { Telegram } from "./ui/Telegram/Telegram";

const tabs = ["Профиль", "Безопасность", "Телеграм", "Депозит"];

export const Settings = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={classes.settings}>
      <div className="container">
        <h1 className={classes.title}>Настройки</h1>
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
            <Profile />
          </TabPanel>
          <TabPanel>
            <Safety />
          </TabPanel>
          <TabPanel>
            <Telegram />
          </TabPanel>
          <TabPanel>
            <Deposit />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
