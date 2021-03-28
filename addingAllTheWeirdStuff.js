function addingAllTheWeirdStuff(array1, array2) {
  let sumOfOdds = 0;
  let sumOfEvens = 0;
  let newArray = [];
  let newElement = 0;
  //let newPlusOneElement = 0;
  //let plusOneArray = [];
  
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 20 === true) {
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !== 0) {
      sumOfOdds += array2[i];
    } else {
      sumOfEvens += array2[i];
    }
  } 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 10) {
      newElement = sumOfOdds + array1[i];
      newArray.push(newElement);
    } 
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] >10) {
      newElement = sumOfEvens + array1[i];
      newArray.push(newElement);
    }
  }
  return newArray;
}


//TESTS
/*function bonus(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 20 === true) {
      for (let j = 0; j < array1.length; j++) {
        if (array1[i] > 0) {
          console.log(array1[i]);
          //newPlusOneElement = array1[i] + 1;
          //console.log(newPlusOneElement);
          
          //plusOneArray.push(newPlusOneElement);
          //console.log(plusOneArray);
          
        }  
      }
    }
   
  }  
}*/

/*function checkArray1(array1) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0) {
      console.log(array1[i]);
    }
  }
}*/

//console.log(checkArray1([1, 2, 3, 4]));

//console.log(bonus([1, 2, 3, 4], [1, 5, 23, 9]));


// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
// BONUS PART console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
