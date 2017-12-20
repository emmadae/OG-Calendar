import React, {Component} from "react";
import "./Weather.css";
import axios from "axios";

const Modal = ({ show, hide }) => (
  <div style={{ display: show ? 'block' : 'none' }} className='weather-pnl pnl'>
    <p> Your Weekly Weather Forecast  </p>
  </div>
)

class Weather extends React.Component { 
  constructor() {
    super()
    this.state = {
      displayModal: false,
      lat: 30.2861111111,
      lon: -97.7336111111,
      temperature: 65,
      weather: "Sunny",
      city: "Austin, TX"
    }
    this.handleModalDisplay = this.handleModalDisplay.bind(this)
  }
  handleModalDisplay(e) {
    e.preventDefault()
    this.setState({
      displayModal: !this.state.displayModal
    })
  }
  render() {
    const display = this.state.displayModal.toString()
    return (<div className="weather-comp" onClick={this.handleOpenModal}>
      <a onClick={this.handleModalDisplay}>
        <div className="weather-div">
          <i class="fa fa-sun-o" aria-hidden="true"></i>
          <button className="weather-btn" type="button">
            Weather
          </button>
        </div>
      </a>

      <Modal className="weather-pnl pnl" show={this.state.displayModal} hide={this.handleModalDisplay}/>
    </div>
    )
  }
}

export default Weather;
