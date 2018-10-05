import styled from "styled-components";

const CarouselStyle = styled.div`
  .wrapper {
    overflow: hidden;
    width: 300px;
    height: 400px;
    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  }
`;

export default CarouselStyle;
