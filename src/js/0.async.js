var http = require('http');

function compute() {
  for(var i=0; i<100000*10; i++){
    process.nextTick((function(num){
      return function(){
          var j = num;
      };
    })(i));
  }
  process.nextTick(compute);
}

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(3000, '127.0.0.1', function(){
  console.log('Connected!!!');
});
compute();

// for(var i=0; i<10; i++){
//   process.nextTick((function(num){
//     return function(){
//       console.log('working', num);
//     };
//   })(i));
// }
