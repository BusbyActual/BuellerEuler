/*
  ### Problem

  You are given the following information, but you may prefer to do some research for yourself.

  1 Jan 1900 was a Monday.
  Thirty days has September,
  April, June and November.
  All the rest have thirty-one,
  Saving February alone,
  Which has twenty-eight, rain or shine.
  And on leap years, twenty-nine.
  A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
  How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/

let config = {
  'start' : '01/01/1901',
  'end': '12/31/2000',
  'setup': { 'day': 'Monday', 'date': '01/01/1900' },
  'day': 'Sunday',
  'month': '01'
};

let dict = {
  1: 31,
  2: 28, // leap year +1
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 30,
  11: 31,
  12: 31
};

let getLeap = (min, max) => {
  let leapYears = {};

  for (let x = min; x <= max; x ++) {
    if (x % 100 === 0) {
      if (x % 400 === 0) {
        leapYears[x] = 1;
      }
    } else if (x % 4 === 0) {
      leapYears[x] = 1;
    }
  }

  return leapYears;
};

let countSundays = (cfg) => {
  let count = 0;
  let finished = false;
  let date = cfg.setup.date.split('/');
  let day = date[1];
  let month = data[0];
  let year = date[2];

  while(!finished) {

    finished = true;
  }

  return count;
};


const answer = countSundays(config);

console.log(answer);