//Writing our own implementation of forEach

//'function' is a keyword and cannot be used
function myForEach(arr, func){
	for(var i = 0; i < arr.length; i++){
		func(arr[i]);
	}
}

//Adding this function onto an Array
Array.prototype.myForEach = function(func) {
	for(var i=0; i < this.length; i++){
		func(this[i]);
	}
}