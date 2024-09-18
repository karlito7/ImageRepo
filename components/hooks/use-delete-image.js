import { useEffect, useState } from "react";

const url = `http://localhost:5000/images/`;

const useDeleteImage = () => {
  const deleteData = async (data) => {
    console.log("Deleting");

    try {
      let response = await fetch(`${url}${data._id}`, {
        method: "delete",
      });

      if (response.ok) {
        return response.ok;
      } else {
        console.log("Image Delete error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return deleteData;
};

export default useDeleteImage;
