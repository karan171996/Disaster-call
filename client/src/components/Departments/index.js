import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // eslint-disable-line import/no-webpack-loader-syntax
import "./index.scss";

const Department = (props, ref) => {
  console.log("ref", ref);
  // let { id } = useParams();
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(28.7041);
  const [lat, setLat] = useState(77.1025);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_ACCESSTOKEN;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [lat, lng],
        zoom: zoom,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });

    // if (map.current) return; // initialize map only once
    // map.current = new mapboxgl.Map({
    //   container: mapContainer.current,
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [lat, lng],
    //   zoom: zoom,
    // });
  }, [map]);

  return (
    <div ref={(el) => (mapContainer.current = el)} className="map-container" />
  );
};

export default Department;
