import React from "react";
import Header from "../Header/Header";
import AdminPlaces from "./Admin/AdminPlaces";
import UserPlaces from "./User/UserPlaces";
import { UserRoles } from "../../enums/enums";

export interface IProps {
  places: { numbers: [] };
  user: IUser;
  isAuthorized: boolean;
  unAuthorize: () => void;
  addPlace: () => void;
  deletePlace: (id: number) => void;
  deleteReservePlace: (id: number) => void;
  bookPlace: (id: number) => void;
  reservePlace: (id: number) => void;
  // userLogin: (username: string, password: string) => void;
  userExit: () => void;
  fetchPlaces: () => void;
  userFetchData: () => void;
}

export interface IUser {
  name: string;
  status: string;
  error: boolean;
}

export interface IState {
  showMenu: boolean;
  valueForm: string;
  placesState: [];
}

export default class Places extends React.Component<IProps, IState> {
  state = {
    showMenu: false,
    valueForm: "",
    placesState: this.props.places.numbers,
  };
  id: number = 0;

  showMenu = (id: number) => {
    this.id = id;
    this.setState({ showMenu: true });
  };

  changeValueForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ valueForm: event.target.value });
  };

  editItem = () => {
    const { valueForm } = this.state;
    const { deleteReservePlace, bookPlace } = this.props;

    if (valueForm === "free") {
      deleteReservePlace(this.id);
    }
    if (valueForm === "booked") {
      bookPlace(this.id);
    }
    this.setState({ showMenu: false });
  };

  closeMenu = () => {
    this.setState({ showMenu: false });
  };

  deleteItem = (id: number) => {
    const { deletePlace } = this.props;
    deletePlace(id);
  };

  componentDidMount() {
    const { userFetchData, fetchPlaces } = this.props;
    userFetchData();
    fetchPlaces();
  }

  /*componentDidUpdate() {
    const { places } = this.props;
    const { placesState } = this.state;
    if (placesState !== places.numbers) {
      this.setState({ placesState: places.numbers });
    }
  }*/

  render() {
    const { ADMIN } = UserRoles;
    const {
      unAuthorize,
      user,
      isAuthorized,
      addPlace,
      reservePlace,
      deleteReservePlace,
      userExit,
      places,
    } = this.props;
    const { showMenu } = this.state;
    return (
      <>
        <div>
          <Header
            unAuthorize={unAuthorize}
            userName={user.name}
            userExit={userExit}
            isAuthorized={isAuthorized}
          />
        </div>

        {this.props.user.status === ADMIN ? (
          <AdminPlaces
            places={places.numbers}
            onDelete={this.deleteItem}
            onAdd={addPlace}
            showMenu={this.showMenu}
            changeValueForm={this.changeValueForm}
            closeMenu={this.closeMenu}
            showMenuState={showMenu}
            editItem={this.editItem}
            id={this.id}
          />
        ) : (
          <UserPlaces
            places={places.numbers}
            reservePlace={reservePlace}
            deleteReservePlace={deleteReservePlace}
          />
        )}
      </>
    );
  }
}
