//ekhne console.dir use korar karon hosse je puro object er hierarchy ta dekhabe ...
//eikhner ei code ta browser ee run korlei bujha jabe...
var b=10

function a(){
    var x=20

return function(){
    console.log(x)
}
}
//ekta function scope er vtor arekta function scope ...
//so bairer function thke ekta data vitorer function e gese argument sara that is closure
var abc=a()
console.dir(abc)
