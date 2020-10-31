import {
  ADD_PLACE_SUCCESS,
  PLACES_FETCH_DATA_SUCCESS,
  DELETE_PLACE_SUCCESS,
  DELETE_RESERVE_PLACE_SUCCESS,
  BOOK_PLACE_SUCCESS,
  RESERVE_PLACE_SUCCESS,
} from "../types";

interface IActionFetch {
  type: typeof PLACES_FETCH_DATA_SUCCESS;
  places: [];
}

interface IActionAdd {
  type: typeof ADD_PLACE_SUCCESS;
  place: [];
}

interface IActionDelete {
  type: typeof DELETE_PLACE_SUCCESS;
  places: [];
}

interface IActionDeleteReserve {
  type: typeof DELETE_RESERVE_PLACE_SUCCESS;
  places: [];
}

interface IActionBook {
  type: typeof BOOK_PLACE_SUCCESS;
  places: [];
}

interface IActionReserve {
  type: typeof RESERVE_PLACE_SUCCESS;
  places: {};
}

type TAction =
  | IActionFetch
  | IActionAdd
  | IActionDelete
  | IActionDeleteReserve
  | IActionBook
  | IActionReserve;

export const initialState = {
  numbers: [{ id: 0, reserve: "yes" }],
};

export function placesReducer(state = initialState, action: TAction) {
  switch (action.type) {
    case PLACES_FETCH_DATA_SUCCESS:
      return { numbers: action.places };
    case ADD_PLACE_SUCCESS:
      return { ...state, numbers: [...state.numbers, action.place] };
    case DELETE_PLACE_SUCCESS:
      return {
        numbers: action.places,
      };
    case DELETE_RESERVE_PLACE_SUCCESS:
      return {
        numbers: action.places,
      };
    case BOOK_PLACE_SUCCESS:
      return {
        numbers: action.places,
      };
    case RESERVE_PLACE_SUCCESS:
      return state;
    default:
      return state;
  }
}
