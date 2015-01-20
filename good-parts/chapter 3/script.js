var obj = {
	smite: 5,
	'': 'empty',
	':-)': 'smile'
};
var person1 = new Person("Alex", "male");
Person.prototype.protoFunc = function() {

};
var key;

for (key in person1) {
	var propertyValue = person1[key];
	console.log(key + ": " + person1[key]);
}

console.log(obj[""]);

function Person(name, sex) {
	this.name = name;
	this.sex = sex;
}