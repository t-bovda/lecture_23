'use strict'

// **********************************************

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = sum(arr);
// console.log(n);

// function sum(arr){
//     return _sum(arr, arr.length - 1);
// }
// function _sum(arr, index){
//     if (index == 0)
//         return arr[0];
//     return arr[index] + _sum(arr, index - 1);
// }

// **
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function arraySum(array){
//     var sum = 0;
//     for(var i = 0; i < array.length; i++){
//         sum += array[i];
//         }
//     console.log(sum);
//     }
// arraySum(arr);

// **

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumArray(arr) {
//     return arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1));
//   };
//   console.log(sumArray(arr));

// *************************************************
// let arr = [[[[]]]];
// let arr = ['x','y',['z']];
// let arr = [];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let deepCountArr = arr.length;
// console.log(deepCountArr);

// **

// function deepCount(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       count += Array.isArray(arr[i]) ? deepCount(arr[i]) : 1;
//     }
//     return count;
//   }
  
//   console.log(deepCount([1])); 
//   console.log(deepCount([1, 2, 3])); 
//   console.log(deepCount(["x", "y", ["z"]])); 
//   console.log(deepCount([1, 2, [3, 4, [5]]])); 
//   console.log(deepCount([[[]]]));

// //2 if else
// function deepCount(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         count += deepCount(arr[i]);
//       }
//       count++;
//     }
//     return count;
//   }
  
//   console.log(deepCount([1]));
//   console.log(deepCount([1, 2, 3])); 
//   console.log(deepCount(["x", "y", ["z"]])); 
//   console.log(deepCount([1, 2, [3, 4, [5]]])); 
//   console.log(deepCount([[[]]]));



//   **********************************

//  const employees = {
//       development: {
//           backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
//           frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
//       },
//       sales: {
//           marketing: {
//               internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
//               promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
//           },
//           sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
//       },
//       designer: [{name: 'Kate', salary: 1800}]
//   };
  
//   function takeSumSallary(startsum = 0){
//   let sum = startsum;
  
//   return function sumSallary(obj, ){
//       for(let key in obj){
//           if (Array.isArray(obj[key])){
//               obj[key].forEach(employee => sum += employee.salary);
//           } else {
//               sumSallary(obj[key]);
//           }
//       }
//       return sum;
//   }
//   };
//   let isPersonSalary = takeSumSallary()
//   console.log(isPersonSalary(employees))


// **********************

let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 8];
let arr3 = [6, 11, 16, 15, 11];

let maxNumber = Math.max(...arr1, ...arr2, ...arr3);

console.log(maxNumber);
