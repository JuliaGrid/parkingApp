import { call, put, takeLatest } from "redux-saga/effects";
import {
  placesFetch,
  placeAdd,
  placeDelete,
  defineReserve,
  placeReserveDelete,
  placeBook,
} from "../redux/axiosRequests";
import {
  placesFetchDataSuccess,
  addPlaceSuccess,
  deletePlaceSuccess,
  deleteReservePlaceSuccess,
  bookPlaceSuccess,
  reservePlaceSuccess,
} from "../redux/actions/actionsPlaces";

import {
  FETCH_PLACES,
  ADD_PLACE,
  BOOK_PLACE,
  DELETE_PLACE,
  DELETE_RESERVE,
  RESERVE_PLACE,
} from "../redux/types";

export function* watchPlaces() {
  yield takeLatest(FETCH_PLACES, fetchPlacesAsync);
  yield takeLatest(ADD_PLACE, addPlaceAsync);
  yield takeLatest(BOOK_PLACE, bookPlaceAsync);
  yield takeLatest(DELETE_PLACE, deletePlaceAsync);
  yield takeLatest(DELETE_RESERVE, deleteReserveAsync);
  yield takeLatest(RESERVE_PLACE, reservePlaceAsync);
}

export interface IDelete {
  type: typeof DELETE_PLACE;
  payload: number;
}

export interface IDeleteReserve {
  type: typeof DELETE_RESERVE;
  payload: number;
}

export interface IReserve {
  type: typeof RESERVE_PLACE;
  payload: number;
}

export interface IBook {
  type: typeof BOOK_PLACE;
  payload: number;
}

export function* fetchPlacesAsync() {
  let data = yield call(placesFetch);
  yield put(placesFetchDataSuccess(data));
}

export function* addPlaceAsync() {
  let data = yield call(placeAdd);
  yield put(addPlaceSuccess(data));
}

export function* deletePlaceAsync(action: IDelete) {
  const selectedPlace = action.payload;
  yield placeDelete(selectedPlace);
  let data = yield call(placesFetch);
  yield put(deletePlaceSuccess(data));
}

export function* deleteReserveAsync(action: IDeleteReserve) {
  const id = action.payload;
  const reserveId = yield defineReserve(id);
  let data = yield call(placeReserveDelete, reserveId);
  yield put(deleteReservePlaceSuccess(data));
}

export function* reservePlaceAsync(action: IReserve) {
  let id = action.payload;
  yield placeBook(id);
  let data = yield call(placesFetch);
  yield put(reservePlaceSuccess(data));
}

export function* bookPlaceAsync(action: IBook) {
  let id = action.payload;
  yield placeBook(id);
  let data = yield call(placesFetch);
  yield put(bookPlaceSuccess(data));
}
