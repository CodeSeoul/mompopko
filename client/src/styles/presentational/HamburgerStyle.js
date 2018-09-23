import styled from "styled-components";
import styleVar from "../variables";

const HamburgerStyle = styled.div`
  display: none;
  position: absolute;
  right: 35px;
  top: 48px;
  cursor: pointer;
  .hamburger-bar {
    width: 28px;
    height: 3px;
    background-color: ${styleVar.secondaryDark};
    margin-top: 5px;
  }
  @media only screen and (max-width: 740px) {
    display: block;
  }
`;

export default HamburgerStyle;
