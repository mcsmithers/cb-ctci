 function getPermutations(myStr) {
      const results = [];

      if (myStr.length === 1) 
      {
        results.push(myStr);
        return results;
      }

      for (let char = 0; char < myStr.length; char++) 
      {
        const firstLetter = myStr[char];
        const otherLetter = myStr.substring(0, char) + myStr.substring(char + 1);
        const otherPermutations = getPermutations(otherLetter);
        
        for (let anotherChar = 0; anotherChar < otherPermutations.length; anotherChar++) {
          results.push(firstLetter + otherPermutations[anotherChar]);
        }
      }
      return results;
    }
    
    const permutation = getPermutations('dog', 'god');
    console.log(permutation);

    // Next step: see if two strings are permutations of each other


