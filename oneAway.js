function oneLetter(stringOne, stringTwo) {
  // first check to make sure it's only alphabet
  if (stringOne.match(/^([a-z\(\)]+)$/i) && stringTwo.match(/^([a-z\(\)]+)$/i)) {
    // Both strings are alphabet so we see if they have a length difference of one letter
    if (stringOne.length - stringTwo.length === 1 || stringTwo.length - stringOne.length === 1) {
      console.log('Found something- ', stringOne, 'and ', stringTwo, 'are a letter away');
      return true;
    } else if (stringOne.length === stringTwo.length) {
      // string length is same but a letter if different
      if (stringOne === stringTwo) {
        console.log('Both strings are the same');
        return false;
      } else {
        for (let letter = 0; letter < stringOne.length; letter++) {
          const testStringLetter = stringOne.charAt(letter);
          const comparisonStringLetter = stringTwo.charAt(letter);
          if (testStringLetter === comparisonStringLetter) {
            console.log(testStringLetter, ' matches with ', comparisonStringLetter);
          } else {
            console.log('Found the letter difference- ', testStringLetter, ' differs from ', comparisonStringLetter);
            return true;
          }
        }
      }

    } else {
      console.log('Uh oh- ', stringOne, ' is more than a letter away from ', stringTwo);
      return false;
    }

  } else {
    console.log('Has to be alphabet only');
  }

}

const testString = 'catch';
const comparingStringOne = 'cat';
oneLetter(testString, comparingStringOne);
const comparingStringTwo = 'watch';
oneLetter(testString, comparingStringTwo);
const comparingStringThree = 'c';
oneLetter(testString, comparingStringThree);
const comparingStringFour = 'catcher';
oneLetter(testString, comparingStringFour);
const comparingStringFive = 'c@tch';
oneLetter(testString, comparingStringFive);
const comparingStringSix = 'catch';
oneLetter(testString, comparingStringSix);
const comparingStringSeven = 'cath';
oneLetter(testString, comparingStringSeven);
