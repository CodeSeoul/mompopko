import styled from "styled-components";
import styleVar from "../variables";

const NavbarStyle = styled.div`
  border-bottom: 1px solid #ddd;
  nav {
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 50px;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      a {
        text-decoration: none;
        color: ${styleVar.secondaryDark};
        display: block;
        padding: 10px;
        transition: background-color 0.4s;
        :hover {
          transition: background-color 0.4s;
          background-color: ${styleVar.secondaryLight};
        }
        :hover + .dropdown {
          display: block;
          position: absolute;
          left: 0px;
        }
      }

      &.sns a {
        color: ${styleVar.primaryDark};
        font-size: 1.5rem;
        padding: 6px 10px;
      }
    }
  }

  .dropdown {
    :hover {
      display: block;
      position: absolute;
      left: 0px;
    }
    ul {
      margin: 20px 40px;
      display: flex;
      flex-direction: column;
      list-style: none;
      justify-content: space-between;
      align-items: flex-start;
    }
    padding-top: 8px;
    font-size: 1rem;
    width: 100%;
    height: 400px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
  }

  .dropdown-wrapper {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    text-align: center;
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
          transition: background-color 0.4s;
          padding: 1rem;
          width: 90%;
          text-align: center;
        }
      }

      ul.sns {
        margin: 0 auto;
        width: 300px;
        font-size: 1.5rem;
      }
    }
  }
`;

export default NavbarStyle;
