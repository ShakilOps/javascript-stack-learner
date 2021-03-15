//iterable bolte bujhay ekta object ekta array er vitor je travers korte pare seta
var arr=[66,1,2,3,56,77,4,5]
// var sum=arr.reduce(function(prev,curr){
//     return prev+curr
// },100)   //ekhane 100 hosse initial value...array ta kotha thke suru hbe 100 or 0 or 8 0r else 
// console.log (sum)

// var max=arr.reduce(function(prev,curr){
//     return Math.max(prev,curr)
// },0)
// console.log(max)
function myreduce(arr,cb,acc){
    for(var i=0;i<arr.length;i++){
        acc=cb(acc,arr[i])
    }
    return acc
}
var sum=myreduce(arr,function(prev,curr){
    return prev+curr
},0)
var max=myreduce(arr,function(prev,curr){
    return Math.max(prev,curr)
},0)
var min=myreduce(arr,function(prev,curr){
    return Math.min(prev,curr)
},arr[0])     //ekhn initial value ta whole array so minimum value ta ber korte parbe
console.log(sum)
console.log(max)
console.log(min)