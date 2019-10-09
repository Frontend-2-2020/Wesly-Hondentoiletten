import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import '../styles/index.scss';
import Axios from 'axios';


var myIcon = L.icon({
    iconUrl: 'public/marker.png',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -35],
});




Axios.get('https://datatank.stad.gent/4/infrastructuur/hondenvoorzieningen.geojson')
    .then(function(data){
        addMarkers(data.data.coordinates);   
    });



function addMarkers(data){
    
    data.forEach(element => {
       const marker =  L.marker([element[1],element[0]], {icon: myIcon}).addTo(mymap);
         marker.bindPopup("LAT:"+element[1]+", LON:"+element[0]);
  
    });
}


var mymap = L.map('mapid').setView([51.035974189013,3.7150027707153], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);