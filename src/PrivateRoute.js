import React from "react";

const PrivateRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return (
      <div className="main-container">
        <h2 style={{ color: "red" }}>
          You are not Authenticated, Please login first
        </h2>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;
