import axios from "axios";
import { fetchConfig, fetchDetail, fetchFilter, fetchGenres, fetchPopular, fetchSearch, setImgUrl } from "./actionCreator";
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
    const actionImgUrl = setImgUrl(`${data.images.secure_base_url}${data.images.poster_sizes[5]}`);
    dispatch(action);
    dispatch(actionImgUrl);
  }
}

export function getSearch(query) {
  return async dispatch => {
    const { data: { results } } = await axios(`${baseUrl}search/movie?api_key=${apiKey}&query=${query}`);

    const action = fetchSearch(results);
    dispatch(action);
  }
}

export function getGenres() {
  return async dispatch => {
    const { data: { genres } } = await axios(`${baseUrl}genre/movie/list?api_key=${apiKey}`);

    const action = fetchGenres(genres);
    dispatch(action)
  }
}

export function getFilter(genre) {
  return async dispatch => {
    const { data: { results } } = await axios(`${baseUrl}movie/popular?api_key=${apiKey}&with_genres=${genre}`);

    const action = fetchFilter(results);
    dispatch(action);
  }
}

export function getDetail(id) {
  return async dispatch => {
    const { data } = await axios(`${baseUrl}movie/${id}?api_key=${apiKey}`);

    const action = fetchDetail(data);
    dispatch(action);
  }
}