function addingAllTheWeirdStuff(array1, array2) {
  let sumOfOdds = 0;
  let sumOfEvens = 0;
  let newArray = [];
  let newElement = 0;
  let arrayToUse;

  console.log(`array1 is ${array1}`);

  let checkArray = array2.every(element => element < 20);
  console.log(`all under 20: ${checkArray}`);

  if (checkArray === false) {
    arrayToUse = array1.map(element => {
      return element + 1;
    })
  } else {
    arrayToUse = array1;
  }
  console.log(`arrayToUse is ${arrayToUse}`);
  
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !== 0) {
      sumOfOdds += array2[i];
    } else {
      sumOfEvens += array2[i];
    }
  } 
  console.log(`sum of odds from array2 is ${sumOfOdds}`);
  console.log(`sum of evens from array2 is ${sumOfEvens}`);

  for (let i = 0; i < arrayToUse.length; i++) {
    if (arrayToUse[i] < 10) {
      newElement = sumOfOdds + arrayToUse[i];
      newArray.push(newElement);
    } else {
      newElement = sumOfEvens + arrayToUse[i];
      newArray.push(newElement);
    }
  }
  console.log(`newArray is ${newArray}`);
  return newArray;
} 




// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
