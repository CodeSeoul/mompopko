import styled from "styled-components";
import styledVar from "../../../variables";

const StoryStyle = styled.div`
  padding: 3rem 5rem;

  .container {
    display: grid;
    grid-template-rows: repeat(auto-fit, auto);
    grid-gap: 0;

    h2 {
      margin: 10px 0 10px 0;
    }

    .grid-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;

      a {
        text-decoration: none;
      }

      .story-card {
        overflow: hidden;
        width: 100%;
        height: 400px;
        :hover {
          .description {
            height: 90px;
            transform: translateY(-90px);
          }
        }
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

        i {
          margin-right: 0.5rem;
        }

        #story-category {
          height: 0.5rem;
        }

        #story-businessName {
          color: ${styledVar.primaryDark};
          font-size: 2rem;
          font-family: "Caveat";
          font-weight: 700;
        }
      }
    }
  }
`;

export default StoryStyle;
