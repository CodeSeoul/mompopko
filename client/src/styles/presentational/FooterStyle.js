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
  }

  .icon-container {
    font-size: 1.3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .copyright-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    a {
      padding: 0 80px;
    }
  }
`;

export default FooterStyle;
