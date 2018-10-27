import React, { Component } from "react";

class GoogleMap extends Component {
  onScriptLoad = () => {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.option
    );

    this.props.onMapLoad(map);
  };

  componentDidMount() {
    if (!window.google) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCrvxG0KmEFbbfzH9Y-qh9CKHjKM_-0Rfk&callback=initMap";

      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode.insertBefore(script, firstScript);

      script.addEventListener("load", () => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return <div id={this.props.id} />;
  }
}

export default GoogleMap;
