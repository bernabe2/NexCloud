// Acción para solicitar películas
export const fetchMoviesRequest = () => ({
    type: 'FETCH_MOVIES_REQUEST'
  });
  
  // Acción para indicar éxito al obtener películas
  export const fetchMoviesSuccess = (movies) => ({
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies
  });
  
  // Acción para indicar fallo al obtener películas
  export const fetchMoviesFailure = (error) => ({
    type: 'FETCH_MOVIES_FAILURE',
    payload: error
  });
  