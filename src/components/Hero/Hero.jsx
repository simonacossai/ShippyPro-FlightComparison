import React, { Component } from 'react'
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import './Hero.css'
import Filters from '../Filters/Filters';
import FlightsList from '../FlightsList/FlightsList';
import { getFlights } from "../../api/api";

export default class Hero extends Component {
    state = {
        flights: [],
        departure: '',
        arrival: '',
        error: false,
        loading: false,
    }

    loadFlights = async () => {
        if (this.state.departure && this.state.arrival) {
            this.setState({ loading: true })
            let flights = await getFlights(this.state.departure, this.state.arrival);
            this.setState({ loading: false })
            this.setState({ flights });
        } else {
            this.setState({ error: true })
            setTimeout(() => {
                this.setState({
                    error: false
                });
            }, 1200);
        }
    };

    getDeparture = (e) => {
        this.setState({ departure: e.target.value })
    }

    getArrival = (e) => {
        this.setState({ arrival: e.target.value })
    }

    render() {
        return (
            <Container fluid className="home-main-container mb-5 " style={{ height: "87vh" }}>
                <Row className="d-flex justify-content-center align-items-center text-center">
                    <Col md={6} className="d-flex justify-content-center align-items-center text-center" style={{ height: "87vh" }}>
                        <div className="d-flex text-right justify-content-center">
                            <div className="homepage-red-line mr-3 mb-5"></div>
                        </div>
                        <div className="text-left justify-content-center align-items-center" >
                            <h1 className="homepage-title">Flights</h1>
                            <h3 className="homepage-subtitle">Find your Lorem ipsum</h3>
                        </div>
                    </Col>
                    <Col md={6} >
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center text-center mb-5 alert-filter-row">
                    {this.state.error &&
                        <Alert variant="danger" className="error-alert">
                            You need to specify a departure and arrival point!
                        </Alert>}
                    <Filters getDeparture={this.getDeparture} getArrival={this.getArrival} loadFlights={this.loadFlights} />
                </Row>
                {this.state.loading ?
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <Spinner animation="grow" />
                    </div> :
                    <FlightsList flights={this.state.flights} />}
            </Container>
        )
    }
}
