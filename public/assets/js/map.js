function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
      center: new google.maps.LatLng(-29.9, -51.2),
    zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
