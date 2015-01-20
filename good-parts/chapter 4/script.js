autowireTest();

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
	if (typeof a !== number || typeof b !== number) {
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