function returnOnlyLonger(arr, limit) {
  const retval = [];
  for (const str of arr) {
    if (str.length > limit) {
      retval.push(str);
    }
  }
  return retval;
}

const names = ['alex', 'james', 'arek', 'Moustafa'];

console.log(returnOnlyLonger(names, 4));
