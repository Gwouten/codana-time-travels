import { newsApiKey } from './api-keys.js';

export const fetchNews = async (parameters) => {
    const BASE_URL = 'https://newsapi.org/v2';
    const ENDPOINTS = {
        everything: 'everything',
        topHeadlines: 'top-headlines'
    };
    
    const config = {
        headers: {
            authorization: newsApiKey
        }
    };
    
    const response = await fetch(`${BASE_URL}/${ENDPOINTS.topHeadlines}?${parameters}`, config);
    const resData = await response.json();
    
    if (!response.ok) {
        throw new Error('Failed to load articles...');
    }  
    
    return resData;
};
