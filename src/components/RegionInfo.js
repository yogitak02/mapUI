// src/components/RegionInfo.js
import React from 'react';
import { useSelector } from 'react-redux';

const RegionInfo = () => {
  const regionInfo = useSelector((state) => state.region.regionInfo);

  return (
    <div className="region-info">
      {/* Display the region info here */}
    </div>
  );
};

export default RegionInfo;
