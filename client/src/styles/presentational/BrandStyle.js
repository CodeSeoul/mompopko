import styled from "styled-components";
import styleVar from "../variables";

const BrandStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Amatic+SC:400,700");
  border-bottom: 1px solid #ddd;
  text-align: center;
  font-size: 1.5rem;
  font-family: Amatic SC;
  a {
    margin: 20px 0;
    text-decoration: none;
    color: ${styleVar.primaryDark};
  }
`;

export default BrandStyle;
