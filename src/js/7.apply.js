// var sum = function(){
//   var sum = 0;
//   for(var i=0; i<arguments.length; i++){
//     if(typeof arguments[i] === 'number'){
//       sum += arguments[i];
//     }
//   }
//   return sum;
// };
// var args = [1,2,3,4,8,'string'];
// console.log(sum.apply(null, args));
//
// var obj = {
//   status: '메롱이야!',
//   get_status: function(){
//     return this.status;
//   }
// };
// var statusObj = {status: '난 안메롱인데?'};
//
// console.log(obj.get_status());
// console.log(obj.get_status.apply(statusObj));
//
var obj = function(){
	var status = '메롱이야!';
	return {
		get_status: function(){
			return status;
		}
	};
}();
var statusObj = {
	status : '난 안 메롱인데?'
};
console.log(obj.get_status());
console.log(obj.get_status.apply(statusObj));
