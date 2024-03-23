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
    // the same parameters would fetch the same data anyway and the data is static, so get it from localStorage instead of making another call for the same data.
    if (localStorage.getItem(parameters)) {
        return JSON.parse(localStorage.getItem(parameters));
    }

    const response = await fetch(`${BASE_URL}/${ENDPOINTS.everything}?${parameters}`, BASE_CONFIG);
    const resData = await response.json();
    
    if (!response.ok) {
        throw new Error('Failed to load articles...');
    }  
    
    // cache data using parameters as name in localStorage => the same parameters would fetch the same data anyway and the data is static.
    localStorage.setItem(parameters, JSON.stringify(resData));

    return resData;
};

export const fetchArticle = async (title) => {
    if (localStorage.getItem(title)) {
        return JSON.parse(localStorage.getItem(title));
    }

    const response = await fetch(`${BASE_URL}/${ENDPOINTS.everything}?q=${title}&searchIn=title`, BASE_CONFIG);
    const resData = await response.json();
    
    if (!response.ok) {
        throw new Error('Failed to load articles...');
    }  
    
    localStorage.setItem(title, JSON.stringify(resData));

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
