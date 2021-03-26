function addingAllTheWeirdStuff(array1, array2) {
  let sumOfOdds = 0;
  let sumOfEvens = 0;
  let newArray = [];
  let newElement = 0;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !== 0) {
      sumOfOdds += array2[i];
    } else {
      sumOfEvens += array2[i];
    }
  } 
  for (let j = 0; j < array1.length; j++) {
    if (array1[j] < 10) {
      newElement = sumOfOdds + array1[j];
      newArray.push(newElement);
    } 
  }
  for (let k = 0; k < array1.length; k++) {
    if (array1[k] >10) {
      newElement = sumOfEvens + array1[k];
      newArray.push(newElement);
    }
  }
  return newArray;
} 

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
// BONUS PART console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
