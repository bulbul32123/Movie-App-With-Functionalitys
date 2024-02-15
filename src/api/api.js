import axios from 'axios';

const Base_url = 'https://movies-api14.p.rapidapi.com';
const APIKEY = import.meta.env.VITE_APP_API_KEY;

const options = {
  url: Base_url,
  headers: {
    'X-RapidAPI-Key': APIKEY,
    'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
  }
};



export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(Base_url + url,  {
      ...options,
      params: params
    })
    return data;
  }
  catch (error) {
    console.log(error);
    return error
  };
};