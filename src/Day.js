import React, { Component } from 'react';
import {dateToString} from './Utils.js';

var daysTo = {
  '0': 'Sunday',
  '1': 'Monday',
  '2': 'Tuesday',
  '3': 'Wednesday',
  '4': 'Thursday',
  '5': 'Friday',
  '6': 'Saturday',
};

export function Blank(props) {
  return(
    <button className="blankblock">-</button>
  );
}

export class Day extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         day: props.day,
      };
   }

   componentWillReceiveProps(nextProps) {
      this.setState({day: nextProps.day});
   }

   render() {
      return (
         <button className="dayblock" onClick={() => alert(this.state.day)}>
            {daysTo[this.state.day.day()]}
         </button>
      );
   }
}