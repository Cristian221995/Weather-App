import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Col, Input, Row } from 'reactstrap';
import fetchWeather from '../redux/actions/weatherAction';

const CityFinder = () => {
    const [cityName, setCityName] = useState("");
    const dispatch = useDispatch();

    const onClickButton = () => {
        dispatch(fetchWeather(cityName))
        setCityName("")
    }
    return (
        <Fragment>
            <Row>
                <Col xl="8" sm="8" xs="8">
                    <Input type="text"
                        name="city"
                        id="city"
                        placeholder="Search a city"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)} />
                </Col>
                <Col xl="auto" sm="auto" xs="auto">
                    <Button
                        disabled={cityName === ""}
                        className="mt-n2"
                        color="primary"
                        onClick={onClickButton}
                    >
                        Submit
                    </Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default CityFinder