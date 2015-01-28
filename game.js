function char(name, species, power)	{

	this.charName = name;
	this.species = species;
	this.power = power;
	this.hit = function() {
		var random = Math.random();
		if (random < 0.3) {
			console.log('Pow');
		}
		else {
			console.log('Miss')
		}
	}
};

this.hit = function() {
	console.log('Pow! 10 damage!');
	return hit
}

var char1 = new char('Thelonious', 'Panda', 'Lightning', '');
var char2 = new char('Gregory', 'Raven', 'Fire');
var char3 = new char('Steve', 'Troll', 'Ice');

console.log(char1);
char1.hit();



