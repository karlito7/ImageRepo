import { useEffect, useState } from "react";
import UserContext from "./user-context";

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const userContext = {
    userInfo,
    token,
    isLoggedIn,
    setUserInfo,
    setToken,
    setIsLoggedIn,
  };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
