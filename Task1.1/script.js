//arr array butun elementlerini cap edin
var arr=[32,25,85,89,45,76,7,41,2,12]
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

//arr arrayin boyuk elementi cap edin
var max=Math.max(...arr);
console.log(max)
//arr arrayin sonuna 15 elave edin
arr.push(15)
console.log(arr)
//arr arrayin ilk elementi silin
arr.shift()
console.log(arr)
//arr arry sort edin ve sonuncu elementini cap edin
arr.sort(function(a,b){
    return a-b
})
console.log(arr[arr.length-1])
//arr arrayin ucuncu elementinden sonra 43 elave edin
arr.splice(3,0,43)
console.log(arr)
//arr arrayin ucuncu elementinden sonraki elementleri cap edin
var array=arr.slice(3)
console.log(array)
//foreach-den istifade ederek  arr arrayin butun elementlerini cap edin


arr.forEach(element => console.log(element));
console.log(arr)
//arr arrayin 40dan boyuk elementelrini cap edin

var end = arr.filter(myFunction);
function myFunction(value) {
  return value > 40;
}
console.log(end)

