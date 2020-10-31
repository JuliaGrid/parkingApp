import React from "react";
import Button from "@material-ui/core/Button";
import Header from "../Header/HeaderLogin";
import Logo from "../Logo/Logo";
import useStyles from "./style";
import { withStyles, WithStyles } from "@material-ui/core/styles";

export interface IProps {
  onEnter: () => void;
  userLogin: (user: {}) => void;
  user: IUser;
}

export interface IUser {
  name: string;
  status: string;
  error: boolean;
}

export interface IState {
  username: string;
  password: string;
  classNamesUsername: string;
  classNamesPassword: string;
  show: boolean;
  errorMessage: string;
  error: boolean;
}

class Login extends React.Component<IProps & WithStyles, IState> {
  classes = this.props.classes;

  state = {
    username: "",
    password: "",
    classNamesUsername: this.classes.login__input,
    classNamesPassword: this.classes.login__input,
    show: false,
    errorMessage: "ошибка",
    error: true,
  };

  onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.target.value,
      classNamesUsername: this.classes.login__input,
    });
  };

  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
      classNamesPassword: this.classes.login__input,
    });
  };

  onSubmit = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    const { userLogin } = this.props;
    const { username, password } = this.state;

    if (!username || !password) {
      if (!username)
        this.setState({
          classNamesUsername: this.classes.login__input + ` wrong`,
        });
      if (!password)
        this.setState({
          classNamesPassword: this.classes.login__input + ` wrong`,
        });
    } else {
      let user = { username: username, password: password };
      userLogin(user);
    }
  };

  componentDidUpdate() {
    const { onEnter, user } = this.props;
    const { error } = this.state;
    if (error !== user.error) {
      this.setState({ error: false });
      onEnter();
    }
  }

  render() {
    const { classes } = this.props;
    const {
      show,
      errorMessage,
      classNamesUsername,
      classNamesPassword,
    } = this.state;
    return (
      <>
        <div>
          <Header />
        </div>

        <main className="main">
          <Logo />
          <div className="main__wrapper">
            <section className={classes.login}>
              <div
                className={classes.login__block}
                style={{ position: "absolute" }}
              >
                {show && (
                  <div
                    className={classes.login__wrongSomething}
                    style={{ position: "absolute", textAlign: "center" }}
                  >
                    {errorMessage}
                  </div>
                )}
                <form className={classes.login__form}>
                  <label>Логин</label>
                  <input
                    className={classNamesUsername}
                    type="text"
                    onChange={this.onChangeName}
                    required
                  />

                  <label>Пароль</label>
                  <input
                    className={classNamesPassword}
                    type="password"
                    onChange={this.onChangePassword}
                    required
                  />

                  <Button
                    onClick={this.onSubmit}
                    style={{
                      boxShadow: "none",
                      display: "block",
                      margin: "auto",
                      marginTop: "45px",
                      borderRadius: "0",
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "white",
                      backgroundColor: "#44699F",
                    }}
                    variant="contained"
                  >
                    Войти
                  </Button>
                </form>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default withStyles(useStyles)(Login);
