
var numbers = [1.5, 2.56, 5.1, 12.33];

var newNumber = numbers.map(Math.ceil);

console.log(newNumber); 

var number= [1.5, 2.56, 5.1, 12.33];


var newNumber = numbers.map(Math.floor);

console.log(newNumber); 


var number = [1.5, 2.56, 5.1, 12.33];


var newNumber = numbers.map(Math.round);

console.log(newNumber); 

//en boyuk element
var max=Math.max(...number);

console.log(max)
///en kicik element
var min=Math.min(...number);
console.log(min)

