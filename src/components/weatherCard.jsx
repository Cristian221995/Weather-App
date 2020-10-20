import React from 'react';

const WeatherCard = () => {
    return (
        <div className="page-content page-container " id="page-content">
            <div className="padding">
                <div className=" container d-flex justify-content-center">
                    <div className="col-lg-8 grid-margin stretch-card">
                        <div className="card card-weather">
                            <div className="card-body">
                                <div className="weather-date-location">
                                    <h3>Friday</h3>
                                    <p className="text-gray"> <span className="weather-date">25 March, 2019</span> <span className="weather-location">Sydney, Australia</span> </p>
                                </div>
                                <div className="weather-data d-flex">
                                    <div className="mr-auto">
                                        <h4 className="display-3">32 <span className="symbol">°</span>C</h4>
                                        <p> Cloudy </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="d-flex weakly-weather">
                                    <div className="weakly-weather-item">
                                        <p className="mb-0"> Sun </p> <i className="mdi mdi-weather-cloudy"></i>
                                        <p className="mb-0"> 30° </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                        <p className="mb-1"> Mon </p> <i className="mdi mdi-weather-hail"></i>
                                        <p className="mb-0"> 31° </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                        <p className="mb-1"> Tue </p> <i className="mdi mdi-weather-partlycloudy"></i>
                                        <p className="mb-0"> 28° </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                        <p className="mb-1"> Wed </p> <i className="mdi mdi-weather-pouring"></i>
                                        <p className="mb-0"> 30° </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                        <p className="mb-1"> Thu </p> <i className="mdi mdi-weather-pouring"></i>
                                        <p className="mb-0"> 29° </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                        <p className="mb-1"> Fri </p> <i className="mdi mdi-weather-snowy-rainy"></i>
                                        <p className="mb-0"> 31° </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                        <p className="mb-1"> Sat </p> <i className="mdi mdi-weather-snowy"></i>
                                        <p className="mb-0"> 32° </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard