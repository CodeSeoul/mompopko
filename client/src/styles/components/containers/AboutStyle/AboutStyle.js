import styled from "styled-components";

const AboutStyle = styled.div`
  padding: 3rem 5rem;
  .container {
    margin: 30px auto;
  }

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
`;

export default AboutStyle;
