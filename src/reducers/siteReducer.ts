// siteSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string, 
  email: string,
  user_id: number,
  tg_code: string,
  tg_chat_id: number,
  deposit_amount_12: number,
  deposit_risk_12: number,
  photo: string,
  status: number,
}

interface GraphItem {
  data: number[],
  labels: string[],
}

interface TradingFigures {
  amount_deals: string;
  share_of_profitable_trades: number;
  average_duration_of_trades: string;
  average_profit_per_trade: number;
}

interface Stat {
  last_month: number,
  last_3_months: number,
  last_6_months: number,
  last_12_months: number,
  dynamic: {
    "3_months": GraphItem,
    "6_months": GraphItem,
    "9_months": GraphItem,
    "12_months": GraphItem,
  },
  subscribe: {
    start: string,
    end: string,
    payback: string,
  },
  trading_figures: {
    "1_month": TradingFigures,
    "3_months": TradingFigures,
    "6_months": TradingFigures,
    "12_months": TradingFigures,
  }
}

interface SiteState {
  isAuth: boolean;
  authStep: Number;
  user: User;
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  alert_success: boolean;
  alert_danger: boolean;
  isRegistration: boolean;
  alert_success_message: string;
  alert_danger_message: string;
  token: string;
  stat: Stat;
}

const user = {
  name: "",
  email: "",
  user_id: 0,
  status: 0,
  tg_code: "",
  tg_chat_id: 0,
  deposit_amount_12: 0,
  deposit_risk_12: 1,
  photo: "",
}

const initialState: SiteState = { 
  isAuth: false,
  authStep: 1,
  user: user,
  email: "",
  password: "",
  confirm_password: "",
  name: "",
  alert_success: false,
  alert_danger: false,
  isRegistration: false,
  alert_success_message: "",
  alert_danger_message: "",
  token: "",
  stat: {
    last_month: 0,
    last_3_months: 0,
    last_6_months: 0,
    last_12_months: 0,
    dynamic: {
      "3_months": {
        data: [],
        labels: [],
      },
      "6_months": {
        data: [],
        labels: [],
      },
      "9_months": {
        data: [],
        labels: [],
      },
      "12_months": {
        data: [],
        labels: [],
      },
    },
    subscribe: {
      start: "",
      end: "",
      payback: "",
    },
    trading_figures: {
      "1_month": {
        amount_deals: "0",
        share_of_profitable_trades: 100,
        average_duration_of_trades: "0",
        average_profit_per_trade: 0,
      },
      "3_months": {
        amount_deals: "0",
        share_of_profitable_trades: 100,
        average_duration_of_trades: "0",
        average_profit_per_trade: 0,
      },
      "6_months": {
        amount_deals: "0",
        share_of_profitable_trades: 100,
        average_duration_of_trades: "0",
        average_profit_per_trade: 0,
      },
      "12_months": {
        amount_deals: "0",
        share_of_profitable_trades: 100,
        average_duration_of_trades: "0",
        average_profit_per_trade: 0,
      },
    }
  }
};

const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    setAlertSuccess: (state, action: PayloadAction<string>) => {
      state.alert_success_message = action.payload;
      state.alert_success = true;
    },
    clearAlertSuccess: (state) => {
      state.alert_success = false;
      state.alert_success_message = "";
    },
    setAlertDanger: (state, action: PayloadAction<string>) => {
      state.alert_danger_message = action.payload;
      state.alert_danger = true;
    },
    clearAlertDanger: (state) => {
      state.alert_danger = false;
      state.alert_danger_message = "";
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirm_password = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setAuthStep: (state, action: PayloadAction<number>) => {
      state.authStep = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setIsRegistration: (state, action: PayloadAction<boolean>) => {
      state.isRegistration = action.payload;
    },
    setStat: (state, action: PayloadAction<Stat>) => {
      state.stat = action.payload;
    }
  },
});

export const { 
  setIsAuth, 
  setToken,
  setUser, 
  setAlertSuccess, 
  clearAlertSuccess, 
  setAlertDanger, 
  clearAlertDanger, 
  setEmail,
  setPassword,
  setConfirmPassword,
  setName,
  setAuthStep,
  setIsRegistration,
  setStat,
} = siteSlice.actions;

export default siteSlice.reducer;
