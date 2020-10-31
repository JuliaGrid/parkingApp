import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import useStyles from "../style";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { PlacesStatuses } from "../../../enums/enums";
import { ReactComponent as TitleBack } from "../../../img/titleBack.svg";
import { ReactComponent as StatusCircle } from "../../../img/status_circle.svg";
import { ReactComponent as CarIcon } from "../../../img/car.svg";

interface IProps {
  number: number;
  status: string;
  reservePlace: (id: number) => void;
  deleteReservePlace: (id: number) => void;
}

interface IState {
  hover: boolean;
  book: boolean;
  statusPlace: string;
  className: string;
}

class UserPlace extends React.Component<IProps & WithStyles, IState> {
  classes = this.props.classes;

  state = {
    hover: false,
    book: false,
    statusPlace: PlacesStatuses.FREE,
    className: "places__item",
  };

  onHover = () => {
    this.setState({
      hover: true,
    });
  };

  onLeave = () => {
    this.setState({
      hover: false,
    });
  };

  reserveItemService = () => {
    const { reservePlace, number } = this.props;
    const { BOOK } = PlacesStatuses;
    reservePlace(number);
    this.setState({ book: true });
    this.setState({ className: this.classes.places__itemBook });
    this.setState({ statusPlace: BOOK });
  };

  deleteReserve = () => {
    const { deleteReservePlace, number } = this.props;
    const { FREE } = PlacesStatuses;
    deleteReservePlace(number);
    this.setState({ book: false });
    this.setState({ className: this.classes.places__item });
    this.setState({ statusPlace: FREE });
  };

  defineStatus = () => {
    const { status } = this.props;
    const { FREE, NOT_FREE } = PlacesStatuses;
    if (!status) {
      this.setState({ className: this.classes.places__item });
      this.setState({ statusPlace: FREE });
    } else {
      this.setState({
        className: this.classes.places__itemBooked,
      });
      this.setState({ statusPlace: NOT_FREE });
    }
  };

  componentDidMount() {
    this.defineStatus();
  }

  render() {
    const { className, hover, statusPlace, book } = this.state;
    const { classes, number, status } = this.props;
    return (
      <>
        <li
          className={className}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
        >
          <div className="places__wrapper">
            <div className="places__title">
              <TitleBack className={classes.places__titleBack} />
              <p
                className={classes.places__titleNumber}
                style={{ textAlign: "center" }}
              >
                {number}
              </p>
            </div>

            {!hover && (
              <div className={classes.places__status}>
                <StatusCircle className="places__status-icon" />
                <p className={classes.places__statusName}>{statusPlace}</p>
              </div>
            )}

            {status && hover && (
              <div className={classes.places__status}>
                <StatusCircle className="places__status-icon" />
                <p className={classes.places__statusName}>{statusPlace}</p>
              </div>
            )}

            {!status && hover && !book && (
              <div className="places__book">
                <button
                  className={classes.places__bookButton}
                  style={{ textTransform: "uppercase", position: "relative" }}
                  onClick={this.reserveItemService}
                >
                  <div className={classes.places__bookWrapper}>
                    <CarIcon />
                    <span>Забронировать</span>
                  </div>
                </button>
              </div>
            )}

            {hover && book && (
              <div className={classes.places__status}>
                <StatusCircle className="places__status-icon" />
                <p className={classes.places__statusName}>{statusPlace}</p>
              </div>
            )}
          </div>
          {book && (
            <div
              className={classes.places__setting}
              style={{ marginLeft: "60px" }}
            >
              <ClearIcon
                onClick={this.deleteReserve}
                style={{ color: "#90949D" }}
              />
            </div>
          )}
        </li>
      </>
    );
  }
}

export default withStyles(useStyles)(UserPlace);
