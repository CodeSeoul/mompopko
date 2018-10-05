import React from "react";
import CarouselStyle from "../../../styles/container/CarouselStyle/CarouselStyle";

class Carousel extends React.Component {
  render() {
    return (
      <CarouselStyle>
        <div className="wrapper">{this.props.children}</div>;
      </CarouselStyle>
    );
  }
}

export default Carousel;
