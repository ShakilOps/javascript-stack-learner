//foreach function diye traverse shortcut ee kora jay
var arr=[1,2,3,4,5]

// var sum=0
// arr.forEach(function(value,index,arr){
//     //console.log(value,index,arr)
//     sum+=value
// })
// console.log(sum)

// function foreach(arr){
//     for(i=0;i<arr.length;i++)
//     console.log(arr[i])
// }
// foreach(arr)

//using callback function
// function foreach(arr,cb){
//     for(i=0;i<arr.length;i++)
//     cb(arr[i])
// }
// foreach(arr,function(value){
//     console.log(value)
// })

//nijeder creat kora foreach function ...
// function foreach(arr,cb){
//     for(i=0;i<arr.length;i++)
//     cb(arr[i])
//     //console.log(typeof cb)
// }
// var sum=0
// foreach(arr,function(x){
//     sum+=x
// })
// console.log(sum)

//fully output pabo ekhane
function foreach(arr,cb){
    for(i=0;i<arr.length;i++)
    cb(arr[i],i,arr)
    //console.log(typeof cb)
}
var sum=0
foreach(arr,function(x,y,z){
    console.log(x,y,z)
    sum+=x
})
console.log(sum)

//aro ja korte pari 
foreach(arr,function(value,index,arr){
    arr[index]=value+5
})                       // a problm that how find sum of new arr???
console.log(arr)