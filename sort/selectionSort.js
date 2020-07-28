const selectionSort = array => {
  if (array.length <= 1) return;

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}

let testArray = [2, 1, 3, 5, 4];
selectionSort(testArray);
console.log(testArray);