function getPermutations(myStr) {
  const firstPermutationResults = [];

  if (myStr.length === 1) {
    firstPermutationResults.push(myStr);
    return firstPermutationResults;
  }

  for (let char = 0; char < myStr.length; char++) {
    // so we're first forming the words with a starting point and then recursively building
    const firstLetter = myStr[char];
    const otherLetter = myStr.substring(0, char) + myStr.substring(char + 1);
    const otherPermutations = getPermutations(otherLetter);

    for (let anotherChar = 0; anotherChar < otherPermutations.length; anotherChar++) {
      firstPermutationResults.push(firstLetter + otherPermutations[anotherChar]);
    }

  }
  return firstPermutationResults;
}

const permutation = getPermutations('dog');
console.log(permutation);

// Time to compare
const otherStr = 'god';

const iterator = permutation.values();

// Yay, some es 6
for (const value of iterator) {
  if (otherStr == value) {
    console.log('Match! "' + value + '" is the same as "' + otherStr + '"');
  }
  else {
    console.log(otherStr + ' is not a match for ' + value);
  }
}
