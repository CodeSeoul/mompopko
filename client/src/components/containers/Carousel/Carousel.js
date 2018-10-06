import React from "react";
import CarouselStyle from "../../../styles/container/CarouselStyle/CarouselStyle";

class Carousel extends React.Component {
  state = {
    slideIndex: 0
  };

  right = () => {
    let newIndex = this.state.slideIndex;
    if (newIndex === this.props.children.length) {
      newIndex = 0;
    } else {
      newIndex++;
    }
    this.setState({ slideIndex: newIndex }, () => {});
  };

  left = () => {
    let newIndex = this.state.slideIndex;
    if (newIndex === 0) {
      newIndex = this.props.children.length;
    } else {
      newIndex--;
    }
    this.setState({ slideIndex: newIndex }, () => {});
  };

  render() {
    return (
      <CarouselStyle>
        <div className="wrapper">
          <div onClick={this.left} className="left button" />
          <div className="slide" slideindex={this.state.slideIndex}>
            {this.props.children}
          </div>
          <div onClick={this.right} className="right button" />
        </div>
      </CarouselStyle>
    );
  }
}

export default Carousel;
