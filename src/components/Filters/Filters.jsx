import React, { Component } from 'react'
import './Filters.css';
import { Container, Row, Col } from 'react-bootstrap'
import { IoSearchCircleSharp } from 'react-icons/io5'
import airports from '../../data/airports.json';

export default class Filter extends Component {

  render() {
    return (
      <Container bg="dark" variant="dark" className="filter-div m-3 d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center text-center p-2" style={{ width: "100%" }}>
          <Col lg={3} md={4} sm={12} className="my-1 filter-column">
            <label htmlFor="departure" className="p-0 my-0 mr-1">From:</label>
            <select name="departure" id="departure" className="mr-3 filters-select-input" onChange={(e) => this.props.getDeparture(e)}>
              {airports.map((e, index) => <option value={e.value} key={index}>{e.airport}</option>)}
            </select>
          </Col>
          <Col lg={3} md={4} sm={12} className="my-1 filter-column">
            <label htmlFor="destination" className="p-0 my-0 mr-1">To:</label>
            <select name="destination" id="destination" className="mr-3 filters-select-input" onChange={(e) => this.props.getArrival(e)}>
              {airports.map((e, index) => <option value={e.value} key={index}>{e.airport}</option>)}
            </select>
          </Col>
          <div className="ml-auto">
            <IoSearchCircleSharp className="airplane-icon " onClick={this.props.loadFlights} />
          </div>
        </Row>
      </Container>
    )
  }
}
