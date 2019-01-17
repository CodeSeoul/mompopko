import React from "react";
import BrandStyle from "../../styles/presentational/BrandStyle";
import { Link } from "react-router-dom";
const Brand = props => {
  return (
    <BrandStyle>
      <Link to="/">
        <h1>mompopko</h1>
      </Link>
    </BrandStyle>
  );
};

export default Brand;
