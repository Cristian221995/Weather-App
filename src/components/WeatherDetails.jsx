import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, Col, Row } from 'reactstrap';
import fetchWeather from '../redux/actions/weatherAction';
import fetchWeatherList from '../redux/actions/weatherListAction';
import CitiesList from './CitiesList';
import CityFinder from './CityFinder';
import WeatherItem from './WeatherItem';

const WeatherDetails = () => {
    const dispatch = useDispatch();
    const weatherInfo = useSelector(state => state.weather.obj);
    const weatherList = useSelector(state => state.weatherList.obj.daily);
    const error = useSelector(state => state.weather.error);
    const { main, weather } = weatherInfo;

    useEffect(() => {
        dispatch(fetchWeather("Mar del plata"));
    }, [dispatch])

    useEffect(() => {
        if (weatherInfo !== {} && weatherInfo.coord) {
            dispatch(fetchWeatherList(weatherInfo.coord.lat, weatherInfo.coord.lon));
        }
    }, [weatherInfo])

    const getCurrentDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const current = new Date();
        return `${current.getDate()} ${monthNames[current.getMonth()]}, ${current.getFullYear()}`;
    }



    return (
        <Fragment>
            <div className="page-content page-container " id="page-content">
                <div className="p-3">
                    <div className=" container d-flex justify-content-center">
                        <CityFinder />
                    </div>
                </div>
            </div>
            <Row>
                <Col xl="9" md="9" sm="9" className="mr-n5 pr-n5">
                    <div className="page-content page-container " id="page-content">
                        <div className=" container d-flex justify-content-center">
                            <div className="col-lg-8 grid-margin stretch-card">
                                <Card className="card-weather">
                                    <CardBody>
                                        {!error ?
                                            <Fragment>
                                                <div className="weather-date-location">
                                                    <h3>{getCurrentDate()}</h3>
                                                    <p className="text-gray"><span className="weather-location">{weatherInfo && `${weatherInfo.name}`}</span> </p>
                                                </div>
                                                <div className="weather-data d-flex">
                                                    <div className="mr-auto">
                                                        <h4 className="display-3">{main && main.temp} <span className="symbol">°</span>C</h4>
                                                        <p>{weather && weather[0].main}</p>
                                                    </div>
                                                </div>
                                            </Fragment> :
                                            <div className="weather-date-location">
                                                <h3>{error}</h3>
                                            </div>
                                        }
                                    </CardBody>
                                    <CardBody className="p-0">
                                        <div className="d-flex weakly-weather">
                                            {weatherList && weatherList.map((obj, index) =>
                                                index !== 0 &&
                                                <WeatherItem key={index} item={obj} index={index} />
                                            )}
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl="3" md="3" sm="3" className="ml-n5 pl-n5">
                    <CitiesList />
                </Col>
            </Row>
        </Fragment>
    )
}

export default WeatherDetails