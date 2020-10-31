import React from "react";
import logo1 from "../../img/logo1.svg";
import logo2 from "../../img/logo2.svg";
import av from "../../img/av.jpg";
import exit from "../../img/exit.svg";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import useStyles from "./style";

interface IProps {
  userName: string;
  unAuthorize: () => void;
  userExit: () => void;
  isAuthorized: boolean;
}

class Header extends React.Component<IProps & WithStyles> {
  exit = () => {
    const { unAuthorize, userExit } = this.props;
    unAuthorize();
    userExit();
  };

  render() {
    const { classes, userName, isAuthorized } = this.props;
    return (
      <header className={classes.header}>
        <div className={classes.header__wrapper}>
          <div className="header__logo">
            <img
              src={logo1}
              alt="logo"
              style={{
                marginRight: "2px",
                paddingTop: "40px",
                paddingBottom: "45px",
              }}
            />
            <img
              src={logo2}
              style={{
                marginRight: "2px",
                paddingTop: "40px",
                paddingBottom: "45px",
              }}
              alt="logo"
            />
          </div>

          {isAuthorized && (
            <div className={classes.header__profile}>
              <img
                src={exit}
                onClick={this.exit}
                className={classes.header__exit}
                alt="выход"
              />
              <p className={classes.header__name}>{userName}</p>
              <img className={classes.header__avatar} src={av} alt="avatar" />
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default withStyles(useStyles)(Header);
