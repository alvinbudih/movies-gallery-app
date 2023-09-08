import { FETCH_CONFIG, FETCH_DETAIL, FETCH_FILTER, FETCH_GENRES, FETCH_POPULAR, FETCH_SEARCH, SET_IMG_URL } from "./actionType";

export function fetchPopular(payload) {
  return { type: FETCH_POPULAR, payload };
}

export function fetchFilter(payload) {
  return { type: FETCH_FILTER, payload };
}

export function fetchSearch(payload) {
  return { type: FETCH_SEARCH, payload };
}

export function fetchDetail(payload) {
  return { type: FETCH_DETAIL, payload };
}

export function fetchGenres(payload) {
  return { type: FETCH_GENRES, payload };
}

export function fetchConfig(payload) {
  return { type: FETCH_CONFIG, payload };
}

export function setImgUrl(payload) {
  return { type: SET_IMG_URL, payload };
}