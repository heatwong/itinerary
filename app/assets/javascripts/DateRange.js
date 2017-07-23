import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class DateRange extends React.Component {
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