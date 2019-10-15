// remove vowels from all strings in the given array
function removeVowels(arr) {
  const retval = [];
  for (const str of arr) {
    let newStr = '';
    for (const ch of str) {
      if (!isVowel(ch)) newStr += ch;
    }
    retval.push(newStr);
  }
  return retval;
}

function isVowel(ch) {
  const VOWELS = 'aeiou'.split('');
  return VOWELS.includes(ch.toLowerCase());
}

const names = ['alex', 'james', '10000', 'arek', 'Moustafa'];
const namesAfter = ['lx', 'jms', '10000', 'rk', 'Mstf'];

const testRun = removeVowels(names);
console.log(testRun);

// testing that with names we get namesAfter
// if we change 'aeiou' to 'aeio', we will see the test fails
if (testRun.length !== namesAfter.length) {
  console.error('arrays not the same length');
}

for (let i=0; i<namesAfter.length; i+=1) {
  if (testRun[i] !== namesAfter[i]) {
    console.log('expected', namesAfter[i], 'but got', testRun[i]);
  }
}
