import styled from "styled-components";

const StoryInfoStyle = styled.div`
  .wrapper {
    width: 80%;
    margin: 0 auto;
    font-size: 1.3rem;
  }

  header {
    text-align: center;
    span {
      margin: 0 10px;
    }
  }

  .image-map-container {
    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    display: grid;
    grid-template-columns: repeat(auto-fit, 50%);
    grid-template-rows: repeat(auto-fit, 50%);
    height: 100vh;
  }
`;

export default StoryInfoStyle;
