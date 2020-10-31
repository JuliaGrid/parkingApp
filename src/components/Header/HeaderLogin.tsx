import React from "react";
import logo1 from "../../img/logo1.svg";
import logo2 from "../../img/logo2.svg";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import useStyles from "./style";

class Header extends React.Component<WithStyles> {
  render() {
    const { classes } = this.props;
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
        </div>
      </header>
    );
  }
}

export default withStyles(useStyles)(Header);
