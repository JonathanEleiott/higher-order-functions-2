// HIGHER ORDER FUNCTIONS

// const add = (num1, num2) => {
//   return num1 + num2;
// }

// const subtract = (num1, num2) => {
//   return num1 - num2;
// }

// const doMath = (num1, num2, mathFunction) => {
//   const result = mathFunction(num1, num2); // 11
//   console.log(result);
// }

// doMath(4, 7, add);





// forEach
// const students = [`Carlos`, `Andy`, `Nina`, `Jacob`, `Sally`, `Nathan`, `noelle`];

// const addIsAwesome = (name) => {
//   console.log(`${name} is awesome!`);
// }

// students.forEach(addIsAwesome);


// const forEach = (someFunction, array) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     someFunction(array[i]);
//   }
// }

// forEach(addIsAwesome, students);




// Anonymous functions
// const addIsWizard = () => {
//   console.log(`I am a wizard`);
// }

// students.forEach(addIsWizard);

// students.forEach((name) => {
//   console.log(`${name} is a wizard!`);
// });



// find 
// const nums = [23, 75, 4, 56, 12, 5, 100];

// const foundNum = nums.find((num) => {
//   return num > 50;
// });

// console.log(foundNum);



// filter
// const students = [`Carlos`, `Andy`, `Nina`, `Jacob`, `Sally`, `Nathan`, `noelle`];
// const evenNums = nums.filter((num) => { 
//   return  num % 2;
// });

// console.log(evenNums);

// const nStudents = students.filter((student) => {
//   return student[0] === `N` || student[0] === 'n';
// });

// console.log(nStudents);




// map
// const students = [`Carlos`, `Andy`, `Nina`, `Jacob`, `Sally`, `Nathan`, `noelle`];

// const newArr = students.map((name) => {
//   return `${name} - classroom 104`;
// })

// console.log(newArr);


// const nums = [23, 75, 4, 56, 12, 5, 100];

// const numsPlus5 = nums.map((num) => {
//   return num + 5;
// });

// console.log(numsPlus5);



// reduce
// const nums = [23, 75, 4, 56, 12, 5, 100];

// const sum = nums.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0)

// console.log(sum);

// acc: 0, currVal: 23
// acc: 23, currVal: 75
// acc: 98, currVal: 4
// acc: 102, currVal: 56
// acc: 158, currVal: 12
// acc: 170, currVal: 5
// acc: 175, currVal: 100
// acc: 275



// const students = [`Carlos`, `Andy`, `Nina`, `Jacob`, `Sally`, `Nathan`, `noelle`];

// const commaSeparatedStudents = students.reduce((acc, currName) => {
//   return `${acc}${currName}, `
// }, ``);

// console.log(commaSeparatedStudents.slice(0, -2));

// acc: ``, currName: `Carlos`
// acc: `Carlos, `, currName: `Andy`
// acc; `Carlos, Andy, `, currName: ...