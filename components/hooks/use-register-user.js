import { useState } from "react";

const url = "http://localhost:5000/users/register";

const useRegisterUser = () => {
  const [data, setData] = useState();

  const register = async (data) => {
    try {
      setData(-2);
      let response = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        let value = await response.json();
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

  return [data, register];
};

export default useRegisterUser;
