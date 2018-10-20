import React from "react";
import PeopleInfoStyle from "../../../styles/presentational/PeopleInfoStyle";
import Carousel from "../../containers/Carousel/Carousel";
import GoogleMap from "../../presentational/GoogleMap/GoogleMap";

class PeopleInfo extends React.Component {
  state = {};

  componentDidMount() {
    let geoData = {};
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${
        this.props.person.address
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
    const person = this.props.person;
    const images = [
      <img key={0} alt="" src={person.imgURL} />,
      ...person.subImgURLs.map((url, index) => {
        return <img alt="" src={url} key={index + 1} />;
      })
    ];

    return (
      <PeopleInfoStyle>
        <Carousel>{images}</Carousel>
        <div className="profile-box-container">
          <ul className="profile-box">
            <li>
              <h5>Occupation</h5>
              <span>{person.occupation}</span>
            </li>
            <li>
              <h5>Affiliated Business</h5>
              <span>{person.business}</span>
            </li>
            <li>
              <h5>Location</h5>
              <span>{person.location}</span>
            </li>
            <li>
              <h5>Category</h5>
              <span>{person.category}</span>
            </li>
            <li>
              <h5>Started</h5>
              <span>{person.started}</span>
            </li>
            <li>
              <h5>URL</h5>
              <ul>
                <a href={person.urls.website}>
                  <i className="fas fa-home" />
                </a>
                <a href={person.urls.facebook}>
                  <i className="fab fa-facebook" />
                </a>
                <a href={person.urls.instagram}>
                  <i className="fab fa-instagram" />
                </a>
                <a href={person.urls.youtube}>
                  <i className="fab fa-youtube" />
                </a>
              </ul>
            </li>
            <li>
              <h5>Address</h5>
              <span>{person.address}</span>
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
        <div className="interview">{person.interview}</div>
      </PeopleInfoStyle>
    );
  }
}

export default PeopleInfo;
