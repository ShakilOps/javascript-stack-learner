var arr=[2,5,7,9,12,45,33,67,89,92,45]

// var result=arr.find(function(value){
//     return value==67
//     //return value%3==0  //ekhane kivabe ei logicer sob gulo value pbo???
// })
// console.log(result)

// var rslt=arr.findIndex(function(value){
//     return value==12
// })
// console.log(rslt)

//implementation
function myfind(arr,cb){
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i])){
            return arr[i] 
           //return i          //ekhane arr[i] bolle value return korbe r sudhu i bolle index
        }
    }
}
var rlt=myfind(arr,function(value){
    return value==89
})
console.log(rlt)