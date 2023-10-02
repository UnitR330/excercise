
/*

0 irgi yra lyginis skaicius!
4 yra lyginis skaicius.
-4 yra neigiamas lyginis skaicius.
3 nera lyginis skaicius
-3 nera neigimas lyginis skaicius.
3.14 nera lyginis skaicius , nes desimtainiai skaiciai nekada ne buna lyginiai.
-3.14 nera lyginis skaicius, nes desimtainiai skaiciai nekada ne buna lyginiai

-1.25, -2.25, -3.25, -4.25, -5.25,




-1.25
0 irgi yra lyginis skaicius!
4 yra lyginis skaicius.
-4 yra neigiamas lyginis skaicius.
3 nera lyginis skaicius
-3 nera neigimas lyginis skaicius.
3.14 nera lyginis skaicius , nes desimtainiai skaiciai nekada ne buna lyginiai.
-3.14 nera lyginis skaicius, nes desimtainiai skaiciai nekada ne buna lyginiai

-2.25
0 irgi yra lyginis skaicius!
4 yra lyginis skaicius.
-4 yra neigiamas lyginis skaicius.
3 nera lyginis skaicius
-3 nera neigimas lyginis skaicius.
3.14 nera lyginis skaicius , nes desimtainiai skaiciai nekada ne buna lyginiai.
-3.14 nera lyginis skaicius, nes desimtainiai skaiciai nekada ne buna lyginiai

*/// 

// console.clear();
 
//  1   2   3   4   5   6   7
//  8   9  10  11  12  13  14
// 15  16  17  18  19  20  21
// 22  23  24  25  26  27  28
// 29  30  31


/*

const day = 1;

if (day % 7 == 1)  {
    console.log('Monday');
}
else if (day % 7  == 2)  {
    console.log('Tuesday');
}
else if (day % 7  == 3)  {
    console.log('Wednesday');
}
else if (day % 7  == 4)  {
    console.log('Thursday');
}
else if (day % 7  == 5)  {
    console.log('Friday');
}
else if (day % 7  == 6)  {
    console.log('Saturday');
}
else if (day % 7  == 0) {
console.log('Sunday');
} 
else {
    console.log('No such day of the week');
}
*/
console.clear();

//  Логика кодирования, понимание кода

/*
const day2 = 31;

if (day2 === 1)  {
    console.log('Monday');
} else {
    if (day2 === 2) {
        console.log('Tuesday');  
    } else {
        if (day2 === 3) {
        console.log('Wednesday');
        } else {
            if (day2 === 4) {
            console.log('Thursday');
            } else {
                if (day2 === 5) {
                    console.log('Friday');
                } else {
                    if (day2 === 6) {
                        console.log('Saturday');
                    } else {
                        if (day2 === 7) {
                        console.log('Sunday');
                        } else {
                            console.log ('This day is not existed')
                        }
                    } 
                }
            }
        }
    }
}


*/

/*

Need to be:
 - day/night
 - rainy/sunny



const dayTime = 'night';
const rainy = false;

if (dayTime === 'day') { 
    if (rainy) {
        console.log('Dancing in the rain');
    } else {
        console.log('Ordinary day in paradise');
    }
} else {
           if (rainy) {
            console.log('Sitting home');
        } else {
            console.log('Can go stargazing');
        }
}

*/

/*
const dayTime = 'night';
const rainy = true;

if (dayTime === 'day' && rainy === true) { 
            console.log('Dancing in the rain');
    } else if (dayTime === 'day' && rainy === false) {
        console.log('Ordinary day in paradise');
    }
if (dayTime === 'night' && rainy === true) { 
        console.log('Sitting at home');
} else if (dayTime === 'night' && rainy === false) {
    console.log('Can go stargazing');
} 

*/

/*
const dayTime = 'night ';
const rainy = true;
const temp = 18;
const whenWarm = 20;

if (dayTime === 'day' && rainy === true && temp >= whenWarm) { 
            console.log('Dancing in the rain');
} else if (dayTime === 'day' && rainy === true && temp < whenWarm) { 
    console.log('Cold rain, not going dance');
    } else if (dayTime === 'day' && rainy === false && temp >= whenWarm) {
        console.log('Ordinary day in paradise');
    } else if (dayTime === 'day' && rainy === false && temp < whenWarm) {
        console.log('Ordinary day in paradise, even not so warm');
    }
else if (dayTime === 'night' && rainy === true && temp >= whenWarm) { 
        console.log('Sitting at home, but possible to go out');
} else if (dayTime === 'night' && rainy === true && temp < whenWarm) {
    console.log('Sitting at home!!!');
} else if (dayTime === 'night' && rainy === false && temp >= whenWarm) { 
    console.log('Can go stargazing');
} else if (dayTime === 'night' && rainy === false && temp <whenWarm) {
console.log('Went to sleep');
} 

 
 */

const dayTime = 'night';
const rainy = false;
const temp = 25;
const whenWarm = 20;

if (dayTime === 'day') {
    if (rainy) {
        if (temp >= whenWarm) { 
            console.log('Dancing in the rain');
        } else {
            console.log('Cold rain, not going dance');
        } 
    } else {
            if (temp >= whenWarm) { 
                console.log('Ordinary day in paradise');
            } else {
                console.log('Ordinary day in paradise, even not so warm');
            }
        }

} else {
    if (rainy) {
            if (temp >= whenWarm) { 
                console.log('Sitting at home, but possible to go out');
            } else {
                console.log('Sitting at home!!!');
            } 
        } else {
                if (temp >= whenWarm) { 
                    console.log('Can go stargazing');
                } else {
                    console.log('Went to sleep');
                }
            }
        }