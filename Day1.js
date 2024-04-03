let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(dogString, dogNames) {
    let newDogString = dogString.replace(/,/g, "").split(" ");

    for (let i = 0; i < newDogString.length; i++) {
        for (let j = 0; j < dogNames.length; j++) {
            if (newDogString[i] === dogNames[j]) {
                return "Matched dog_name";
            }
        }
    }
    return "No Match";
}

console.log(findWords(dog_string, dog_names));

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

console.log(replaceEvens(arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// PYTHON:
// def grow(arr):
//     result = 1;
//     for x in range(len(arr)):
//         result = arr[x] * result;
//     return result;

let growArr = [1, 2, 3, 4];

function grow(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result = arr[i] * result;
    }
    return result;
}

console.log(grow(growArr));

// You Can't Code Under Pressure #1
// Code as fast as you can! You need to double the integer and return it.
// PYTHON:
// def double_integer(i):
//     return i*2;

function doubleInteger(integer) {
    return integer * 2;
}

console.log(doubleInteger(2));
