import styled from "styled-components";
import styleVar from "../variables";

const FooterStyle = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  height: 200px;
  color: ${styleVar.primaryLight};
  background-color: ${styleVar.primaryDark};
  display: grid;
  align-items: center;
  justify-items: center;

  a {
    display: block;
    color: ${styleVar.primaryLight};
    text-decoration: none;
    padding: 0 10px;
    :hover {
      cursor: pointer;
    }
  }

  .icon-container {
    font-size: 1.3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .copyright-container {
    width: 70%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .contact {
    * {
      margin-bottom: 15px;
    }
    input {
      width: 80%;
      height: 30px;
    }
  }

  /* Mobile */
  @media only screen and (max-width: 740px) {
    .copyright-container {
      flex-direction: column;
      a {
        height: 30px;
      }
    }
  }
`;

export default FooterStyle;
