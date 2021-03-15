// function sample(a,b){
//     var x=a+b
//     var y=a-b
//     var result=sum(x,y)
//     return result

// }
// function sum(c,d){
//     return c+d
// }
// console.log(sample(5,8))

//now callback function
function sample(a,b,cb){
    var x=a+b
    var y=a-b
    var result=cb(x,y) //cb is function use as arguments and kept in a variable
    return result

}
function sum(c,d){
    return c+d
}
var result=sample(5,8,sum) //sum as a call back function which we creat before ant it is as cb
console.log(result)
//here we wanna findout substract by using creat function where we need 
//and also the function is callback function which as cb
//and here we creat an anonymous function as callback function
var result1=sample(5,8,function(x,y){
    return x-y
})
console.log(result1)

var result2=sample(5,8,function(x,y){
    return x*y
})
console.log(result2)