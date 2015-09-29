'use strict';
var let_list = [];
for (var i = 0; i < 5; i++) {
  let j = i;
  var callable = function () {
    console.log("Let " + j );
  }  
  let_list.push( callable )
}


var var_list = [];
for (var i = 0; i < 5; i++) {
  var j = i;
  console.log(i)
  var callable = function () {
    console.log("Var " + j );
  }
  var_list.push( callable )
}


for(let i = let_list.length; i > 0; i--){
	let_list.pop()();
}
for(let i = var_list.length; i > 0; i--){
	var_list.pop()();
}
