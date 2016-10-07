
// var arr = [];
// for(var i=0; i<5; i++){
//   arr[i] = function() {
//     return i;
//   };
// }
// for(var index in arr){
//   console.log(arr[index]());
// }

// var arr = [];
// for(var i=0; i<5; i++){
//   arr[i] = function(idx){
//     return function(){
//       return idx;
//     };
//   }(i);
// }
// for(var index in arr){
//   console.log(arr[index]());
// }
//
var myObj = function(){
  var pvalue = 0;
  return {
    getter: function(){
      return pvalue;
    },
    setter: function(val){
      pvalue = val;
      return pvalue;
    },
    adder: function(){
      pvalue++;
      return pvalue;
    }
  };
}();
console.log(myObj.pvalue);
console.log(myObj.getter());
console.log(myObj.setter(17));
console.log(myObj.adder());
console.log(myObj.getter());
