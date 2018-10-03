import styled from "styled-components";
import styleVar from "../variables";

const FooterStyle = styled.div`
  height: 200px;
  color: ${styleVar.primaryLight};
  background-color: ${styleVar.primaryDark};
  display: grid;
  align-items: center;
  justify-items: center;
`;

export default FooterStyle;
