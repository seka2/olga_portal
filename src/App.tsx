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
import { useSelector } from "react-redux";
import { RootState } from './store';
import { useEffect, useState } from "react";
import { checkIsAuth } from "./http/userAPI";
import { setIsAuth, setUser } from "./reducers/siteReducer";
import useAppDispatch from "./hooks/useAppDispatch";
import { jwtDecode } from "jwt-decode";
import { Loader } from "widgets/Loader";

function App() {

  const [loading, setLoading] = useState(true);
  const isAuth = useSelector((state: RootState) => state.site.isAuth);
  const dispatch = useAppDispatch();

  const __load_assync = async() => {
    try {
      const data = await checkIsAuth();
      if (data.result && data.token) {
        let user = jwtDecode(data.token);
        dispatch(setIsAuth(true));
        dispatch(setUser(user)) ;
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    __load_assync();
  }, []);

  if (loading) {
    return (<Loader/>)
  }

  return (
    <Routes>

      { isAuth && (
        <>
          <Route path="/materials" element={<Layout secondary />}>
            <Route index element={<Materials />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="faq" element={<Faq />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Home />} />
          </Route>
        </>
      ) }

      { !isAuth && (
        <>
          <Route path="/auth" element={<Auth />} />
          <Route path="/confirm" element={<ConfirmPhone />} />
          <Route path="*" element={<Auth />} />
        </>
      ) }
      
    </Routes>
  );
}

export default App;
