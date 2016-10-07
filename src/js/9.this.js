
//function
function outer() {
	function inner() {
		if (global === this) {
			console.log("함수에서의 this는 window(global)이유");
		}
	}
	inner();
}
outer();

function outer() {
	(function() {
		if (global === this) {
			console.log("함수에서의 this는 window(global)이유");
		}
	}());
}
outer();


//method
var obj = {
	a : 'abc',
	b : this.a,
	func : function () {
		if (obj === this) {
			console.log("메소드에서의 this는 메소드가 속한 객체유");
		}
	}
};
obj.func();
console.log(obj.b);			//undefined

//생성자
var funcThis = null;
function Func() {
	funcThis = this;
}
var o1 = Func();	//걍 함수호출 : 이때 this는 window(global)
var o2 = new Func();	//객체리턴 : 이때 this는 o2

//call()
var jane = {
	name: 'Jane',
	sayHelloTo: function(otherName){
		console.log(this.name+' says hello to '+otherName);
	}
};

jane.sayHelloTo('Tarzan');
jane.sayHelloTo.call(jane, 'Tarzan');
var func = jane.sayHelloTo;
func.call(jane, 'Tarzan');
func('Tarzan');

//apply()
jane.sayHelloTo('Tarzan');
jane.sayHelloTo.apply(jane, ['Tarzan']);
var func = jane.sayHelloTo;
func.apply(jane, ['Tarzan']);

//bind()
jane.sayHelloTo('Tarzan');
var func1 = jane.sayHelloTo.bind(jane);
func1('Tarzan');
var func2 = jane.sayHelloTo.bind(jane, 'Tarzan');
func2();

//Pitfall 2
var obj = {
	name: 'Jane',
	loop: function(){
		(function() {
			if(this === obj)
				console.log('obj');
			else if (this === global)
				console.log('global');
			else
				console.log('???');
		}.bind(this)());
	}
};
obj.loop();

var obj = {
	name: 'Jane',
	loop: function(){
		var inner = function () {
			if(this === obj)
				console.log('obj');
			else if (this === global)
				console.log('global');
			else
				console.log('???');
		};
		var func = inner.bind(this);
		func();
	}
};
obj.loop();
