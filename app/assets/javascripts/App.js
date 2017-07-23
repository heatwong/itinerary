import React, { Component } from 'react';
import '../stylesheets/App.css';
import moment from 'moment';
import DateRange from './DateRange.js';
import Calendar from './Calendar.js';
import Tools from './Tools.js';

var calStyle = {
  float: 'left',
  width: '60%',
};

var toolsStyle = {
  display: 'inline-block',
  width: '40%',
  'text-align': 'left',
};

var titleStyle = {
  'font-family': 'Arial',
  'text-align': 'center',
  'font-size': '20px',
};

export default class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
    };

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }  

  handleChangeStart(date) {
    this.setState({
      startDate: date,
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
  }

  render() {
    return (
      <div>
        <div className="padding">
          <p style={titleStyle}>TripLite</p>
          </div>
          <span style={calStyle}>
            <DateRange
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChangeStart={this.handleChangeStart}
              onChangeEnd={this.handleChangeEnd}
            />
            <Calendar
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
          </span>
          <span style={toolsStyle}>
            <Tools />
          </span>
      </div>
    );    
  }
}
