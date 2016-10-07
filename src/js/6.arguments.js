var sum = function(){
  var sum = 0;
  for(var i=0; i<arguments.length; i++){
    if(typeof arguments[i] === 'number'){
      sum += arguments[i];
    }
  }
  return sum;
};
console.log(sum(1, 2, 3, 4, 8, 'str'));
