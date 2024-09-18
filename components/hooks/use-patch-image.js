import { useEffect, useState } from "react";

const url = `http://localhost:5000/images/`;

const usePatchImage = () => {
  const [data, setData] = useState(-1);

  const patchData = async (data, path) => {
    try {
      setData(-2);
      let response = await fetch(`${url}${data._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: data.title, data: data.data }),
      });

      if (response.ok) {
        let value = await response.json();
        setData(await value);
      } else {
        console.log("Image PATCH error");
        setData(-3);
      }
    } catch (err) {
      setData(-3);
      console.log(err);
    }
  };

  return [data, patchData];
};

export default usePatchImage;
