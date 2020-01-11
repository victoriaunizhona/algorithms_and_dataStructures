// Frequency counters
// O(n)

//Check if arrays have the same values in the same amount
function same(arr1, arr2) {
  //check if 2 arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  //keys - arr values and values - frequency of arr values repetition;
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // check if the key is present in the arr2 and if the value is the same
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

