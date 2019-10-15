function returnOnlyLonger(arr, limit) {
  if (!containsOnlyStrings(arr)) {
    console.error('nasty array');
    return;
  }
  const retval = [];
  for (const str of arr) {
    if (str.length > limit) {
      retval.push(str);
    }
  }
  return retval;
}

function containsOnlyStrings(arr) {
  for (const item of arr) {
    if (typeof item !== 'string') {
      return false;
    }
  }

  return true;
}

const namesNice = ['alex', 'james', '10000', 'arek', 'Moustafa'];
const namesNasty = ['alex', 'james', 10000, 'arek', 'Moustafa'];

console.log('with nice array of strings');
console.log(returnOnlyLonger(namesNice, 4));

console.log('with nasty array of strings and a number');
console.log(returnOnlyLonger(namesNasty, 4));
