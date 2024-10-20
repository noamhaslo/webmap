var map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://api.maptiler.com/maps/d06f2b08-5a57-4354-a53c-e9e997030524/style.json?key=uUBjZLywPic3D2JTYgOE', // style URL
        center: [5.4227, 51.438], // starting position [lng, lat]
        zoom: 16, // starting zoom
        hash: false
    });
<head>
    <title>Draw GeoJSON points</title>
    <meta property="og:description" content="Draw points from a GeoJSON collection to a map." />
    <meta charset='utf-8'>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel='stylesheet' href='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css' />
    <script src='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js'></script>
    <style>
        body { margin: 0; padding: 0; }
        html, body, #map { height: 100%; }
    </style>
</head>
<body>
<div id="map"></div>
<script>
    const map = new maplibregl.Map({
        container: 'map',
        style:
            'https://api.maptiler.com/maps/positron/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
        center: [0, 0],
        zoom: 1
    });

    map.on('load', async () => {
        // Add an image to use as a custom marker
        const image = await map.loadImage('https://maplibre.org/maplibre-gl-js/docs/assets/osgeo-logo.png');
        map.addImage('custom-marker', image.data);
        // Add a GeoJSON source with 15 points
        map.addSource('conferences', {
"type": "FeatureCollection",
"name": "backgroundpoints",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "fid": 1, "certainty": 2, "type": "swing" }, "geometry": { "type": "Point", "coordinates": [ 5.41786, 51.43807 ] } },
{ "type": "Feature", "properties": { "fid": 2, "certainty": 1, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.41783, 51.438 ] } },
{ "type": "Feature", "properties": { "fid": 3, "certainty": 2, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.41908, 51.4382 ] } },
{ "type": "Feature", "properties": { "fid": 4, "certainty": 1, "type": "slide and swing" }, "geometry": { "type": "Point", "coordinates": [ 5.41957, 51.43825 ] } },
{ "type": "Feature", "properties": { "fid": 5, "certainty": 2, "type": "pool" }, "geometry": { "type": "Point", "coordinates": [ 5.41832, 51.43816 ] } },
{ "type": "Feature", "properties": { "fid": 6, "certainty": 2, "type": "pool" }, "geometry": { "type": "Point", "coordinates": [ 5.4192, 51.43918 ] } },
{ "type": "Feature", "properties": { "fid": 7, "certainty": 3, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.41931, 51.43981 ] } },
{ "type": "Feature", "properties": { "fid": 8, "certainty": 5, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.4196, 51.43984 ] } },
{ "type": "Feature", "properties": { "fid": 9, "certainty": 5, "type": "playarea" }, "geometry": { "type": "Point", "coordinates": [ 5.41683, 51.44046 ] } },
{ "type": "Feature", "properties": { "fid": 10, "certainty": 4, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.41921, 51.44076 ] } },
{ "type": "Feature", "properties": { "fid": 11, "certainty": 1, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.41882, 51.44209 ] } },
{ "type": "Feature", "properties": { "fid": 12, "certainty": 2, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.41857, 51.44203 ] } },
{ "type": "Feature", "properties": { "fid": 13, "certainty": 2, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.41822, 51.44199 ] } },
{ "type": "Feature", "properties": { "fid": 14, "certainty": 1, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.41642, 51.44173 ] } },
{ "type": "Feature", "properties": { "fid": 15, "certainty": 2, "type": "pool" }, "geometry": { "type": "Point", "coordinates": [ 5.41626, 51.44172 ] } },
{ "type": "Feature", "properties": { "fid": 16, "certainty": 3, "type": "pool" }, "geometry": { "type": "Point", "coordinates": [ 5.4176, 51.44231 ] } },
{ "type": "Feature", "properties": { "fid": 17, "certainty": 2, "type": "slide" }, "geometry": { "type": "Point", "coordinates": [ 5.41857, 51.44245 ] } },
{ "type": "Feature", "properties": { "fid": 18, "certainty": 2, "type": "pool" }, "geometry": { "type": "Point", "coordinates": [ 5.4173, 51.43957 ] } },
{ "type": "Feature", "properties": { "fid": 19, "certainty": 2, "type": "pool" }, "geometry": { "type": "Point", "coordinates": [ 5.4176, 51.43964 ] } },
{ "type": "Feature", "properties": { "fid": 20, "certainty": 3, "type": "pool" }, "geometry": { "type": "Point", "coordinates": [ 5.4187, 51.4382 ] } },
{ "type": "Feature", "properties": { "fid": 21, "certainty": 3, "type": "pool" }, "geometry": { "type": "Point", "coordinates": [ 5.41702, 51.43797 ] } },
{ "type": "Feature", "properties": { "fid": 22, "certainty": 3, "type": "pool" }, "geometry": { "type": "Point", "coordinates": [ 5.41875, 51.44104 ] } }
]
}
});
    });
</script>
</body>