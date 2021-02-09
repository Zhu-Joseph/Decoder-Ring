// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const sort = parseInt(input)
    const low = input.toLowerCase()
    const shorten = input.replace(" ", "")
    const long = input.replace(" ", "  ")
    let results = ""
    if(isNaN(sort) === false && (shorten.length % 2) != 0) return false

    if(isNaN(sort)) {//converting a string of letters to numbers
      for(let i = 0; i < low.length; i++) {
        const code = low.charAt(i)
        switch (code) {
          case "a":
            results += "11"
            break
          case "b":
            results += "21"
            break
          case "c":
            results += "31"
            break
          case "d":
            results += "41"
            break
          case "e":
            results += "51"
            break
          case "f":
            results += "12"
            break
          case "g":
            results += "22"
            break
          case "h":
            results += "32"
            break        
          case "i":
            results += "42"
            break
          case "j":
            results += "42"
            break
          case "k":
            results += "52"
            break
          case "l":
            results += "13"
            break
          case "m":
            results += "23"
            break
          case "n":
            results += "33"
            break
          case "o":
            results += "43"
            break
          case "p":
            results += "53"
            break
          case "q":
            results += "14"
            break
          case "r":
            results += "24"
            break
          case "s":
            results += "34"
            break
          case "t":
            results += "44"
            break
          case "u":
            results += "54"
            break
          case "v":
            results += "15"
            break
          case "w":
            results += "25"
            break
          case "x":
            results += "35"
            break
          case "y":
            results += "45"
            break
          case "z":
            results += "55"
            break
          default:
            results += " "
        }
      }
    }

    else{//code to convert these numbers to letters
      let scramble = []
      for(let i = 0; i < long.length; i+=2) {scramble.push(long.slice(i, i + 2))}
      for(let i = 0; i < scramble.length; i++) {
        const code = scramble[i]
        switch (code) {
          case "11":
            results += "a"
            break
          case "21":
            results += "b"
            break
          case "31":
            results += "c"
            break
          case "41":
            results += "d"
            break
          case "51":
            results += "e"
            break
          case "12":
            results += "f"
            break
          case "22":
            results += "g"
            break
          case "32":
            results += "h"
            break        
          case "42":
            results += "(i/j)"
            break
          case "52":
            results += "k"
            break
          case "13":
            results += "l"
            break
          case "23":
            results += "m"
            break
          case "33":
            results += "n"
            break
          case "43":
            results += "o"
            break
          case "53":
            results += "p"
            break
          case "14":
            results += "q"
            break
          case "24":
            results += "r"
            break
          case "34":
            results += "s"
            break
          case "44":
            results += "t"
            break
          case "54":
            results += "u"
            break
          case "15":
            results += "v"
            break
          case "25":
            results += "w"
            break
          case "35":
            results += "x"
            break
          case "45":
            results += "y"
            break
          case "55":
            results += "z"
            break
          default:
          results += " "
        }
      }
    }
    return results
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
