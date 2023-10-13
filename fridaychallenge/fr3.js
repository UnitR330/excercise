// 1

const x = "Kim";
const y = "Basinger";

if (x.length < y.length) {
    console.log(`${x} shorter than ${y}`);
} else if (x.length > y.length) {
    console.log(`${x} longer than ${y}`);
} else {
    console.log(`${x} has the same length with ${y}`)
}

// 1*

function namecompare(actor1, actor2) {
    let x = actor1.length;
    let y = actor2.length;
    
    if ( x < y ) {
        return `${actor1}`;
    } else if ( x > y) {
        return `${actor2}`;
    } else {
        return `${actor1} and ${actor2} has the same length`
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



// 6


// 7

// 8


/*
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    */