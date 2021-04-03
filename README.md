# Decoder-Ring

The goal of this project was to create three functions to both encrypt and decrypt messages. 
Each function is in its own individual JS file and they are all located in the src folder.

caesar.js
This code performs a Caesar shift to a message where the alphabet (a-z) is shifted either to the left or right, depending on the value of the shift parameter. This would shift all the letters in the message by that parameter while disregarding symbols, spaces, and numbers. Also, the code is not case sensitive. 
For example – The message “Hello World” having a shift of 8 would be “pmttw ewztl”. While the message “#1 Coding Master” with a shift of -13 would be “#1 pbqvat znfgre”. 
The code utilizes character codes to perform the shifts and has built in fails if depending on the value of the shift parameter. Lastly, the code is also able to decrypt messages if the third and final parameter has a Boolean value of false. 
For example – The message “dtz ktzsi rj” with a shift of -21 and a third Boolean value of false would be “you found me”.

polybius.js
This code uses the a Polybius square to either encrypt the message into numbers or decrypt the numbers into letters. The columns represent the first number which would correspond to the letter and the second number corresponds to the row number. Therefore, 23 would be letter M. Also note that both letters I and J would equal 42. 
 
The way I coded this function was by creating a large switch statement. I knew that there was a limited combination of both letters and numbers and each letter corresponded to a certain number and each double digit number corresponded to a certain letter. Creating the switch statement also allowed me to easily decrypt the message as well. If the second variable was equaled to the Boolean value of false, it would decrypt and run the switch statement which corresponded to decrypting. If the Boolean value was true, it would encrypt and run the switch statement corresponding to encrypting. 
Note: please see the image of the polybius square used for details. 


substitution.js
This code encrypts and decrypts the messaged based on a new alphabet. The new alphabet which is a parameter in the function replaces the old original alphabet or regular alphabet. This changes the entire message to a series of letters, numbers and symbols, while maintain the spaces in between. 
Similar to the polybius.js file, I used a large switch statement since I knew that my letters were limited to the alphabet. I first created a helper function which had a set of keys as the normal alphabet. Then, I would set the value of those keys as the new alphabet which would replace the original one. From there I created another function which would swap the keys and the values in the case of decrypting. Lastly, I called both helper functions into my main function. Depending on the Boolean parameter being true or false, the function would either encrypt or decrypt respectfully. 
