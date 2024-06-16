import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useMediaQuery } from "usehooks-ts";

import { AuthForm } from "features/auth";

import classes from "./Auth.module.scss";
import { AuthBody } from "./ui/AuthBody/AuthBody";
import { AuthMobile } from "./ui/AuthMobile/AuthMobile";
import { AuthMobileForm } from "./ui/AuthMobileForm/AuthMobileForm";
import { AlertDanger, AlertSuccess } from "widgets/Alert";

export const Auth = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showMobileForm, setShowFormMobile] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  const tabs = (
    <div className={classes.form}>
      <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
        <TabList className={classes.list}>
          <Tab className={classes.tab}>Войти</Tab>
          <Tab className={classes.tab}>Регистрация</Tab>
        </TabList>
        <TabPanel>
          <AuthForm />
        </TabPanel>
        <TabPanel>
          <AuthForm isRegistration />
        </TabPanel>
      </Tabs>
      <AlertDanger/>
      <AlertSuccess/>
    </div>
  );

  const login = () => {
    setSelectedIndex(0);
    setShowFormMobile(true);
  };

  const registration = () => {
    setSelectedIndex(1);
    setShowFormMobile(true);
  };

  const closeMobileForm = () => setShowFormMobile(false);

  return (
    <div className={classes.auth}>
      {isMobile && !showMobileForm && (
        <AuthMobile onLogin={login} onRegistration={registration} />
      )}
      {isMobile && showMobileForm && (
        <AuthMobileForm selectedIndex={selectedIndex} onClose={closeMobileForm}>
          {tabs}
        </AuthMobileForm>
      )}
      {!isMobile && <AuthBody selectedIndex={selectedIndex}>{tabs}</AuthBody>}
    </div>
  );
};
