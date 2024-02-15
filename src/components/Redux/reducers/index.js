import { combineReducers } from 'redux';
import movieReducer from './movieReducer'; 
import seriesReducer from './seriesReducer';
import { fetchSeries } from './seriesActions';


const rootReducer = combineReducers({
  movies: movieReducer,
  series: seriesReducer,
});

export default rootReducer;
