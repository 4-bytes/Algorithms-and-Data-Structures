/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
\*


function repeatStringNumTimes(str, num) {
  var string = "";
  for (var i = 0; i < num; i++){
    string = string + str;
  }
  return string;
}

repeatStringNumTimes("abc", 3);
