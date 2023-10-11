


const jonoUgis = 1.95; 
const jonoSvoris = 92;
const markoUgis = 1.69;
const markoSvoris = 78;

const kmi = function (ugis, svoris) {
return +(svoris / (ugis * ugis)).toFixed(1); 
}
const jonoKMI1 = kmi(jonoUgis, jonoSvoris);
const markoKMI1 = kmi(markoUgis, markoSvoris);

console.log(typeof kmi(jonoUgis, jonoSvoris));
console.log(kmi(markoUgis, markoSvoris));

if (markoKMI1 > jonoKMI1) {
   console.log(`markHigherBMI - true`)   
}
if (jonoKMI1 > markoKMI1) {
    console.log(`markHigherBMI - false`)    
}

console.clear();

const skaiciuotiVidurki = (balai) => {
    let suma = 0;
     for (let i = 0; i < balai.length; i++) {
        suma += balai[i];
     }
     return suma / balai.length;
  };
  const delfinai1 = [96, 108, 89];
  const koalos1 = [88, 91, 110];
    
  const delfinaiBonus1 = [97, 112, 101];
  const koalosBonus1 = [109, 95, 123];
    
  const delfinaiBonus2 = [97, 112, 101];
  const koalosBonus2 = [109, 95, 106];
  
   
  
  function average(arr, arr2) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum  += arr[i];
    }
    const average = sum / arr.length;
    let sum2 = 0;
    for(let i = 0; i < arr2.length; i++) {
        sum2  += arr2[i];
    }
    const average2 = sum2 / arr2.length;
  }

