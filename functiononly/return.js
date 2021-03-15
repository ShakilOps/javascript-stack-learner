function addall(){
    sum=0
    for(i=0;i<arguments.length;i++){
        sum +=arguments[i]

    }
    return sum //kono funtion ke variable ee rakhte hle obossoi take return korte hbe 
}
var result=addall(4,5,6,7,8,2)
console.log(result)

function person(name,email){
    return{
        name:name,
        email:email
    }
}
var p1=person('shakil','shakil98gmail.com')
console.log(p1)