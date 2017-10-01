function initScrollIt(){
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: -70          // offste (in px) for fixed top navigation
  });
}

function initFiltering(){
  $('.tag').mouseenter(function(e){
    if (!$(this).hasClass('selected-tag')){
      $(this).css('opacity', '1');
    } else {
      $(this).css('opacity', '0.5');
    }
  });

  $('.tag').mouseout(function(e){
    if (!$(this).hasClass('selected-tag')){
      $(this).css('opacity', '0.5');
    } else {
      $(this).css('opacity', '1');
    }
  });

  $('.tag').click(function(e){
    if ($(this).hasClass('selected-tag')){
      $(this).css('opacity', 0.5);
      $(this).removeClass('selected-tag');
      $('.background-item').each(function(i){
        $(this).show("slow");
      });
    } else {
      $('.tag.selected-tag').removeClass('selected-tag').css('opacity', '0.5');
      $(this).addClass('selected-tag').css('opacity', '1');
      var filter = $(this).attr('name');
      $('.tags').each(function(i){
        if ($(this).children('[filter-attribute=' + filter + ']').length){
          $(this).parent().show("slow");
        } else {
          $(this).parent().hide("slow");
        }
      });
    }
  });
}

function initLinkURL(){
  $('.link-url').each(function(){
    $(this).click(function(e){
      window.open($(this).attr('link-url'));
    });
  })
}

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
          var contentString = '<div id="iw-container">'+
          '<div id="iw-title" style="font-size: 1.75em; margin-left:10px;">'+ data[i].properties.name +'</div>'+
          '<div class="infowindow-info">' +
          (data[i].properties.tag ? '<div class="map-tag">' + data[i].properties.tag + '</div>' : "") +
          '<div class="background-item-date">' + data[i].properties.date + '</div>' +
          (data[i].properties.picture ? '<div class="img-container"><img src="' + data[i].properties.picture + '"/></div>' : "") +
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




initScrollIt();
initFiltering();
//initLinkURL();
