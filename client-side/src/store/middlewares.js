import axios from "axios";
import { fetchConfig, fetchPopular } from "./actionCreator";
const apiKey = "6f171c16f4b3d9f756e2deb95920eea3";
const baseUrl = "https://api.themoviedb.org/3/";

export function getPopular() {
  return async dispatch => {
    const { data: { results } } = await axios(`${baseUrl}movie/popular?api_key=${apiKey}`)

    const action = fetchPopular(results);
    dispatch(action);
  }
}

export function getConfig() {
  return async dispatch => {
    const { data } = await axios(`${baseUrl}configuration?api_key=${apiKey}`);

    const action = fetchConfig(data);
    dispatch(action);
  }
}