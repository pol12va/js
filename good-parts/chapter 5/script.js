inheritalPatternTest();

function inheritanceTest() {
	var Mammal = function(name) {
		this.name = name;
	};
	
	Mammal.prototype.getName = function() {
		return this.name;
	};
	Mammal.prototype.says = function() {
		return this.saying || "";
	};

	var myMammal = new Mammal("Herb the Mammal");
	var name = myMammal.getName();

	console.log(name);

	var Cat = function(name) {
		this.name = name;
		this.saying = "meow";
	};

	Cat.prototype = new Mammal();
	Cat.prototype.purr = function(n) {
		var i,
			s = "";

		for (i = 0; i < n; i++) {
			if (s) {
				s += "-";
			}
			s += "r";
		}

		return s;
	};
	Cat.prototype.getName = function() {
		return this.says() + " " + this.name + " " + this.says();
	};
	var myCat = new Cat("Henrietta");
	var says = myCat.says();
	var purr = myCat.purr(5);
	var name = myCat.getName();

	var catArr = [says, purr, name];
	for (var i = 0; i < catArr.length; i++) {
		console.log(catArr[i] + "\n");
	}
}

function inheritalPatternTest() {
	var mammal = function(spec) {
		var that = {};

		that.getName = function() {
			return spec.name;
		};
		that.says = function() {
			return spec.saying || "";
		};

		return that;
	};

	var myMammal = mammal({name: 'Herb'});
	console.log(myMammal.getName());

	var cat = function(spec) {
		spec.saying = spec.saying || 'meow';
		var that = mammal(spec);
		that.purr = function(n) {
			var i,
			s = "";

			for (i = 0; i < n; i++) {
				if (s) {
					s += "-";
				}
				s += "r";
			}

			return s;	
		};
		that.getName = function() {
			return that.says() + " " + that.name + " " + that.says();	
		};

		return that;
	};

	var myCat = cat({name: 'Henrietta'});
	console.log(myCat.purr(5));
}