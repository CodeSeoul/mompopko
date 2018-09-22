import React from "react";
import SearchStyle from "../../styles/presentational/SearchStyle";

const Search = props => {
  return (
    <SearchStyle>
      <div className="search-container">
        <div>
          <i className="fa fa-search" />
        </div>
        <form action="POST">
          <input type="text" />
        </form>
      </div>
    </SearchStyle>
  );
};

export default Search;
