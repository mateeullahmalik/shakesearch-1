import React, { useState } from "react";
import "./index.css";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [showPage, setShowPage] = useState(false);
  const [results, setResults] = useState([]);

  const getSearchResults = () => {
    setShowPage(true);
    let url = `/search?q=${inputText}`;
    fetch(url).then((response) => {
      response.json().then((results) => {
        setResults(results);
      });
    });
  };
  return (
    <div>
      <div className="left main-heading">Shakesearch</div>
      <div className="wrapper">
        <img
          className={showPage ? "hide-slide" : "slide"}
          src="/img/shakespeare.png"
        />
      </div>
      {showPage && (
        <div className="page-wrapper">
          <div className="page-slide">
            {results.map((result, index) => (
              <p className="text p-text">{result}</p>
            ))}
          </div>
        </div>
      )}
      <div className={`group pl-10 ${showPage ? "pl-10" : ""}`}>
        <div className="search-field">
          <img
            src="/img/search.png"
            className="empty scale vector"
            width="44"
            height="44"
            id="n6_104"
          />
          <input
            type="text"
            className="input-text"
            disabled={showPage ? "disabled" : ""}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="What art thee looking f'r?"
          />
          {inputText && !showPage ? (
            <i
              className="fa fa-arrow-right arrow"
              onClick={() => getSearchResults(true)}
            ></i>
          ) : (
            showPage && (
              <i
                className="fa fa-times arrow"
                onClick={() => setShowPage(false)}
              ></i>
            )
          )}
        </div>
      </div>
      <div className="lines">
        <img
          className={`${showPage ? "hide-lines-image" : "lines-image"} mt-15`}
          src="/img/lines.png"
        />
      </div>
    </div>
  );
};

export default Home;
