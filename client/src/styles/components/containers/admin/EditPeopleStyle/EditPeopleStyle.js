import styled from "styled-components";
import styleVar from "../../../../variables";

const EditPeopleStyle = styled.div`
  font-family: "Roboto";

  .images {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(20%,auto));
    min-height: 30vmax;

  input[type='file']{
    display : none;
  }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

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
      font-family: "Roboto";
      width: 80%;
      font-size: 1.2rem;
      margin-left: 3rem;
      display: inline-block;
      border: none;
      background-color: ${styleVar.secondaryLight};
      :focus {
        background-color: ${styleVar.primaryLight};
        border: 1px solid rgb(50, 50, 213);
      }
    }

    button {
      font-family: "Roboto";
      display: block;
      padding: 0.5rem 1.5rem;
      font-size: 1.3rem;
      margin: 0 auto;
      border: 1px solid ${styleVar.primaryDark};
      background-color: ${styleVar.primaryLight};
    }
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1rem 3rem;

    .images {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr
      min-height: 100vmax;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default EditPeopleStyle;
