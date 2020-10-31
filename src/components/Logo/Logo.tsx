import React from "react";
import useStyles from "./style";
import { withStyles, WithStyles } from "@material-ui/core/styles";

class Logo extends React.Component<WithStyles> {
  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.main__logoWrapper}
        style={{ position: "absolute" }}
      >
        <div className={classes.main__logo} style={{ position: "relative" }}>
          <span>P</span>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Logo);
