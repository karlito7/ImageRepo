import { useContext, useState } from "react";
import UserContext from "../store/user-context";

const url = "http://localhost:5000/users/login";

const useLoginUser = () => {
  const [data, setData] = useState();
  const userCtx = useContext(UserContext);

  const login = async (data) => {
    try {
      setData(-2);
      let response = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        let value = await response.json();
        userCtx.setIsLoggedIn(true);
        userCtx.setToken(value.token);
        userCtx.setUserInfo(value.user);
        setData(await value);
      } else {
        console.log("User register error");
        setData(-3);
      }
    } catch (err) {
      setData(-3);
      console.log(err);
    }
  };

  return [data, login];
};

export default useLoginUser;
