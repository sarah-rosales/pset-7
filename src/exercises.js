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
  var newArray2 = [];
  if (!values || values.length < n || n < 1 || !Number.isInteger(n)) {
    return [];
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
        if (!(values[values.length - i] === undefined)) {
          newArray.push(values[values.length - i])
        } else {
          newArray = values.slice(0,n);
          newArray2 = values.slice(values.length - n, values.length + 1);
          newArray = newArray.concat(newArray2);
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
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
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
