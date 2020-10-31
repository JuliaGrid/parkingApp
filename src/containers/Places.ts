import { connect } from "react-redux";
import places from "../components/places/places";
import { IProps } from "../components/places/places";
//import { reservePlace } from "../redux/placesLogic";
import {
  deletePlace,
  fetchPlaces,
  addPlace,
  deleteReservePlace,
  bookPlace,
  reservePlace,
} from "../redux/actions/actionsPlaces";
import { userFetchData, userExit } from "../redux/actions/actionsUser";

export interface IStateProps {
  places: { numbers: [] };
  user: IUser;
}

export interface IUser {
  name: string;
  status: string;
  error: boolean;
}

export interface IDispatchProps {
  addPlace: () => void;
  deletePlace: (id: number) => void;
  deleteReservePlace: (id: number) => void;
  bookPlace: (id: number) => void;
  reservePlace: (id: number) => void;
  userExit: () => void;
  fetchPlaces: () => void;
  userFetchData: () => void;
}

const mapStateToProps = (store: IStateProps) => {
  return {
    places: store.places,
    user: store.user,
  };
};

const mapDispatchToProps: IDispatchProps = {
  addPlace,
  deletePlace,
  deleteReservePlace,
  bookPlace,
  reservePlace,
  userExit,
  fetchPlaces,
  userFetchData,
};

export default connect<IStateProps, IDispatchProps, {}, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(places);
