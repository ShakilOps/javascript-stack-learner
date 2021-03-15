var obj1={
    x:6,
    y:9
}
var obj2={
    x:6,
    y:9
}
if(obj1.x===obj2.x&&obj1.y===obj2.y){
    console.log(true)
}else{
    console.log(false)
}
//conert obj to string by using json ,we can compare
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))