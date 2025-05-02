const obj = require('./users');
console.log('obj :>> ', obj);

const { admins } = require('./users');
console.log('admins :>> ', admins);

// const { getCurrentMonth } = require('./date');
// const currentMonth = getCurrentMonth();
// console.log(`Now ${currentMonth} month`);

const currentMonth = require('./date').getCurrentMonth();
console.log(`Now ${currentMonth} month`);
