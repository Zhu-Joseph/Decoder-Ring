// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution1(alpahbet) {
    let abcde = {
      a: "", b: "", c: "", d: "", e: "",
      f: "", g: "", h: "", i: "", j: "",  
      k: "", l: "", m: "", n: "", o: "",
      p: "", q: "", r: "", s: "", t: "",
      u: "", v: "", w: "", x: "", y: "",
      z: "", " ":" "
    }
    for(let i = 0; i < alpahbet.length; i++) {
      const code = alpahbet.charAt(i)
      switch (code) {
          case alpahbet.charAt(0):
          abcde.a = alpahbet.charAt(0)
          break
          case alpahbet.charAt(1):
          abcde.b = alpahbet.charAt(1)
          break
          case alpahbet.charAt(2):
          abcde.c = alpahbet.charAt(2)
          break    
          case alpahbet.charAt(3):
          abcde.d = alpahbet.charAt(3)
          break
          case alpahbet.charAt(4):
          abcde.e = alpahbet.charAt(4)
          break
          case alpahbet.charAt(5):
          abcde.f = alpahbet.charAt(5)
          break
          case alpahbet.charAt(6):
          abcde.g = alpahbet.charAt(6)
          break
          case alpahbet.charAt(7):
          abcde.h = alpahbet.charAt(7)
          break
          case alpahbet.charAt(8):
          abcde.i = alpahbet.charAt(8)
          break    
          case alpahbet.charAt(9):
          abcde.j = alpahbet.charAt(9)
          break
          case alpahbet.charAt(10):
          abcde.k = alpahbet.charAt(10)
          break
          case alpahbet.charAt(11):
          abcde.l = alpahbet.charAt(11)
          break
          case alpahbet.charAt(12):
          abcde.m = alpahbet.charAt(12)
          break
          case alpahbet.charAt(13):
          abcde.n = alpahbet.charAt(13)
          break
          case alpahbet.charAt(14):
          abcde.o = alpahbet.charAt(14)
          break    
          case alpahbet.charAt(15):
          abcde.p = alpahbet.charAt(15)
          break
          case alpahbet.charAt(16):
          abcde.q = alpahbet.charAt(16)
          break
          case alpahbet.charAt(17):
          abcde.r = alpahbet.charAt(17)
          break
          case alpahbet.charAt(18):
          abcde.s = alpahbet.charAt(18)
          break
          case alpahbet.charAt(19):
          abcde.t = alpahbet.charAt(19)
          break
          case alpahbet.charAt(20):
          abcde.u = alpahbet.charAt(20)
          break    
          case alpahbet.charAt(21):
          abcde.v = alpahbet.charAt(21)
          break
          case alpahbet.charAt(22):
          abcde.w = alpahbet.charAt(22)
          break
          case alpahbet.charAt(23):
          abcde.x = alpahbet.charAt(23)
          break     
          case alpahbet.charAt(24):
          abcde.y = alpahbet.charAt(24)
          break   
          case alpahbet.charAt(25):
          abcde.z = alpahbet.charAt(25)
          break
          default:
          abcde[" "] = " "          
        }
      } 
    return abcde  
  }
  
  function swap(ori) {
    let results = {}
    for(let key in ori) {
      results[ori[key]] = key
    }
    return results
  }
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length != 26 || new Set(alphabet).size != alphabet.length) return false

    let results = ""
    const help = substitution1(alphabet)
    const reverse = swap(help)
    const low = input.toLowerCase()

    if(encode === true) {
      for(let i = 0; i < low.length; i++) {results += help[low.charAt(i)]}
      return results
    }
    else {
      for(let i = 0; i < low.length; i++) {results += reverse[low.charAt(i)]}
      return results
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
