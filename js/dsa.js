// linear search algorithm to find a value in an array //

function linearSearch(arr, targetValue) {
    for (let i = 0; i < arr.length; i++) {
      // compare each element in the array with the target value
      if (arr[i] === targetValue) {
        // if the values match, return the position of the array element
        return i;
      }
    }
  
    return -1;
  }
  
  let numbers = [3, 4, 1, 8, 7];
  
  console.log(linearSearch(numbers, 9));