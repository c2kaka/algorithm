const quickSort = (array, left, right) => {
  if (array.length <= 1) return;

  if (left < right) {
    let pivot = right;
    let partitionIndex = partition(array, pivot, left, right);
    quickSort(array, left, partitionIndex - 1 < left ? left : partitionIndex - 1);
    quickSort(array, partitionIndex + 1 > right ? right : partitionIndex + 1, right);
  }
}

const partition = (array, pivot, left, right) => {
  const pivotValue = array[pivot];

  let startIndex = left;
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      [array[i], array[startIndex]] = [array[startIndex], array[i]];
      startIndex++;
    }
  }

  [array[pivot], array[startIndex]] = [array[startIndex], array[pivot]];
  return startIndex;
}

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
console.log('unsort', testArr)
quickSort(testArr, 0, testArr.length - 1);
console.log('sort', testArr)