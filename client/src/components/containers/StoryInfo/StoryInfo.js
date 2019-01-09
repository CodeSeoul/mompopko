import React, { Component } from "react";
import StoryInfoStyle from "../../../styles/components/containers/StoryInfoStyle/StoryInfoStyle";
import { connect } from "react-redux";
import GoogleMap from "../../presentational/GoogleMap/GoogleMap";

class StoryInfo extends Component {
  state = {};
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.story) {
      const id = nextProps.match.params.id;

      return {
        storyData: nextProps.story.stories.filter(story => {
          return story._id === id;
        })[0]
      };
    }
    return null;
  }

  render() {
    const storyData = this.state.storyData;
    console.log(storyData);
    const images = this.state.storyData
      ? storyData.image.map((image, index) => {
          return (
            <img
              key={index}
              src={
                "http://localhost:5000/api/stories/image/" +
                storyData.image[index]
              }
              alt="images"
            />
          );
        })
      : null;

    return (
      <StoryInfoStyle>
        {storyData ? (
          <div className="wrapper">
            <header>
              <h1 className="business-name">{storyData.business.name}</h1>
              <div className="subInfo">
                <span className="category1">
                  {storyData.business.category1}
                </span>
                <span className="category2">
                  {storyData.business.category2}
                </span>
                <span className="category3">
                  {storyData.business.category3}
                </span>
                <span className="openingData">
                  {storyData.business.openingDate}
                </span>
              </div>
            </header>
            <div className="main">
              <div className="image-map-container">{images}</div>
              <GoogleMap
                id="map"
                option={{
                  center: {
                    lat: 45,
                    lng: 120
                  },
                  zoom: 17
                }}
                onMapLoad={map => {
                  const marker = new window.google.maps.Marker({
                    position: {
                      lat: 45,
                      lng: 120
                    },
                    map: map,
                    title: "business"
                  });
                }}
              />
            </div>
            <div className="interview-container">
              <p className="owner-name">Owner : {storyData.owner.name}</p>
              <p className="published-date">
                Published : {storyData.createdDate}
              </p>
              <p className="interview">{storyData.owner.interview}</p>
            </div>
            <div className="more-info">
              <span className="tel">Tel : {storyData.business.telephone}</span>
              <span className="tel">Hours : {storyData.business.hour}</span>
              <span className="tel">
                Instagram : {storyData.business.channels.instagram}
              </span>
            </div>
            <div className="related" />
          </div>
        ) : null}
      </StoryInfoStyle>
    );
  }
}

const mapStateFromProps = state => {
  return {
    story: state.story
  };
};

export default connect(
  mapStateFromProps,
  {}
)(StoryInfo);
