import users from './users.mjs';
console.log('users :>> ', users);

import { getCurrentMonth } from './date/index.mjs';
const currentMonth = getCurrentMonth();
console.log(`Now ${currentMonth} month`);
