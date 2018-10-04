import styled from "styled-components";
import styledVar from "../../variables";

const Person = styled.div`

  a{
    text-decoration : none;
  }
  
  .person-card {
    overflow: hidden;
    width: 100%;
    height: 400px;
  }

  img {
    object-fit: cover;
    width: inherit;
    object-position: 50% top;
    height: 100%;
  }

  .description {
    color: ${styledVar.secondaryDark};
    background-color: ${styledVar.primaryLight};
    opacity: 0.8;
    transform: translateY(-50px);
    height: 50px;
    transition: all 0.5s;
    padding: 0.81rem 0 0 1rem;

    :hover {
      height: 90px;
      transform: translateY(-90px);
    }

    i {
      margin-right: 0.5rem;
    }

    #person-occupation {
      height: 0.5rem;
    }

    #person-name {
      color : ${styledVar.primaryDark}
      font-size: 2rem;
      font-family: "Caveat";
      font-weight: 700;
    }
  }
`;

export default Person;
