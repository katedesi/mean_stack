// for(var i=0; i<1; i++){
//   var name = 'global';
// }
// console.log(name);

// function a(){
//   var i=0;
// }
// for(var i=0; i<=18; i++){
//   a();
//   console.log(i);
// }
//
// // function b(){
// //   i = 0;
// // }
// // for(i=0; i<=18; i++){
// //   b();
// //   console.log(i);
// // }
//
// var i=5;
// function c(){
//   var i=10;
//   d();
// }
// function d(){
//   console.log(i);
// }
// c();
//
// var i=1;
// function e(){
//   i=2;
//   console.log(i);
// }
// e();
// console.log(i);

(function(){
  var _G = {};
  _G.var1 = 0;
  _G.var2 = {
    i : 0,
    s : 'str'
  };
  _G.var1 = 8;
  _G.var2.i = 10;
  function sum(){
    return _G.var1+_G.var2.i;
  }

  console.log(sum());
})();
