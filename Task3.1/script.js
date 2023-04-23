function checkFctors(factors,num){
 return factors.every(element=> num%element ===0)
}
console.log(checkFctors([2,3,4],12))
console.log(checkFctors([1,2,3,8],12))