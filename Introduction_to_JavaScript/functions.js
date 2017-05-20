//Problem 1 - isEven(); Return true if a number is even, false if not
function isEven(num) {
	return num % 2 === 0;
}

//Problem 2 - factorial(); Takes a single numeric input and return the factorial (0! is 1)
function factorial(num) {
	var result = 1;
	if(num !== 0){
		for(var i=num; i > 0; i--){
			result *= i;
		}
	}
	return result;
}

//Problem 3 - kebabToSnake(); Take kebab-cased and return snake_cased
function kebabToSnake(kebab){
	return kebab.replace(/-/g, "_");
}