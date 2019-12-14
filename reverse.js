/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/





function reverseString(str) {
  var array = str.split("")
  str = ""
  console.log(array)
  for (var i = array.length-1; i>=0; i--){
    console.log(i)
    str += array[i]
  }
  return str
}

reverseString("hello");
