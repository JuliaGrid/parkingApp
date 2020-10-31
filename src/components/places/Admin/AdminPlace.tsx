import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import ClearIcon from "@material-ui/icons/Clear";
import useStyles from "../style";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { PlacesStatuses } from "../../../enums/enums";
import { ReactComponent as TitleBack } from "../../../img/titleBack.svg";
import { ReactComponent as StatusCircle } from "../../../img/status_circle.svg";

interface IProps {
  status: string;
  id: number;
  onDelete: () => void;
  showMenu: () => void;
}

interface IState {
  statusProp: string;
  status: string;
  className: string;
}

class AdminPlace extends React.Component<IProps & WithStyles, IState> {
  classes = this.props.classes;

  state = {
    statusProp: this.props.status,
    status: PlacesStatuses.FREE,
    className: "places__item",
  };

  defineStatus = () => {
    const { status } = this.props;
    const { FREE, NOT_FREE } = PlacesStatuses;
    if (!status) {
      this.setState({ className: this.classes.places__item });
      this.setState({ status: FREE });
    } else {
      this.setState({
        className: this.classes.places__itemBooked,
      });
      this.setState({ status: NOT_FREE });
    }
  };

  componentDidMount() {
    this.defineStatus();
  }

  componentDidUpdate() {
    const { statusProp } = this.state;
    const { status } = this.props;
    if (statusProp !== status) {
      this.setState({ statusProp: status });
      this.defineStatus();
    }
  }

  render() {
    const { className, status } = this.state;
    const { classes, onDelete, showMenu } = this.props;
    return (
      <>
        <li className={className}>
          <div className="places__wrapper">
            <div className="places__title">
              <TitleBack className={classes.places__titleBack} />
              <p
                className={classes.places__titleNumber}
                style={{ textAlign: "center" }}
              >
                {this.props.id}
              </p>
            </div>
            <div className={classes.places__status}>
              <StatusCircle className="places__status-icon" />

              <p className={classes.places__statusName}>{status}</p>
            </div>
          </div>

          <div
            className={classes.places__setting}
            style={{ flexDirection: "column", position: "relative" }}
          >
            {status === PlacesStatuses.FREE && (
              <ClearIcon
                className="places__setting-clear"
                onClick={onDelete}
                style={{ color: "#90949D" }}
              />
            )}

            <CreateIcon
              className="places__setting-create"
              onClick={showMenu}
              style={{
                color: "#90949D",
                margin: "auto",
                marginTop: "30px",
                width: "18px",
              }}
            />
          </div>
        </li>
      </>
    );
  }
}

export default withStyles(useStyles)(AdminPlace);
