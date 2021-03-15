var point={
    x:5,
    y:7
}
function printpoint(point){
    point.x=100
    point.y=200
    console.log(point)
}                   //this is not an pure function coz its has side effect which change the value of others
printpoint(point)
console.log(point)