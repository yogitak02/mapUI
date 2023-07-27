// // src/components/FormInput.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setSelectedRegion, setRegionInfo } from '../actions';

// const FormInput = () => {
//   const [selectedRegion, setSelectedRegion] = useState('');

//   const dispatch = useDispatch();

//   const handleRegionChange = (value) => {
//     setSelectedRegion(value);
//   };

//   const handleFetchRegionInfo = async () => {
//     try {
//       // Replace this with actual data fetching logic, e.g., using an API.
//       const regionInfo = {
//         currency: 'USD',
//         speedUnits: 'kmph',
//         distanceUnits: 'kilometers',
//         volumeUnits: 'liters',
//         timezone: 'UTC',
//       };

//       dispatch(setSelectedRegion(selectedRegion));
//       dispatch(setRegionInfo(regionInfo));
//     } catch (error) {
//       // Handle any error that might occur during data fetching.
//       console.error('Error fetching region info:', error);
//     }
//   };

//   return (
//     <div className="form-input">
//       <select value={selectedRegion} onChange={(e) => handleRegionChange(e.target.value)}>
//         <option value="">Select a region</option>
//         <option value="United States">United States</option>
//         <option value="India">India</option>
//         <option value="United Kingdom">United Kingdom</option>
//       </select>
//       <button onClick={handleFetchRegionInfo}>Load</button>
//     </div>
//   );
// };

// export default FormInput;



// import React, { useState } from 'react';
// import { useDispatch ,useSelector} from 'react-redux';
// import { setSelectedRegion, setRegionInfo } from '../actions';

// const FormInput = () => {
// //   const [selectedRegion, setSelectedRegion] = useState('');
// const selectedRegion=useSelector((state)=>state.region.selectedRegion)

//   const dispatch = useDispatch();

//   const handleRegionChange = (value) => {
//     console.log("bbbbbbbbbbbbbbb",setSelectedRegion(value))
//     setSelectedRegion(value);
//   };

//   const handleFetchRegionInfo = async () => {
//     console.log("aaaaaaaaaaaaaaaaaaaaa",selectedRegion)
//     try {
//       if (!selectedRegion) {
//         console.log('Please select a region before fetching info.');
//         return;
//       }

//       let regionInfo = {};
//       console.log("cccccccccccccccc",selectedRegion)

//       if (selectedRegion === 'United States') {
//         regionInfo = {
//           currency: 'USD',
//           speedUnits: 'mph',
//           distanceUnits: 'miles',
//           volumeUnits: 'gallons',
//           timezone: 'UTC-5 to UTC-10',
//         };
//       } else if (selectedRegion === 'India') {
//         regionInfo = {
//           currency: 'INR',
//           speedUnits: 'kmph',
//           distanceUnits: 'kilometers',
//           volumeUnits: 'liters',
//           timezone: 'UTC+5:30',
//         };
//       } else if (selectedRegion === 'United Kingdom') {
//         regionInfo = {
//           currency: 'GBP',
//           speedUnits: 'mph',
//           distanceUnits: 'miles',
//           volumeUnits: 'liters',
//           timezone: 'UTC+0 to UTC+1',
//         };
//       } else {
//         console.log('Unknown region.');
//         return;
//       }

//       // Dispatch the data to update the Redux store
//       dispatch(setSelectedRegion(selectedRegion));
//       dispatch(setRegionInfo(regionInfo));
//     } catch (error) {
//       console.error('Error fetching region info:', error);
//     }
//   };

//   return (
//     <div className="form-input">
//       <select value={selectedRegion} onChange={(e) => handleRegionChange(e.target.value)}>
//         <option value="">Select a region</option>
//         <option value="United States">United States</option>
//         <option value="India">India</option>
//         <option value="United Kingdom">United Kingdom</option>
//       </select>
//       <button onClick={handleFetchRegionInfo}>Load</button>
//     </div>
//   );
// };

// export default FormInput;



import React , { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRegion, setRegionInfo } from '../actions';
import MapComponent from './Map';

const FormInput = () => {
  let selectedRegion = useSelector((state) => state.region.selectedRegion);
  // const [selectedRegion, setSelectedRegion] = useState('');
  const dispatch = useDispatch();
let country;
  const handleRegionChange = (value) => {
    // country='';
    console.log("bbbbbbbbbbbbbbb", value);
    country=value;
  };

  const handleFetchRegionInfo = async () => {
    
    dispatch(setSelectedRegion(country));
    selectedRegion=null;
    console.log("aaaaaaaaaaaaaaaaaaaaa", selectedRegion);
   

    
         
  };

  return (
    <div className="form-input">
      <select value={selectedRegion} onChange={(e) => handleRegionChange(e.target.value)}>
        <option value="">Select a region</option>
        <option value="United States">United States</option>
        <option value="India">India</option>
        <option value="United Kingdom">United Kingdom</option>
      </select>
      <button onClick={handleFetchRegionInfo}>Load</button>
    </div>
  );
};

export default FormInput;
