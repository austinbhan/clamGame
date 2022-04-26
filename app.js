// import functions and grab DOM elements
const shell1 = document.getElementById('shell1');
const shell2 = document.getElementById('shell2');
const shell3 = document.getElementById('shell3');

const shell1Btn = document.getElementById('shell1Btn');
const shell2Btn = document.getElementById('shell2Btn');
const shell3Btn = document.getElementById('Shell3Btn');

let winSpan = document.getElementById('winSpan');
let totalSpan = document.getElementById('totalSpan');
let lossSpan = document.getElementById('lossSpan');

// let state

let wins = 0;
let total = 0;
let losses = 0;

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

shell1Btn.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    const randomNumber = Math.ceil(Math.random() * 3);
    console.log('the random shell is', randomNumber);
    if (randomNumber === 1) {
        wins += 1;
        total += 1;
        winSpan.textContent = wins;
        totalSpan.textContent = total;
        shell1.classList.add('reveal');
    } else {
        losses += 1;
        total += 1;
        lossSpan.textContent = losses;
        totalSpan.textContent = total;
        shell1.classList.remove('reveal');
    }
});

shell2Btn.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    const randomNumber = Math.ceil(Math.random() * 3);
    console.log('the random shell is', randomNumber);
    if (randomNumber === 1) {
        wins += 1;
        total += 1;
        winSpan.textContent = wins;
        totalSpan.textContent = total;
        shell2.classList.add('reveal');
    } else {
        losses += 1;
        total += 1;
        lossSpan.textContent = losses;
        totalSpan.textContent = total;
        shell2.classList.remove('reveal');
    }
});

shell3Btn.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    const randomNumber = Math.ceil(Math.random() * 3);
    console.log('the random shell is', randomNumber);
    if (randomNumber === 1) {
        wins += 1;
        total += 1;
        winSpan.textContent = wins;
        totalSpan.textContent = total;
        shell3.classList.add('reveal');
    } else {
        losses += 1;
        total += 1;
        lossSpan.textContent = losses;
        totalSpan.textContent = total;
        shell3.classList.remove('reveal');
    }
});

winSpan.textContent = wins;
totalSpan.textContent = total;
lossSpan.textContent = losses;
  