const studentName=[
      
            {name:"Steve"},
           { name:"Mike"},
           { name:"John"}
      
]
function getStudentNames(names){
      const students=names.map((element)=>element.name)
      return students
}
console.log(getStudentNames(studentName))



