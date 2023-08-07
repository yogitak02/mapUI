
// code to give input for map
import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRegion } from '../actions';


const FormInput = () => {
  let selectedRegion = useSelector((state) => state.region.selectedRegion);
  
  const dispatch = useDispatch();
  let country;
  const handleRegionChange = (value) => {
    country=value;
  };

  const handleFetchRegionInfo = async () => {
    
    dispatch(setSelectedRegion(country));
    selectedRegion=null;
    };

  return (
    <div className="form-input">
      <div>
      <select value={selectedRegion} onChange={(e) => handleRegionChange(e.target.value)}>
        <option value="">Select a region</option>
        <option value="United States">United States</option>
        <option value="India">India</option>
        <option value="United Kingdom">United Kingdom</option>
      </select>
      </div>
      <br></br>
      <div>
      <button onClick={handleFetchRegionInfo}>Load</button>
      </div>
    </div>
  );
};

export default FormInput;
