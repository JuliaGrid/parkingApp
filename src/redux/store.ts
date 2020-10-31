import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from "../../node_modules/redux-saga";
import { watchPlaces } from "../sagas/placesSagas";
import { all } from "redux-saga/effects";
import { watchUser } from "../sagas/userSagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([watchPlaces(), watchUser()]);
}

sagaMiddleware.run(rootSaga);
