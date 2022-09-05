import React, { useState, useEffect } from "react";
import axios from "axios";

export const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  // 1 of 3 scenarios .
  // use when the component is rendered for first time only
  // when the compoent is rendered for the first time and wener it rerenders
  // 3 when the compoennt is rendered for the first time and
  // whenever it rerenders and some piece of data has changed
  // second argument controls when it gets called
  // empty array [] = run at inital render, nothing means run at initial
  // render, run after every rerender
  // [data] means run at initial render or run after every rerender if data
  // has changed since last render
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term
        }
      });
      console.log(data);
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter serach term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
