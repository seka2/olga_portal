import { Route, Routes } from "react-router-dom";

import Analytics from "pages/Analytics";
import Auth from "pages/Auth";
import ConfirmPhone from "pages/ConfirmPhone";
import Faq from "pages/Faq";
import Home from "pages/Home";
import { Materials } from "pages/Materials/Materials";
import Settings from "pages/Settings";
import Transactions from "pages/Transactions";
import { Layout } from "widgets/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="faq" element={<Faq />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/materials" element={<Layout secondary />}>
        <Route index element={<Materials />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/confirm" element={<ConfirmPhone />} />
    </Routes>
  );
}

export default App;
