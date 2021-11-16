$(document).ready(function() {
    // Открытие/закрытие навигации в шапке
    const headerButton = document.querySelector('.header__button')
    const headerNav = document.querySelector('.header__mobile')
    const headerDivider = document.querySelector('.header__divider-big:nth-last-child(2)')

    headerButton.addEventListener('click', () => {
        headerButton.classList.toggle('active')
        headerNav.classList.toggle('active')
        headerDivider.classList.toggle('hidden')
    })

    // Открытие/закрытие боковой навигации
    const nav = document.querySelector('.nav')
    const openNavButton = document.querySelector('.nav__open')
    const closeNavButton = document.querySelector('.nav__close')

    openNavButton.addEventListener('click', () => {
        nav.classList.add('active')
    })
    closeNavButton.addEventListener('click', () => {
        nav.classList.remove('active')
    })

	// Инициализация карты
	google.maps.event.addDomListener(window, 'load', init);
	
	function init() {
		const image = 'img/general/map_pin.svg';
		
		var mapOptions0 = {
			zoom: 17,
			center: new google.maps.LatLng(59.9231, 30.3612),
			streetViewControl: false,
			mapTypeControl: false,
			fullscreenControl: false,
			styles: [{"stylers": [{"saturation": -100}, {"gamma": 1}]}, {"elementType": "labels.text.stroke", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.business", "elementType": "labels.text", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.business", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.place_of_worship", "elementType": "labels.text", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.place_of_worship", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"visibility": "simplified"}]}, {"featureType": "water", "stylers": [{"visibility": "on"}, {"saturation": 50}, {"gamma": 0}, {"hue": "#50a5d1"}]}, {"featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{"color": "#333333"}]}, {"featureType": "road.local", "elementType": "labels.text", "stylers": [{"weight": 0.5}, {"color": "#333333"}]}, {"featureType": "transit.station", "elementType": "labels.icon", "stylers": [{"gamma": 1}, {"saturation": 50}]}]
		};

		var mapElement0 = document.getElementById('map0');
		var map0 = new google.maps.Map(mapElement0, mapOptions0);
		var marker0 = new google.maps.Marker({
			position: new google.maps.LatLng(59.9231, 30.3612),
			map: map0,
			icon: image,
			title: 'Лиговский пр., 50 корпус 15'
		});            
		var mapOptions1 = {
			zoom: 17,
			center: new google.maps.LatLng(55.79945, 37.58575),
			streetViewControl: false,
			mapTypeControl: false,
			fullscreenControl: false,
			styles: [{"stylers": [{"saturation": -100}, {"gamma": 1}]}, {"elementType": "labels.text.stroke", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.business", "elementType": "labels.text", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.business", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.place_of_worship", "elementType": "labels.text", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.place_of_worship", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"visibility": "simplified"}]}, {"featureType": "water", "stylers": [{"visibility": "on"}, {"saturation": 50}, {"gamma": 0}, {"hue": "#50a5d1"}]}, {"featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{"color": "#333333"}]}, {"featureType": "road.local", "elementType": "labels.text", "stylers": [{"weight": 0.5}, {"color": "#333333"}]}, {"featureType": "transit.station", "elementType": "labels.icon", "stylers": [{"gamma": 1}, {"saturation": 50}]}]
		};

		var mapElement1 = document.getElementById('map1');
		var map1 = new google.maps.Map(mapElement1, mapOptions1);
		var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(55.79945, 37.58575),
			map: map1,
			icon: image,
			title: 'ул. Большая Новодмитровская, д.14'
		});            
		var mapOptions2 = {
			zoom: 17,
			center: new google.maps.LatLng(53.30705, 34.28228),
			streetViewControl: false,
			mapTypeControl: false,
			fullscreenControl: false,
			styles: [{"stylers": [{"saturation": -100}, {"gamma": 1}]}, {"elementType": "labels.text.stroke", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.business", "elementType": "labels.text", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.business", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.place_of_worship", "elementType": "labels.text", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.place_of_worship", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"visibility": "simplified"}]}, {"featureType": "water", "stylers": [{"visibility": "on"}, {"saturation": 50}, {"gamma": 0}, {"hue": "#50a5d1"}]}, {"featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{"color": "#333333"}]}, {"featureType": "road.local", "elementType": "labels.text", "stylers": [{"weight": 0.5}, {"color": "#333333"}]}, {"featureType": "transit.station", "elementType": "labels.icon", "stylers": [{"gamma": 1}, {"saturation": 50}]}]
		};

		var mapElement2 = document.getElementById('map2');
		var map2 = new google.maps.Map(mapElement2, mapOptions2);
		var marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(53.30705, 34.28228),
			map: map2,
			icon: image,
			title: 'ул. 22- го Съезда КПСС, дом 101'
		});	
	}

	// Переключение городов на карте
	const tabEls = document.querySelectorAll('.map__tabs-item')
	const maps = document.querySelectorAll('.map__content-item')

	for([index, tabEl] of tabEls.entries()) {
		tabEl.addEventListener('click', function () {
			// Изменение переключателя визуально
			for(tab of tabEls) {
				tab.classList.remove('active')
			}
			this.classList.add('active')

			// Переключение карты
			for(map of maps) {
				map.classList.remove('active')
			}
			document.querySelector(`#${this.getAttribute('data-id')}`).classList.add('active')
		})
	}
});