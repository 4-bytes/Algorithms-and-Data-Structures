/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
\*


function findLongestWordLength(str) {
  var longest = 0;
  str = str.split(" ")
  for (var i = 0; i < str.length; i++){
    if (str[i].length > longest){
      longest = str[i].length;
    }
  }
  return longest;


  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
