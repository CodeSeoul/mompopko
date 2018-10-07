import React from "react";
import PeopleInfoStyle from "../../../styles/presentational/PeopleInfoStyle";
import Carousel from "../../containers/Carousel/Carousel";
import GoogleMap from "../../presentational/GoogleMap/GoogleMap";

class PeopleInfo extends React.Component {
  render() {
    console.log(this.props);
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
                <li />
                <li />
                <li />
                <li />
              </ul>
            </li>
            <li>
              <h5>Address</h5>
              <div>{person.address}</div>
              <GoogleMap
                id="myMap"
                option={{ center: { lat: 29, lng: 56 }, zoom: 8 }}
                onMapLoad={map => {
                  const market = new window.google.maps.Marker({
                    position: { lat: 29, lng: 56 },
                    map: map,
                    title: "business"
                  });
                }}
              />
            </li>
          </ul>
        </div>
      </PeopleInfoStyle>
    );
  }
}

export default PeopleInfo;
