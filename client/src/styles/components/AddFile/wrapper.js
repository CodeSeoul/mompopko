import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  width: 80vmin;
  height: 20vmin;
  margin: 0 auto;
  text-align: center;

  div {
    height: 100%;
    border: 1px solid blue;
  }
  .drop_enter {
    background-color: #2196f3;
    border: none;
    color: white;
  }
  .drop_leave {
    background-color: gray;
    border: none;
  }
  p {
    font-size: 2rem;
    color: dimgray;
  }
`;

export default Wrapper;
