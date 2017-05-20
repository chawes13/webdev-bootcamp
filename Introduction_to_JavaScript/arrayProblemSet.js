//pre-loaded arrays for quickly testing algorithms
var numArray = [1, 2, 3, 4, 5, 6];
var uniformArray = [1, 1, 1, 1];

//Problem 1 - printReverse(); print array in reverse order
function printReverse(inputArray){
	inputArray.reverse.forEach(function(item){
		console.log(item);
	});
}

//Problem 2 - isUniform(); returns true if all elements are identical
function isUniform(inputArray){
	return inputArray.every(function(item, index, array){
		return item === array[0]; //make sure to include return in anonymous function!
	});
}

//Problem 3 - sumArray(); returns sum of all numbers in the array
function sumArray(inputArray){
	var sum = 0;
	inputArray.forEach(function(input){
		return sum += input;
	});
	return sum;
}

//Problem 4 - max(); returns the maximum number in an array
function max(inputArray){
	return inputArray.sort(function(a, b){
		return a - b;
	}).pop()
}