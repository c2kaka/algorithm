const mergeSort = array => {
  if (array.length <= 1) return array; // 递归终止条件

  const middleIndex = Math.floor(array.length / 2);
  let left = array.slice(0, middleIndex);
  let right = array.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let temp = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(left.length > leftIndex && right.length > rightIndex) {
    if(left[leftIndex] < right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++;
    } else {
      temp.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const testArr = []
let i = 0
while (i < 100) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}

const res = mergeSort(testArr)
console.log(res)