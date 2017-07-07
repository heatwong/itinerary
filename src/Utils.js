import moment from 'moment';

export function dateToString(date) {
  return ( date.year() + "/" + (date.months() + 1) + "/" + date.date() );
}

export function startWeek(date) {
  return date.day() === 0
    ? date
    : startWeek(moment(date).subtract(1, 'days'));
}