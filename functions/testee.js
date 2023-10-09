console.clear();
/*
function excludingVatPrice(priceWithVat) {
  if (priceWithVat === null) {
    return -1;
  }
  const vatRate = 0.15;
  const originalPrice = priceWithVat / (1 + vatRate);  
  const roundedPrice = Math.round(originalPrice * 100) / 100;
  return roundedPrice;
}
console.log(excludingVatPrice(230.00)); 
console.log(excludingVatPrice(150.00)); 
console.log(excludingVatPrice(null));   
*/

function excludingVatPrice(pricewithVat){
  if (pricewithVat === null) {
  return -1;
  }
  const vatRate = 0.15;
  const originalPrice = pricewithVat / (1 + vatRate);
  // const roundedPrice = originalPrice.toFixed(2);
  return Math.round(originalPrice);
}
console.log(excludingVatPrice(230));
console.log(excludingVatPrice(150.00)); 
console.log(excludingVatPrice(null));   

 /*
 
function oddEven(n){
    return n%2 == 1 ? "odd number" : "even number";
  }
  function oldYoung(age){
    return age < 16 ? "children" : age < 50 ? "young man" : "old man";
  }

  console.log(oldYoung(50));

  let n = 8;


/*
  function saleHotdogs(n) {
    if (n < 5) {
      return n * 100;
    } else if (n >= 5 && n < 10) {
      return n * 95;
    } else {
      return n * 90;
    }
  }
 
 
  console.log(saleHotdogs(3));
  console.log(saleHotdogs(7));
  console.log(saleHotdogs(12));
  console.log(saleHotdogs(n));


var str="My name is John";
var words=str.split(" ");
console.log(words);
//output:
[ 'My', 'name', 'is', 'John' ]



let str3 = "My name is John";
let words3 = str3.split (" ", 3);
console.log("Words1", words3);

let str4 = "My name is John";
let words4 = str4.split (" ", 5);
console.log("Words2:", words4);

const str = "My name is Greta";
const namesplit = str.split(" ", 2);
console.log(namesplit);

var str8 = "My name is Blob";
let names = str8.split(" ");
console.log(names);


let str16 = "My".concat("closest tree");
console.log(str16);


function splitAndMerge(My name is John", " ") {
    let str10 = "my name is John";
    let sentence = str10.split("");
    console.log(splitAndMerge); 
  }

  

  function customStringJoin(str, separator) {
       const words = str.split(' ');
    const modifiedWords = words.map(word => word.split('').join(separator));
    const result = modifiedWords.join(' ');
    return result;
  }
  const inputString = "Hello World";
  const separator = '-';
  const result = customStringJoin(inputString, separator);
  console.log(result); 
  
  function customStringJoin(str, separator) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').join(separator);
    }
    const result = words.join(' ');
      return result;
  }
  const inputString = "Hello World";
  const separator = '-';
  const result = customStringJoin(inputString, separator);
  console.log(result);  

  function splitAndMerge(str, separator) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').join(separator);
    }
    const result = words.join(' ');
    return result;
    }
const inputString = "My name is John";
const separator = '-';
const result = splitAndMerge(inputString, separator);
console.log(result);

function summ (a, b, c) {
  let a = 2;
  let b = 6;
  let c = 17;

  console.log(a, b, c);
  return a + b + c;
}

 
function showMessage(from, text) {
    if (text === undefined) {
        text = 'текст не передан';
    }
    alert( from + ": " + text );
}
showMessage("Маша", "Привет!"); // Маша: Привет!
showMessage("Маша"); //



var total = 0, count = 1;
while (count <= 6) {
  total += count;
  count += 1;
}
console.log(total);
*/

