//filter function ta true and false base kaj kore
var arr=[4,7,6,3,9,2,8,12,66]
// var filterarr=arr.filter(function(value){
//     //return value>6
//     return value%2==1
// })
// console.log(filterarr)

//now filter implementation 
// function myfilter(arr){
//     var newarr=[]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// }
// console.log(myfilter(arr))

//by using callback function 
function myfilter(arr,cb){
    var newarr=[]
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i],i,arr)){
            newarr.push(arr[i])
        }
    }
    return newarr
}
console.log(myfilter(arr,function(value){
    return value<10
}))
console.log(myfilter(arr,function(value){
    return value%2==1
}))