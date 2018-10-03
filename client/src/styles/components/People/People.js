import styled from "styled-components";

const People = styled.div`
  padding: 3rem 5rem;

  .container {
    margin-top: 30px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;

export default People;
