function analyzeArray(arr) {
  let length = arr.length;
  // console.log(length);
  let average = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    // console.log(arr[i]);
    average += parseFloat(arr[i]);
  }
  average = average / length;
  let min = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i != 0) {
      if (arr[i] < arr[i - 1] && arr[i] < min) {
        min = arr[i];
      }
    }
  }
  let max = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i != 0) {
      if (arr[i] > arr[i - 1] && arr[i] > max) {
        max = arr[i];
      }
    }
  }
  let obj = { average: average, min: min, max: max, length: length };
  return obj;
}

// var arr1 = [1,8,3,4,2,6]
// var arr2 = [0,3,5,76]
// let vv =analyzeArray(arr1)
// console.log(vv);

export { analyzeArray };
