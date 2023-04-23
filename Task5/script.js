const b = "5,4,3,2,1";
var arr=(b.split(","))
var newarr=arr.map((element)=>Number(element))
var sumarr=newarr.reduce((total,val)=>total+val,0)
console.log(sumarr)