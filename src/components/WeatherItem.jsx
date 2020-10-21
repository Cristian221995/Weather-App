import React from 'react';

const WeatherItem = ({ item, index }) => {

    const getDate = (quantity) => {
        let current = new Date();
        current.setDate(current.getDate() + quantity);
        return `${current.getDate()}/${current.getMonth() + 1}`;
    }

    return (
        <div className="weakly-weather-item">
            <p className="mb-0">{getDate(index)}</p>
            <p className="mb-0">{item.temp.day}°</p>
        </div>
    )
}

export default WeatherItem