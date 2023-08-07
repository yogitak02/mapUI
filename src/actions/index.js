

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
  
  
  // export const fetchRegionInfo = (region) => async (dispatch) => {
  //   try {
  //     console.log('fetchRegionInfo:', region);
  //     const regionInfo = {
  //       currency: 'USD',
  //       speedUnits: 'kmph',
  //       distanceUnits: 'kilometers',
  //       volumeUnits: 'liters',
  //       timezone: 'UTC',
  //     };
  
  //     dispatch(setSelectedRegion(region));
  //     dispatch(setRegionInfo(regionInfo));
  //   } catch (error) {
  //     console.error('Error fetching region info:', error);
  //   }
  // };
  


