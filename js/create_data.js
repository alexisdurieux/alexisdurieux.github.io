var jsonfile = require('jsonfile');

jsonfile.spaces = 4;
var file = "../data/voyages_data.json";

function newJSONPlace(name, description, date, lon, lat){
  var place = {
    "type": "Feature",
    "geometry": "Point",
    "coordinates": [lat, lon],
    "properties": {
      "name": name,
      "tag": description,
      "date": date
    }
  }
  return place;
}

data = [];

data.push(newJSONPlace('Montreal', 'Exchange Student', 'Sep 2015. May 2016', 45.513387, -73.568550));
data.push(newJSONPlace('Québec', '', '', 46.824575, -71.21023));
data.push(newJSONPlace('Chicoutimi', '', '', 48.352517, -71.135329));
data.push(newJSONPlace('Toronto', '', '', 43.647387, -79.360247));
data.push(newJSONPlace('Niagara', '', '',43.089460, -79.079119 ));
data.push(newJSONPlace('Chicago', '', '', 41.876182, -87.609933));
data.push(newJSONPlace('New York City', '', '', 40.752315, -74.375922));
data.push(newJSONPlace('Philadelphia', '', '', 39.949170, -75.115188));
data.push(newJSONPlace('Washington', '', '', 38.905119, -77.025598));
data.push(newJSONPlace('Cape May', '', '', 38.935040, -74.900381));
data.push(newJSONPlace('Miami', '', '', 25.762073, -80.191006));
data.push(newJSONPlace('Orlando', '', '', 28.536550, -81.367663));
data.push(newJSONPlace('San Francisco', '', '', 37.772060, -122.410876));
data.push(newJSONPlace('Los Angeles', '', '', 34.051795, -118.218785));
data.push(newJSONPlace('Las Vegas', '', '', 36.169939, -115.125075));
data.push(newJSONPlace('Death Valley', '', '', 36.835854, -116.845228));
data.push(newJSONPlace('Yosemite', '', '', 37.745530, -119.592676));
data.push(newJSONPlace('Brisbane', '', '', -27.469817, 153.027642));
data.push(newJSONPlace('Neum', '', '', 42.923348));
data.push(newJSONPlace('Zadar', '', '', 44.122056, 15.234485));
data.push(newJSONPlace('Dubrovnik', '', '', 42.649681, 18.089242));
data.push(newJSONPlace('Kotor', '', '', 42.424650, 18.770584));
data.push(newJSONPlace('Sarajevo', '', '', 43.856755, 18.422781));
data.push(newJSONPlace('Plivitce', '', '', 44.882009, 15.621094));
data.push(newJSONPlace('Split', '', '', 43.506301, 16.441521));
data.push(newJSONPlace('Sarajevo', '', '', 43.855765, 18.440633));
data.push(newJSONPlace('Budapest', '', '', 47.496559, 19.086223));
data.push(newJSONPlace('Praha', '', '', 50.084770, 14.440778));
data.push(newJSONPlace('Hamburg', '', '', 53.554006, 10.070527));
data.push(newJSONPlace('Berlin', '', '', 52.526282, 13.376586));
data.push(newJSONPlace('Munich', '', '', 48.134413, 11.570641));
data.push(newJSONPlace('Amsterdam', '', '', 52.369252, 4.923302));
data.push(newJSONPlace('London', '', '', 51.507540, -0.128828));
data.push(newJSONPlace('Oxford', '', '', 51.752034, -1.262015));
data.push(newJSONPlace('Lucca', '', '', 43.835757, 10.483317));
data.push(newJSONPlace('Firenze', '', '', 43.826834, 11.221753));
data.push(newJSONPlace('Pisa', '', '', 43.724036, 10.398802));
data.push(newJSONPlace('Sienna', '', '', 43.319234, 11.332110));
data.push(newJSONPlace('Catania', '', '', 37.504248, 15.088494));
data.push(newJSONPlace('Taormina','','', 37.851576, 15.287257));
data.push(newJSONPlace('San Gimignano', '', '', 43.469222, 11.043809));



jsonfile.writeFile(file, data, function (err) {
  console.error(err)
});
