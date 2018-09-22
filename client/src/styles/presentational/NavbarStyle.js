import styled from "styled-components";
import styleVar from "../variables";

const NavbarStyle = styled.div`
  border-bottom: 1px solid #ddd;
  nav {
    display: grid;
    grid-template-columns: 2fr 1fr;
    ul {
      margin: 15px 0;
      &.sns {
        font-size: 1.5rem;
        a {
          color: ${styleVar.primaryDark};
        }
      }
      padding: 0;
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

  /* Mobile */
  @media only screen and (max-width: 740px) {
    nav {
      height: ${props => (props.toggle ? "300px" : "3px")};
      grid-template-rows: 1fr 1fr;
      grid-template-columns: none;
      transition: height 0.5s ease-out;
      overflow-y: hidden;

      ul.menu {
        display: flex;
        flex-direction: column;
        a {
          padding: 1rem;
        }
      }

      ul.sns {
        margin: 0 auto;
        width: 300px;
        font-size: 1.5rem;
        a {
          color: ${styleVar.primaryDark};
        }
      }
    }
  }
`;

export default NavbarStyle;
