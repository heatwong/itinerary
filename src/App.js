import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import DateRange from './DateRange.js';
import Calendar from './Calendar.js';

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
      </div>
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
      </div>
    );    
  }
}