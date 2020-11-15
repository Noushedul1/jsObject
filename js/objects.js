var a = {
	fname : 'Noushedul', //here fname = properties
	lname : 'Islam',
	age : 23,
	favMovies : ['Television','pk'], //arry in objects
	salary : function(){
		return 40000;
	},
	fullname : function(){
		return this.fname + ' ' + this.lname;
	},//in object function is called method
	friends : { //another object in object
		'good' : 'Farhad',
		'great' : 'Nuhash'
	}
}
console.log(a);
// document.write(a); it means object variable always shown objects
// document.write(a.fname); it print
console.log(a.fname); 
console.log(a.favMovies[0]);
console.log(a.salary());
console.log(a.fullname());
console.log(a.friends.good);

//there are another way to write an object in js
var b = new Object();
console.log(b);
b.subject='Algorithom';
b.roll=6664630;
console.log(b.subject);
console.log(b.roll);

//array of object
var c = [
	{name : 'akib', age : 23},
	{name : 'Farhad', age : 22},
	{name : 'Nuhash', age : 23},
	{name : 'Arfat', age : 24},
];
console.log(c);
// console.log(c.name); //we never print like that
for(var a = 0;a<c.length;a++){
	// console.log(a);
	// console.log(c[a]);
	// console.log(c[a].name);
	console.log(c[a].name +' '+'age'+ ' '+c[a].age);
}
