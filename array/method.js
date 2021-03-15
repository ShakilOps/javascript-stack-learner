//var arr=[4,8,7,6]
//var arr2=[2,9,5,1]

//console.log(arr.join(' | '))
//console.log(arr.fill(true))

//var arr3=arr.concat(arr2)
//console.log(arr3)

// var a=[2,3]
// var b=a
// b[0]=7
// console.log(a)     //output for b is 7,3 which also for a and that is the problem 
// console.log(b)     //so this is not the right way .....right is given below

var a=[2,3]
var b=Array.from(a)  //that is the right way
b[0]=7
console.log(a)
console.log(b)