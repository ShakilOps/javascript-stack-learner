var obj1={
    x:4,
    y:8,
    z:6
}
//console.log('x' in obj1)

for(var i in obj1){
    //console.log(i)
    console.log(i+':'+obj1[i])
}