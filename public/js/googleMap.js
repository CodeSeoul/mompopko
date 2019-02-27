function createGoogleMap(address) {
  let geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address }, (results, status) => {
    if (status == "OK") {
      let mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(
          results[0].geometry.location.lat(),
          results[0].geometry.location.lng()
        )
      };
      let map = new google.maps.Map(document.getElementById("map"), mapOptions);
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      console.log("Failed to get geolocation");
    }
  });
}
