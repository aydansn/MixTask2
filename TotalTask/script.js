//1.Array-in ichindeki, elemenleri console-a cixart
const arrOne = [1,2,34,5,6,7,4,2];
for(i=0; i<arrOne.length;i++){
    console.log(i);
}

//2.Arrayin ichindeki elementleri,topla
const topla = [12,23,43,65,87,19];
let sum = 0;
for(let i=0; i<topla.length; i++){
  sum += topla[i];
}
console.log(sum);


//4.faktoriali tap(function yaz,shert qoy);
// let n = 4;
// function factorial(n){
//     let cavab = 1;
//     if (n == 0 || n == 1){
//       return cavab;
//     }
//     else if(n > 1){
//       for(var i = n; i >= 1; i--){
//         cavab = cavab * i;
//       }
//       return cavab;
//     }
//     else{
//       return "reqem daxil edilmeyib"
//     }  
//   }
//   cavab = factorial(n)
//   console.log(n,cavab);

//5.stringi, tersine cevir. return et stringi


//6.Arrayin ichindeki Max-ededi tap(function yaz, max ededi return et)?????
 const maxArray = [2,3,4,12,37,98,100,3565,21,32,54,67,87];
  function maxEdediTap (arr){
    let maxNumbers = arr.filter(ededler => ededler === Math.max(ededler));
    return maxNumbers;
  }
  let maxNumbers = maxEdediTap(maxArray);
  console.log(maxNumbers);
//7.Sade ededleri tap. function yaz, sade olub olmadigini yoxla???
    let elements = [32,90,11,33,41,21,31,7];
    for(let i=0; i<elements.length;i++){
      if(elements[i] %2===0 ){
        console.log(i,"sadedir");
      }
      else{
        console.log("sade deyil");
      }
    }

//task8(cox cetin)

//9.iki Array-leri birleshdirin
   const a = [2,3,4,5,6,1,7];
   const b = [7,8,9,10,12,14,17,20];
    function birleshdir(a,b){
      return a.concat(b);
    }
    const birleshmishArr = birleshdir(a,b);
    console.log(birleshmishArr);

//10.Array elementlerinin, 2qatini qaytarir.
const ikiqatHesabla = [3,2,1,4,5,6];
function ikiqatElemet(arr){
  return arr.map(num=> num *2);
}
const elementinIkiqati = ikiqatElemet(ikiqatHesabla);
console.log(elementinIkiqati);

//11.Index-i ve elementi ekranda cap et.
const numbers = [21,23,45,67,43,56,89,76,24,15,65,344,876];
function indexGoster(arr){
  arr.forEach((element,index)=>{
    console.log(`index:${index} element:${element}`);
  })
}
indexGoster(numbers);

//3.Arrayin ichindeki elementlerden, cut olanlari qaytar
const cutArray = [23,21,42,76,54,8,7,56,43,67,5,2,4,5,6,7,889,90];
function cutEdediTap (arr){
  return arr.filter(num=>num%2===0);
}
let evenNumbers = cutEdediTap(cutArray);
console.log(evenNumbers);

//12.Filter istf ederek, function yaz.Arrayin ichindeki, tek elementleri qaytar.
const oddNumbers = [2,3,4,5,6,7,87,8,9];
function showOddNumbers (arr){
  return arr.filter(num =>num%2===1);
}
let oddElements = showOddNumbers(oddNumbers);
console.log(oddElements);

//13.Arrayin ichindeki elementlerin, kvadratini qaytar.
const numbers3 = [1, 2, 3, 4, 5];
function kvadratiElemet(arr) {
  return arr.map(num => num * num);
}
const kvadrateded = kvadratiElemet(numbers3);
console.log(kvadrateded); 

//task14

//15.Object yarat.function , object-in key-i qaytarsin.


//16.
