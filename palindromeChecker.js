/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

function palindrome(str) {
var string = str.replace(/[^A-Za-z0-9]/g, '');
var string = string.toUpperCase();
for (var i = 0; i < string.length; i++){
  if (string[i] != string[string.length - 1 - i]){
    return false;
  }
}
return true;
}


palindrome("eye");
