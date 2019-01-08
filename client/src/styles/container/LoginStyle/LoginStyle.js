import styled from "styled-components";

const LoginStyle = styled.div`
  * {
    margin: 10px auto;
    display: block;
    font-family: "Roboto";
  }
  input {
    height: 30px;
    border: solid #ccc 1px;
  }
  button {
    border: none;
    background-color: #3575dd;
    color: white;
    font-size: 1.1rem;
    border-radius: 5%;
    padding: 5px 10px;
  }
  #error-message {
    font-size: 0.8rem;
    text-align: center;
    color: red;
  }
`;

export default LoginStyle;
