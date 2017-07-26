// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1,num2){
  if (num1 > num2){
    return num1;
  }
  else if (num2 > num1){
    return num2;
  }
  else{
    return num1;
  }
}

let arg1;
let arg2;
let arg3;

console.log("Problem 1");
arg1 = 3;
arg2 = 5;
console.log("The max of",arg1,"and",arg2,"is",max(arg1,arg2));
arg1 = 30;
arg2 = -10;
console.log("The max of",arg1,"and",arg2,"is",max(arg1,arg2));
console.log();

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1,num2,num3){
  let array = [num1,num2,num3];
  array = array.sort((a, b) => a - b); //needs to this to remind itself these are numbers
  return array[2];
}

arg1= 10;
arg2= 30;
arg3= 3.14159;
console.log("Problem 2");
console.log("The max of",arg1+",",arg2+", and",arg3,"is",maxOfThree(arg1,arg2,arg3));

arg1= 1000;
arg2= -2;
arg3= 350;

console.log("The max of",arg1+",",arg2+", and",arg3,"is",maxOfThree(arg1,arg2,arg3));

arg1= -60;
arg2= -3000;
arg3= -5;
console.log("The max of",arg1+",",arg2+", and",arg3,"is",maxOfThree(arg1,arg2,arg3));
console.log();


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    let vowels = ["a","A","e","E","i","I","o","O","u","U"];

    if (char == "y" || char == "Y"){
      return "sometimes";
    }

    // let isavowel = false;

    for (i=0; i<vowels.length; i++){
      if (vowels[i] == char) {
        return true;
      }
    }

    return false;

}

console.log("Problem 3");

arg1 = "a";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "e";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "i";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "o";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "u";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "y";

arg1 = "A";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "E";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "I";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "O";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "U";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "Y";

console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "z";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "W";
console.log();
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = "Fire hose";
console.log(arg1,"is a vowel?","         ",isVowel(arg1));
arg1 = 520;
console.log(arg1,'is a vowel?',"         ",isVowel(arg1));
console.log();

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num1,num2){
  return num1 + num2;
}

console.log("Problem 4");
arg1=5;
arg2=10;
console.log("The sum of",arg1,"and",arg2,"is",sum(arg1,arg2));
arg1=-3000;
arg2=30001;
console.log("The sum of",arg1,"and",arg2,"is",sum(arg1,arg2));
arg1=6;
arg2=.14159*2;
console.log("The sum of",arg1,"and",arg2,"is",sum(arg1,arg2));
console.log();

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num1, num2, num3) {
  return (num1+num2+num3)/3;
}
console.log("Problem 5");
arg1=3;
arg2=5;
arg3=20;
console.log("The average of",arg1+",",arg2+", and",arg3,"is",avg(arg1,arg2,arg3));
arg1=1;
arg2=.5;
arg3=.3;
console.log("The average of",arg1+",",arg2+", and",arg3,"is",avg(arg1,arg2,arg3));
arg1=-300;
arg2=0;
arg3=300;
console.log("The average of",arg1+",",arg2+", and",arg3,"is",avg(arg1,arg2,arg3));
console.log();

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(word) {
  return word.length;
}


console.log("Problem 6");
console.log("floccinocinihilipilification has " + getLength("floccinocinihilipilification") + " letters")
console.log("Awesome has " + getLength("Awesome") + " letters")
console.log("'Bone hurting juice' has " + getLength("Bone hurting juice") + " characters")
console.log();

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(param1,param2) {
  return param2>param1;
}

console.log("Problem 7");

arg1 = 5;
arg2 = 10;

console.log(arg2+" is greater than "+arg1+"?")
console.log("   "+greaterThan(arg1,arg2));

arg1 = "wowie zowie";
arg2 = "argh!";

console.log(arg2+" is greater than "+arg1+"?")
console.log("   "+greaterThan(arg1,arg2));

arg1 = "argh!";
arg2 = "wowie zowie";


console.log(arg2+" is greater than "+arg1+"?")
console.log("   "+greaterThan(arg1,arg2));

arg1 = 2;
arg2 = "Hot dog";

console.log(arg2+" is greater than "+arg1+"?")
console.log("   "+greaterThan(arg1,arg2));

arg1 = "Hot dog";
arg2 = 2;

console.log(arg2+" is greater than "+arg1+"?")
console.log("   "+greaterThan(arg1,arg2));

arg1 = "Five";
arg2 = 5;

console.log(arg2+" is greater than "+arg1+"?")
console.log("   "+greaterThan(arg1,arg2));

arg1 = 5;
arg2 = "Five";

console.log(arg2+" is greater than "+arg1+"?")
console.log("   "+greaterThan(arg1,arg2));

arg1 = "aces";
arg2 = false;

console.log(arg2+" is greater than "+arg1+"?")
console.log("   "+greaterThan(arg1,arg2));

arg1 = false;
arg2 = "aces";

console.log(arg2+" is greater than "+arg1+"?")
console.log("   "+greaterThan(arg1,arg2));
console.log();


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){

  console.log("Hello, "+name+"!");

}

console.log("Problem 8");
greet("David");
greet("Michael");
greet("Rachel");
console.log();


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

console.log("Problem 9");

function madLib(subject,verb,adjective,adverb,object){
  console.log("A very",adjective,subject,adverb,verb,"a",object+".");
  console.log("My, how utterly absurd!")
}
madLib("boy","crushed","stupid","resoundly","stud")
console.log();
madLib("rhino","vomited","ginormous","with gusto","watermelon");
