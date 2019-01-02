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
            placeholder=" Search"
            type="text"
          />
        </form>
      </div>
    </SearchStyle>
  );
};

export default Search;
