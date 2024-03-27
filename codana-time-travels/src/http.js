import { json } from 'react-router-dom';
import { newsApiKey } from './api-keys.js';
import { today } from '../src/helpers';

const BASE_URL = 'https://newsapi.org/v2';
const BASE_CONFIG = {
    headers: {
        authorization: newsApiKey
    }
};
const ENDPOINTS = {
    everything: 'everything',
    topHeadlines: 'top-headlines'
};

export const fetchNews = async (parameters= `q=trump&from=2024-03-19`) => {    
    // the same parameters would fetch the same data anyway and the data is static, so get it from localStorage instead of making another call for the same data.
    if (localStorage.getItem(parameters)) {
        return JSON.parse(localStorage.getItem(parameters));
    }

    const response = await fetch(`${BASE_URL}/${ENDPOINTS.everything}?${parameters}`, BASE_CONFIG);
    const resData = await response.json();
    
    if (!response.ok) {
        console.log(response);
        throw new Error({ message: 'An error occurred.', status: response.status});
    }  
    
    // cache data using parameters as name in localStorage => the same parameters would fetch the same data anyway since the data is static.
    localStorage.setItem(parameters, JSON.stringify(resData));

    return resData;
};
