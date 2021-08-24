import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../images/marker.svg'),
    iconRetinaUrl: require('../images/markerdrap.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };