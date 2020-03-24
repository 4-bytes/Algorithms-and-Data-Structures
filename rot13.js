/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*\


function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetRot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  var message = "";
  var skip;
  
  for (var i = 0; i < str.length; i++){
    skip = false;
    if (str.charAt(i) == " "){
      message = message + " ";
      skip = true;
    }
    if (skip == false){
    for (var j = 0; j < alphabet.length; j++){
        if (str.charAt(i) == alphabet[j]){
          skip = false;
          message = message + alphabetRot13[j];
        }
        if (str.charAt(i) == str.charAt(str.length-1) && skip == true){
          if (str.charAt(i) == alphabet[j]){
            break;
          }
          else{
            skip = true;
            message = message + str.charAt(i);
          }
        }
      }
      }
    }
    skip = false;
    console.log(str.charAt(str.length-1))
    for (var i = 0; i < alphabet.length; i++){
      if (str.charAt(str.length-1) == alphabet[i]){
        skip = true;
        break;
      }
    }
    if (!skip){
      message = message + str.charAt(str.length-1);
    }
    return message;
  }
  

rot13("SERR PBQR PNZC");
