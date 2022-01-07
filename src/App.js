import { useState } from "react";
import "./App.css";
import { GiphyComp } from "./components/GiphyComp";

function App() {
  const apiKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  const trendingGifs = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`;
  const [gifRequest, setGifRequest] = useState(trendingGifs);
  const [inputValue, setInputValue] = useState("");
  const searchGifs = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      setGifRequest(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}&limit=25&offset=0&rating=g&lang=en`
      );
    } else {
      setGifRequest(trendingGifs);
    }
  };

  return (
    <div className="App">
      <form onSubmit={searchGifs}>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <input type="submit" value="Search GIFs" />
      </form>
      <GiphyComp gifsToLoad={gifRequest} />
    </div>
  );
}

export default App;
