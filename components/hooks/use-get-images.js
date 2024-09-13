import { useEffect, useState } from "react";

const url = `http://localhost:5000/images/`;

const useGetImages = () => {
  const [data, setData] = useState(-1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (path) => {
    try {
      setData(-2);
      let response = await fetch(url);

      if (response.ok) {
        let value = await response.json();
        console.log(value);
        setData(await value);
      } else {
        console.log("Image fetch error");
        setData(-3);
      }
    } catch (err) {
      setData(-3);
      console.log(err);
    }
  };

  return [data, getData];
};

export default useGetImages;