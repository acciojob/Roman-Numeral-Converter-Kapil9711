// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
const keys = Object.keys(obj);
let step = 0;
let romanNumber = '';
let tempNum = num;
while(tempNum > 0){
for(let key of keys){
   const number = obj[key][1];
   const roman = obj[key][0]
//   console.log(romanNumber);
   if(tempNum >= number){
       tempNum = tempNum - number;
       romanNumber += roman;
       break;
    //   if(tempNum % number === 0) {
    //         const noTimes = tempNum / number;
    //         for(let i = 1; i<= noTimes ; i++) romanNumber += roman;
    //         tempNum = 0;
    //         break;
    //   }
    //   tempNum = tempNum % number;
    //   romanNumber += roman;
    //   break;
   }
}

}
console.log(romanNumber);
}

convertToRoman(798);
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
