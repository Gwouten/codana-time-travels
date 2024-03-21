import { newsApiKey } from './api-keys.js';

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

export const fetchNews = async (parameters) => {
    const response = await fetch(`${BASE_URL}/${ENDPOINTS.everything}?${parameters}`, BASE_CONFIG);
    const resData = await response.json();
    
    if (!response.ok) {
        throw new Error('Failed to load articles...');
    }  
    
    return resData;
};

export const fetchHeadlines = async (parameters) => {
    const response = await fetch(`${BASE_URL}/${ENDPOINTS.topHeadlines}?${parameters}`, BASE_CONFIG);
    const resData = await response.json();
    
    if (!response.ok) {
        throw new Error('Failed to load headline articles...');
    }  
    
    return resData;
};
