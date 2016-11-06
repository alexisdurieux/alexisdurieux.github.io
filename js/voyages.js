window.onload = function(){
  initMap();
}

function initMap() {
  var myLatlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 8,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);

  var places;
  $.getJSON("../data/voyages_data.json", function(json) {
    places = json;
  });

  for (var i = 0; i < places.length; i++) {
    var coords = places[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
       position: latLng,
       map: map
    });
  }
}
