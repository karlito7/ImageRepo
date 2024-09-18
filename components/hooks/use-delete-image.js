import { useEffect, useState } from "react";

const url = `http://localhost:5000/images/`;

const useDeleteImage = () => {
  const [data, setData] = useState(-1);

  const deleteData = async (data, path) => {
    console.log("Deleting");

    try {
      setData(-2);
      let response = await fetch(`${url}${data._id}`, {
        method: "delete",
      });

      if (response.ok) {
        setData(1);
      } else {
        console.log("Image Delete error");
        setData(-3);
      }
    } catch (err) {
      setData(-3);
      console.log(err);
    }
  };

  return [data, deleteData];
};

export default useDeleteImage;
