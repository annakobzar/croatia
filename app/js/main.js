'use strict';

//burger
const burger = document.querySelector(".burger"),
    menuItem = document.querySelectorAll(".menu__link"),
    menu = document.querySelector(".menu__list");
burger.addEventListener("click", () => {
    menu.classList.toggle("menu__list--active"),
        burger.classList.toggle("burger--active");
});
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.toggle("menu__list--active"),
            burger.classList.toggle("burger--active");
    });
});

// swiper
let swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	slidesPerView: 1,
	spaceBetween: 30,
	// mousewheel: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

// map
function initMap() {
	let map, coords, styles, marker;

	coords = {
		lat: 44.1220702644721, 
		lng: 15.231531096730613
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
		zoom: 7,
		styles: styles,
		disableDefaultUI: true,
		zoomControl: true,
		streetViewControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM,
		},
	});

	// marker = new google.maps.Marker({
	// 	position: coords,
	// 	map: map,
	// 	title: "Dubrovnik, Croatia",
	// 	animation: google.maps.Animation.DROP,
	// 	icon: 'images/marker.png',
	//   });

	//  marker
	let pinMarker = 'images/marker.png';
	let pinMarkerMain = 'images/marker-main.png';

	// array of markers
	let markers = [
	  {
		coords:{
			lat: 42.64604937034245, 
			lng: 18.087537507866404
		},
			img: pinMarkerMain,
			info: 'Dubrovnik, Croatia'
	  },
	  {
		coords:{
			lat: 43.300566681003474, 
			lng: 17.02065963156279
		},
			img: pinMarker,
			info: 'Makaraska, Croatia'
	  },
	  {
		coords:{
			lat: 43.52427978827527,  
			lng: 16.434060111945684
		},
			img: pinMarker,
			info:'Split, Croatia'
	  },
	  {
		coords:{
			lat: 44.1220702644721,  
			lng: 15.224198602735397
		},
			img: pinMarker,
			info:'Zadar, Croatia'
	  },
	  {
		coords:{
			lat: 45.347798510042914,  
			lng: 14.415583718726667
		},
			img: pinMarker,
			info:'Rijeka, Croatia'
	  },
	  {
		coords:{
			lat: 45.8207514458144,  
			lng: 15.989517371109724
		},
			img: pinMarker,
			info:'Zagreb, Croatia'
	  }
	];

	// add markers
	for(let i = 0; i <markers.length; i++){
		addMarker(markers[i]);
	}

	// put markers on the map
	function addMarker (props){
		let marker = new google.maps.Marker({
		position: props.coords,
		map: map,
		icon: props.img,
		animation: google.maps.Animation.DROP
			});

		let infoWindow = new google.maps.InfoWindow({
		content:props.info,
			});
		marker.addListener("click", () => {
		infoWindow.open(map, marker);
			});
	}

}

(function($){
	$(document).ready(function() {
		// Code
		
		// see more		  
		  let item = $('.upcoming__wrap');
		  let height = $('.upcoming__wrap').height();
		  $('.upcoming__more-text').click(function() {
			  if (item.css('height') == '760px') {
			$(this).text('See less');
				item.animate({
				  height: height + "px"
					}, 500);
			  } else {
			$(this).text('See more');
				item.animate({
				  height: "760px"
					}, 500);
			  }
			});
			$('.upcoming__more-text').trigger('click');


		//Animation 
		AOS.init();

	});
})(jQuery);
