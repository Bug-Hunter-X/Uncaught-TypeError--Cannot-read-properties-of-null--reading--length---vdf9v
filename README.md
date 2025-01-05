# Uncaught TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: `Uncaught TypeError: Cannot read properties of null (reading 'length')`. This error occurs when you attempt to access the `length` property of a variable that might be null or undefined.

## The Bug

The `bug.js` file contains a function that attempts to access the `length` property of a variable without first checking if the variable is null or undefined.

## The Solution

The `bugSolution.js` file provides a solution to this problem by explicitly checking for null or undefined values before accessing the `length` property.