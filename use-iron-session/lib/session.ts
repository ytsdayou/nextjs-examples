import { SessionOptions } from "iron-session";

export interface ISessionData {
  userId?: number;
  userName?: string;
  isLoggedIn?: boolean;
  error?: string;
}

export const defaultSession: ISessionData = {
  isLoggedIn: false,
  error: '',
}

export const sessionOption: SessionOptions = {
  password: process.env.SESSION_KEY!,
  cookieName: 'jay-session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  }
}
