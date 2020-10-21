import Axios from "axios";

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST
    }
}

export const fetchWeatherSuccess = (weatherInfo) => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: weatherInfo
    }
}

export const fetchWeatherFailure = (error) => {
    return {
        type: FETCH_WEATHER_FAILURE,
        payload: error
    }
}

const fetchWeather = (value) => {
    return dispatch => {
        dispatch(fetchWeatherRequest());
        const apiKey = 'de5696a02ecb00487f760b1c53c75b71'
        Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}`)
            .then(response => dispatch(fetchWeatherSuccess(response.data)))
            .catch(error => dispatch(fetchWeatherFailure("An error has occurred")));
    }
}

export default fetchWeather