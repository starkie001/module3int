const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

const minutesPassedToday = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassedToday + ' minutes passed today');

const secondsPassedToday = (today.getHours() * 60 + today.getMinutes()) * 60 + today.getSeconds();
console.log(secondsPassedToday + ' seconds passed today');

const dob = new Date("09-10-2012");
const age = new Date(today - dob);

console.log(age.toLocaleString());
console.log(`${age.getFullYear()-1970} years, ${age.getMonth()} months and ${age.getDate() - 1} days old`);