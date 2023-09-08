import { FETCH_CONFIG, FETCH_DETAIL, FETCH_FILTER, FETCH_GENRES, FETCH_POPULAR, FETCH_SEARCH, SET_IMG_URL } from "./actionType";

const initialState = {
  movies: [],
  movie: {},
  genres: [],
  configuration: {},
  imgUrl: ""
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

    case SET_IMG_URL:
      return {
        ...state,
        imgUrl: action.payload
      }

    default:
      return state;
  }
}