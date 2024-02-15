import {
    FETCH_SERIES_REQUEST,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE,
  } from './seriesActions';
  
  const initialState = {
    loading: false,
    series: [],
    error: '',
  };
  
  const seriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SERIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_SERIES_SUCCESS:
        return {
          loading: false,
          series: action.payload,
          error: '',
        };
      case FETCH_SERIES_FAILURE:
        return {
          loading: false,
          series: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default seriesReducer;
  