//we can pass function as an arguments
function add(a,b){
    return a+b
}
function manipulate(a,b,func){
    var c=a+b
    var d=a-b
    // function multiply(){
    //     var m=func(a,b)
    //     return c*d*m
    // }
    return function(){
        var m=func(a,b)
        return c*d*m
    }   //ekta function er vitor thke arekta function ke return oo korte pari
    // return multiply
}
var multiply=manipulate(2,3,add)   //ekhne add function kr argument akare call kora hoyese
console.log(multiply)
console.log(multiply())