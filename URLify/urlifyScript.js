//const textTest = 'Time for a break!';

function urlifyText() {
  userInput = document.getElementById("userInputBox").value;
  const urlifiedText = userInput.replace(/ /g, '%20');

  // Echo it back
  document.getElementById("urlifiedResultBox").innerHTML = urlifiedText;
}

