import { connect } from "react-redux";
import Login from "../components/Login/LoginForm";
import { IProps } from "../components/Login/LoginForm";
import { userFetchData, userLogin } from "../redux/actions/actionsUser";

interface IStateProps {
  user: IUser;
}

export interface IUser {
  name: string;
  status: string;
  error: boolean;
}

interface IDispatchProps {
  userFetchData: () => void;
  userLogin: (user: {}) => void;
}

const mapStateToProps = (store: IStateProps) => {
  return {
    user: store.user,
  };
};

const mapDispatchToProps: IDispatchProps = {
  userFetchData,
  userLogin,
};

export default connect<IStateProps, IDispatchProps, {}, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(Login);
