import styled from "styled-components";
import styleVar from "../variables";

const PeopleInfoStyle = styled.div`
  padding: 1rem 10%;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 40px;
  align-items: start;

  #map {
    width: 100%;
    height: 200px;
  }

  .profile-box-container {
    background-color: ${styleVar.secondaryLight};

    ul {
      list-style: none;
      margin-left: 3rem;
      padding: 0;

      a {
        padding-right: 2rem;
        font-size: 1.3rem;
        color: ${styleVar.secondaryDark};
      }
    }

    h5 {
      font-family: "Caveat";
      font-size: 1.5rem;
      margin: 0.7rem 0;
    }

    span {
      margin-left: 3rem;
      display: inline-block;
    }
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1rem 3rem;
  }
`;

export default PeopleInfoStyle;
