var point={
    x:15,
    y:25,
    z:35
}
point.x=100
point.w=333

console.log(point)
console.log(point.d)

point['y']=300

var prop='z'
point[prop]=500
console.log(point)