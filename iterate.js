
/*for in loop === indexof
  for of loop === map()*/

// testing IQ
const players = ["JC", "VK", "HP", "DK"];
for (let player in players){
    console.log(player);
    //return 0 1 2 3
}
for (let player of players){
    console.log(player);

    // return JC VK HP DK





//Write a function that accepts a string as an argument
//the function should capitalise ONLY only every other letters in the string
// the funtion should return then return the converted string
const camelLetters = (string) => {
  let camelString = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      camelString += string[i].toUpperCase();
    } else {
      camelString += string[i].toLowerCase();
    }
  }
  return camelString;
};

console.log(camelLetters("OLALEYE"))
//return OlAlEyE


// Write a function that accepts a string as an argument
// the string is supposed to be HTML, but all the div elements are missing their closing tags (they have the < and >)
// the functions job is to find and close all the divs in the provided HTML string
// the funtion should return the entire corrected string


}
