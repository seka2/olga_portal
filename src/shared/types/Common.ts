
export interface MaterialList {
  name: string;
  id: number;
} 

export interface Material {
  title: string;
  list: MaterialList[]
}

export interface User {
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

export interface SearchItem {
  title: string;
  link: string;
  id: number;
  table: string;
}

export interface SearchSection {
  section: string;
  list: SearchItem[];
}

