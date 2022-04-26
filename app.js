// import functions and grab DOM elements
const shell1 = document.getElementById('shell1');
const shell2 = document.getElementById('shell2');
const shell3 = document.getElementById('shell3');

const shell1Btn = document.getElementById('shell1Btn');
const shell2Btn = document.getElementById('shell2Btn');
const shell3Btn = document.getElementById('Shell3Btn');

const winSpan = document.getElementById('winSpan');
const totalSpan = document.getElementById('totalSpan');
const lossSpan = document.getElementById('lossSpan');

// let state

let wins = 0;
let total = 0;
let losses = 0;

// set event listeners 

shell1Btn.addEventListener('click', () => {
  const randomShell = Math.ceil(Math.random() * 3);
  console.log('the random shell is', randomShell);
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
