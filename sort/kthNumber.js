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

const kthNumber = (array, k) => {
  if (array.length < k) return;

  let partitionIndex = partition(array, array.length - 1, 0, array.length - 1);
  while(k !== partitionIndex + 1) {
    if (k < partitionIndex + 1) {
      partitionIndex = partition(array, partitionIndex - 1, 0, partitionIndex - 1);
    } else {
      partitionIndex = partition(array, array.length - 1, partitionIndex + 1, array.length - 1);
    }
  }

  return array[partitionIndex];
}

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
testArr.sort((a, b) => a - b);
console.log('testArr', testArr);
const k = 3;
console.log(`${k}th number`, kthNumber(testArr, k));