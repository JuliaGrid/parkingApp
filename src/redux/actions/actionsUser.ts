import {
  USER_FETCH_DATA_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_EXIT_SUCCESS,
  FETCHED_USER_DATA,
  USER_LOGIN,
  USER_EXIT,
} from "../types";

export interface IFetchData {
  type: typeof USER_FETCH_DATA_SUCCESS;
  user: {} | unknown;
}

export interface IFetch {
  type: typeof FETCHED_USER_DATA;
}

export interface IUserLogin {
  type: typeof USER_LOGIN_SUCCESS;
  error: boolean;
}

export interface ILogin {
  type: typeof USER_LOGIN;
  payload: {};
}

export interface IUserExit {
  type: typeof USER_EXIT_SUCCESS;
  error: boolean;
}

export interface IExit {
  type: typeof USER_EXIT;
}

export const userFetchData = (): IFetch => {
  return { type: FETCHED_USER_DATA };
};

export function userFetchDataSuccess(user: {} | unknown): IFetchData {
  return {
    type: USER_FETCH_DATA_SUCCESS,
    user,
  };
}

export function userLogin(user: {}): ILogin {
  return {
    type: USER_LOGIN,
    payload: user,
  };
}

export function userLoginSuccess(error: boolean): IUserLogin {
  return {
    type: USER_LOGIN_SUCCESS,
    error,
  };
}

export function userExit(): IExit {
  return {
    type: USER_EXIT,
  };
}

export function userExitSuccess(error: boolean): IUserExit {
  return {
    type: USER_EXIT_SUCCESS,
    error,
  };
}
