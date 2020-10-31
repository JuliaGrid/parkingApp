import React from "react";
import { withAuth } from "../../Auth/AuthContext";
import { Redirect } from "react-router-dom";
import Login from "../../containers/Login";

interface IProps {
  isAuthorized: boolean;
  authorize: () => void;
}

export default withAuth(({ isAuthorized, authorize }: IProps) =>
  isAuthorized ? <Redirect to="/private" /> : <Login onEnter={authorize} />
);
