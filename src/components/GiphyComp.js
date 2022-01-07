import React from "react";
import { useState, useEffect } from "react";
export const GiphyComp = ({ gifsToLoad }) => {
  const [gifs, setGifs] = useState(null);
  useEffect(() => {
    fetch(gifsToLoad)
      .then((response) => response.json())
      .then((json) => {
        let gifsToSet = json.data.map((gif) => gif.images.fixed_height.url);
        setGifs([...new Set(gifsToSet)]);
      })
      .catch((error) => console.log("Error Loading Gifs"));
  }, [gifsToLoad]);

  return (
    <div className="gifContainer">
      {gifs ? (
        gifs.map((g) => {
          return (
            <img
              alt="gif"
              key={g.substring(30, 45)}
              className="gifElement"
              src={g}
            ></img>
          );
        })
      ) : (
        <h1> Loading... </h1>
      )}
    </div>
  );
};
