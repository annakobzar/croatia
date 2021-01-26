'use strict';

// swiper
let swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	slidesPerView: 1,
	spaceBetween: 30,
	mousewheel: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

// map
function initMap() {
	let map, coords, styles, marker, info, content;

	coords = {
		lat: 42.652384300109695, 
		lng: 18.09005512991261
	}

	styles = [
		{
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#f5f5f5"
			}
		  ]
		},
		{
		  "elementType": "labels.icon",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#f5f5f5"
			}
		  ]
		},
		{
		  "featureType": "administrative.land_parcel",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#bdbdbd"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#eeeeee"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#e5e5e5"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#ffffff"
			}
		  ]
		},
		{
		  "featureType": "road.arterial",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#dadada"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "featureType": "road.local",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		},
		{
		  "featureType": "transit.line",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#e5e5e5"
			}
		  ]
		},
		{
		  "featureType": "transit.station",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#eeeeee"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#c9c9c9"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		}
	  ]

	map = new google.maps.Map(document.getElementById("map"), {
		center: coords,
		zoom: 10,
		styles: styles,
		disableDefaultUI: true,
		zoomControl: true,
		streetViewControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM,
		},
	});

	marker = new google.maps.Marker({
		position: coords,
		map: map,
		title: "Dubrovnik, Croatia",
		animation: google.maps.Animation.DROP,
		icon: '../images/tours/marker.png',
	  });

	// content = `<h1 class="map__title">Hey! I'm here!</h1>
	// 			<p class="map__text">I'm styding in Beetroot.</p>
	// 			`;

	// info = new google.maps.InfoWindow({
	// 	content: content,
	//   });

	// marker.addListener("click", () => {
	// 	info.open(map, marker);
	//  });
}

(function($){
	$(document).ready(function() {
		// Code
		
		$(function(){
			$('.upcoming__more').click(function(){
			  $('.upcoming__item:nth-child(2n+1)').slideToggle('');
			});
		  });

		//Animation 
		AOS.init();

	});
})(jQuery);
