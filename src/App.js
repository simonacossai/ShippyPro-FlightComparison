import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import {Spinner} from 'react-bootstrap';
import React, { Component } from 'react'


export default class App extends Component {
  state={
    loading: true
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false})
  }, 1200);
  }

  render(){
    return (
      <>
      {this.state.loading ? 
      <div className="d-flex justify-content-center align-items-center text-center" style={{height:"100vh"}}>
        <Spinner animation="grow" size="lg"/>
      </div> : 
      <>  
        <NavBar/>
        <Hero/>
      </>
      }
   </>
  );
}
}

