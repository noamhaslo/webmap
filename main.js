var map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://api.maptiler.com/maps/d06f2b08-5a57-4354-a53c-e9e997030524/style.json?key=uUBjZLywPic3D2JTYgOE', // style URL
        center: [5.4227, 51.438], // starting position [lng, lat]
        zoom: 16, // starting zoom
        hash: false
    });
	
	map.addControl(new maplibregl.FullscreenControl({container: document.querySelector('body')}));
	
	let nav = new maplibregl.NavigationControl();
	map.addControl(nav, 'top-left');
	
