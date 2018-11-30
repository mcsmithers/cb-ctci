const testStr = 'madam';
const testStr2 = 'lady';

function checkPalindromes(myStr) {

  // Reverse the string  
  const reverseStr = myStr.split('').reverse().join('');
  if (reverseStr === myStr) {
    console.log(myStr + ' is a palindrome');
  }
  else {
    console.log(myStr + ' is not a plaindrome');
  }
  return reverseStr;
}

checkPalindromes(testStr);
