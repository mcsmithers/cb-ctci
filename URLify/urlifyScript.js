//const textTest = 'Time for a break!';

function urlifyText() {
  userInput = document.getElementById("userInputBox").value;
  // in case of trailing spaces
  const cleanedUserInput = userInput.trim();
  const urlifiedText = cleanedUserInput.replace(/ /g, '%20');

  // Echo it back
  document.getElementById("urlifiedResultBox").innerHTML = urlifiedText;
}


