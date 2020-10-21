import { 
    FETCH_WEATHER_REQUEST, 
    FETCH_WEATHER_SUCCESS, 
    FETCH_WEATHER_FAILURE 
} from "../actions/weatherAction";

const initialState = {
    loading: false,
    obj: {},
    error: ""
}

const weather = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                loading: false,
                obj: action.payload,
                error: ""
            }
        case FETCH_WEATHER_FAILURE:
            return {
                loading: false,
                obj: {},
                error: action.payload
            }
        default: return state;
    }
}

export default weather;