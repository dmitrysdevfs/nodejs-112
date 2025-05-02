import users from './users.js';
console.log('users :>> ', users);

import { getCurrentMonth } from './date/index.js';
const currentMonth = getCurrentMonth();
console.log(`Now ${currentMonth} month`);
