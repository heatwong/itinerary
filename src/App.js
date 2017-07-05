import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

var daysTo = {
  '0': 'Sunday',
  '1': 'Monday',
  '2': 'Tuesday',
  '3': 'Wednesday',
  '4': 'Thursday',
  '5': 'Friday',
  '6': 'Saturday',
};

function Day(props) {
  return (
    <button className="dayblock" onClick={props.onClick}>
      {daysTo[props.value]}
    </button>
  );
}

function Blank(props) {
  return(
    <button className="blankblock">-</button>
  );
}

function dateToString(date) {
  return ( date.year() + "/" + (date.months() + 1) + "/" + date.date() );
}

function startWeek(date) {
  return date.day() == 0
    ? date
    : startWeek(moment(date).subtract(1, 'days'));
}

class DateRange extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.props.onChangeStart(date);
  }

  handleChangeEnd(date) {
    this.props.onChangeEnd(date);
  }

  render() {
    const start = this.props.startDate;
    const end   = this.props.endDate;

    return (
      <div className="dateselect">
        <span className="padding">
          <DatePicker
            selected={start}
            selectsStart
            startDate={start}
            endDate={end}
            onChange={this.handleChangeStart}
            monthsShown={2}
            placeholderText="Start Date"
          />
        </span>

        <span className="padding">
          <DatePicker
            selected={end}
            selectsEnd
            startDate={start}
            endDate={end}
            onChange={this.handleChangeEnd}
            monthsShown={2}
            placeholderText="End Date"
          />
        </span>
      </div>
    );
  }
}

class Calendar extends React.Component {
  render() {
    const start = this.props.startDate;
    const end   = this.props.endDate;

    var days = [];
    var cur = start;

    var sWeek = startWeek(cur);
    while( sWeek.isBefore(moment(cur)) ) {
      days.push(<Blank value="blank" />);
      sWeek = moment(sWeek).add(1, 'days');
    }

    while( cur.isBefore(moment(end).add(1, 'days')) ) {
      days.push(<Day value={cur.day()} onClick={() => alert("this worked")} />);
      cur = moment(cur).add(1, 'days');
    }

    var weeks = [];
    var weekCounter = 0;
    while( days.length > 0 ) {
      weeks.push(
        <div className="week" id={"week" + weekCounter}>
          <button className="week-collapse" onClick={() => alert("uhh")} />
          {days.splice(0,7)}
        </div>
      );
    }

    return (
      <div className="calendar">
        {weeks}
      </div>
    );
  }
}

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