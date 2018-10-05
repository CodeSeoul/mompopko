import React from "react";
import CarouselStyle from "../../../styles/container/CarouselStyle/CarouselStyle";

class Carousel extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
      <CarouselStyle>
        <div className="left-button" />
        <div className="wrapper">{this.props.children}</div>;
        <div className="right-button" />
      </CarouselStyle>
    );
  }
}

export default Carousel;
