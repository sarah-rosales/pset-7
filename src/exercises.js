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
  if (!values || values.length === 0) {
    return false;
  }
    let firstValue = values[0];
    let lastValue = values[values.length - 1];

  if (firstValue = values[0]) {
    values.unshift(firstValue)
    return true;
  } else if (lastValue = values[values.length - 1]) {
    values.push(lastValue)
    return true;
  } else {
    return false;
  }
  //oooooooppppp idk what to doooooo shhhooooppp
}

function difference(numbers) {

}

function max(number) {
  // write your code here
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
