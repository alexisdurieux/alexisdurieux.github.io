function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(39.260325, -39.065246),
    zoom: 2,
    minZoom: 2
  };
  var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);


  var infowindow = new google.maps.InfoWindow();

  $.getJSON("../data/voyages_data.json", function(data) {

    for (var i = 0; i < data.length; i++) {
      var coords = data[i].coordinates;
      var latLng = new google.maps.LatLng(coords[1],coords[0]);


      var marker = new google.maps.Marker({
         position: latLng,
         map: map,
         title: data[i].properties.name
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          var contentString = '<div id="content" style="padding: 0px;">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">'+ data[i].properties.name +'</h1>'+
          '<div class="infowindow-info">' +
          '<div class="map-tag">' + data[i].properties.tag + '</div>' +
          '<div class="background-item-date">' + data[i].properties.date + '</div>'
          '</div>' +
          '</div>'+
          '</div>';
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  });
}
