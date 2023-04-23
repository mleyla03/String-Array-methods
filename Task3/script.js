var bdays = ['08-14', '10-04', '04-21']; 

var newbdays = bdays.map(function(element) { 
  return element.replace('-', '/');
});

console.log(newbdays);