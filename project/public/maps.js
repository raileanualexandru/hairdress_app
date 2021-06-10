
mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViYXN0aWVuZmlyb3V6ZmFyIiwiYSI6ImNrazJtdDMxbTBreWIzMnFvdGV1aW03cTQifQ.LbCNLNf92dTs-AdYzTo1zA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [4.357253096071645, 50.845467076722954], // starting position [lng, lat]
    zoom: 17 // starting zoom
});


var marker1 = new mapboxgl.Marker()
.setLngLat([4.357253096071645, 50.845467076722954])
.addTo(map);
