import { call, put, takeLatest } from "redux-saga/effects";
import { check, auth } from "../redux/axiosRequests";
import {
  userFetchDataSuccess,
  userLoginSuccess,
  userExitSuccess,
} from "../redux/actions/actionsUser";
import { FETCHED_USER_DATA, USER_LOGIN, USER_EXIT } from "../redux/types";

export function* watchUser() {
  yield takeLatest(FETCHED_USER_DATA, fetchUserDataAsync);
  yield takeLatest(USER_LOGIN, userLoginAsync);
  yield takeLatest(USER_EXIT, exitAsync);
}

export interface ILogin {
  type: typeof USER_LOGIN;
  payload: { username: string; password: string };
}

export function* fetchUserDataAsync() {
  let data = yield call(check);
  yield put(userFetchDataSuccess(data));
}

export function* userLoginAsync(action: ILogin) {
  const username = action.payload.username;
  const password = action.payload.password;
  let data = yield call(auth, username, password);
  let error = false;
  localStorage.setItem("accessTokenKey", data);
  yield put(userLoginSuccess(error));
}

export function* exitAsync() {
  let data = true;
  yield put(userExitSuccess(data));
}
