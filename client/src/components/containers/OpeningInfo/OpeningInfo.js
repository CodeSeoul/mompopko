import React, { Component } from "react";
import Carousel from "../../containers/Carousel/Carousel";
import GoogleMap from "../../presentational/GoogleMap/GoogleMap";

class OpeningsInfo extends Component {
  state = {};
  componentDidMount() {
    let geoData = {};
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${
        this.props.opening.address
      }&key=AIzaSyCrvxG0KmEFbbfzH9Y-qh9CKHjKM_-0Rfk`
    )
      .then(res => res.json())
      .then(data => {
        geoData = data.results[0].geometry.location;
        console.log(geoData);
        this.setState({ geoLocation: geoData }, () =>
          console.log(this.state, "state")
        );
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        Opening Info Page
        {this.props.opening.id}
      </div>
    );
  }
}

export default OpeningsInfo;
