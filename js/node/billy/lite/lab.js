var fs = require('fs');

var poll = JSON.parse(fs.readFileSync('./settings/poll.json'));
console.log(poll[0].candidates[0])