import Axios from "axios";

export const FETCH_WEATHER_LIST_REQUEST = 'FETCH_WEATHER_LIST_REQUEST';
export const FETCH_WEATHER_LIST_SUCCESS = 'FETCH_WEATHER_LIST_SUCCESS';
export const FETCH_WEATHER_LIST_FAILURE = 'FETCH_WEATHER_LIST_FAILURE';

export const fetchWeatherListRequest = () => {
    return {
        type: FETCH_WEATHER_LIST_REQUEST
    }
}

export const fetchWeatherListSuccess = (detail) => {
    return {
        type: FETCH_WEATHER_LIST_SUCCESS,
        payload: detail
    }
}

export const fetchWeatherListFailure = (error) => {
    return {
        type: FETCH_WEATHER_LIST_FAILURE,
        payload: error
    }
}

const fetchWeatherList = (lat, lon) => {
    return dispatch => {
        dispatch(fetchWeatherListRequest());
        const apiKey = 'de5696a02ecb00487f760b1c53c75b71'
        Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely,current&units=metric&appid=${apiKey}`)
            .then(response => dispatch(fetchWeatherListSuccess(response.data)))
            .catch(error => dispatch(fetchWeatherListFailure("An error has occurred")));
    }
}

export default fetchWeatherList