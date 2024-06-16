import Analytics from "pages/Analytics";
import Auth from "pages/Auth";
import ConfirmPhone from "pages/ConfirmPhone";
import Faq from "pages/Faq";
import Home from "pages/Home";
import { Materials } from "pages/Materials/Materials";
import Settings from "pages/Settings";
import Transactions from "pages/Transactions";

export const authRoutes = [
  { path: "/analytics", element: <Analytics /> },
  { path: "/transactions", element: <Transactions /> },
  { path: "/settings", element: <Settings /> },
  { path: "/materials", element: <Materials /> },
];

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/faq", element: <Faq /> },
  { path: "/auth", element: <Auth /> },
  { path: "/confirm", element: <ConfirmPhone /> },
];
