//Problem 1 - Print all numbers between -10 and 19
console.log("PROBLEM ONE");
var count = -10;
while(count < 20){
	console.log(count);
	count++;
}
//Problem 2 - Print all even numbers between 10 and 40
console.log("PROBLEM TWO");
count = 10;
while(count < 41){
	if(count % 2 === 0){
		console.log(count);
	}
	count++;
}
//Problem 3 - Print all odd numbers between 300 and 333
console.log("PROBLEM THREE");
count = 300;
while(count < 334){
	if(count % 2 !== 0){
		console.log(count);
	}
	count++;
}
//Problem 4 - Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("PROBLEM FOUR");
count = 5;
while(count < 51){
	if(count % 3 === 0 && count % 5 === 0){
		console.log(count);
	}
	count++;
}