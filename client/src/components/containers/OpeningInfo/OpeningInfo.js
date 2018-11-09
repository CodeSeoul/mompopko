import React, { Component } from "react";
import Carousel from "../../containers/Carousel/Carousel";
import GoogleMap from "../../presentational/GoogleMap/GoogleMap";
import OpeningInfoStyle from "../../../styles/components/containers/OpeningInfoStyle/OpeningInfoStyle";

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
    const opening = this.props.opening;
    const images = [
      ...opening.imgURLs.map((url, index) => {
        return <img alt="" src={url} key={index + 1} />;
      })
    ];
    return (
      <OpeningInfoStyle>
        Opening Info Page
        <div className="grid-container">
          <Carousel>{images}</Carousel>
          <div className="profile-box-container">
            <ul className="profile-box">
              <li>
                <h5>Location</h5>
                <span>{opening.location}</span>
              </li>
              <li>
                <h5>Category</h5>
                <span>{opening.category}</span>
              </li>
              <li>
                <h5>Registration Date</h5>
                <span>{opening.registration}</span>
              </li>
              <li>
                <h5>Business Name</h5>
                <span>{opening.name}</span>
              </li>
              <li>
                <h5>Address</h5>
                <span>{opening.newLocation}</span>
                {!this.state.geoLocation ? null : (
                  <GoogleMap
                    id="map"
                    option={{
                      center: {
                        lat: this.state.geoLocation.lat,
                        lng: this.state.geoLocation.lng
                      },
                      zoom: 17
                    }}
                    onMapLoad={map => {
                      const market = new window.google.maps.Marker({
                        position: {
                          lat: this.state.geoLocation.lat,
                          lng: this.state.geoLocation.lng
                        },
                        map: map,
                        title: "business"
                      });
                    }}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </OpeningInfoStyle>
    );
  }
}

export default OpeningsInfo;
