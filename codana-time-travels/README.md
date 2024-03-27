# Codana Time Travels

## Setup
To get started, navigate to the codana-time-travels directory in your terminal and run:

```
npm install
```
Then start the project by running:

```
npm run dev
```
Ctrl+click on the link to open the project in your browser.

## Get API key from News API
To get data, the free-for-development version of News api is used (https://newsapi.org/). This free version only allows 100 reuests in 24 hours, so keep this iin mind when developing. In order to make an http request to this api, you will need to create an account and obtain an api key. Once you have a key, you will need to create a file called `api-keys.js` in the `src` folder and export a variable called `newsApiKey`:

```javascript
// src/api-key.js
export const newsApiKey = 'your-api-key-goes-here';
```