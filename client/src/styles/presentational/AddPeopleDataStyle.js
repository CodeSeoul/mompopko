import styled from "styled-components";
import styleVar from "../variables";
const AddPeopleDataStyle = styled.div`
  .profile-box-container {
    padding: 2rem;
    background-color: ${styleVar.secondaryLight};

    h5 {
      font-family: "Caveat";
      text-transform: capitalize;
      font-size: 1.5rem;
      margin: 0.7rem 0;
    }

    input,
    textarea {
      width: 80%;
      font-size: 1.3rem;
      margin-left: 3rem;
      display: block;
    }

    button {
      display: block;
      margin: 1rem auto;
    }
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1rem 3rem;
  }
`;

export default AddPeopleDataStyle;
