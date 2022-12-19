function returnText(){
    let input = document.getElementById("userInput").value;
    var capitalizedText = ''
  for (var i = 0; i < input.length; i++) {
    capitalizedText += input[i].charAt(0).toUpperCase() + input[i].slice(1) + ' '
  }
  console.log("The value=" + (capitalizedText));

  let element = document.getElementById("inCapitals");
  element.innerHTML = capitalizedText;
  element.style.color = "bisque";
}

