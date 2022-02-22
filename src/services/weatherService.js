import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
const url = 'https://api.openweathermap.org/data/2.5/';

/**
 * 
 * @param {*} city 
 * @returns 
 * get weather of the city
 */
const getWeather = (city) => {
    const area = axios.get(`${url}/weather?q=${city}&appid=${apiKey}`);
    return area.then((response) => response.data).catch((error) => console.log('error'));
}

/**
 * 
 * @param {*} city 
 * @returns 
 * get weather forcast
 */
const getForcast = (city) => {
    const area = axios.get(`${url}/forecast?q=${city}&appid=${apiKey}`);
    return area.then((response) => response.data.list).catch((error) => console.log('error'));
}

export default {getWeather, getForcast};