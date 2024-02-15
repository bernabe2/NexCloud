export const FETCH_SERIES_REQUEST = 'FETCH_SERIES_REQUEST';
export const FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS';
export const FETCH_SERIES_FAILURE = 'FETCH_SERIES_FAILURE';

export const fetchSeriesRequest = () => ({
  type: FETCH_SERIES_REQUEST,
});

export const fetchSeriesSuccess = (series) => ({
  type: FETCH_SERIES_SUCCESS,
  payload: series,
});

export const fetchSeriesFailure = (error) => ({
  type: FETCH_SERIES_FAILURE,
  payload: error,
});
