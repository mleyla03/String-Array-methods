function getSequence(min,max)
{
    var newarr =[];
    for(var i=min;i<=max;i++){
         newarr.push(i)
    }
    return newarr
}
console.log(getSequence(1,5))
console.log(getSequence(98,100))
console.log(getSequence(1000,1000))