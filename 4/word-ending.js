const wordEnding = require('./word-ending.module.js');

const messageCount = 112;
const userCount = 1024;

const messageString = wordEnding.getMessageCountString(messageCount);
const userString = wordEnding.getUserCountString(userCount);

console.log(messageString);
console.log(userString);
