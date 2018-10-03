import styled from "styled-components";
import styledVar from "../../variables";

const Person = styled.div`
  .person-card {
    width: 100%;
    overflow: hidden;
  }

  img {
    height: auto;
    max-width: 100%;
  }
  .description {
    color: ${styledVar.primaryDark};
    background-color: ${styledVar.primaryLight};
    opacity: 0.8;
    transform: translateY(-40px);
    height: 40px;
    transition: all 0.5s;
    :hover {
      height: 80px;
      transform: translateY(-80px);
    }
  }
`;

export default Person;
