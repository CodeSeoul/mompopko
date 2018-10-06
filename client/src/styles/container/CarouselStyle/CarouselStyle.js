import styled from "styled-components";
import { callbackify } from "util";

const CarouselStyle = styled.div`
  .wrapper {
    overflow: hidden;
    width: 300px;
    height: 400px;
    position: relative;

    .button {
      width: 30px;
      height: 30px;
      background-color: black;
      position: absolute;
      top: 50%;
    }
    .left {
      left: 10%;
      z-index: 1;
    }
    .right {
      right: 10%;
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
        300 * props.children.props.children[1].props.children.length + "px"}
      height: 100%;
      transition: transform 0.3s;
      transform: translateX(
        ${props => {
          return (
            (props.children.props.children[1].props.slideindex /
              props.children.props.children[1].props.children.length) *
              -100 +
            "%"
          );
        }}
      );
    }
  }
`;

export default CarouselStyle;
