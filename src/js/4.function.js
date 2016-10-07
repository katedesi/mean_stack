// function cal(func, num){
//   return func(num);
// }
// function inc(num){
//   return ++num;
// }
// function dec(num){
//   return --num;
// }
// console.log(cal(inc, 17));
// console.log(cal(dec, 19));

// var myObj = {
//   value : 0,
//   inc : function(val) {
//     this.value += typeof val === 'number' ? val : 1;
//   }
// };
// myObj.inc();
// console.log(myObj.value);
// myObj.inc(17);
// console.log(myObj.value);

// var proc = [
//    function(input) {return input+10;},
//    function(input) {return input*input;},
//    function(input) {return input/2;}
// ];
// for(var i=0; i<proc.length; i++){
//   console.log(proc[i](8));
// }
//
// var func = function(val, callback){
//   console.log('func 내부');
//   val++;
//   // return callback(null, val);
//   return process.nextTick(function(){callback(null, val);});
//   // return setTimeout(function(){callback(null, val);}, 10);
// };
// var nnn = 17;
// console.log('func 호출전');
// func(nnn, function(err, vars){
//   console.log('callback 내부 '+vars);
// });
// console.log('func 호출후 '+nnn);

// var cbFunc = function(a,b){
//   console.log(a,b);
//   return b-a;
// };
// var numbers = [20,6,1,11,16,9,8,7];
// console.log(numbers.sort());
// console.log(numbers.sort(cbFunc));

foo();
function foo() {
	console.log('Hello');
}

bar();
var bar = function(){
	console.log('Hello');
};

//아래처럼 해석 된다.
var bar;
bar();
bar = function(){
	console.log('Hello');
};




