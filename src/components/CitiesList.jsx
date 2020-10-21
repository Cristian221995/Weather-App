import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import fetchWeather from '../redux/actions/weatherAction';

const CitiesList = () => {
    const [cityName, setCityName] = useState(null);
    const dispatch = useDispatch();
    const weatherInfo = useSelector(state => state.weather.obj);
    const weatherInfoHash = JSON.stringify(weatherInfo);
    const cities = ["Buenos Aires", "Rosario", "Balcarce", "Necochea", "Bariloche"];

    const searchWeather = (name) => {
        dispatch(fetchWeather(name));
    }

    const onClickCity = (name) => {
        setCityName(name);
        searchWeather(name);
    }

    useEffect(() => {
        if (weatherInfo !== {} && !cities.includes(weatherInfo.name)) {
            setCityName(null);
        }
    }, [weatherInfoHash])

    return (
        <Fragment>
            <Row>
                <Col>
                    <div className="list-group" id="list-tab" role="tablist">
                        <div className="list-group-item list-group-item-action disabled">Another cities</div>
                        {cities.map((name, index) => (
                            <div key={index} className={`list-group-item list-group-item-action clickable ${cityName === name ? "active" : ""}`}
                                onClick={() => onClickCity(name)}>{name}</div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default CitiesList