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

  var places = [
    {
      name: 'Montreal',
      category: 'Studies'
    },
    {
      name: 'Québec',
      category: 'Tourism'
    },
    {
      name: 'Chicoutimi',
      category: 'Tourism'
    },
    {
      name: 'Toronto',
      category: 'Tourism'
    },
    {
      name: 'Niagara',
      category: 'Tourism'
    },
    {
      name: 'Chicaco',
      category: 'Tourism'
    },
    {
      name: 'New York City',
      category: 'Tourism'
    },
    {
      name: 'Philadelphia',
      category: 'Tourism'
    },
    {
      name: 'Washington',
      category: 'Tourism'
    },
    {
      name: 'Cape May New Jersy',
      category: 'Tourism'
    },
    {
      name: 'Miami',
      category: 'Tourism'
    },
    {
      name: 'Orlando',
      category: 'Tourism'
    },
    {
      name: 'San Francisco',
      category: 'Tourism'
    },
    {
      name: 'Los Angeles',
      category: 'Tourism'
    },
    {
      name: 'Las Vegas',
      category: 'Tourism'
    },
    {
      name: 'Death Valley',
      category: 'Tourism'
    },
    {
      name: 'Yosemite',
      category: 'Tourism'
    },
    {
      name: 'Brisbane',
      category: 'Tourism'
    },
    {
      name: 'Neum Bosnia',
      category: 'Tourism'
    },
    {
      name: 'Zadar',
      category: 'Tourism'
    },
    {
      name: 'Dubrovnik',
      category: 'Tourism'
    },
    {
      name: 'Kotor',
      category: 'Tourism'
    },
    {
      name: 'Sarajevo',
      category: 'Tourism'
    },
    {
      name: 'Split',
      category: 'Tourism'
    },
    {
      name: 'Budapest',
      category: 'Tourism'
    },
    {
      name: 'Praha',
      category: 'Tourism'
    },
    {
      name: 'Munich',
      category: 'Tourism'
    },
    {
      name: 'Berlin',
      category: 'Tourism'
    },
    {
      name: 'Hamburg',
      category: 'Tourism'
    },
    {
      name: 'Amsterdam',
      category: 'Tourism'
    },
    {
      name: 'London',
      category: 'Tourism'
    },
    {
      name: 'Oxford',
      category: 'Tourism'
    },
    {
      name: 'Pisa',
      category: 'Tourism'
    },
    {
      name: 'Firenze',
      category: 'Tourism'
    },
    {
      name: 'Sienna',
      category: 'Tourism'
    },
    {
      name: 'Catania',
      category: 'Tourism'
    },
  ];
  console.log(places);
}
