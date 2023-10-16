function sortDescending(arr) {
  // Use the sort() method with a compare function to sort in descending order
  arr.sort(function(a, b) {
    return b - a;
  });
  return arr;
}

const inputArray = [5, 3, 9, 1, 7];
const sortedArray = sortDescending(inputArray);
console.log(sortedArray); // Output: [9, 7, 5, 3, 1]