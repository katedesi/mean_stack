Number.prototype.format = function() {
    if(this === 0 || this === null) return 0;
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (this + '');
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
    return n;
};
var price = 123456789;
console.log(price.format());

Function.prototype.method = function(name, func){
	if( !this.prototype[name] ){
		this.prototype[name] = func;
	}
	return this;
};

var Mammal = function(name){
	this.name = name;
};
Mammal.prototype.get_name = function(){
	return this.name;
};
Mammal.prototype.says = function(){
	return this.saying || '';
};
var myMammal = new Mammal('Herb the Mammal');
console.log(myMammal.get_name());

//'new'는 다음 함수와 같다.
Function.method('new', function(){
	//생성자의 프로토타입을 상속받는 새로운 객체 생성
	var that = Object.create(this.prototype);

	//this를 새로운 객체에 바인딩 하면서 생성자 호출
	var other = this.apply(that, arguments);

	//반환값이 객체가 아니면 새로운 객체로 대체
	return (typeof other === 'object' && other) || that;
});

var Cat = function(name){
	this.name = name;
	this.saying = 'meow';
};
Cat.prototype = new Mammal();
Cat.prototype.purr = function(n) {
	var i,s = '';
	for(i=0; i<n; i += 1){
		if(s) {
			s += '-';
		}
		s += 'r';
	}
	return s;
};
Cat.prototype.get_name = function () {
	return this.says() + ' ' + this.name + ' ' + this.says();
};
var myCat = new Cat('Henrietta');
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();

Function.method('inherits', function(Parent){
	this.prototype = new Parent();
	return this;
});

var Cat = function(name) {
	this.name = name;
	this.saying = 'meow';
}.inherits(Mammal).
  method('purr', function(n){
	var i,s = '';
	for(i=0; i<n; i += 1){
		if(s) {
			s += '-';
		}
		s += 'r';
	}
	return s;
  }).
  method('get_name', function(){
	return this.says() + ' ' + this.name + ' ' + this.says();
  });

  var myMammal = {
  	name: 'Herb the Mammal',
  	get_name: function(){
  		return this.name;
  	},
  	says: function(){
  		return this.saying || '';
  	}
  };
  var myCat = Object.create(myMammal);
  myCat.name = 'Henrietta';
  myCat.saying = 'meow';
  myCat.purr = function(n){
  	var i,s = '';
  	for(i=0; i<n; i += 1){
  		if(s) {
  			s += '-';
  		}
  		s += 'r';
  	}
  	return s;
  };
  myCat.get_name = function(){
  	return this.says() + ' ' + this.name + ' ' + this.says();
  };

  var mammal = function(spec){
  	var that = {};

  	that.get_name = function(){
  		return spec.name;
  	};

  	that.says = function(){
  		return spec.saying || '';
  	};

  	return that;
  };
  var myMammal = mammal({name:'Herb'});

  var cat = function(spec){
  	spec.saying = spec.saying || 'meow';
  	var that = mammal(spec);
  	that.purr = function(n){
  		var i,s = '';
  		for(i=0; i<n; i += 1){
  			if(s) {
  				s += '-';
  			}
  			s += 'r';
  		}
  		return s;
  	};
  	that.get_name = function(){
  		return this.says() + ' ' + spec.name + ' ' + this.says();
  	};
  	return that;
  };
  var myCat = cat({name: 'Henrietta'});

  Object.method('superior', function(name){
  	var that = this;
  	var method = that[name];
  	return function() {
  		return method.apply(that, arguments);
  	};
  });
  var coolcat = function(spec){
  	var that = cat(spec);
  	var super_get_name = that.superior('get_name');
  	that.get_name = function(n){
  		return 'like '+super_get_name()+' baby';
  	};
  	return that;
  };
  var myCoolcat = coolcat({name: 'Bix'});
  console.log(myCoolcat.get_name());
