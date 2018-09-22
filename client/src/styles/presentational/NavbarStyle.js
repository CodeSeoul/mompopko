import styled from "styled-components";
import styleVar from "../variables";

const NavbarStyle = styled.div`
  nav {
    display: grid;
    grid-template-columns: 2fr 1fr;
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      a {
        padding: 0 20px;
        text-decoration: none;
        color: ${styleVar.secondaryDark};
        display: block;
      }
    }
  }
`;

export default NavbarStyle;
