var threeItems = [1, 2, 3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

//code here
var last = function () {
  return threeItems.pop();
}
alert(last());


/* 2 NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];

//code here
for (var i = evenArray.length - 1; i > 0; i--) {
  if (evenArray[i] % 2 !== 0) {
    evenArray.splice(i, 1);
  }
}
console.log(evenArray);

/* 3 NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 
//'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see 
//if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function () {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];

//code here

for (var i = 0; i < randomArray.length; i++) {
  if (randomArray[i] === getRandomArbitrary()) {
    alert("True");
    break;
  } alert(getRandomArbitrary());
  break;
}


/*4 NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1, 2, 3, 4, 5];
var second;

//code here
second = first.slice();
second = second.push(6, 7);
alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* 5 NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

//code here
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for (var i = 1; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}
findLongestWord(sentence);
/* 6 NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

//code here
function upperCase (str) {
  var array1 = str.split(' ');
  var newArray1 = [];
  for (var i = 0; i < array1.length; i++) {
newArray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newArray1.join(' ');
}
console.log(upperCase(myPoem));


/* 7 NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
function vowelCounter(str) {
  var strSplit = str.split('');
  var vowelCount = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === 'a' || strSplit[i] === 'e' || strSplit[i] === 'i' || strSplit[i] === 'o' || strSplit[i] === 'u') {
      vowelCount++;
    }
  }
    return vowelCount;
}
vowelCounter(theOdyssey);





function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for (var i = 1; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}
findLongestWord(sentence);