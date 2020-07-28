const insertionSort = array => {
  if (array.length <= 1) return;

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i];

    for(j; j >= 0; j--) {
      if (array[j] > temp) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }

    array[j + 1] = temp;
  }
}

let testArray = [2, 1, 3, 5, 4];
insertionSort(testArray);
console.log(testArray);