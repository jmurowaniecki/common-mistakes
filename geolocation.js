
var myCoords, geolocator = navigator.geolocation.getCurrentPosition(function (my) {
	myCoords = (function (coords) {
		return [coords.latitude, coords.longitude];
	})(my.coords);
	return window.location = "https://maps.google.com.br/maps?q=" + myCoords[0] + ",+" + myCoords[1];
});

function solution(a, b) {
	return a.length < b.length ? a + b + a : b + a + b;
}


/// ---

var $ = 'Money';
$.constructor.prototype.$ = function more ($) { return [arguments.callee.name, $].join(' '); }

$.$($);
$.$($.$($));
$.$($.$($.$($)));
