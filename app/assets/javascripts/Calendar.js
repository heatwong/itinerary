import React, { Component } from 'react';
import moment from 'moment';
import {startWeek} from './Utils.js';
import {Day, Blank} from './Day.js';

export default class Calendar extends React.Component {
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
      days.push(<Day day={cur} />);
      cur = moment(cur).add(1, 'days');
    }

    var weeks = [];
    var weekCounter = 0;
    while( days.length > 0 ) {
      weeks.push(
        <div className="week" id={"week" + weekCounter}>
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