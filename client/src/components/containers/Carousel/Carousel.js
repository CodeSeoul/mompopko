import React from "react";
import CarouselStyle from "../../../styles/container/CarouselStyle/CarouselStyle";

class Carousel extends React.Component {
  state = {
    slideIndex: 0,
    numberOfImages: this.props.children.length
  };

  right = () => {
    let newIndex = this.state.slideIndex;
    if (newIndex === this.state.numberOfImages - 1) {
      newIndex = 0;
    } else {
      newIndex++;
    }
    this.setState({ slideIndex: newIndex }, () => {});
  };

  left = () => {
    let newIndex = this.state.slideIndex;
    if (newIndex === 0) {
      newIndex = this.state.numberOfImages - 1;
    } else {
      newIndex--;
    }
    this.setState({ slideIndex: newIndex }, () => {
      console.log(this.state);
      console.log(this.props.children);
    });
  };

  render() {
    return (
      <CarouselStyle>
        <div className="wrapper">
          <i onClick={this.left} className="fas fa-angle-left left button" />
          <div className="slide" slideindex={this.state.slideIndex}>
            {this.props.children}
          </div>
          <i onClick={this.right} className="fas fa-angle-right right button" />
        </div>
      </CarouselStyle>
    );
  }
}

export default Carousel;
