function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(39.260325, -39.065246),
    zoom: 2,
    minZoom: 2
  };
  var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);


  var infowindow = new google.maps.InfoWindow();
  console.log(infowindow);

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
          var contentString = '<div id="iw-container">'+
          '<div id="iw-title" style="font-size: 1.75em; margin-left:10px;">'+ data[i].properties.name +'</div>'+
          '<div class="infowindow-info">' +
          '<div class="map-tag">' + data[i].properties.tag + '</div>' +
          '<div class="background-item-date">' + data[i].properties.date + '</div>' +
          '<div class="img-container"><img src="../img/torontoview.jpg"/></div>' +
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
