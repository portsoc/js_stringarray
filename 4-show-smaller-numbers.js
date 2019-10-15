function showOnlySmaller(arr, limit) {
  for (const num of arr) {
    if (num < limit) {
      console.log(num);
    }
  }
}

console.log('smaller than 15:');
showOnlySmaller([42,13,7,15,20], 15);

console.log('smaller than 25:');
showOnlySmaller([42,13,7,15,20], 25);
