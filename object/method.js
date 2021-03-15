var obj={
    x:45,
    y:78,
    z:89
}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj)) //popular

var obj2=Object.assign({},obj)
obj2.y=100
console.log(obj)
console.log(obj2)