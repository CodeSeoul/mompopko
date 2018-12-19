import styled from "styled-components";
import styleVar from "../../variables";

const CarouselStyle = styled.div`
  height : 100%;

  .wrapper {
    overflow: hidden;
    width: 100%;
    height : 30vw;
    position: relative;

    :hover{
      .left {
        left : 5px;
        opacity : 1;
      }

      .right{
        right : 5px;
        opacity : 1;
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
      opacity : 0;
      z-index: 1;
    }
    
    .right {
      right: -30px;
      opacity : 0;
    }

    .slide {
    display: flex;
    flex-direction: row;
    width: ${props => 100 * props.numberOfImages + "%"}
    height: 100%;
    transition: transform 0.3s;
    transform: translateX(
      ${props => {
        return (props.slideIndex / props.numberOfImages) * -100 + "%";
      }}
    );

      img {
      width : ${props => 100 / props.numberOfImages + "%"};
      object-fit: cover;
      height: 100%;
      }
    }
  }
  
  @media only screen and (max-width: 900px) {

    .wrapper {
      margin : 0 auto;
      width : 100%;
      height : 90vw;

      .left {
        left : 5px;
        opacity : 1;
      }

      .right{
        right :5px;
        opacity : 1;
      }
      
      .slide {
        width: ${props => 100 * props.numberOfImages + "%"};
        height : inherit;

        img{
          width : ${props => 100 / props.numberOfImages + "%"};
          height : inherit;
        }
      }
    }
    
  }
`;

export default CarouselStyle;
