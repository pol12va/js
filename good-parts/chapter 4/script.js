fibonacciTest();

function applyTest() {
	var Quo = function(str) {
		this.status = str;
	};

	Quo.prototype.getStatus = function() {
		return this.status;
	};

	var statusObj = {
		status: "OK"
	};

	var result = Quo.prototype.getStatus.apply(statusObj);

	console.log(result);
}

function argumentTest() {
	var sum = function() {
		var i,
			sum = 0;
		for (i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}

		return sum;
	};
	var result = sum(10, 12, 2, 4);
	console.log(result);
}

function throwTest() {
	try {
		var result = add("seven");
		console.log(result);
	} catch (e) {
		console.log(e.name + ": " + e.message);
	}
}

function add(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add needs numbers'
		};
	}

	return a + b;
}

function autowireTest() {
	var str = "string";
	console.log(str.test = 5);	//выведет 5
	console.log(str.test);		//выведен undefined
}

function augmentingTest() {
	String.prototype.repeat = function(times) {
		var resultStr = "";
		for (var i = 0; i < times; i++) {
			resultStr += this;
		}
		return resultStr;
	};
	console.log("yo".repeat(4));
}

function trimTest() {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, "");
	};
	console.log("    ADSAD sadasd     sdad     ".trim());
}

function factorialTest() {
	var result = calculateFactorial(5);
	console.log(result);	
}

function calculateFactorial(value) {
	if (value === 1) {
		return 1;
	}
	return value * calculateFibonacci(value - 1);
}

function protectedIncrementTest() {
	var myObj = function() {
		var value = 0;
		return {
			increment: function(inc) {
				value += typeof inc === 'number' ? inc : 1;
			},
			getValue: function() {
				return value;
			}
		}
	}();

	myObj.increment(20);
	console.log(myObj.getValue());
	myObj.increment(4);
	console.log(myObj.getValue());
}

function protectedValueTest() {
	var quo = function(value) {
		return {
			getValue: function() {
				return value;
			}
		};
	};

	console.log(quo(5).getValue());
}

function fibonacciTest() {
	var fibonacci = function(n) {
		var memo = [0, 1];
		var fib = function(n) {
			var result = memo[n];
			if (typeof result !== 'number') {
				result = fib(n - 1) + fib(n - 2);
				memo[n] = result;
			}
			return result;
		};
		return fib;
	}();

	console.log(fibonacci(10));
}