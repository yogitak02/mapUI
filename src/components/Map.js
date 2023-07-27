// src/components/Map.js
// import React, { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import 'ol/ol.css';
// import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';

// const MapComponent = () => {
//   const mapRef = useRef(null);
//   const selectedRegion = useSelector((state) => state.region.selectedRegion);

//   useEffect(() => {
//     if (!mapRef.current) return;

//     const map = new Map({
//       target: mapRef.current,
//       layers: [new TileLayer({ source: new OSM() })],
//       view: new View({
//         center: [0, 0],
//         zoom: 5,
//       }),
//     });

//     // TODO: Add logic to update the map based on the selectedRegion.

//     return () => {
//       map.setTarget(null);
//     };
//   }, [selectedRegion]);

//   return <div ref={mapRef} className="map" />;
// };

// export default MapComponent;


// import React, { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import 'ol/ol.css';
// import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import { useGeographic } from 'ol/proj';
// const MapComponent = () => {
//   const mapRef = useRef(null);
//   const selectedRegion = useSelector((state) => state.region.selectedRegion);

//   useEffect(() => {
//     if (!mapRef.current) return;

//     const map = new Map({
//       target: mapRef.current,
//       layers: [new TileLayer({ source: new OSM() })],
//       view: new View({
//         center: getCenterByRegion(selectedRegion),
//         zoom: getZoomByRegion(selectedRegion),
//       }),
//     });

//     return () => {
//       map.setTarget(null);
//     };
//   }, [selectedRegion]);

//   const getCenterByRegion = (region) => {
//     // Define the center coordinates for each region
//     if (region === 'United States') {
//       return [-100, 40];
//     } else if (region === 'India') {
//         console.log("sssssssssssss",region)
//       return [77, 20];
//     } else if (region === 'United Kingdom') {
//       return [-2, 54];
//     } else {
//       return [0, 0]; // Default center if region is not recognized
//     }
//   };

//   const getZoomByRegion = (region) => {
//     // Define the zoom level for each region
//     if (region === 'United States' || region === 'United Kingdom') {
//       return 2 ;
//     } else if (region === 'India') {
//       return 8;
//     } else {
//       return 8; // Default zoom if region is not recognized
//     }
//   };

//   return <div ref={mapRef} className="map" />;
// };

// export default MapComponent;

import React, { useEffect, useRef  } from 'react';
import { useSelector } from 'react-redux';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useGeographic } from 'ol/proj';

const MapComponent = () => {
  useGeographic(); // Call useGeographic() to work with [longitude, latitude] coordinates

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
    if (region === 'United States') {
      return [-100, 40];
    } else if (region === 'India') {
      return [77, 20];
    } else if (region === 'United Kingdom') {
      return [-2, 54];
    } else {
      return [0, 0]; // Default center if region is not recognized
    }
  };

  const getZoomByRegion = (region) => {
    // Define the zoom level for each region
    if (region === 'United States' || region === 'United Kingdom') {
      return 4;
    } else if (region === 'India') {
      return 4;
    } else {
      return 8; // Default zoom if region is not recognized
    }
  };

  return <div ref={mapRef} className="map" />;
};

export default MapComponent;








































// src/components/Map.js
// import React, { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import 'ol/ol.css';
// import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import XYZ from 'ol/source/XYZ';

// const MapComponent = () => {
//   const mapRef = useRef(null);
//   const selectedRegion = useSelector((state) => state.region.selectedRegion);

//   useEffect(() => {
//     if (!mapRef.current) return;

//     const map = new Map({
//       target: mapRef.current,
//       layers: [new TileLayer({ source: new OSM() }), getRegionLayer(selectedRegion)],
//       view: new View({
//         center: [0, 0],
//         zoom: 2,
//       }),
//     });

//     return () => {
//       map.setTarget(null);
//     };
//   }, [selectedRegion]);

//   // Helper function to get the appropriate region layer based on selectedRegion
//   const getRegionLayer = (region) => {
//     switch (region) {
//       case 'India':
//         return new TileLayer({
//           source: new XYZ({
//             // url: 'https://path-to-india-tile-server/{z}/{x}/{y}.png', // Replace with the actual URL of the India tile server
//           }),
//         });
//       case 'United States':
//         return new TileLayer({
//           source: new XYZ({
//             url: 'https://path-to-us-tile-server/{z}/{x}/{y}.png', // Replace with the actual URL of the US tile server
//           }),
//         });
//       case 'United Kingdom':
//         return new TileLayer({
//           source: new XYZ({
//             url: 'https://path-to-uk-tile-server/{z}/{x}/{y}.png', // Replace with the actual URL of the UK tile server
//           }),
//         });
//       default:
//         return null; // Return null for unknown regions or show a default layer
//     }
//   };

//   return <div ref={mapRef} className="map" />;
// };

// export default MapComponent;

