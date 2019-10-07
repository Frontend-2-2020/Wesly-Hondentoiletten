import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import '../styles/index.scss';

var mymap = L.map('mapid').setView([51.1925274,3.2202106], 13);
L.marker([51.1925274,3.2202106]).addTo(mymap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);