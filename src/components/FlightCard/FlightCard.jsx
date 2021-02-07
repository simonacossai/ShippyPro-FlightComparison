import React, { Component } from 'react'
import './FlightCard.css';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';

export default class FlightCard extends Component {
    render() {
        return (
            <>
                {this.props.flights && this.props.flights.data.length > 0 &&
                    <Container className="mt-2 mb-5 pb-3">
                        {this.props.flights.data.map((e) =>
                            <Row className="ticket-row mt-4 mb-5" noGutters key={e.id}>
                                <Col md={2} sm={2} xs={4} className="d-flex justify-content-center align-items-center left-card-ticket">
                                    <span className="font-weight-bold flight-field">€ {e.price}</span>
                                </Col>
                                <Col md={10} sm={10} xs={8} className="d-flex justify-content-center align-items-center right-card-ticket">
                                    <span className="mx-auto font-weight-bold flight-field"> {e.departure} </span>
                                    <span className="mx-auto font-weight-bold flight-field"> {e.arrival} </span>
                                    <span className="mx-auto font-weight-bold flight-field"> {e.agency} </span>
                                    <span className="ml-auto font-weight-bold flight-field"><IoIosArrowForward className="ticket-arrow" /></span>
                                </Col>
                            </Row>
                        )}
                    </Container>
                }
            </>
        )
    }
}
