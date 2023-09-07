import { FETCH_CONFIG, FETCH_DETAIL, FETCH_FILTER, FETCH_GENRES, FETCH_POPULAR, FETCH_SEARCH } from "./actionType";

const initialState = {
  movies: [],
  movie: {},
  genres: [],
  configuration: {},
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULAR:
    case FETCH_SEARCH:
    case FETCH_FILTER:
      return {
        ...state,
        movies: action.payload
      };

    case FETCH_DETAIL:
      return {
        ...state,
        movie: action.payload
      }

    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload
      }

    case FETCH_CONFIG:
      return {
        ...state,
        configuration: action.payload
      }

    default:
      return state;
  }
}