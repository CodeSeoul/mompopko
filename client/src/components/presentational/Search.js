import React from "react";
import SearchStyle from "../../styles/presentational/SearchStyle";

const Search = props => {
  return (
    <SearchStyle>
      <div className="search-container">
        <div className="icon-wrapper">
          <i className="fa fa-search" />
        </div>
        <form action="POST">
          <input
            onChange={e => {
              props.searchHandler(e);
            }}
            placeholder=" Find"
            type="text"
          />
          <input
            onChange={e => {
              props.searchHandler(e);
            }}
            placeholder=" Near"
            type="text"
          />
        </form>
      </div>
    </SearchStyle>
  );
};

export default Search;
