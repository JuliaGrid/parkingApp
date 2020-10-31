import React from "react";
import { ComponentType, ReactType } from "react";

interface IState {
  isAuthorized: boolean;
}

const { Provider, Consumer: AuthConsumer } = React.createContext({});

export default class AuthProvider extends React.Component<any, IState> {
  state = {
    isAuthorized: false,
  };

  authorize = () => {
    this.setState({ isAuthorized: true });
  };

  unAuthorize = () => {
    localStorage.removeItem("accessTokenKey");
    this.setState({
      isAuthorized: false,
    });
  };

  componentDidMount() {
    if (localStorage.getItem("accessTokenKey")) {
      this.setState({ isAuthorized: true });
    }
  }

  render() {
    const isAuthorized = this.state.isAuthorized;
    const authorize = this.authorize;
    const unAuthorize = this.unAuthorize;

    return (
      <Provider
        value={{
          isAuthorized,
          authorize,
          unAuthorize,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

type Prop = {
  isAuthorized: boolean;
  component: ReactType;
  unAuthorize: () => void;
};

export function withAuth(WrappedComponent: ComponentType<any>) {
  return class AuthHOC extends React.Component<any> {
    render() {
      return (
        <AuthConsumer>
          {(contextProps) => (
            <WrappedComponent {...contextProps} {...this.props} />
          )}
        </AuthConsumer>
      );
    }
  };
}
