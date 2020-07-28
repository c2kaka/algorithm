const bubbleSort = array => {
  if (array.length <= 1) {
    return;
  }

  for(let i = 0; i < array.length; i++) {
    let hasChanged = false;
    for(let j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        hasChanged = true;
      }
    }

    if(!hasChanged) break;
  }
}

let testArray = [2, 1, 3, 5, 4];
bubbleSort(testArray);
console.log(testArray);