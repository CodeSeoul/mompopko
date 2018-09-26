import styled from "styled-components";
import styleVar from "../variables";

const SearchStyle = styled.div`

  display : flex;
  align-items : center;
  justify-content : center;
  box-sizing : border-box;
  margin : 20px 0;

  button {
    display : inline-block;
    border-radius : 5% 0% 0% 5%;
    height : 20px;
    border : 0.5px ${styleVar.primaryDark} solid;
    background-color : ${styleVar.secondaryDark};
    i{
      color : ${styleVar.primaryLight};
    }
  }

  form{
    display : inline-block;

    input{
      border : 0.5px ${styleVar.primaryDark} solid;
      border-radius : 0% 5% 5% 0%;
      height : 16px;
    }
  }

  
  }

  /* Mobile */
  @media only screen and (max-width: 740px) {
  }
`;

export default SearchStyle;
