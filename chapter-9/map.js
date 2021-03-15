//map function diye ekta array thke arekta notun value er array create krte pari
var arr=[1,2,3]

// var arr2=arr.map(function(value){
//     //return Math.random()*50
//     return value*value
// })
// console.log(arr)
// console.log(arr2)

//now create own map function 
// function map(arr){
//     var newarr=[]
//     for(i=0;i<arr.length;i++){
//         var temp=arr[i]*arr[i]
//         newarr.push(temp)
//     }
//     return newarr
// }
// console.log(map(arr))

//ekhn ekta callback function add korlei ei map funcition sob kisui korte parbe ...
//sub,mult,div,add er jonno alada alada call  korar drkr nai
function map(arr,cb){
    var newarr=[]
    for(i=0;i<arr.length;i++){
        var temp=cb(arr[i],i,arr)
        newarr.push(temp)
    }
    return newarr
}
var rslt=map(arr,function(value){
    return value*value*value
})
var rslt2=map(arr,function(value){
    return value*10
})
console.log(arr)
console.log(rslt)
console.log(rslt2)