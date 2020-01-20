function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  a_firstElement = a[0];
  a_lastElement = a[a.length - 1];
  b_firstElement = b[0];
  b_lastElement = b[b.length - 1];

  if (a_firstElement === b_firstElement) {
    return true;
  } else if (a_lastElement === b_lastElement) {
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {
  var newArray = [];
  if (!values || values.length === 0 || values.length < n || n % 1 !== 0 || n < 0) {
    return newArray;
  } else {
    if (n === 0) {
      return values;
    } else {
      for (let i = 0; i < n; i++) {
        if (values[i] !== undefined) {
          newArray.push(values[i]);
        }
      }
      for (let i = n; i > 0; i--) {
        if (values[values.length - i] !== undefined) {
          newArray.push(values[values.length - i])
        }
      }
      return newArray;
    }
  }
}

function difference(numbers) {

  let minimum = Number(Math.min.apply(null, numbers));
  let maximum = Number(Math.max.apply(null, numbers));

  if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {
    let difference = maximum - minimum
    return difference;
  }
}

function max(number) {
  if (!number || number.length < 3 || number.length % 2 === 0 || number.some(isNaN)) {
    return undefined;
  } else {
    let newArray = []

    let first = number[0];
    let middle = number[Math.floor(number.length/2)];
    let last = number[number.length - 1];
    newArray.push(first, middle, last);
    let largest = Number(Math.max.apply(null, newArray));
    return largest;
  }
}

function middle(values) {
  if (!values || values.length % 2 === 0 || values.length < 3) {
    return [];
  } else {
    var middle = values[Math.floor((values.length - 1) / 2) - 1];
    var middleSecond = values[(values.length - 1) / 2];
    return [middle, middleSecond];
  }
}

function increasing(numbers) {
  if (!numbers || numbers.length < 3 || numbers.some(isNaN) || Number.isInteger(numbers)) {
    return undefined;
  } else {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < numbers[i + 1] && numbers[i + 1] < numbers[i + 2]) {
        return true;
        break;
      }
    }
  }
  return false;
}

function everywhere(values, x) {
  let numbers = 1;
  if (!values || values.length < 1 || x === undefined) {
    return false;
  }
  else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== x) {
        if (values[i - 1] === x || values[i + 1] === x) {
          numbers = false;
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

function consecutive(numbers) {
  if (!numbers || Number.isInteger(numbers) || numbers.some(isNaN) || numbers.length < 3) {
     return false;
   } else {
     for (let x = 1; x < numbers.length; x++) {
       if (numbers[x - 1] % 2 === 0 && numbers[x] % 2 === 0 && numbers[x + 1] % 2 === 0) {
         return true;
       } else if (numbers[x - 1] % 2 === 1 && numbers[x] % 2 === 1 && numbers[x + 1] % 2 === 1) {
         return true;
       }
     }
     return false;
   }
 }

function balance(numbers) {
  let half = 0;
  let secondHalf = 0;
  let sum;
  let nums;
  if (!numbers || numbers.length < 2 || numbers.some(isNaN)) {
    return false;
    nums = false;
  } else {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (Number.isInteger(numbers[i]) === false) {
        return false;
        nums = false;
      }
    }
    for (i = 0; i < numbers.length; i++) {
      half += numbers[i];
    }
    sum = half / 2;
    if (half % 2 === 1) {
      return false;
      nums = false;
    }
    for (let i = 0; i < numbers.length - 1; i++) {
      secondHalf += numbers[i]
      if (secondHalf === sum) {
        return true;
        nums = true;
      }
    }
    if (nums === true) {
      return true;
    } else {
      return false;
    }
  }
}

function clumps(values) {
  var clumps = 0;
  var same;
  var last;
  if (!values) {
    return -1;
  } else {
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i - 1] === values[i]) {
      } else if (values[i] === values[i + 1]) {
        clumps++;
      }
    }
    return clumps;
  }
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
