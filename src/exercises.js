function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  // write your code here
  a_firstElement = a[0];
  a_lastElement = a[a.length - 1];
  b_firstElement = b[0];
  b_lastElement = b[b.length - 1];

  if (a_firstElement === undefined) {
    return false;
  } else if (a_lastElement === undefined) {
    return false;
  } else if (b_firstElement === undefined) {
    return false;
  } else if (b_lastElement === undefined) {
    return false;
  } else if (a_firstElement !== b_firstElement) {
    return false;
  } else if (a_lastElement !== b_lastElement) {
    return false;
  } else if (a_firstElement === b_firstElement || a_lastElement === b_lastElement) {
    return true;
  }
}

function endsMeet(values, n) {
  // write your code here
}

function difference(numbers) {
  // write your code here
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
