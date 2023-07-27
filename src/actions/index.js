// // src/actions/index.js
// export const setSelectedRegion = (region) => ({
//     type: 'SET_SELECTED_REGION',
//     payload: region,
//   });
  
//   export const setRegionInfo = (info) => ({
//     type: 'SET_REGION_INFO',
//     payload: info,
//   });
  


// // src/actions/index.js
// export const setSelectedRegion = (region) => ({
//     type: 'SET_SELECTED_REGION',
//     payload: region,
//   });
  
//   export const setRegionInfo = (info) => ({
//     type: 'SET_REGION_INFO',
//     payload: info,
//   });
  
//   // This is an async action using redux-thunk
//   export const fetchRegionInfo = (region) => async (dispatch) => {
//     try {
//       // Replace this with actual data fetching logic, e.g., using an API.
//       const regionInfo = {
//         currency: 'USD',
//         speedUnits: 'kmph',
//         distanceUnits: 'kilometers',
//         volumeUnits: 'liters',
//         timezone: 'UTC',
//       };
  
//       dispatch(setSelectedRegion(region));
//       dispatch(setRegionInfo(regionInfo));
//     } catch (error) {
//       console.error('Error fetching region info:', error);
//     }
//   };
  

// src/actions/index.js
// export const setSelectedRegion = (region) => ({
//     console.log('Setting selected region:', region);
//     type: 'SET_SELECTED_REGION',
//     payload: region,
//   });
  
//   export const setRegionInfo = (info) => ({
//     type: 'SET_REGION_INFO',
//     payload: info,
//   });

// src/actions/index.js

export const setSelectedRegion = (region) => {
    console.log('Setting selected region:', region);
    return {
      type: 'SET_SELECTED_REGION',
      payload: region,
    };
  };
  
  export const setRegionInfo = (info) => {
    console.log('Setting region info:', info);
    return {
      type: 'SET_REGION_INFO',
      payload: info,
    };
  };
  
  // Rest of your code...
  
  
  // This is an async action using redux-thunk
  export const fetchRegionInfo = (region) => async (dispatch) => {
    try {
      // Replace this with actual data fetching logic, e.g., using an API.
      const regionInfo = {
        currency: 'USD',
        speedUnits: 'kmph',
        distanceUnits: 'kilometers',
        volumeUnits: 'liters',
        timezone: 'UTC',
      };
  
      dispatch(setSelectedRegion(region));
      dispatch(setRegionInfo(regionInfo));
    } catch (error) {
      console.error('Error fetching region info:', error);
    }
  };
  


// // src/actions/index.js
// export const setSelectedRegion = (region) => ({
//     type: 'SET_SELECTED_REGION',
//     payload: region,
//   });
  
//   export const setRegionInfo = (info) => ({
//     type: 'SET_REGION_INFO',
//     payload: info,
//   });
  
//   // This is an async action using redux-thunk
//   export const fetchRegionInfo = (region) => async (dispatch) => {
//     try {
//       let regionInfo = {};
  
//       if (region === 'United States') {
//         regionInfo = {
//           currency: 'USD',
//           speedUnits: 'mph',
//           distanceUnits: 'miles',
//           volumeUnits: 'gallons',
//           timezone: 'UTC-5 to UTC-10',
//         };
//       } else if (region === 'India') {
//         regionInfo = {
//           currency: 'INR',
//           speedUnits: 'kmph',
//           distanceUnits: 'kilometers',
//           volumeUnits: 'liters',
//           timezone: 'UTC+5:30',
//         };
//       } else if (region === 'United Kingdom') {
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
//       dispatch(setSelectedRegion(region));
//       dispatch(setRegionInfo(regionInfo));
//     } catch (error) {
//       console.error('Error fetching region info:', error);
//     }
//   };
  