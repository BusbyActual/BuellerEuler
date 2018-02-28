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
  'targetDay': 'Sunday',
  'targetMonth': 1
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

let getWeek = (day) => {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let index = 0;

  for (let x = 0; x < days.length; x++) {
    if (x > 0 && days[x] === day) {
      let temp = days.splice(x - 1);
      days.concat(temp.reverse());
      x = 7;
    }
  }

  return days;
}

let countSundays = (cfg) => {
  let count = 0;
  let finished = false;
  let started = false;
  let date = cfg.setup.date.split('/');
  let day = Number(date[1]);
  let month = Number(date[0]);
  let year = Number(date[2]);
  let lastDate = cfg.end.split('/');
  let lastDay = Number(lastDate[1]);
  let lastMonth = Number(lastDate[0]);
  let lastYear = Number(lastDate[2]);
  let startDate = cfg.start.split('/');
  let startDay = Number(startDate[1]);
  let startMonth = Number(startDate[0]);
  let startYear = Number(startDate[2]);
  let weekArr = getWeek(config.setup.day);
  let leapDict = getLeap(startYear, lastYear);
  let init = false;
  let solution = [];

  while(!finished) {

    if (!started) {
      if (year >= startYear && month >= startMonth && day >= startDay) {
        started = true;
      }
    }

    if (started) {
      let dayNum = new Date(month + '/' + day + '/' + year).getDay();

      if (month === config.targetMonth && weekArr[0] === config.targetDay) {
        count = count + 1;
        solution.push(month + '/' + day + '/' + year)
      }
    }

    if (day < dict[month]) {
      day = day + 1;
    } else if ( month < 12) {
      month = month + 1;

      if (leapDict[year] && month === 2) {
        dict[2] = 29;
      } else if (leapDict[year] && month === 3) {
        dict[2] = 28;
      }

      day = 1;
    } else {
      day = 1;
      month = 1;
      year = year + 1;
    }


    if (year === lastYear && month === lastMonth && day === lastDay) {
      finished = true;
    }

  }

  return { 'total': count, 'solution':  solution };
};


const answer = countSundays(config);

console.log(answer);