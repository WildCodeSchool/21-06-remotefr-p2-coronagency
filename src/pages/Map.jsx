import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
import * as centres from "../data/centres-vaccination.json";
import "./Map.css"


function Map() {

  const [centreVacc, setCentreVacc] = React.useState(null);

  return (
  
    <MapContainer center={[45.999054, 3.033400]} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {centres.features.map((centre, index) => (
        <Marker
          key={index}
          position={[
            centre.properties.c_latitude_coor1,
            centre.properties.c_longitude_coor1,
          ]}
          onClick={() => {
            setCentreVacc(centre);
          }}
          //  icon={icon}
          >
         
           <Popup
           
              position={[
              centre.properties.c_latitude_coor1[1],
            centre.properties.c_longitude_coor1[0],
            //      centre.geometry.coordinates[1],
            //    centre.geometry.coordinates[0]
              ]}
              onClose={() => {
                setCentreVacc(null);
                  }}
                  >
              <div>
                <h2>{centre.properties.c_rdv_lundi}</h2>
               <h2>{centre.properties.c_nom}</h2>
                <p>{centre.properties.c_com_nom}</p>
                 </div>
           </Popup>
      </Marker>
      ))},

    </MapContainer>
  );
}

export default Map

