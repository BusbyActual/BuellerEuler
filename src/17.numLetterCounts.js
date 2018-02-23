/*
  ### Problem

  If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

  If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


  NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

let letterCount = (max) => {
  let total = 0;
  let dict = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
  };

  let findHundreds = (num) => {
    let count = 0;

    if (num !== 1000 && num > 99) {
      while (num >= 100) {
        num -= 100;
        count++;
      }
    }

    return count;
  };

  for (let x = 1; x <= max; x++) {
    let h = findHundreds(x);

    if (x === 1000) {
      total += dict[1].length + dict[1000].length;
    } else if (x > 99) {
      let str = '' + x;
      let doubleDigits = str.slice(1);
      let singleDigit = doubleDigits.slice(1);
      doubleDigits = doubleDigits.slice(1) + '0';

      if (dict[doubleDigits]) {
        total += dict[doubleDigits].length;
      }
      total += dict[h].length + dict[100].length + dict[singleDigit].length;
    } else {
      let str = '' + x;
      let doubleDigits;
      let singleDigit;

      if (str.length > 1 && !dict[x]) {
        doubleDigits = str;
        singleDigit = doubleDigits.slice(1);
        doubleDigits = doubleDigits.slice(1) + '0';

        total += dict[doubleDigits].length + dict[singleDigit].length;
      } else {
        total += dict[x].length;
      }
    }
  }

  return total;
};

const answer = letterCount(342);

console.log(answer);