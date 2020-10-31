import {
  USER_FETCH_DATA_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_EXIT_SUCCESS,
} from "../types";

interface IActionFetch {
  type: typeof USER_FETCH_DATA_SUCCESS;
  user: { user_name: string; authorities: [string] };
}

interface IActionLogin {
  type: typeof USER_LOGIN_SUCCESS;
  error: boolean;
}

interface IActionExit {
  type: typeof USER_EXIT_SUCCESS;
  error: boolean;
}

type TAction = IActionFetch | IActionLogin | IActionExit;

export const initialState = {
  name: "",
  role: "",
  accessKey: "",
  error: true,
};

export function userReducer(state = initialState, action: TAction) {
  switch (action.type) {
    case USER_FETCH_DATA_SUCCESS:
      return {
        name: action.user.user_name,
        status: action.user.authorities[0],
      };

    case USER_LOGIN_SUCCESS:
      return {
        error: action.error,
      };

    case USER_EXIT_SUCCESS:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
