
import { combineReducers } from 'redux';

const initialState = {
  selectedRegion: null,
  regionInfo: null,
};

const regionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_REGION':
        console.log('Reducer: Setting selected region:', action.payload);
        return {
          ...state,
          selectedRegion: action.payload,
        };
      case 'SET_REGION_INFO':
        console.log('Reducer: Setting region info:', action.payload);
        return {
          ...state,
          regionInfo: action.payload,
        };
      default:
        return state;
    }
  };

  
const rootReducer = combineReducers({
  region: regionReducer,
});

export default rootReducer;
