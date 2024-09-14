import { useEffect, useState } from "react";

const url = `http://localhost:5000/images/new`;

const usePostImage = () => {
  const [data, setData] = useState(-1);

  const postData = async (data, path) => {
    console.log(data);
    try {
      setData(-2);
      let response = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        let value = await response.json();
        console.log(value);
        setData(await value);
      } else {
        console.log("Image POST error");
        setData(-3);
      }
    } catch (err) {
      setData(-3);
      console.log(err);
    }
  };

  return [data, postData];
};

export default usePostImage;
