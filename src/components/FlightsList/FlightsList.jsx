import React, { Component } from 'react'
import FlightCard from '../FlightCard/FlightCard';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import './FlightsList.css';

export default class FlightsList extends Component {

    render() {
        return (
            <div>
                {this.props.flights.data && <>
                    <Container className="mt-3">
                        <Row className="ticket-row mt-5 pt-5" noGutters>
                            <Col md={2} className="d-flex justify-content-center align-items-center">
                                <span className="font-weight-bold text-muted ticket-fields">PRICE</span>
                            </Col>
                            <Col md={10} className="d-flex justify-content-start align-items-center text-center pr-3">
                                <span className="mx-auto font-weight-bold text-muted ticket-fields"> DEPARTURE </span>
                                <span className="mx-auto font-weight-bold text-muted ticket-fields"> DESTINATION </span>
                                <span className="mx-auto font-weight-bold text-muted ticket-fields"> AIRLINES </span>
                                <span className="mx-auto font-weight-bold"></span>
                            </Col>
                        </Row>
                    </Container>
                    <FlightCard flights={this.props.flights} />
                </>}
            </div>
        )
    }
}
