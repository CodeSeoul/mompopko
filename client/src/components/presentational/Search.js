import React from "react";
import SearchStyle from "../../styles/presentational/SearchStyle";

const Search = props => {
  return (
    <SearchStyle>
      <div className="search-container">
        <button>
          <i className="fa fa-search" />
        </button>
        <form action="POST">
          <input type="text" />
        </form>
      </div>
    </SearchStyle>
  );
};

export default Search;
