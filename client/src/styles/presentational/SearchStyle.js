import styled from "styled-components";
import styleVar from "../variables";

const SearchStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 20px 0;

  .search-container {
    display: flex;
    flex-direction: row;
  }

  .icon-wrapper {
    height: 24px;
    padding: 0 4px;
    background-color: ${styleVar.secondaryDark};
    color: ${styleVar.primaryLight};
    border-radius: 5px 0 0 5px;
  }

  form {
    height: 20px;

    input {
      border-radius: 0 5px 5px 0;
      height: 20px;
      padding: 0;
      height: inherit;
    }
  }

  /* Mobile */
  @media only screen and (max-width: 740px) {
  }
`;

export default SearchStyle;
