import axios from 'axios';
import api from '../utils/axios';

export const fetchFromUrl = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export const getAllPokemons = async (offset = 20) => {
  const { data } = await api.get(`pokemon?limit=20&offset=${offset}`);
  const urls = data.results.map((item) => item.url);
  const result = await Promise.all(urls.map((url) => fetchFromUrl(url)));
  return result;
};

export const getPokemonTypes = async () => {
  const { data } = await api.get('type');
  return data.results;
};

export const getPokemonDetail = async (id) => {
  const { data } = await api.get(`pokemon/${id}`);
  return data.results;
};
