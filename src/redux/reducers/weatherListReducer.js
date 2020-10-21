import {
    FETCH_WEATHER_LIST_REQUEST,
    FETCH_WEATHER_LIST_SUCCESS,
    FETCH_WEATHER_LIST_FAILURE
} from "../actions/weatherListAction";

const initialState = {
    loading: false,
    obj: {},
    error: ""
}

const WeatherList = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_WEATHER_LIST_SUCCESS:
            return {
                loading: false,
                obj: action.payload,
                error: ""
            }
        case FETCH_WEATHER_LIST_FAILURE:
            return {
                loading: false,
                obj: {},
                error: action.payload
            }
        default: return state;
    }
}

export default WeatherList;