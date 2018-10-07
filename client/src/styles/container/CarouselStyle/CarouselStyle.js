import styled from "styled-components";
import styleVar from "../../variables";

const CarouselStyle = styled.div`

  padding : 3rem 2rem;

  .wrapper {
    overflow: hidden;
    width: 300px;
    height: 400px;
    position: relative;
    :hover{
      .left {
        left : 5px;
      }

      .right{
        right : 5px;
      }
    }

    .button {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      text-align : center;
      transition : all 0.3s;
      font-size : 1.5rem;
      color : ${styleVar.primaryLight};
      cursor : pointer;
    }
    .left {
      left: -30px;
      z-index: 1;
    }
    .right {
      right: -30px;
    }

    img {
      width: 300px;
      height: 400px;
      object-fit: cover;
    }

    .slide {
      display: flex;
      flex-direction: row;
      width: ${props =>
        300 * props.numberOfImages + "px"}
      height: 100%;
      transition: transform 0.3s;
      transform: translateX(
        ${props => {
          return (
            (props.slideIndex / props.numberOfImages) * -100 + "%"
          );
        }}
      );
    }
  }
`;

export default CarouselStyle;
