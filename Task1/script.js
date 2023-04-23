var data = [
    {name: 'daniel', age: 45},
    {name: 'john', age: 34},
    {name: 'robert', age: null},
    {name: 'jen', age: undefined},
    {name: null, age: undefined}
  ];
  
  var newData = data.filter(element=>element.age!=undefined || element.age!=null &&  element.name!=undefined)
  console.log(newData)