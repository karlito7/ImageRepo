import { useEffect, useState } from "react";

const url = `http://localhost:5000/images/`;

const usePatchImage = () => {
  const patchData = async (data) => {
    try {
      let response = await fetch(`${url}${data._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: data.title, data: data.data }),
      });

      if (response.ok) {
        return response;
      } else {
        console.log("Image PATCH error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return patchData;
};

export default usePatchImage;
