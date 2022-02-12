import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WilayasMap.css";

const WilayasMap = ({ wilayas }) => {
  const mapStyle = {
    fillColor: "#243153",
    weight: 1,
    color: "white",
    fillOpacity: 1,
  };

  const onEachWilaya = (wilaya, layer) => {
    const name = wilaya.properties.name;
    const name_ber = wilaya.properties.name_ber;
    layer.bindPopup(`${name} <br> ${name_ber}`);
  };

  return (
    <Map
      style={{ height: "70vh", borderRadius: "23px" }}
      zoom={5}
      center={[29, 3]}
      attributionControl={false}
    >
      <GeoJSON data={wilayas} style={mapStyle} onEachFeature={onEachWilaya} />
    </Map>
  );
};

export default WilayasMap;
