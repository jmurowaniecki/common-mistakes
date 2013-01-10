
var myCoords, geolocator = navigator.geolocation.getCurrentPosition(function (my) {
	myCoords = (function (coords) {
		return [coords.latitude, coords.longitude];
	})(my.coords);
	return window.location = "https://maps.google.com.br/maps?q=" + myCoords[0] + ",+" + myCoords[1];
});