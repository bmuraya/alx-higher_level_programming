#!/usr/bin/node

/* script that imports a dictionary of occurrences by user id
and computes a dictionary of user ids by occurrence */
const dict = require('./101-data').dict;
const newDict = {};
Object.keys(dict).forEach(function (key) {
  if (newDict[dict[key]] === undefined) {
    newDict[dict[key]] = [];
  }
  newDict[dict[key]].push(key);
});

console.log(newDict);
