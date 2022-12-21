
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

//it will return OlAlEyE
