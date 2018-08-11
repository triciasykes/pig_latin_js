function pigLatin(userInput) { // Takes in user input as string

  var pigLatinArr = []
  //splits string into an array, and sets all letters to lower case.
  var splitArray = userInput.toLowerCase().split(" ")
  console.log(splitArray)
  for (let i = 0; i < splitArray.length; i++) {
    // if word starts with vowel then add 'way' and push to new array
    if (isVowel(splitArray[i].charAt(0)) === true) {
      pigLatinArr.push(splitArray[i] + "way")
    } else {
      for (let j = 0; j < splitArray[i].length; j++) {
        let newStr;
        let endStr;
        if (isVowel(splitArray[i].charAt(j)) === true) {
          if (splitArray[i][j - 1] === "q" || splitArray[i][j - 1] === "Q" && splitArray[i][j] === "u") {
            newStr = splitArray[i].slice(j + 1);
            //console.log(splitArray[i]);
            endStr = splitArray[i].slice(0, j + 1)
          } else {
            newStr = splitArray[i].slice(j);
            //console.log(splitArray[i]);
            endStr = splitArray[i].slice(0, j)
          }
          //console.log(endStr)
          pigLatinArr.push(newStr + endStr + 'ay');
          //console.log(pigLatinArr)
          break;
        } else if (splitArray[i].length === 2 && splitArray[i][1] === 'y') {
          newStr = splitArray[i][1];
          endStr = splitArray[i][0];
          pigLatinArr.push(newStr + endStr + 'ay');
          break;
        }
      } //splitArray[i].find(isVowel())
    }
  }
  console.log((pigLatinArr.join(" ")))
  return pigLatinArr.join(" "); //.toLowerCase();
}

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true
    }
  }
  return false
}

function translator(e) {
  console.log("running... ");
  var input = document.getElementById("input").value
  console.log(input);
  console.log(pigLatin(input));
  document.getElementById("answer_field").innerHTML = pigLatin(input)
}
console.log(pigLatin("By My May Queen squirrel what is your name"))