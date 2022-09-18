#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const moment = require('moment/moment');
const argv = yargs(hideBin(process.argv)).argv
const [ variant ] = argv._;
const { y, year } = argv;
const { m, month } = argv;
const { d, day } = argv;

if (!variant) return console.log(`Today: ${moment().format('LLLL')}`);

if (variant.toLowerCase() === 'current') {
    if (y || year) {
        return console.log(`Now ${moment().format('YYYY')} year.`);
    } else if (m || month) {
        return console.log(`Now ${moment().format('MMMM')} month.`);
    } else if (d || day) {
        return console.log(`Today: ${moment().format('dddd')}`);
    }
}

if (variant.toLowerCase() === 'add') {
    if (y || year) {
        const time = (y) ? y : year;
        const date = moment().add(time, 'years')
        return console.log(`In ${time} years it will be ${date.format('LL')}`);
    } else if (m || month) {
        const time = (m) ? m : month;
        const date = moment().add(time, 'months')
        return console.log(`In ${time} months it will be ${date.format('LL')}`);
    } else if (d || day) {
        const time = (d) ? d : day;
        const date = moment().add(time,'days')
        return console.log(`In ${time} days it will be ${date.format('LL')}`);
    }
}

if (variant.toLowerCase() === 'sub') {
    if (y || year) {
        const time = (y) ? y : year;
        const date = moment().subtract(time, 'years')
        return console.log(`${time} years ago was ${date.format('LL')}`);
    } else if (m || month) {
        const time = (m) ? m : month;
        const date = moment().subtract(time, 'months')
        return console.log(`${time} months ago was ${date.format('LL')}`);
    } else if (d || day) {
        const time = (d) ? d : day;
        const date = moment().subtract(time,'days')
        return console.log(`${time} days ago was ${date.format('LL')}`);
    }
}

return console.log('You entered incorrect data');
