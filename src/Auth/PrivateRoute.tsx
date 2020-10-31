import React from "react";
import { ReactType } from "react";
import { withAuth } from "../Auth/AuthContext";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface IProps1 {
  isAuthorized: boolean;
  component: ReactType;
  unAuthorize: () => void;
}

export const PrivateRoute = withAuth(
  ({
    component: RouteComponent,
    isAuthorized,
    unAuthorize,
    ...rest
  }: IProps1) => (
    <Route
      {...rest}
      render={(routeProps: RouteProps) =>
        isAuthorized ? (
          <RouteComponent
            isAuthorized={isAuthorized}
            unAuthorize={unAuthorize}
            {...routeProps}
          />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  )
);
