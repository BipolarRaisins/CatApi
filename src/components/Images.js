import React, { useState, useEffect } from "react";
import "../css/Images.css";
import "../css/Favoutires.css";
import axios from "axios";

function Images() {
  const [Images, setImages] = useState([]);



  useEffect((order) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/?limit=10&page=0`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "4b75d44a-c0ee-491a-bcce-e7541e7c2489",
        },
      })
      .then((res) => {
        setImages(res.data);
      });
  }, []);

  return (
    <div className="favourites">



      <div className="favourites__images">
        {Images.map((Image, i) => {
          return (
            <div className="favourites__imgDiv" key={i}>
              <img
                className="favourites__imageRow"
                src={Image.url}
                alt="photo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Images;
