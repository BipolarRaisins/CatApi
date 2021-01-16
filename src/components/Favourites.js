import React, { useState, useEffect } from "react";
import "../css/Favoutires.css";
import axios from "axios";

function Favourites() {
  const [favImage, setFavImage] = useState([]);

  

  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/favourites`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "4b75d44a-c0ee-491a-bcce-e7541e7c2489",
        },
      })
      .then((res) => {
        console.log("favourite images", res);
        setFavImage(res.data);

      });
  }, []);

  return (
    <div className="favourites">
      <div className="favourites__images">
        {favImage.map((favImages, i) => {
          return (
            <div className="favourites__imgDiv" key={i}>
              <img
                className="favourites__imageRow"
                src={favImages.image.url}
                alt="photo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favourites;
