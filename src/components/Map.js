// this file used to show map


import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";

const MapComponent = () => {
  useGeographic();

  const mapRef = useRef(null);
  const selectedRegion = useSelector((state) => state.region.selectedRegion);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: getCenterByRegion(selectedRegion),
        zoom: getZoomByRegion(selectedRegion),
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, [selectedRegion]);

  const getCenterByRegion = (region) => {
    // Define the center coordinates for each region
    if (region === "United States") {
      return [-100, 40];
    } else if (region === "India") {
      return [77, 20];
    } else if (region === "United Kingdom") {
      return [-2, 54];
    } else {
      return [0, 0];
    }
  };

  const getZoomByRegion = (region) => {
    // Define the zoom level for each region
    if (region === "United States" || region === "United Kingdom") {
      return 4;
    } else if (region === "India") {
      return 4;
    } else {
      return 4;
    }
  };

  return <div ref={mapRef} className="map" />;
};

export default MapComponent;

