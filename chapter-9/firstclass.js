function add(a,b){
    return a+b
}
//function can be stored into a variable
var sum =add
console.log(sum(5,8))
console.log(typeof sum)
//function can be stored into an array
var arr=[]
arr.push(add)
console.log(arr)
console.log(arr[0](8,9))
//function can be stored into an object
var obj={
    sum:add
}
console.log(obj)
console.log(sum(9,9))
//function into a function as need
setTimeout(function(){
    console.log('i have created...')
},100)
