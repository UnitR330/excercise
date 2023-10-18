console.clear();
 
 /*
function hexColor(rgb) {
  if (!rgb || rgb.trim() === '000 000 000') {
    return 'black';
  } else if (rgb === '0 0 0') {
    return 'black';
  }
  const [red, green, blue] = rgb.split(' ').map(Number);
  if (red > green && red > blue) {
    return 'red';
  } else if (green > red && green > blue) {
    return 'green';
  } else if (blue > red && blue > green) {
    return 'blue';
  } else if (red === green && red > blue) {
    return 'yellow';
  } else if (red === blue && red > green) {
    return 'magenta';
  } else if (green === blue && green > red) {
    return 'cyan';
  } else {
    return 'white';
  }
}
*/

function hexColor(codes){
  var [r,g,b]=codes.split(" ").map(Number),max=Math.max(r,g,b)
  return codes==''?'black':r==g&&g==b?b==0?'black':'white':r==g?g==0?'blue':'yellow':g==b?b==0?'red':'cyan':r==b?b==0?'green':'magenta':r==max?"red":g==max?'green':'blue'
}
console.log(hexColor('087 255 054')); // Output: 'green'
console.log(hexColor('181 181 170')); // Output: 'yellow'
console.log(hexColor('000 000 000')); // Output: 'black'
console.log(hexColor('001 001 001')); // Output: 'white'

 
 console.log('------------------------------') 

 
//                    R   G   B
console.log(hexColor('000 000 000'));
console.log(hexColor('000 235 245'));
console.log(hexColor('027 100 100'));
console.log(hexColor('021 021 021'));
console.log(hexColor('255 000 250'));
console.log(hexColor('000 147 000'));
console.log(hexColor('212 103 212'));
console.log(hexColor('101 101 092'));

/*

function greet(name){
return `Hello, ${name} how are you doing today?`;
}
const greeting = greet("Viktor");
console.log(greeting);



function oddOrEven(arr) {
const sum = arr.reduce((acc, num) => acc + num, 0);
return sum % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([4, 0, 6]));
console.log(oddOrEven([-4, 0, -5]));














// Examples:
console.log(oddOrEven([0]));        // Output: "even"
console.log(oddOrEven([0, 1, 4]));   // Output: "odd"
console.log(oddOrEven([0, -1, -5])); // Output: "even"




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

excludingVatPrice = p => p === null ? -1 : +(p / 1.15).toFixed(2);

/*
function excludingVatPrice(price) {
  return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100;
}

const excludingVatPrice = price =>
  price === null ? -1 : Math.round(price / 1.15 * 10**2) / 10**2;

function excludingVatPrice(price){
  if (price === null) return -1
  return +((price / 1.15).toFixed(2));
}  


const excludingVatPrice = price => price !== null ? (price / 1.15).toFixed(2) * 100 / 100 : -1;

// Test cases
console.log(excludingVatPrice(230.00)); // Output: 200.00
console.log(excludingVatPrice(150.00)); // Output: 130.43
console.log(excludingVatPrice(null));   // Output: -1


/*
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