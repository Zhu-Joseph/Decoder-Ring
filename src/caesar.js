// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift > 25 || shift < -25 || shift === 0) return false
    const allLower = input.toLowerCase()
    let output = ""

    if(encode === true) {
      for(let i = 0; i < allLower.length; i++) {
        let letter = allLower[i]

        if(letter.match(/[a-z]/i)) {
          let code = allLower.charCodeAt(i)
          if(code >= 65 && code <= 90) {
            letter = String.fromCharCode(((code -65 + shift) % 26) + 65)
          }
          else if(code >= 97 && code <= 122) {
            if((code - 97 + shift) < 0) {code += 26}
            letter = String.fromCharCode(((code - 97 + shift) % 26) + 97)
          }
        }
        output += letter
      }
    }

    else {
      for(let i = 0; i < allLower.length; i++) {
        let letter = allLower[i]
  
        if(letter.match(/[a-z]/i)) {
          let code = allLower.charCodeAt(i)
          if(code >= 65 && code <= 90) {
            letter = String.fromCharCode(((code + 65 - shift) % 26) - 65)
          }
          else if(code >= 97 && code <= 122) {
            if((code - 97 - shift) < 0) {code += 26}
            letter = String.fromCharCode(((code -97 - shift) % 26) + 97)
          }
        }
        output += letter
      }     
    }

    return output
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
