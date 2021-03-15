var point={
    x:10,
    y:20,
    z:30
}
console.log(point.y)
console.log(point.x+point.z)

console.log(point['y'])   //for accessing the value of an object we can use arrays  of object

var show='x'             //to see the value of show then we have to declare in array object
console.log(point.show) //otherwise output will be undefined
console.log(point[show])
