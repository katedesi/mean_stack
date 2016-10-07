//Object literals
var jane = {
    name: 'Jane',
    describe: function(){
        return 'Person named '+this.name;
    },
};

//Object expression
var jane = new Object();
jane.name = 'Jane';
jane.describe = function(){
    return 'Person named '+ this.name;
};

//Getting properties
jane.name;
jane.describe;

//Calling method
jane.describe();

//Setting properties
jane.name = 'John';
jane.nick = 'Cat';

//Deleting properties
var obj = {hello: 'world'};
delete obj.hello;
obj.hello;
var obj = {bar: 'a', foo: 'b'};
obj.foo = undefined;
Object.keys(obj);
delete obj.foo;
Object.keys(obj);

//Getting properties
var obj = {someProp: 'abc'};
obj['some'+'Prop'];		//'abc'
var propKey='someProp';
obj[propKey];			//'abc'
var obj = {6: 'bar'};
obj[3+3];			//'bar'	==> []안의 값은 문자로 강제 치환
obj.6				// SyntaxError

//Calling Methods
var obj = { myMethod: function(){ return true;}};
obj['myMethod']();	//true

//Setting properties
var obj = {};
obj['anotherProp'] = 'def';
obj.anotherPorp;		//'def'

//Deleting properties
var obj = {'not an id': 1, prop: 2};
Object.keys(obj);		//[ 'not an id', 'prop' ]
delete obj['not an id'];
Object.keys(obj);		//[ 'prop' ]

//Unusual Property Keys But… normal
var obj = {var: 'a', function: 'b', 0.7: 'abc', 'not an id': 123};
obj.var 				//'a'
obj.function 			//'b'
obj['0.7']			//'abd'
obj['not an id']		//123
