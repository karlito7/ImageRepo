import React from "react";

const UserContext = React.createContext({
  userInfo: [],
  token: [],
  isLoggedIn: false,
  setUserInfo: () => {},
  setToken: () => {},
  setIsLoggedIn: () => {},
});

export default UserContext;
