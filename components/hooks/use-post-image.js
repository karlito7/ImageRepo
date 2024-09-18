import { useEffect, useState } from "react";

const url = `http://localhost:5000/images/new`;

const usePostImage = () => {
  const postData = async (data) => {
    try {
      let response = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data }),
      });

      if (response.ok) {
        return response.ok;
      } else {
        console.log("Image POST error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return postData;
};

export default usePostImage;
