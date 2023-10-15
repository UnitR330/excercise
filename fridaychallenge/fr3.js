// 1



/*

const x = "Kim";
const y = "Basinger";

if (x.length < y.length) {
    console.log(`${x} shorter than ${y}`);
} else if (x.length > y.length) {
    console.log(`${x} longer than ${y}`);
} else {
    console.log(`${x} has the same length with ${y}`)
}
/* 
// 1*

function namecompare(actor1, actor2) {
    let x = actor1.length;
    let y = actor2.length;
    
    if ( x < y ) {
        return `${actor1}`;
    } else if ( x > y) {
        return `${actor2}`;
    } else {
        return `${actor1} and ${actor2} has the same length`;
    }
}
const result = namecompare("Kim Basinger", "Mickey Rourke");
console.log(result);

// 2

const myName = "Viktor";
const mySurname = "Pauza";
const YOM = 1980
const PRS = 2023
console.log(`I am ${myName} ${mySurname}. I am ${PRS-YOM} years old`);

// 3

const actressName = "Jennifer";
const actressSurname = "Aniston";
const letters = actressName.slice(-3) + actressSurname.slice(-3);
console.log(letters);

// 4

const pasaka = "“Once upon a time in Hollywood”";
const reality = pasaka.split(/[Oo]/).join("*");

console.log(reality);

// 4*

function replaceLetters(string) {
    let replacedString = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'o' || string[i] === 'O') {
        replacedString += '*';
      } else {
        replacedString += string[i];
      }
    }
    return replacedString;
  }
  
  const originalString = "Once upon a time in Hollywood";
  const modifiedString = replaceLetters(originalString);
  console.log(modifiedString);

// 5 

 function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate four random fs
const f1 = rand(0, 2);
const f2 = rand(0, 2);
const f3 = rand(0, 2);
const f4 = rand(0, 2);

// Print the results
console.log(`f 1: ${f1}`);
console.log(`f 2: ${f2}`);
console.log(`f 3: ${f3}`);
console.log(`f 4: ${f4}`);

// 5*

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const f1 = rand(0, 2);
const f2 = rand(0, 2);
const f3 = rand(0, 2);
const f4 = rand(0, 2);

// Count occurrences
let count0 = 0;
let count1 = 0;
let count2 = 0;

// Update counts based on values
[count0, count1, count2] = [f1, f2, f3, f4].reduce((counts, value) => {
    counts[value]++;
    return counts;
}, [count0, count1, count2]);

console.log(`f 1: ${f1}`);
console.log(`f 2: ${f2}`);
console.log(`f 3: ${f3}`);
console.log(`f 4: ${f4}`);
console.log(`Count of 0: ${count0}`);
console.log(`Count of 1: ${count1}`);
console.log(`Count of 2: ${count2}`);



function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const f1 = rand(0, 2);
const f2 = rand(0, 2);
const f3 = rand(0, 2);
const f4 = rand(0, 2);

// Count the occurrences of each value
let countZero = 0;
let countOne = 0;
let countTwo = 0;

if (f1 === 0) countZero++;
else if (f1 === 1) countOne++;
else if (f1 === 2) countTwo++;

if (f2 === 0) countZero++;
else if (f2 === 1) countOne++;
else if (f2 === 2) countTwo++;

if (f3 === 0) countZero++;
else if (f3 === 1) countOne++;
else if (f3 === 2) countTwo++;

if (f4 === 0) countZero++;
else if (f4 === 1) countOne++;
else if (f4 === 2) countTwo++;

// Print the results
console.log(`f 1: ${f1}`);
console.log(`f 2: ${f2}`);
console.log(`f 3: ${f3}`);
console.log(`f 4: ${f4}`);
console.log(`Count of Zeros: ${countZero}`);
console.log(`Count of Ones: ${countOne}`);
console.log(`Count of Twos: ${countTwo}`);


// 6


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const c1 = rand(0, 4);
const c2 = rand(0, 4);

const output = c1 > c2 ? (c1 / c2).toFixed(2) : (c2 / c1).toFixed(2);

console.log(`Const 1: ${c1}`);
console.log(`Const 2: ${c2}`);
console.log(`Result: ${output}`);

// 7

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const d1 = rand(0, 25);
const d2 = rand(0, 25);
const d3 = rand(0, 25);

const average = ((d1 + d2 + d3) / 3).toFixed(2);

console.log(`Const 1: ${d1}`);
console.log(`Const 2: ${d2}`);
console.log(`Const 3: ${d3}`);
console.log(`Average: ${average}`);

// 8

const e3 = 'Kylie';
const e4 = 'Minogue';

const monogram = e3.slice(-5, -4) + e4.slice(-7, -6);
console.log(monogram);

// 9
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const j1 = rand(97, 122);
const j2 = rand(97, 122);
const j3 = rand(97, 122);

console.log(String.fromCharCode(j1, j2, j3));

// const randomString = String.fromCharCode();

// console.log(randomString)




function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    */