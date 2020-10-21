import { combineReducers } from "redux";
import weatherList from "./weatherListReducer";
import weather from "./weatherReducer";

const reducers = combineReducers({
    weather,
    weatherList
})

export default reducers