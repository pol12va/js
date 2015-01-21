initializeArrayTest();

function arrayLengthTest() {
	var arr = [];
	arr["10000"] = 10000;

	console.log(arr.length);
	console.log(arr[10000]);

	arr.length = 5;
	console.log(arr[10000]);
	arr.length = 10000;
	console.log(arr[10000]);
}

function arrayPushTest() {
	var arr = [5, 12, false, "asdasd"];
	arr.length = 10000;
	arr.push(2);
	console.log(arr[arr.length - 1]);
}

function arraySpliceTest() {
	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
	console.log(arr);
	arr.splice(9, 3);
	console.log(arr);
}

function arrayAugmentingTest() {
	Array.prototype.reduce = function(f, value) {
		var i;
		for (i = 0; i < this.length; i++) {
			value = f(this[i], value);
		}
		return value;
	};

	var data = [4, 8, 15, 16, 23, 42];
	var add = function(a, b) {
		return a + b;
	};
	var mult = function(a, b) {
		return a * b;
	};

	var sum = data.reduce(add, 0);
	console.log(sum);
}

function initializeArrayTest() {
	Array.dim = function(dimension, initial) {
		var a = [], i;
		for (i = 0; i < dimension; i++) {
			a[i] = initial;
		}
		return a;
	};

	console.log(Array.dim(10, 4));
}