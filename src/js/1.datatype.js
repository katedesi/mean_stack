// var num = 3.141592;
// console.log(typeof num);
//
// var str = `pi is ${num}`;
// console.log(typeof str+'[]'+str);
//
// var bool = undefined || 0 || -0 || null || false;
// console.log(typeof bool, bool);
//
// if(NaN) console.log('true');
// else console.log('false');
// console.log(typeof NaN);
//
// if('') console.log('true');
// else console.log('false');
// console.log(typeof '');
//
// var obj = {
//     prop: 18,
//     method: function(){
//         return this.prop;
//     }
// };
// console.log(obj.method());
// console.log(typeof obj);

// var func = function(){};
// console.log(typeof func);
//
// var arr = [1,2,3,4,'string', 3.14, true];
// console.log(typeof arr, arr);
// arr.push(8);
// console.log(typeof arr, arr.length);
// for(var i=0; i<arr.length; i++ ){
//   console.log(arr[i]);
// }
// arr.pop();
// console.log(typeof arr, arr);

var date = new Date();
console.log(typeof date, date);

var re = /(\w+)\s(\w+)/;
// console.log(str.replace(re, '$2, $1'));
console.log(typeof re, re.exec('i am boy'));

var udf;
console.log(typeof udf);

var nul = null;
console.log(typeof nul);
