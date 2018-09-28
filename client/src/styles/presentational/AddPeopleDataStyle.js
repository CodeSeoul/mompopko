import styled from "styled-components";
import styleVar from "../variables";
const AddPeopleDataStyle = styled.div`
  text-align: center;

  input,
  span,
  textarea {
    margin: 10px auto;
    display: block;
    width: 300px;
  }

  input {
    height: 30px;
    border: ${styleVar.primaryDark} solid 1px;
  }
  }
`;

export default AddPeopleDataStyle;
