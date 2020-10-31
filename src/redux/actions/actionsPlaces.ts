import {
  ADD_PLACE,
  ADD_PLACE_SUCCESS,
  FETCH_PLACES,
  PLACES_FETCH_DATA_SUCCESS,
  DELETE_PLACE,
  DELETE_PLACE_SUCCESS,
  DELETE_RESERVE,
  DELETE_RESERVE_PLACE_SUCCESS,
  BOOK_PLACE,
  BOOK_PLACE_SUCCESS,
  RESERVE_PLACE,
  RESERVE_PLACE_SUCCESS,
} from "../types";

export interface IAdd {
  type: typeof ADD_PLACE;
}

export interface IAddPlace {
  type: typeof ADD_PLACE_SUCCESS;
  place: [] | unknown;
}

export interface IFetch {
  type: typeof FETCH_PLACES;
}

export interface IFetchData {
  type: typeof PLACES_FETCH_DATA_SUCCESS;
  places: { id: number; reserve: string }[] | unknown;
}

export interface IDelete {
  type: typeof DELETE_PLACE;
  payload: number;
}

export interface IDeletePlace {
  type: typeof DELETE_PLACE_SUCCESS;
  places: [] | unknown;
}

export interface IDeleteReserve {
  type: typeof DELETE_RESERVE_PLACE_SUCCESS;
  places: [] | unknown;
}

export interface IBook {
  type: typeof BOOK_PLACE;
  payload: number;
}

export interface IBookPlace {
  type: typeof BOOK_PLACE_SUCCESS;
  places: [] | unknown;
}

export interface IReserve {
  type: typeof RESERVE_PLACE;
  payload: number;
}

export interface IDeleteReser {
  type: typeof DELETE_RESERVE;
  payload: number;
}

export interface IReservePlace {
  type: typeof RESERVE_PLACE_SUCCESS;
  places: [] | unknown;
}

export const fetchPlaces = (): IFetch => {
  return { type: FETCH_PLACES };
};

export function placesFetchDataSuccess(
  places: { id: number; reserve: string }[] | unknown
): IFetchData {
  return {
    type: PLACES_FETCH_DATA_SUCCESS,
    places,
  };
}

export const addPlace = (): IAdd => {
  return { type: ADD_PLACE };
};

export function addPlaceSuccess(place: [] | unknown): IAddPlace {
  return {
    type: ADD_PLACE_SUCCESS,
    place,
  };
}

export function deletePlace(selectedPlace: number): IDelete {
  return {
    type: DELETE_PLACE,
    payload: selectedPlace,
  };
}

export function deletePlaceSuccess(places: [] | unknown): IDeletePlace {
  return {
    type: DELETE_PLACE_SUCCESS,
    places,
  };
}

export function deleteReservePlace(selectedPlace: number): IDeleteReser {
  return {
    type: DELETE_RESERVE,
    payload: selectedPlace,
  };
}

export function deleteReservePlaceSuccess(
  places: [] | unknown
): IDeleteReserve {
  return {
    type: DELETE_RESERVE_PLACE_SUCCESS,
    places,
  };
}

export function bookPlace(selectedPlace: number): IBook {
  return {
    type: "BOOK_PLACE",
    payload: selectedPlace,
  };
}

export function bookPlaceSuccess(places: [] | unknown): IBookPlace {
  return {
    type: BOOK_PLACE_SUCCESS,
    places,
  };
}

export function reservePlace(selectedPlace: number): IReserve {
  return {
    type: "RESERVE_PLACE",
    payload: selectedPlace,
  };
}

export function reservePlaceSuccess(places: [] | unknown): IReservePlace {
  return {
    type: RESERVE_PLACE_SUCCESS,
    places,
  };
}
